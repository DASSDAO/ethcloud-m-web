(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["29715377"],{"22bd":function(t,e,a){},"416d":function(t,e,a){"use strict";var i=a("22bd"),s=a.n(i);s.a},"63d0":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mypage"},[a("TitleBar",{attrs:{titleTx:"ETH"===t.$route.query.p1?"ETH":"CGAS"}}),a("div",{staticClass:"up-part"},[a("span",{staticClass:"eth-amt"},[t._v(t._s(Number(t.showBalance).toFixed(4)))]),a("span",{staticClass:"eth-bal"},[t._v("=$"+t._s(t.totalUSD))]),a("div",{staticClass:"tr-btn"},["CGAS"===t.$route.query.p1?a("q-btn",{staticClass:"et-btn",attrs:{flat:"",color:"primary",label:t.$t("buy")},nativeOn:{click:function(e){return t.toBuyMcoin(e)}}}):t._e(),"CGAS"===t.$route.query.p1?a("div",{staticClass:"porti-line"}):t._e(),a("q-btn",{staticClass:"et-btn",attrs:{flat:"",color:"primary",label:t.$t("receive")},nativeOn:{click:function(e){return t.toReceiveEth(e)}}}),a("div",{staticClass:"porti-line"}),a("q-btn",{staticClass:"et-btn",attrs:{flat:"",color:"primary",label:t.$t("send")},nativeOn:{click:function(e){return t.toTransferEth(e)}}})],1)]),a("div",{staticClass:"down-part"},[a("span",{staticClass:"transfer-tip"},[t._v(t._s(t.$t("trrecord")))]),a("div",{staticClass:"trans-log"},[a("q-list",{staticStyle:{width:"100%"},attrs:{highlight:"",separator:"","no-border":""}},t._l(t.transactions,function(e){return a("q-item",{key:e.index,staticClass:"tx-item",attrs:{to:{path:"transferdetail",query:{item:e,coin:t.currentCoin}}}},[a("div",{staticClass:"addr-amt"},[a("span",{staticStyle:{"font-family":"PingFangSC-Semibold",color:"#44566B"}},[t._v(t._s(t.setAddress(e.from,e.to)))]),a("span",{style:{color:t.setAmtColor(e.to,e.txreceipt_status)}},[t._v(t._s(t.setAmt(e.to,e.value)))])]),a("span",{staticClass:"time"},[t._v(t._s(t.util.convertUTCTimeToLocalTime(1e3*e.timeStamp)))])])}))],1)]),a("custom-input-dialog-vue",{attrs:{dialogData:t.dialogData},on:{pressOK:t.pressOK}})],1)},s=[];i._withStripped=!0;a("c5f6"),a("6b54");var n,o,r,l=a("9bfb"),c=a("e7ea"),u=a("a002"),h=a.n(u),p=a("6b45"),d=(a("96a1"),a("3452"),{props:["params"],components:{TitleBar:l["a"],CustomInputDialogVue:p["a"]},data:function(){return{title:"ETH",currentCoin:this.$route.query.p1,showBalance:this.$route.query.p2,transactions:[],showBuyDialog:!0,dialogData:{show:!1,msg:this.$t("buy")+"CGAS",from:"ethtrans"},totalUSD:"0.0000"}},created:function(){var t=this;"ETH"===this.$route.query.p1?h.a.getItem("historyTrans").then(function(e){null!==e&&(t.transactions=JSON.parse(e))}):h.a.getItem("historyTransMcoin").then(function(e){null!==e&&(t.transactions=JSON.parse(e))})},methods:{pressOK:function(t){var e=this;if(String(t.v1).indexOf(".")>-1)toast(this.$t("buycmatonlysingle"));else{this.$q.loading.show({message:this.$t("txsubmiting"),spinnerSize:50});var a=this.util.getWallet(e,t.v2);this.buyMCoin(a,t)}},buyMCoin:function(t,e){var a=this,i=this.global.poolContract.connect(t),s={value:c["ethers"].utils.parseEther(e.v4+""),gasPrice:c["ethers"].utils.bigNumberify(this.global.contractConfig.gasprice)},n=parseInt(Math.random().toString().slice(-6)),o=c["ethers"].utils.solidityKeccak256(["address","int256","int256"],[this.global.wallet.ethAddress,e.v1,n+20190520]);i.buyMCoin(e.v1,0,n,o,s).then(function(t){a.$q.loading.hide(),a.util.showInfoDialog(a,t.hash,!1),a.util.listen4TxResult(a,t.hash,a.$t("buysuccess"),a.$t("buyfailed"))}).catch(function(t){a.util.reprotError2Bmob(a,"buyMCoin",t,e.v1+","+s.value),a.$q.loading.hide()})},toBuyMcoin:function(){this.dialogData.show=!0},setAmtColor:function(t,e){return"0"===e?"red":t===this.global.wallet.ethAddress?"dodgerblue":"green"},toReceiveEth:function(){this.$router.push({path:"/receipteth",query:{p1:this.$route.query.p1}})},toTransferEth:function(){this.$router.push({path:"/transfereth",query:{p1:this.$route.query.p1}})},setAddress:function(t,e){return e===this.global.wallet.ethAddress?t.substring(0,7)+"..."+t.substring(t.length-7,t.length):e.substring(0,7)+"..."+e.substring(e.length-7,e.length)},setAmt:function(t,e){return t===this.global.wallet.ethAddress?"+"+Number(c["ethers"].utils.formatEther(e)).toFixed(4):"-"+Number(c["ethers"].utils.formatEther(e)).toFixed(4)},getEthTrans:function(){var t=this,e=this.global.apiconfig.etherscanAPIPrefix+".etherscan.io/api?module=account&action=txlist&address="+this.global.wallet.ethAddress+"&startblock=0&endblock=99999999&page=1&offset=100&sort=desc&apikey="+this.global.apiconfig.etherscanAPIKey;this.$axios.get(e).then(function(e){t.transactions=e.data.result}).catch(function(t){console.error(t)}).then(function(){})},getMcoinTrans:function(){var t=this,e=this.global.apiconfig.etherscanAPIPrefix+".etherscan.io/api?module=account&action=tokentx&contractaddress="+this.global.contractConfig.tokenAddress+"&address="+this.global.wallet.ethAddress+"&page=1&offset=100&sort=desc&apikey="+this.global.apiconfig.etherscanAPIKey;this.$axios.get(e).then(function(e){t.transactions=e.data.result}).catch(function(t){}).then(function(){})},setETHTask:function(){var t=this;o=setInterval(function(){t.getEthTrans()},this.global.taskInterval)},setMcoinTask:function(){var t=this;r=setInterval(function(){t.getMcoinTrans()},this.global.taskInterval)}},mounted:function(){"ETH"===this.$route.query.p1?(this.getEthTrans(),this.setETHTask(),this.totalUSD=Number(this.global.wallet.lastEthbalance*this.global.ethPrice).toFixed(4)):(this.getMcoinTrans(),this.setMcoinTask(),this.totalUSD=Number(this.global.cmatconfig.mcoinPrice*this.global.ethPrice*this.global.wallet.lastMcoinBalance).toFixed(4)),this.util.refreshGasPrice(this)},beforeDestroy:function(){clearInterval(r),clearInterval(n),clearInterval(o),"ETH"===this.currentCoin?h.a.setItem("historyTrans",JSON.stringify(this.transactions)):h.a.setItem("historyTransMcoin",JSON.stringify(this.transactions)),this.$q.loading.hide()}}),f=d,g=(a("416d"),a("2877")),m=Object(g["a"])(f,i,s,!1,null,null,null);m.options.__file="EthTransfer.vue";e["default"]=m.exports},"6b45":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-dialog",{on:{cancel:t.onCancel,show:t.onShow,hide:t.onHide},scopedSlots:t._u([{key:"buttons",fn:function(e){return a("div",{staticClass:"dialog-btn"},[a("q-btn",{attrs:{flat:"",label:t.$t("cancel")},on:{click:e.cancel}}),a("q-btn",{staticStyle:{"margin-top":"0px"},attrs:{flat:"",label:t.$t("ok")},on:{click:t.onOk}})],1)}}]),model:{value:t.dialogData.show,callback:function(e){t.$set(t.dialogData,"show",e)},expression:"dialogData.show"}},[a("span",{staticStyle:{color:"black"},attrs:{slot:"message"},slot:"message"},[t._v(t._s(t.dialogData.msg))]),a("div",{attrs:{slot:"body"},slot:"body"},[a("q-input",{attrs:{type:"number",placeholder:"ethtrans"===t.dialogData.from?t.$t("inputbyamt"):"investDetail"===t.dialogData.from?t.$t("fillsellamt"):t.$t("drawamt")},model:{value:t.input1,callback:function(e){t.input1=e},expression:"input1"}}),a("q-input",{directives:[{name:"show",rawName:"v-show",value:t.repayinputShow,expression:"repayinputShow"}],attrs:{type:"number",placeholder:t.$t("repayamt")},model:{value:t.repayAmt,callback:function(e){t.repayAmt=e},expression:"repayAmt"}}),"investDetail"===t.dialogData.from?a("span",{staticStyle:{"font-size":"10px"}},[t._v(t._s(t.$t("needcmat"))+":"+t._s(parseFloat((.02*(t.input1+t.repayAmt)).toFixed(10))))]):t._e(),"ethtrans"===t.dialogData.from?a("span",{staticStyle:{"font-size":"10px"}},[t._v(t._s(t.$t("cutprice"))+":"+t._s(t.global.cmatconfig.mcoinPrice)+","+t._s(t.$t("payethnum",{num:t.computeNeedETH})))]):t._e(),a("q-input",{attrs:{placeholder:t.$t("enterpswd")},model:{value:t.input2,callback:function(e){t.input2=e},expression:"input2"}})],1)])},s=[];i._withStripped=!0;a("96cf");var n=a("c973"),o=a.n(n),r={props:["dialogData"],data:function(){return{input1:"investDetail"===this.dialogData.from?this.dialogData.canDrawAmt:"",input2:"",repayAmt:""}},computed:{computeNeedETH:function(){var t;return t=this.input1>=6e4?.5:this.input1>=2e3&&this.input1<6e4?.9:1,parseFloat((this.input1*this.global.cmatconfig.mcoinPrice*t).toFixed(10))},repayinputShow:function(){return"investDetail"===this.dialogData.from&&this.dialogData.isRepay&&this.input1>this.dialogData.currentCanSell/this.global.cmatconfig.mcoinPrice}},methods:{onOk:function(){""!==this.input1&&null!==this.input1?""!==this.input2?this.input2.length<6?toast(this.$t("pwsdless6")):this.repayinputShow&&this.repayAmt<this.dialogData.repayAmout?toast(this.$t("repayinsuffit")+this.dialogData.repayAmout):"referAwards"===this.dialogData.from&&this.input1>this.dialogData.referAwards?toast(this.$t("drawexceed")):"referAwards"===this.dialogData.from&&this.input1>this.dialogData.totalInvest?toast(this.$t("drawexdtalivst")):(this.$emit("pressOK",{v1:this.input1,v2:this.input2,v3:this.repayAmt,v4:this.computeNeedETH}),this.dialogData.show=!1):toast(this.$t("pswdnull")):toast(this.$t("numnull"))},onCancel:function(){},onShow:function(){},onHide:function(){},choose:function(){var t=o()(regeneratorRuntime.mark(function t(e,a){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}},t,this)}));return function(e,a){return t.apply(this,arguments)}}()}},l=r,c=(a("7285"),a("2877")),u=Object(c["a"])(l,i,s,!1,null,"a178836a",null);u.options.__file="CustomInputDialog.vue";e["a"]=u.exports},7285:function(t,e,a){"use strict";var i=a("e9e4"),s=a.n(i);s.a},"9bfb":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"title-bar"},[a("q-icon",{staticClass:"title-back-icon",attrs:{name:"navigate_before"},nativeOn:{click:function(e){return t.goBack(e)}}}),a("div",{staticClass:"title-tx"},[t._v(t._s(t.titleTx))])],1)},s=[];i._withStripped=!0;var n={props:["titleTx"],methods:{goBack:function(){this.$router.go(-1)}}},o=n,r=(a("a675"),a("2877")),l=Object(r["a"])(o,i,s,!1,null,null,null);l.options.__file="TitleBar.vue";e["a"]=l.exports},a675:function(t,e,a){"use strict";var i=a("ca51"),s=a.n(i);s.a},ca51:function(t,e,a){},e9e4:function(t,e,a){}}]);