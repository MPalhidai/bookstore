(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,t,a){e.exports=a(43)},27:function(e,t,a){},30:function(e,t,a){},36:function(e,t,a){},38:function(e,t,a){},40:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(17),c=a.n(o),i=a(2),s=a(3),l=a(5),m=a(4),u=a(6),d=(a(27),function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"bookCard",key:this.props.key,id:this.props.id},r.a.createElement("div",{className:"bookCardLeft"},r.a.createElement("p",{className:"bookCategory"},this.props.category),r.a.createElement("p",{className:"bookTitle"},this.props.title),r.a.createElement("p",{className:"bookAuthor"},"Author"),r.a.createElement("p",{className:"bookLinks"},r.a.createElement("span",{className:"bookLink"},"Comments"),r.a.createElement("span",{className:"bookLink",onClick:function(){return e.props.removeBtn(e.props.id)}},"Remove"),r.a.createElement("span",{className:"bookLink"},"Edit"))),r.a.createElement("div",{className:"bookCardMiddle"},r.a.createElement("div",{className:"bookProgressBar"}),r.a.createElement("div",{className:"bookCardMiddleRight"},r.a.createElement("p",{className:"bookProgressNumber"},"0%"),r.a.createElement("p",{className:"bookProgressComplete"},"Completed"))),r.a.createElement("div",{className:"bookCardRight"},r.a.createElement("p",{className:"bookChapterHeader"},"CURRENT CHAPTER"),r.a.createElement("p",{className:"bookChapter"},"Introduction"),r.a.createElement("button",{className:"progressBtn"},"Update Progress")))}}]),t}(r.a.Component)),h=a(8),p={books:[{id:1234,title:"ABC's",category:"Kids"},{id:2345,title:"Birds",category:"Learning"},{id:3456,title:"USA",category:"History"}],filters:["Action","Biography","History","Horror","Kids","Learning","Sci-Fi"]},b=(a(30),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).handleChange=function(e){a.props.selector(e.target.value)},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=["All"].concat(Object(h.a)(p.filters));return r.a.createElement("div",{className:"filter"},r.a.createElement("span",{className:"filterTag"},"Filter:"),r.a.createElement("select",{className:"filterSelector",name:"filters",onChange:this.handleChange},e.map(function(e){return r.a.createElement("option",{value:e},e)})))}}]),t}(r.a.Component)),f=a(10),E=(a(36),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).handleRemoveBook=function(e){a.props.onRemoveBook(e)},a.handleFilterChange=function(e){a.props.onFilterChange(e)},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"BookList"},r.a.createElement(b,{selector:this.handleFilterChange}),this.props.inventory.filter(function(t){return e.props.categories.includes(t.category)}).map(function(t,a){return r.a.createElement(d,{key:a,id:t.id,title:t.title,category:t.category,removeBtn:e.handleRemoveBook})}))}}]),t}(r.a.Component)),k=Object(f.b)(function(e){return{inventory:e.inventory.books,categories:e.categories.filters}},function(e){return{onRemoveBook:function(t){e({type:"REMOVE_BOOK",id:t})},onFilterChange:function(t){e({type:"CHANGE_FILTER",filter:t})}}})(E),v=a(7),O=(a(38),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).handleChange=function(e){a.setState({title:e.target.value})},a.handleOptions=function(e){a.setState({category:e.target.value})},a.handleSubmit=function(e){e.preventDefault(),a.props.submitNewBook(a.state),a.setState({id:a.state.id+1,title:"",category:"Action"})},a.state={id:1,title:"",category:"Action"},a.handleChange=a.handleChange.bind(Object(v.a)(Object(v.a)(a))),a.handleSubmit=a.handleSubmit.bind(Object(v.a)(Object(v.a)(a))),a.handleOptions=a.handleOptions.bind(Object(v.a)(Object(v.a)(a))),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{className:"bookForm"},r.a.createElement("p",{className:"formHeader"},"ADD NEW BOOK"),r.a.createElement("div",{className:"flexDiv"},r.a.createElement("input",{className:"formInput",type:"text",name:"title",value:this.state.title,onChange:this.handleChange,placeholder:"Book title"}),r.a.createElement("select",{className:"formSelector",name:"categories",onChange:this.handleOptions,value:this.state.category},p.filters.map(function(e){return r.a.createElement("option",{value:e},e)})),r.a.createElement("button",{className:"formBtn",onClick:this.handleSubmit},"Add Book")))}}]),t}(r.a.Component)),g=Object(f.b)(function(e){return{}},function(e){return{submitNewBook:function(t){e(function(e){return{type:"CREATE_BOOK",book:e}}(t))}}})(O),N=(a(40),a(11)),y=a(20),C=a(21);N.b.add(C.a);var j=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"headerLinks"},r.a.createElement("span",{className:"logo"},"Bookstore CMS"),r.a.createElement("span",{className:"headerLink"},"Books"),r.a.createElement("span",{className:"headerLink"},"Categories")),r.a.createElement("div",{className:"userCircle"},r.a.createElement(y.a,{icon:"user"}))),r.a.createElement("div",{className:"container"},r.a.createElement(k,null),r.a.createElement(g,null)))}}]),t}(r.a.Component),B=a(9),A=Object(B.b)({inventory:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_BOOK":return{books:[t.book].concat(Object(h.a)(e.books))};case"REMOVE_BOOK":return{books:e.books.filter(function(e){return e.id!==t.id})};case"GET_BOOKS":return{books:Object(h.a)(e.books)};default:return e}},categories:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_FILTER":return"All"===t.filter?{filters:Object(h.a)(p.filters)}:{filters:[t.filter]};default:return e}}}),w=Object(B.c)(A);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(f.a,{store:w},r.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[22,2,1]]]);
//# sourceMappingURL=main.e42bd2e1.chunk.js.map