webpackJsonp([7],{YOyO:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=s("4YfN"),a=s.n(r),c=s("2X+S"),i=s("8stH"),o=s("T452"),n=s("6Xyt"),h=s("HVJf"),l=s("vhoT"),u=s("XEAW"),f=s("qwAB"),v=s("F4+m"),y={mixins:[v.b,v.c],created:function(){this._getHotKey()},data:function(){return{hotKey:[]}},computed:{shortcut:function(){return this.hotKey.concat(this.searchHistory)}},watch:{query:function(e){var t=this;e||setTimeout(function(){t.$refs.shortcut.refresh()},20)}},methods:a()({showConfirm:function(){this.$refs.confirm.show()},handleplaylist:function(e){var t=e.length>0?"60px":"";this.$refs.shortcutWrapper.style.bottom=t,this.$refs.shortcut.refresh(),this.$refs.searchresult.style.bottom=t,this.$refs.suggest.refresh()},saveSearch:function(){this.saveSearchHistoty(this.query)},_getHotKey:function(){var e=this;Object(i.a)().then(function(t){t.code===o.a&&(e.hotKey=t.data.hotkey.slice(0,10))})}},Object(h.b)(["clearSearchHistory"])),components:{Scroll:f.a,SearchBox:c.a,Suggest:n.a,SearchList:l.a,Confirm:u.a}},d={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"search"},[s("div",{staticClass:"search-box-wrapper"},[s("search-box",{ref:"searchBox",on:{query:e.onQueryChange}})],1),e._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:!e.query,expression:"!query"}],ref:"shortcutWrapper",staticClass:"shortcut-wrapper"},[s("scroll",{ref:"shortcut",staticClass:"shortcut",attrs:{refreshDelay:e.refreshDelay}},[s("div",[s("div",{staticClass:"hot-key"},[s("h1",{staticClass:"title"},[e._v("热门搜索")]),e._v(" "),s("ul",e._l(e.hotKey,function(t){return s("li",{key:t.id,staticClass:"item",on:{click:function(s){e.addQuery(t.k)}}},[s("span",[e._v(e._s(t.k))])])}))]),e._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:e.searchHistory.length,expression:"searchHistory.length"}],staticClass:"search-history"},[s("h1",{staticClass:"title"},[s("span",{staticClass:"text"},[e._v("搜索历史")]),e._v(" "),s("span",{staticClass:"clear",on:{click:e.showConfirm}},[s("i",{staticClass:"icon-clear"})])]),e._v(" "),s("search-list",{attrs:{searches:e.searchHistory},on:{select:e.addQuery,delete:e.deleteSearchHistory}})],1)])])],1),e._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:e.query,expression:"query"}],ref:"searchresult",staticClass:"search-result"},[s("suggest",{ref:"suggest",attrs:{query:e.query},on:{select:e.saveSearch,listScroll:e.blurInput}})],1),e._v(" "),s("confirm",{ref:"confirm",attrs:{text:"是否清空所有搜索历史",confirmBtnText:"清空"},on:{confirm:e.clearSearchHistory}}),e._v(" "),s("router-view")],1)},staticRenderFns:[]};var m=s("C7Lr")(y,d,!1,function(e){s("q3FG")},null,null);t.default=m.exports},q3FG:function(e,t){}});
//# sourceMappingURL=7.09bc2668ed93fce919c6.js.map