(this["webpackJsonpproject-react"]=this["webpackJsonpproject-react"]||[]).push([[0],[,,function(e,t,a){e.exports={paragtitle:"ProductData_paragtitle__24j8U",paragdesc:"ProductData_paragdesc__BbSyr",selector:"ProductData_selector__1SEOE",Photoselect:"ProductData_Photoselect__3O6rY",Coloredselected:"ProductData_Coloredselected__ThkSH",Featureditem2:"ProductData_Featureditem2__2twl7",Featureditem:"ProductData_Featureditem__sZWub"}},function(e,t,a){e.exports={datetime:"ProductPreview_datetime__32P2e",HeartBeatSection:"ProductPreview_HeartBeatSection__3ld9W",beat:"ProductPreview_beat__KBiCX",Preview:"ProductPreview_Preview__2aKVS"}},,function(e,t,a){e.exports={header:"Header_header__332YH",image:"Header_image__2Jy-D"}},,,,,,,,,,function(e,t,a){},function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var r=a(1),c=a.n(r),i=a(6),o=a.n(i),s=(a(15),a(7)),n=a(8),l=a(10),u=a(9),d=(a(16),a(5)),m=a.n(d),j=a(0),h=function(e){return Object(j.jsx)("header",{className:m.a.header,children:Object(j.jsx)("img",{className:m.a.image,src:"https://i.postimg.cc/wxsqfkNV/Png-Item-12080-1.png",alt:""})})},p={title:"FitBit 19 - The Smartest Watch",description:"Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor.",colorOptions:[{styleName:"Black Strap",imageUrl:"https://imgur.com/iOeUBV7.png"},{styleName:"Red Strap",imageUrl:"https://imgur.com/PTgQlim.png"},{styleName:"Blue Strap",imageUrl:"https://imgur.com/Mplj1YR.png"},{styleName:"Purple Strap",imageUrl:"https://imgur.com/xSIK4M8.png"}],featureList:["Time","Heart Rate"]};Object.freeze(p);var g=p,b=a(2),O=a.n(b),P=function(e){var t=e.data.colorOptions.map((function(t,a){var r=[O.a.Photoselect];return a===e.currentPreviewImagePos&&r.push(O.a.Coloredselected),Object(j.jsx)("img",{className:r.join(" "),src:t.imageUrl,alt:t.styleName,onClick:function(){return e.onColorOptionClick(a)}},a)})),a=e.data.featureList.map((function(t,a){var r=[O.a.Featureditem2];return 1===a&&e.showHeartBeatSection?r.push(O.a.Featureditem):0!==a||e.showHeartBeatSection||r.push(O.a.Featureditem),Object(j.jsx)("button",{onClick:function(){return e.onFeatureItemClick(a)},className:r.join(" "),children:t},a)}));return Object(j.jsxs)("div",{children:[Object(j.jsx)("p",{className:O.a.paragtitle,children:e.data.title}),Object(j.jsx)("p",{className:O.a.paragdesc,children:e.data.description}),Object(j.jsx)("p",{className:O.a.selector,children:"Select Color"}),Object(j.jsxs)("div",{children:[t,Object(j.jsx)("p",{className:"selector",children:"Features"}),Object(j.jsx)("div",{className:"Featureditemcontainer",children:a}),Object(j.jsx)("div",{children:Object(j.jsx)("button",{className:"Buyitem",children:"Buy now"})})]})]})},v=a(3),_=a.n(v),w=function(e){var t=(new Date).getHours()>9?(new Date).getHours():0+(new Date).getHours(),a=(new Date).getMinutes()>9?(new Date).getMinutes():0+(new Date).getMinutes();return Object(j.jsxs)("div",{children:[Object(j.jsx)("img",{className:_.a.Preview,name:"preview",src:e.currentPreviewImage,alt:"Product Preview"}),e.showHeartBeatSection?Object(j.jsxs)("div",{className:_.a.HeartBeatSection,children:[Object(j.jsx)("i",{className:"fas fa-heartbeat"}),Object(j.jsx)("p",{children:"78"})]}):Object(j.jsx)("div",{className:_.a.datetime,children:Object(j.jsx)("p",{children:"".concat(t,":").concat(a)})})]})},x=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,c=new Array(r),i=0;i<r;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={productData:g,currentPreviewImagePos:0,showHeartBeatSection:!1},e.onColorOptionClick=function(t){e.setState({currentPreviewImagePos:t})},e.onFeatureItemClick=function(t){var a=!1;1===t&&(a=!0),e.setState({showHeartBeatSection:a})},e}return Object(n.a)(a,[{key:"render",value:function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)(h,{}),Object(j.jsxs)("body",{children:[Object(j.jsx)("div",{className:"leftbox",children:Object(j.jsx)(w,{currentPreviewImage:this.state.productData.colorOptions[this.state.currentPreviewImagePos].imageUrl,showHeartBeatSection:this.state.showHeartBeatSection})}),Object(j.jsx)("div",{className:"rightbox",children:Object(j.jsx)(P,{data:this.state.productData,onColorOptionClick:this.onColorOptionClick,currentPreviewImagePos:this.state.currentPreviewImagePos,onFeatureItemClick:this.onFeatureItemClick,showHeartBeatSection:this.state.showHeartBeatSection})})]})]})}}]),a}(r.Component),f=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,19)).then((function(t){var a=t.getCLS,r=t.getFID,c=t.getFCP,i=t.getLCP,o=t.getTTFB;a(e),r(e),c(e),i(e),o(e)}))};o.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(x,{})}),document.getElementById("root")),f()}],[[18,1,2]]]);
//# sourceMappingURL=main.43d134e9.chunk.js.map