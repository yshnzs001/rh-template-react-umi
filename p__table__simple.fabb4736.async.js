(self.webpackChunkrh_template_umi=self.webpackChunkrh_template_umi||[]).push([[260],{32858:function(b,s,e){"use strict";e.r(s);var m=e(68699),p=e(94043),i=e.n(p),c=e(99156),h=e(7032),f=e(67294),r=e(85893),v=[{title:"\u6807\u9898",dataIndex:"title",ellipsis:!0,filterType:"query",tip:"\u6807\u9898\u8FC7\u957F\u4F1A\u81EA\u52A8\u6536\u7F29"},{title:"\u72B6\u6001",dataIndex:"state",valueType:"select",hideInSearch:!0,valueEnum:{all:"\u5168\u90E8",open:"\u672A\u89E3\u51B3",closed:"\u5DF2\u89E3\u51B3",processing:"\u89E3\u51B3\u4E2D"}},{title:"\u521B\u5EFA\u65F6\u95F4",key:"showTime",filterType:"query",dataIndex:"created_at",valueType:"dateTime",hideInSearch:!0},{title:"\u64CD\u4F5C",valueType:"option",render:function(o,n,d,t){return[(0,r.jsx)("a",{"data-inspector-line":"42","data-inspector-column":"6","data-inspector-relative-path":"src/pages/table/simple.tsx",onClick:function(){var l;t==null||(l=t.startEditable)===null||l===void 0||l.call(t,n.id)},children:"\u7F16\u8F91"},"editable"),(0,r.jsx)("a",{"data-inspector-line":"50","data-inspector-column":"6","data-inspector-relative-path":"src/pages/table/simple.tsx",href:n.url,target:"_blank",rel:"noopener noreferrer",children:"\u67E5\u770B"},"view")]}}];s.default=function(u){var o=f.useRef();return(0,r.jsx)(h.Z,{"data-inspector-line":"60","data-inspector-column":"4","data-inspector-relative-path":"src/pages/table/simple.tsx",fixedHeader:!0,affixProps:{offsetTop:48,children:null},header:{title:u.route.name,breadcrumb:{},extra:[]},children:(0,r.jsx)(c.qO,{"data-inspector-line":"69","data-inspector-column":"6","data-inspector-relative-path":"src/pages/table/simple.tsx",rowKey:"id",columns:v,actionRef:o,pagination:{pageSize:10},request:(0,m.Z)(i().mark(function n(){var d,t,_=arguments;return i().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=_.length>0&&_[0]!==void 0?_[0]:{},a.next=3,fetch("https://proapi.azurewebsites.net/github/issues").then(function(E){return E.json()});case 3:return t=a.sent,a.abrupt("return",{data:t.data,success:!0});case 5:case"end":return a.stop()}},n)}))})})}}}]);
