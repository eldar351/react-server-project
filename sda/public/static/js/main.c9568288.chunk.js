(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,a){e.exports=a(24)},17:function(e,t,a){},19:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},20:function(e,t,a){},24:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),l=a(10),r=a.n(l),c=(a(17),a(1)),i=a(2),o=a(4),m=a(3),u=a(5),h=(a(19),a(20),function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"App"})}}]),t}(n.Component)),d=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return s.a.createElement("nav",null,s.a.createElement("div",{className:"nav-wrapper"},s.a.createElement("a",{href:"#",className:"brand-logo"},"Logo"),s.a.createElement("ul",{id:"nav-mobile",className:"right hide-on-med-and-down"},s.a.createElement("li",null,s.a.createElement("a",{href:"sass.html"},"Home")),s.a.createElement("li",null,s.a.createElement("a",{href:"badges.html"},"Flights")),s.a.createElement("li",null,s.a.createElement("a",{href:"collapsible.html"},"JavaScript")))))}}]),t}(n.Component),p=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"col s8"},s.a.createElement("h1",null,"AllProducts....."))}}]),t}(n.Component),b=a(6),v=a.n(b),f=a(7),g=a(8),E=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,s=new Array(n),l=0;l<n;l++)s[l]=arguments[l];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).state={name:"",username:"",password:"",lastname:""},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("div",{className:"col s12"},s.a.createElement("h5",null,"Register"),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"input-field col s6"},s.a.createElement("input",{onChange:this.handleChange.bind(this),name:"username",type:"text",className:"validate",value:this.state.username}),s.a.createElement("label",{for:"first_name"},"Username")),s.a.createElement("div",{className:"input-field col s6"},s.a.createElement("input",{onChange:this.handleChange.bind(this),name:"password",type:"password",className:"validate",value:this.state.password}),s.a.createElement("label",{for:"last_name"},"Password")),s.a.createElement("div",{className:"input-field col s6"},s.a.createElement("input",{onChange:this.handleChange.bind(this),name:"lastname",type:"text",className:"validate",value:this.state.lastname}),s.a.createElement("label",{for:"last_name"},"lastname")),s.a.createElement("div",{className:"input-field col s6"},s.a.createElement("input",{onChange:this.handleChange.bind(this),name:"name",type:"text",className:"validate",value:this.state.name}),s.a.createElement("label",{for:"last_name"},"first name")),s.a.createElement("button",{onClick:this.register.bind(this),class:"btn waves-effect waves-light",type:"submit",name:"action"},"Register",s.a.createElement("i",{class:"material-icons right"},"send")))))}},{key:"handleChange",value:function(e){this.setState(Object(g.a)({},e.target.name,e.target.value))}},{key:"register",value:function(){var e=Object(f.a)(v.a.mark(function e(){var t,a;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:3000/login",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(this.state)});case 2:return t=e.sent,e.next=5,t.json();case 5:(a=e.sent)&&alert(a);case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()}]),t}(n.Component),w=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,s=new Array(n),l=0;l<n;l++)s[l]=arguments[l];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).state={username:"",password:""},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("div",{className:"col s12"},s.a.createElement("h5",null,"Login"),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"input-field col s6"},s.a.createElement("input",{onChange:this.handleChange.bind(this),name:"username",type:"text",className:"validate",value:this.state.username}),s.a.createElement("label",{for:"first_name"},"Username")),s.a.createElement("div",{className:"input-field col s6"},s.a.createElement("input",{onChange:this.handleChange.bind(this),name:"password",type:"text",className:"validate",value:this.state.password}),s.a.createElement("label",{for:"last_name"},"Password")),s.a.createElement("button",{onClick:this.login.bind(this),class:"btn waves-effect waves-light",type:"submit",name:"action"},"Login",s.a.createElement("i",{class:"material-icons right"},"send")))))}},{key:"handleChange",value:function(e){this.setState(Object(g.a)({},e.target.name,e.target.value))}},{key:"login",value:function(){var e=Object(f.a)(v.a.mark(function e(){var t,a;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:3000/login",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(this.state)});case 2:return t=e.sent,e.next=5,t.json();case 5:(a=e.sent)?(alert(a),this.props.sidebarLogin()):alert("wrong username or password!");case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()}]),t}(n.Component),j=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,s=new Array(n),l=0;l<n;l++)s[l]=arguments[l];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).state={comp:"login"},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return"login"==this.state.comp?s.a.createElement("div",{className:"col s4"},s.a.createElement("h5",null,"hello guest please ",s.a.createElement("button",{onClick:this.switchComp.bind(this,"login"),className:"btn"},"login"),"or ",s.a.createElement("button",{onClick:this.switchComp.bind(this,"register"),className:"btn"},"register")),s.a.createElement(w,{sidebarLogin:this.userLoggedIn.bind(this)})):"register"==this.state.comp?s.a.createElement("div",{className:"col s4"},s.a.createElement("h5",null,"hello guest please ",s.a.createElement("button",{onClick:this.switchComp.bind(this,"login"),className:"btn"},"login"),"or ",s.a.createElement("button",{onClick:this.switchComp.bind(this,"register"),className:"btn"},"register")),s.a.createElement(E,null)):s.a.createElement("div",{className:"col s4"},s.a.createElement("h5",null,"connected"))}},{key:"userLoggedIn",value:function(){this.setState({comp:"loggedin"})}},{key:"switchComp",value:function(e){this.setState({comp:e})}}]),t}(n.Component),O=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row"},s.a.createElement(d,null)),s.a.createElement("div",{className:"row"},s.a.createElement(p,null)," ",s.a.createElement(j,null)),s.a.createElement("div",{className:"row"},s.a.createElement(h,null)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[11,2,1]]]);
//# sourceMappingURL=main.c9568288.chunk.js.map