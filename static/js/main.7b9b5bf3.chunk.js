(this["webpackJsonpsentiment-analysis"]=this["webpackJsonpsentiment-analysis"]||[]).push([[0],{199:function(e,t,a){e.exports=a(322)},315:function(e,t,a){},322:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(46),i=a.n(c),s=a(62),l=a.n(s),o=a(185),u=a(30),m=a(31),d=a(36),h=a(34),v=a(82),E=a(335),p=a(186),g=a.n(p).a.create({baseURL:"http://localhost:8000"}),b=(a(315),a(316),a(336)),f=a(337),N=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).state={card:""},n}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement(f.a.Group,{animation:"fade down",duration:"500"},"positive"===this.state.card&&r.a.createElement("div",{className:"ui message"},r.a.createElement("div",{className:"header"},"Positive"),r.a.createElement("div",{className:"ui  placeholder"},r.a.createElement("div",{className:"line"}),r.a.createElement("div",{className:"line"}))),"mixed"===this.state.card&&r.a.createElement("div",{className:"ui message"},r.a.createElement("div",{className:"header"},"Mixed"),r.a.createElement("div",{className:"ui  placeholder"},r.a.createElement("div",{className:"line"}),r.a.createElement("div",{className:"line"}))),"negative"===this.state.card&&r.a.createElement("div",{className:"ui message"},r.a.createElement("div",{className:"header"},"Negative"),r.a.createElement("div",{className:"ui  placeholder"},r.a.createElement("div",{className:"line"}),r.a.createElement("div",{className:"line"}))),"neutral"===this.state.card&&r.a.createElement("div",{className:"ui message"},r.a.createElement("div",{className:"header"},"Neutral"),r.a.createElement("div",{className:"ui  placeholder"},r.a.createElement("div",{className:"line"}),r.a.createElement("div",{className:"line"}))))}}],[{key:"getDerivedStateFromProps",value:function(e){return{card:e.card}}}]),a}(n.Component),x=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={card:!1},e.onButtonClick=function(t){e.state.card===t.target.innerHTML.toLowerCase()?e.setState({card:""}):e.setState({card:t.target.innerHTML.toLowerCase()})},e}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"ui text center aligned container"},r.a.createElement(b.a,{basic:!0,color:"green",content:"Positive",onClick:this.onButtonClick}),r.a.createElement(b.a,{basic:!0,color:"yellow",content:"Mixed",onClick:this.onButtonClick}),r.a.createElement(b.a,{basic:!0,color:"red",content:"Negative",onClick:this.onButtonClick}),r.a.createElement(b.a,{basic:!0,content:"Neutral",onClick:this.onButtonClick})),r.a.createElement(N,{card:this.state.card}))}}]),a}(n.Component),k=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"ui text center aligned container"},r.a.createElement(b.a.Group,null,r.a.createElement(b.a,{negative:!0},"Make it negative!"),r.a.createElement(b.a.Or,null),r.a.createElement(b.a,{positive:!0},"Make it positive!")))}}]),a}(n.Component),y=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){var e=this.props.hashtags.map((function(e,t){return r.a.createElement("a",{key:t},e," ")}));return r.a.createElement("div",{className:"ui text center aligned container"},e)}}]),a}(n.Component),j=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={editorState:v.EditorState.createEmpty(),hashtags:[]},e.findWithRegex=function(e,t,a){for(var n,r,c=t.getText();null!==(n=e.exec(c));)a(r=n.index,r+n[0].length)},e.onTextAreaChange=function(){var t=Object(o.a)(l.a.mark((function t(a){var n,c;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!((n=a.getCurrentContent().getPlainText()).endsWith(".")||n.endsWith("!")||n.endsWith("?"))){t.next=5;break}return t.delegateYield(l.a.mark((function t(){var a,i,s,o,u,m;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g.post("/finalScore",{content:n});case 2:a=t.sent,i=a.data.sentences,c=[],s=l.a.mark((function t(a){var n,s,o;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="none","positive"===i[a].sentiment?n="#21ba45":"negative"===i[a].sentiment?n="#db2828":"mixed"===i[a].sentiment&&(n="yellow"),t.next=4,g.post("/score",{content:i[a].text});case 4:s=t.sent,o=new RegExp(i[a].text,"g"),c.push({strategy:function(t,a){e.findWithRegex(o,t,a)},component:function(e){return r.a.createElement(E.a,{trigger:r.a.createElement("span",Object.assign({},e,{style:{backgroundColor:n}}),e.children)},r.a.createElement("b",null,"Key Positive Words: "),s.data.good.join(", "),r.a.createElement("br",null),r.a.createElement("b",null,"Key Negative Words: "),s.data.bad.join(", "),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("b",null,"Confidence Scores:"),r.a.createElement("br",null),r.a.createElement("b",null,"Positive: "),i[a].scores.positive,r.a.createElement("br",null),r.a.createElement("b",null,"Neutral: "),i[a].scores.neutral,r.a.createElement("br",null),r.a.createElement("b",null,"Negative: "),i[a].scores.negative)}});case 7:case"end":return t.stop()}}),t)})),o=0;case 7:if(!(o<i.length)){t.next=12;break}return t.delegateYield(s(o),"t0",9);case 9:o++,t.next=7;break;case 12:return t.next=14,g.post("/score",{content:n});case 14:u=t.sent,m=new v.CompositeDecorator(c),e.setState({editorState:v.EditorState.set(e.state.editorState,{decorator:m}),hashtags:u.data.top_tags});case 17:case"end":return t.stop()}}),t)}))(),"t0",3);case 3:t.next=6;break;case 5:e.setState({editorState:a});case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"ui text container"},r.a.createElement("h1",{className:"ui center aligned icon huge header"},"Sentiment Analysis"),r.a.createElement(v.Editor,{className:"text-area",editorState:this.state.editorState,onChange:this.onTextAreaChange}),r.a.createElement(y,{hashtags:this.state.hashtags}),r.a.createElement(k,null),r.a.createElement("h2",{className:"color-header ui center aligned icon header"},"What do the colors mean?"),r.a.createElement(x,null))}}]),a}(n.Component);i.a.render(r.a.createElement(j,null),document.querySelector("#root"))}},[[199,1,2]]]);
//# sourceMappingURL=main.7b9b5bf3.chunk.js.map