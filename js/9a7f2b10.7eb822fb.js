(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["9a7f2b10"],{6302:function(t,s,a){"use strict";a.r(s);var i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"mypage"},[a("TitleBar",{attrs:{titleTx:t.title}}),a("div",{staticClass:"tr-block"},[a("img",{staticStyle:{width:"54px",height:"54px","align-self":"center","margin-top":"25px"},attrs:{src:"ok"===t.whichIcon?"statics/tr-success.png":"statics/tr-failed.png"}}),a("div",{staticClass:"td-amt"},[a("span",{staticStyle:{"font-size":"25px",color:"#2F2F2F"}},[t._v(t._s(t.amt))]),a("span",{staticStyle:{"font-size":"10px","margin-left":"10px",color:"#333333"}},[t._v(t._s("ETH"===t.coin?"ETH":"CGAS"))])]),a("img",{staticClass:"land-line"}),a("span",{staticClass:"td-tx-name"},[t._v(t._s(t.$t("from"))+"：")]),a("span",{staticClass:"td-tx-value"},[t._v(t._s(t.item.from))]),a("span",{staticClass:"td-tx-name"},[t._v(t._s(t.$t("to"))+"：")]),a("span",{staticClass:"td-tx-value"},[t._v(t._s(t.item.to))]),a("span",{staticClass:"td-tx-name"},[t._v(t._s(t.$t("gasfee"))+"：")]),a("span",{staticClass:"td-tx-value"},[t._v(t._s(t.gaseth)+"ETH ($"+t._s(t.gasUsd)+")")]),a("span",{staticClass:"td-tx-name"},[t._v(t._s(t.$t("txhash"))+"：")]),a("div",[a("q-icon",{staticClass:"td-tx-hic",attrs:{name:"equalizer"}}),a("span",{staticClass:"td-tx-hash",on:{click:t.gotoEtherscan}},[t._v("\n      "+t._s(t.hash)+"\n    ")])],1),a("span",{staticClass:"td-tx-name"},[t._v(t._s(t.$t("block"))+"：")]),a("span",{staticClass:"td-tx-value"},[t._v(t._s(t.item.blockNumber))]),a("span",{staticClass:"td-tx-name"},[t._v(t._s(t.$t("confirms"))+"：")]),a("span",{staticClass:"td-tx-value"},[t._v(t._s(t.item.confirmations))]),a("span",{staticClass:"td-tx-name"},[t._v(t._s(t.$t("txtime"))+"：")]),a("span",{staticClass:"td-tx-value",staticStyle:{"margin-bottom":"50px"}},[t._v(t._s(t.timeStamp))])])],1)},e=[];i._withStripped=!0;a("c5f6");var n=a("9bfb"),c=(a("96a1"),a("e7ea")),o={components:{TitleBar:n["a"]},data:function(){return{title:this.$t("trrecord"),item:this.$route.query.item,coin:this.$route.query.coin,amt:"",gaseth:"",gasUsd:"",hash:"",timeStamp:"",whichIcon:"ok",iconColor:""}},mounted:function(){console.log("----"+this.$route.query.coin),this.amt=Number(c["ethers"].utils.formatEther(this.item.value)).toFixed(4),this.getFee(this.item.gasPrice,this.item.gasUsed),this.hash=this.item.hash.substring(0,10)+"..."+this.item.hash.substring(this.item.hash.length-10,this.item.hash.length),this.timeStamp=this.util.convertUTCTimeToLocalTime(1e3*this.item.timeStamp),this.whichIcon=this.setIconColor()},methods:{setIconColor:function(){return"ETH"===this.$route.query.coin?"1"===this.item.txreceipt_status?"ok":"no":"ok"},getFee:function(t,s){this.gaseth=t*s/1e18,this.gasUsd=Number(this.gaseth*this.global.ethPrice).toFixed(3)},gotoEtherscan:function(){}}},l=o,r=(a("b085"),a("2877")),h=Object(r["a"])(l,i,e,!1,null,null,null);h.options.__file="TransferDetail.vue";s["default"]=h.exports},"9bfb":function(t,s,a){"use strict";var i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"title-bar"},[a("q-icon",{staticClass:"title-back-icon",attrs:{name:"navigate_before"},nativeOn:{click:function(s){return t.goBack(s)}}}),a("div",{staticClass:"title-tx"},[t._v(t._s(t.titleTx))])],1)},e=[];i._withStripped=!0;var n={props:["titleTx"],methods:{goBack:function(){this.$router.go(-1)}}},c=n,o=(a("a675"),a("2877")),l=Object(o["a"])(c,i,e,!1,null,null,null);l.options.__file="TitleBar.vue";s["a"]=l.exports},a675:function(t,s,a){"use strict";var i=a("ca51"),e=a.n(i);e.a},b085:function(t,s,a){"use strict";var i=a("ce1f"),e=a.n(i);e.a},ca51:function(t,s,a){},ce1f:function(t,s,a){}}]);