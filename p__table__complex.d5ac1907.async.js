(self.webpackChunkrh_template_umi=self.webpackChunkrh_template_umi||[]).push([[600],{44341:function(z,D,e){"use strict";e.r(D);var k=e(19597),B=e(2291),w=e(37482),v=e(88711),G=e(14643),K=e(92909),M=e(68699),V=e(13753),x=e(48429),O=e(44742),H=e(25324),A=e(45733),J=e(14943),L=e(74356),U=e(94043),m=e.n(U),g=e(99156),W=e(57254),j=e(7032),F=e(35713),E=e(67294),Z=e(40527),S=e(2138),t=e(85893),$=[{dataIndex:"index",width:48,hideInSearch:!0},{title:"\u6807\u9898",dataIndex:"title",copyable:!0,ellipsis:!0,filterType:"query",tip:"\u6807\u9898\u8FC7\u957F\u4F1A\u81EA\u52A8\u6536\u7F29"},{title:"\u72B6\u6001",dataIndex:"state",filters:!0,filterType:"query",onFilter:!0,valueType:"select",width:180,order:99,valueEnum:{all:{text:"\u5168\u90E8",status:"Default"},open:{text:"\u672A\u89E3\u51B3",status:"Error"},closed:{text:"\u5DF2\u89E3\u51B3",status:"Success",disabled:!0},processing:{text:"\u89E3\u51B3\u4E2D",status:"Processing"}}},{title:"\u6807\u7B7E",dataIndex:"labels",filterType:"light",renderFormItem:function(s,r){var n=r.defaultRender;return n(s)},render:function(s,r){return(0,t.jsx)(A.Z,{"data-inspector-line":"74","data-inspector-column":"6","data-inspector-relative-path":"src/pages/table/complex.tsx",children:r.labels.map(function(n){var a=n.name,d=n.color;return(0,t.jsx)(L.Z,{"data-inspector-line":"76","data-inspector-column":"10","data-inspector-relative-path":"src/pages/table/complex.tsx",color:d,children:a},a)})})}},{title:"\u521B\u5EFA\u65F6\u95F4",key:"showTime",filterType:"light",dataIndex:"created_at",valueType:"dateTime",sorter:!0},{title:"\u521B\u5EFA\u65F6\u95F4",dataIndex:"created_at",valueType:"dateRange",hideInTable:!0,hideInSearch:!0,search:{transform:function(s){return{startTime:s[0],endTime:s[1]}}}},{title:"\u64CD\u4F5C",valueType:"option",render:function(s,r,n,a){return[(0,t.jsx)("a",{"data-inspector-line":"115","data-inspector-column":"6","data-inspector-relative-path":"src/pages/table/complex.tsx",onClick:function(){var _;a==null||(_=a.startEditable)===null||_===void 0||_.call(a,r.id)},children:"\u7F16\u8F91"},"editable"),(0,t.jsx)("a",{"data-inspector-line":"123","data-inspector-column":"6","data-inspector-relative-path":"src/pages/table/complex.tsx",href:r.url,target:"_blank",rel:"noopener noreferrer",children:"\u67E5\u770B"},"view"),(0,t.jsx)(F.Z,{"data-inspector-line":"126","data-inspector-column":"6","data-inspector-relative-path":"src/pages/table/complex.tsx",onSelect:function(){return a==null?void 0:a.reload()},menus:[{key:"copy",name:"\u590D\u5236"},{key:"delete",name:"\u5220\u9664"}]},"actionGroup")]}}];D.default=function(u){var s=(0,E.useState)([]),r=(0,O.Z)(s,2),n=r[0],a=r[1],d=(0,E.useState)(!1),_=(0,O.Z)(d,2),C=_[0],I=_[1],T=E.useRef(),y=(0,E.useRef)({});return(0,t.jsxs)(j.Z,{"data-inspector-line":"150","data-inspector-column":"4","data-inspector-relative-path":"src/pages/table/complex.tsx",fixedHeader:!0,affixProps:{children:null},header:{title:u.route.name,breadcrumb:{},extra:[(0,t.jsx)(x.Z,{"data-inspector-line":"157","data-inspector-column":"10","data-inspector-relative-path":"src/pages/table/complex.tsx",type:"primary",size:"large",onClick:function(){Z.m8.push("/form/basic")},children:"\u65B0\u5EFA"},"createBtn"),(0,t.jsx)(x.Z,{"data-inspector-line":"167","data-inspector-column":"10","data-inspector-relative-path":"src/pages/table/complex.tsx",type:"default",size:"large",onClick:function(){I(!0)},children:"\u6279\u91CF\u5BFC\u5165"},"importBtn"),(0,t.jsx)(B.Z,{"data-inspector-line":"177","data-inspector-column":"10","data-inspector-relative-path":"src/pages/table/complex.tsx",overlay:(0,t.jsxs)(v.Z,{"data-inspector-line":"180","data-inspector-column":"14","data-inspector-relative-path":"src/pages/table/complex.tsx",onClick:function(){var i=(0,M.Z)(m().mark(function c(p){var h,l,f,P,R,b;return m().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:if(h=p.key,h!=="selected"){o.next=8;break}if(n.length!==0){o.next=5;break}return K.default.error("\u8BF7\u5148\u9009\u62E9\u8981\u64CD\u4F5C\u7684\u6570\u636E"),o.abrupt("return");case 5:y.current={idList:n},o.next=9;break;case 8:h==="params"&&(P=((l=T.current)===null||l===void 0||(f=l.pageInfo)===null||f===void 0?void 0:f.params)||{},R=P.status,b=P.searchKey,y.current={idList:[],status:R,searchKey:b});case 9:case"end":return o.stop()}},c)}));return function(c){return i.apply(this,arguments)}}(),children:[(0,t.jsx)(v.Z.Item,{"data-inspector-line":"202","data-inspector-column":"16","data-inspector-relative-path":"src/pages/table/complex.tsx",children:"\u5F53\u524D\u9009\u4E2D\u6570\u636E"},"selected"),(0,t.jsx)(v.Z.Item,{"data-inspector-line":"203","data-inspector-column":"16","data-inspector-relative-path":"src/pages/table/complex.tsx",children:"\u5F53\u524D\u67E5\u8BE2\u6761\u4EF6\u5168\u90E8\u6570\u636E"},"params")]}),children:(0,t.jsxs)(x.Z,{"data-inspector-line":"207","data-inspector-column":"12","data-inspector-relative-path":"src/pages/table/complex.tsx",type:"default",size:"large",children:["\u5BFC\u51FA\u6570\u636E ",(0,t.jsx)(W.Z,{"data-inspector-line":"208","data-inspector-column":"19","data-inspector-relative-path":"src/pages/table/complex.tsx"})]})},"downloadBtn")]},children:[(0,t.jsx)(g.qO,{"data-inspector-line":"214","data-inspector-column":"6","data-inspector-relative-path":"src/pages/table/complex.tsx",columns:$,actionRef:T,request:(0,M.Z)(m().mark(function i(){var c,p=arguments;return m().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return c=p.length>0&&p[0]!==void 0?p[0]:{},l.abrupt("return",(0,S.ZP)("https://proapi.azurewebsites.net/github/issues",{params:c}));case 2:case"end":return l.stop()}},i)})),rowSelection:{selectedRowKeys:n,onChange:a},rowKey:"id",pagination:{pageSize:10},dateFormatter:"string"}),C&&(0,t.jsx)(g.CA,{"data-inspector-line":"236","data-inspector-column":"8","data-inspector-relative-path":"src/pages/table/complex.tsx",title:"\u5BFC\u5165\u6570\u636E",visible:C,downloadUrl:"https://github.com/RootLinkFE/rh-template-react-umi.git",onCancel:function(){I(!1)},onFinish:function(){return Promise.resolve(!0)}})]})}}}]);
