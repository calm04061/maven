(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-49eada1c"],{"2fa4":function(t,e,i){"use strict";i("20f6");var s=i("80d2");e["a"]=Object(s["j"])("spacer","div","v-spacer")},"51c9":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"settings-wrapper"}},[i("v-menu",{attrs:{"close-on-content-click":!1,activator:"#settings",bottom:"","content-class":"v-settings",left:"","nudge-left":"8","offset-x":"",origin:"top right",transition:"scale-transition"},model:{value:t.menu,callback:function(e){t.menu=e},expression:"menu"}},[i("v-card",{staticClass:"text-center mb-0",attrs:{width:"300"}},[i("v-card-text",[i("strong",{staticClass:"mb-3 d-inline-block"},[t._v("SIDEBAR FILTERS")]),i("v-item-group",{model:{value:t.color,callback:function(e){t.color=e},expression:"color"}},t._l(t.colors,(function(e){return i("v-item",{key:e,attrs:{value:e},scopedSlots:t._u([{key:"default",fn:function(t){var s=t.active,a=t.toggle;return[i("v-avatar",{staticClass:"v-settings__item",class:s&&"v-settings__item--active",attrs:{color:e,size:"25"},on:{click:a}})]}}],null,!0)})})),1),i("v-divider",{staticClass:"my-4 secondary"}),i("v-row",{attrs:{align:"center","no-gutters":""}},[i("v-col",{attrs:{cols:"auto"}},[t._v(" Dark Mode ")]),i("v-spacer"),i("v-col",{attrs:{cols:"auto"}},[i("v-switch",{staticClass:"ma-0 pa-0",attrs:{color:"secondary","hide-details":""},model:{value:t.$vuetify.theme.dark,callback:function(e){t.$set(t.$vuetify.theme,"dark",e)},expression:"$vuetify.theme.dark"}})],1)],1),i("v-divider",{staticClass:"my-4 secondary"}),i("v-row",{attrs:{align:"center","no-gutters":""}},[i("v-col",{attrs:{cols:"auto"}},[t._v(" Sidebar Image ")]),i("v-spacer"),i("v-col",{attrs:{cols:"auto"}},[i("v-switch",{staticClass:"ma-0 pa-0",attrs:{color:"secondary","hide-details":""},model:{value:t.showImg,callback:function(e){t.showImg=e},expression:"showImg"}})],1)],1),i("v-divider",{staticClass:"my-4 secondary"}),i("strong",{staticClass:"mb-3 d-inline-block"},[t._v("IMAGES")]),i("v-item-group",{staticClass:"d-flex justify-space-between mb-3",model:{value:t.image,callback:function(e){t.image=e},expression:"image"}},t._l(t.images,(function(e){return i("v-item",{key:e,staticClass:"mx-1",attrs:{value:e},scopedSlots:t._u([{key:"default",fn:function(t){var s=t.active,a=t.toggle;return[i("v-sheet",{staticClass:"d-inline-block v-settings__item",class:s&&"v-settings__item--active",on:{click:a}},[i("v-img",{attrs:{src:e,height:"100",width:"50"}})],1)]}}],null,!0)})})),1),i("v-btn",{staticClass:"mb-3",attrs:{block:"",color:"success",href:"https://www.creative-tim.com/product/vuetify-material-dashboard",default:"",rel:"noopener",target:"_blank"}},[t._v(" Free Download ")]),i("v-btn",{staticClass:"mb-3",attrs:{block:"",color:"grey darken-1",dark:"",href:"https://vuetifyjs.com/components/api-explorer",default:"",rel:"noopener",target:"_blank"}},[t._v(" Documentation ")]),i("div",{staticClass:"my-12"}),i("div",[i("strong",{staticClass:"mb-3 d-inline-block"},[t._v("THANK YOU FOR SHARING!")])]),i("v-btn",{staticClass:"ma-1",attrs:{color:"#55acee",dark:"",default:"",rounded:""}},[i("v-icon",[t._v("mdi-twitter")]),t._v(" - 45 ")],1),i("v-btn",{staticClass:"ma-1",attrs:{color:"#3b5998",dark:"",default:"",rounded:""}},[i("v-icon",[t._v("mdi-facebook")]),t._v(" - 50 ")],1)],1)],1)],1)],1)},a=[],n=i("5530"),o=i("a452"),r=i("2f62"),l={name:"DashboardCoreSettings",mixins:[o["a"]],data:function(){return{color:"#E91E63",colors:["#9C27b0","#00CAE3","#4CAF50","#ff9800","#E91E63","#FF5252"],image:"/assets/img/sidebar-1.jpg",images:["/assets/img/sidebar-1.jpg","/assets/img/sidebar-2.jpg","/assets/img/sidebar-3.jpg","/assets/img/sidebar-4.jpg"],menu:!1,saveImage:"",showImg:!0}},computed:Object(n["a"])({},Object(r["c"])(["barImage"])),watch:{color:function(t){this.$vuetify.theme.themes[this.isDark?"dark":"light"].primary=t},showImg:function(t){t?this.saveImage?(this.setBarImage(this.saveImage),this.saveImage=""):this.setBarImage(t):(this.saveImage=this.barImage,this.setBarImage(""))},image:function(t){this.setBarImage(t)}},methods:Object(n["a"])({},Object(r["b"])({setBarImage:"SET_BAR_IMAGE"}))},c=l,u=(i("b947"),i("2877")),h=i("6544"),d=i.n(h),v=i("8212"),m=i("8336"),p=i("b0afa"),f=i("99d9"),g=i("62ad"),b=i("ce7e"),C=i("132d"),y=i("adda"),w=i("ade3"),k=i("4e82"),_=i("58df"),S=i("d9bd"),V=i("2b0e"),A=V["default"].extend({props:{activeClass:String,value:{required:!1}},data:function(){return{isActive:!1}},methods:{toggle:function(){this.isActive=!this.isActive}},render:function(){return this.$scopedSlots.default?(this.$scopedSlots.default&&(t=this.$scopedSlots.default({active:this.isActive,toggle:this.toggle})),Array.isArray(t)&&1===t.length&&(t=t[0]),t&&!Array.isArray(t)&&t.tag?(t.data=this._b(t.data||{},t.tag,{class:Object(w["a"])({},this.activeClass,this.isActive)}),t):(Object(S["c"])("v-item should only contain a single element",this),t)):(Object(S["c"])("v-item is missing a default scopedSlot",this),null);var t}}),I=Object(_["a"])(A,Object(k["a"])("itemGroup","v-item","v-item-group")).extend({name:"v-item"}),j=i("604c"),O=i("e449"),x=i("0fd9"),$=i("8dd9"),E=i("2fa4"),D=i("b73d"),B=Object(u["a"])(c,s,a,!1,null,null,null);e["default"]=B.exports;d()(B,{VAvatar:v["a"],VBtn:m["a"],VCard:p["a"],VCardText:f["b"],VCol:g["a"],VDivider:b["a"],VIcon:C["a"],VImg:y["a"],VItem:I,VItemGroup:j["b"],VMenu:O["a"],VRow:x["a"],VSheet:$["a"],VSpacer:E["a"],VSwitch:D["a"]})},"58d3":function(t,e,i){},"9d01":function(t,e,i){},b73d:function(t,e,i){"use strict";var s=i("15fd"),a=i("5530"),n=(i("0481"),i("4069"),i("ec29"),i("9d01"),i("fe09")),o=i("c37a"),r=i("c3f0"),l=i("0789"),c=i("490a"),u=i("80d2"),h=["title"];e["a"]=n["a"].extend({name:"v-switch",directives:{Touch:r["a"]},props:{inset:Boolean,loading:{type:[Boolean,String],default:!1},flat:{type:Boolean,default:!1}},computed:{classes:function(){return Object(a["a"])(Object(a["a"])({},o["a"].options.computed.classes.call(this)),{},{"v-input--selection-controls v-input--switch":!0,"v-input--switch--flat":this.flat,"v-input--switch--inset":this.inset})},attrs:function(){return{"aria-checked":String(this.isActive),"aria-disabled":String(this.isDisabled),role:"switch"}},validationState:function(){return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0},switchData:function(){return this.setTextColor(this.loading?void 0:this.validationState,{class:this.themeClasses})}},methods:{genDefaultSlot:function(){return[this.genSwitch(),this.genLabel()]},genSwitch:function(){var t=this.attrs$,e=(t.title,Object(s["a"])(t,h));return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.genInput("checkbox",Object(a["a"])(Object(a["a"])({},this.attrs),e)),this.genRipple(this.setTextColor(this.validationState,{directives:[{name:"touch",value:{left:this.onSwipeLeft,right:this.onSwipeRight}}]})),this.$createElement("div",Object(a["a"])({staticClass:"v-input--switch__track"},this.switchData)),this.$createElement("div",Object(a["a"])({staticClass:"v-input--switch__thumb"},this.switchData),[this.genProgress()])])},genProgress:function(){return this.$createElement(l["c"],{},[!1===this.loading?null:this.$slots.progress||this.$createElement(c["a"],{props:{color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,size:16,width:2,indeterminate:!0}})])},onSwipeLeft:function(){this.isActive&&this.onChange()},onSwipeRight:function(){this.isActive||this.onChange()},onKeydown:function(t){(t.keyCode===u["y"].left&&this.isActive||t.keyCode===u["y"].right&&!this.isActive)&&this.onChange()}}})},b947:function(t,e,i){"use strict";i("58d3")},ec29:function(t,e,i){},fe09:function(t,e,i){"use strict";i("d3b7"),i("25f0"),i("4de4");var s=i("c37a"),a=i("5607"),n=i("2b0e"),o=n["default"].extend({name:"rippleable",directives:{ripple:a["a"]},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.ripple?(t.staticClass="v-input--selection-controls__ripple",t.directives=t.directives||[],t.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",t)):null}}}),r=i("8547"),l=i("58df");function c(t){t.preventDefault()}e["a"]=Object(l["a"])(s["a"],o,r["a"]).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data:function(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor:function(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple:function(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive:function(){var t=this,e=this.value,i=this.internalValue;return this.isMultiple?!!Array.isArray(i)&&i.some((function(i){return t.valueComparator(i,e)})):void 0===this.trueValue||void 0===this.falseValue?e?this.valueComparator(e,i):Boolean(i):this.valueComparator(i,this.trueValue)},isDirty:function(){return this.isActive},rippleState:function(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue:function(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel:function(){var t=s["a"].options.methods.genLabel.call(this);return t?(t.data.on={click:c},t):t},genInput:function(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:c},ref:"input"})},onClick:function(t){this.onChange(),this.$emit("click",t)},onChange:function(){var t=this;if(this.isInteractive){var e=this.value,i=this.internalValue;if(this.isMultiple){Array.isArray(i)||(i=[]);var s=i.length;i=i.filter((function(i){return!t.valueComparator(i,e)})),i.length===s&&i.push(e)}else i=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(i,this.trueValue)?this.falseValue:this.trueValue:e?this.valueComparator(i,e)?null:e:!i;this.validate(!0,i),this.internalValue=i,this.hasColor=i}},onFocus:function(t){this.isFocused=!0,this.$emit("focus",t)},onBlur:function(t){this.isFocused=!1,this.$emit("blur",t)},onKeydown:function(t){}}})}}]);