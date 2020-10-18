(this["webpackJsonpsentiment-analysis"]=this["webpackJsonpsentiment-analysis"]||[]).push([[0],{208:function(e,t,a){e.exports=a(331)},324:function(e,t,a){},331:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(46),c=a.n(s),i=a(65),l=a.n(i),o=a(198),u=a(31),m=a(32),p=a(37),d=a(35),h=a(87),g=a(345),v=a(84),E=a.n(v),f=E.a.create({baseURL:"http://localhost:8000"}),b=(a(324),a(325),a(346)),k=a(347),x=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).state={card:""},n}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement(k.a.Group,{animation:"fade down",duration:"500"},"positive"===this.state.card&&r.a.createElement("div",{className:"ui message"},r.a.createElement("div",{className:"header"},"Positive"),r.a.createElement("div",{className:"ui  placeholder"},r.a.createElement("p",null,"Positive words are bright and optimistic. Positivity is determined by an Azure Machine Learning Algorithm and the SenticNet 5 database. "))),"mixed"===this.state.card&&r.a.createElement("div",{className:"ui message"},r.a.createElement("div",{className:"header"},"Mixed"),r.a.createElement("div",{className:"ui  placeholder"},r.a.createElement("div",{className:"line"}),r.a.createElement("div",{className:"line"}))),"negative"===this.state.card&&r.a.createElement("div",{className:"ui message"},r.a.createElement("div",{className:"header"},"Negative"),r.a.createElement("div",{className:"ui  placeholder"},r.a.createElement("div",{className:"line"}),r.a.createElement("div",{className:"line"}))),"neutral"===this.state.card&&r.a.createElement("div",{className:"ui message"},r.a.createElement("div",{className:"header"},"Neutral"),r.a.createElement("div",{className:"ui  placeholder"},r.a.createElement("div",{className:"line"}),r.a.createElement("div",{className:"line"}))))}}],[{key:"getDerivedStateFromProps",value:function(e){return{card:e.card}}}]),a}(n.Component),y=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={card:!1},e.onButtonClick=function(t){e.state.card===t.target.innerHTML.toLowerCase()?e.setState({card:""}):e.setState({card:t.target.innerHTML.toLowerCase()})},e}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"ui text center aligned container"},r.a.createElement(b.a,{basic:!0,color:"green",content:"Positive",onClick:this.onButtonClick}),r.a.createElement(b.a,{basic:!0,color:"yellow",content:"Mixed",onClick:this.onButtonClick}),r.a.createElement(b.a,{basic:!0,color:"red",content:"Negative",onClick:this.onButtonClick}),r.a.createElement(b.a,{basic:!0,content:"Neutral",onClick:this.onButtonClick})),r.a.createElement(x,{card:this.state.card}))}}]),a}(n.Component),N=a(348),O=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={positiveOpen:!1,negativeOpen:!1},e}return Object(m.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"ui text center aligned container"},r.a.createElement(b.a.Group,null,r.a.createElement(N.a,{trigger:r.a.createElement(b.a,{negative:!0},"Make it negative!"),onOpen:function(){e.setState({negativeOpen:!0})},open:this.state.negativeOpen},r.a.createElement(N.a.Header,null,"Make it negative!"),r.a.createElement(N.a.Content,null,r.a.createElement("h4",null,"These are some of the most positive sentences. In order to make these sentences negative you may want to change these sentences. You can click on a sentence to recieve feedback and additional information on how to make it negative."),this.props.data.map((function(e,t){if(e.posTopics.length>0)return r.a.createElement(g.a,{key:t,trigger:r.a.createElement("p",null,e.sentence.text)},r.a.createElement("div",{className:"topics"},r.a.createElement("h4",null,"Positive Topics:"),e.posTopics.map((function(e,t){return r.a.createElement("p",{key:t},e)}))),r.a.createElement("h4",null,"Suggested Replacement Sentence:"),r.a.createElement("p",null,e.posSuggested))}))),r.a.createElement(N.a.Actions,null,r.a.createElement(b.a,{color:"red",onClick:function(){e.setState({negativeOpen:!1})}},"Close"))),r.a.createElement(b.a.Or,null),r.a.createElement(N.a,{trigger:r.a.createElement(b.a,{positive:!0},"Make it positive!"),onOpen:function(){e.setState({positiveOpen:!0})},open:this.state.positiveOpen},r.a.createElement(N.a.Header,null,"Make it positive!"),r.a.createElement(N.a.Content,null,r.a.createElement("h4",null,"These are some of the most negative sentences. In order to make these sentences positive you may want to change these sentences. You can click on a sentence to recieve feedback and additional information on how to make it positive."),this.props.data.map((function(e,t){if(e.negTopics.length>0)return r.a.createElement(g.a,{key:t,trigger:r.a.createElement("p",null,e.sentence.text)},r.a.createElement("div",{className:"topics"},r.a.createElement("h4",null,"Negative Topics:"),e.negTopics.map((function(e,t){return r.a.createElement("p",{key:t},e)}))),r.a.createElement("h4",null,"Suggested Replacement Sentence:"),r.a.createElement("p",null,e.negSuggested))}))),r.a.createElement(N.a.Actions,null,r.a.createElement(b.a,{color:"red",onClick:function(){e.setState({positiveOpen:!1})}},"Close")))))}}]),a}(n.Component),S=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){var e=this.props.hashtags.map((function(e,t){return r.a.createElement("a",{key:t},e," ")}));return r.a.createElement("div",{className:"hashtags ui text center aligned container"},e)}}]),a}(n.Component),w=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={editorState:h.EditorState.createEmpty(),hashtags:["Start writing! Key emotions will appear here."],topicData:[]},e.findWithRegex=function(e,t,a){for(var n,r,s=t.getText();null!==(n=e.exec(s));)a(r=n.index,r+n[0].length)},e.onTextAreaChange=function(){var t=Object(o.a)(l.a.mark((function t(a){var n,s,c,i,o,u;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.setState({editorState:a}),!((n=a.getCurrentContent().getPlainText()).endsWith(".")||n.endsWith("!")||n.endsWith("?"))){t.next=4;break}return t.delegateYield(l.a.mark((function t(){var a,m,p,d,v,b;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.post("/finalScore",{content:n});case 2:a=t.sent,m=a.data.sentences,s=[],c=[],p=l.a.mark((function t(a){var n,u,p,d,h,v,f,b,k,x,y,N,O;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(n="none",u=[],p=[],d=[],h=[],v=0;v<m[a].aspects.length;v++)"positive"===m[a].aspects[v].sentiment?(u.push(m[a].aspects[v].text),f=parseInt(m[a].aspects[v].relations[0].ref.split("/").slice(-1)[0]),d.push(m[a].aspects[v].text+" - "+m[a].opinions[f].text)):"negative"===m[a].aspects[v].sentiment&&(p.push(m[a].aspects[v].text),b=parseInt(m[a].aspects[v].relations[0].ref.split("/").slice(-1)[0]),h.push(m[a].aspects[v].text+" - "+m[a].opinions[b].text));i=m[a].text,o=m[a].text,k=0;case 9:if(!(d.length>k)){t.next=17;break}return t.next=12,E.a.get("https://api.datamuse.com/words?rel_ant="+d[k].split(" - ")[1]);case 12:(x=t.sent).data.length>0&&(i=i.replace(d[k].split(" - ")[1],x.data[0].word));case 14:k++,t.next=9;break;case 17:y=0;case 18:if(!(h.length>y)){t.next=26;break}return t.next=21,E.a.get("https://api.datamuse.com/words?rel_ant="+h[y].split(" - ")[1]);case 21:(N=t.sent).data.length>0&&(o=o.replace(h[y].split(" - ")[1],N.data[0].word));case 23:y++,t.next=18;break;case 26:c.push({sentence:m[a],posTopics:d,negTopics:h,posSuggested:i,negSuggested:o}),"positive"===m[a].sentiment?n="rgb(33, 186, 69, .5)":"negative"===m[a].sentiment?n="rgb(215, 40, 40, .5)":"mixed"===m[a].sentiment&&(n="yellow"),O=new RegExp(m[a].text,"g"),s.push({strategy:function(t,a){e.findWithRegex(O,t,a)},component:function(e){return r.a.createElement(g.a,{trigger:r.a.createElement("span",Object.assign({},e,{style:{backgroundColor:n}}),e.children)},(u.length>0||p.length>0)&&r.a.createElement("div",{className:"topics"},u.length>0&&r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,r.a.createElement("b",null,"Positive Topics: "),u.join(", "))),p.length>0&&r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,r.a.createElement("b",null,"Negative Topics: "),p.join(", ")))),r.a.createElement("b",null,"Confidence Scores:"),r.a.createElement("br",null),0!=m[a].scores.positive&&r.a.createElement("p",null,r.a.createElement("b",null,"Positive: "),Math.round(100*m[a].scores.positive),"%"),0!=m[a].scores.neutral&&r.a.createElement("p",null,r.a.createElement("b",null,"Neutral: "),Math.round(100*m[a].scores.neutral),"%"),0!=m[a].scores.negative&&r.a.createElement("p",null,r.a.createElement("b",null,"Negative: "),Math.round(100*m[a].scores.negative),"%"))}});case 30:case"end":return t.stop()}}),t)})),d=0;case 8:if(!(d<m.length)){t.next=13;break}return t.delegateYield(p(d),"t0",10);case 10:d++,t.next=8;break;case 13:return t.next=15,f.post("/score",{content:n});case 15:v=t.sent,u=v.data.top_tags.length<=0?["Start writing! Key emotions will appear here."]:v.data.top_tags,b=new h.CompositeDecorator(s),e.setState({editorState:h.EditorState.set(e.state.editorState,{decorator:b}),hashtags:u,topicData:c});case 19:case"end":return t.stop()}}),t)}))(),"t0",4);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(m.a)(a,[{key:"sortPositiveSentences",value:function(e,t){return e.scores.positive>t.scores.positive?-1:e.scores.positive<t.scores.positive?1:0}},{key:"sortNegativeSentences",value:function(e,t){return e.scores.negative>t.scores.negative?-1:e.scores.negative<t.scores.negative?1:0}},{key:"render",value:function(){return r.a.createElement("div",{className:"ui text container"},r.a.createElement("h1",{className:"title ui center aligned icon huge header"},"Em",r.a.createElement("span",{style:{color:"#21ba45"}},"o"),"te",r.a.createElement("span",{style:{color:"#db2828"}},".")),r.a.createElement(h.Editor,{className:"text-area",editorState:this.state.editorState,onChange:this.onTextAreaChange}),r.a.createElement(S,{hashtags:this.state.hashtags}),r.a.createElement(O,{data:this.state.topicData}),r.a.createElement("h2",{className:"color-header ui center aligned icon header"},"What do the colors mean?"),r.a.createElement(y,null))}}]),a}(n.Component);c.a.render(r.a.createElement(w,null),document.querySelector("#root"))}},[[208,1,2]]]);
//# sourceMappingURL=main.73b22d91.chunk.js.map