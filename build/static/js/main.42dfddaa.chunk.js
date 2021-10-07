(this["webpackJsonpquiz-app"]=this["webpackJsonpquiz-app"]||[]).push([[0],{35:function(e,t,c){"use strict";c.r(t);var s=c(1),a=c.n(s),n=c(13),i=c.n(n),r=c(22),u=c(4),l=c(3),o=c(10),d={newQuizRoute:function(){return"/quizzes/new"},quizRoute:function(e){return"/quizzes/".concat(e)},quizzesRoute:function(){return"/quizzes"},newTopicRoute:function(){return"/topics/new"},topicRoute:function(e){return"/topics/".concat(e)},topicsRoute:function(){return"/topics"}},j=c(0);function p(){var e=Object(s.useState)(""),t=Object(o.a)(e,2),c=t[0],a=t[1],n=Object(s.useState)([]),i=Object(o.a)(n,2),r=i[0],u=i[1],p=Object(s.useState)(""),h=Object(o.a)(p,2),b=(h[0],h[1]),x=Object(l.f)(),m=function(e,t,c){var s=r.slice();s[e][t]=c,u(s)};return Object(j.jsxs)("section",{children:[Object(j.jsx)("h1",{children:"Create a new quiz"}),Object(j.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),0!==c.length){x.push(d.quizzesRoute())}},children:[Object(j.jsx)("input",{id:"quiz-name",value:c,onChange:function(e){return a(e.currentTarget.value)},placeholder:"Quiz Title"}),Object(j.jsxs)("select",{id:"quiz-topic",onChange:function(e){return b(e.currentTarget.value)},placeholder:"Topic",children:[Object(j.jsx)("option",{value:"",children:"Topic"}),Object.values({}).map((function(e){return Object(j.jsx)("option",{value:e.id,children:e.name},e.id)}))]}),r.map((function(e,t){return Object(j.jsxs)("div",{className:"card-front-back",children:[Object(j.jsx)("input",{id:"card-front-".concat(t),value:r[t].front,onChange:function(e){return m(t,"front",e.currentTarget.value)},placeholder:"Front"}),Object(j.jsx)("input",{id:"card-back-".concat(t),value:r[t].back,onChange:function(e){return m(t,"back",e.currentTarget.value)},placeholder:"Back"}),Object(j.jsx)("button",{onClick:function(e){return function(e,t){e.preventDefault(),u(r.filter((function(e,c){return t!==c})))}(e,t)},className:"remove-card-button",children:"Remove Card"})]},t)})),Object(j.jsxs)("div",{className:"actions-container",children:[Object(j.jsx)("button",{onClick:function(e){e.preventDefault(),u(r.concat({front:"",back:""}))},children:"Add a Card"}),Object(j.jsx)("button",{children:"Create Quiz"})]})]})]})}var h=[{url:"https://static-assets.codecademy.com/skillpaths/react-redux/redux-quiz-app/book.svg",name:"Book"},{url:"https://static-assets.codecademy.com/skillpaths/react-redux/redux-quiz-app/balloon.svg",name:"Balloon"},{url:"https://static-assets.codecademy.com/skillpaths/react-redux/redux-quiz-app/bird.svg",name:"Bird"},{url:"https://static-assets.codecademy.com/skillpaths/react-redux/redux-quiz-app/calendar.svg",name:"Calendar"},{url:"https://static-assets.codecademy.com/skillpaths/react-redux/redux-quiz-app/clover.svg",name:"Clover"},{url:"https://static-assets.codecademy.com/skillpaths/react-redux/redux-quiz-app/crayons.svg",name:"Crayons"},{url:"https://static-assets.codecademy.com/skillpaths/react-redux/redux-quiz-app/data-flow.svg",name:"Data"},{url:"https://static-assets.codecademy.com/skillpaths/react-redux/redux-quiz-app/fence.svg",name:"Fence"},{url:"https://static-assets.codecademy.com/skillpaths/react-redux/redux-quiz-app/grill.svg",name:"Grill"},{url:"https://static-assets.codecademy.com/skillpaths/react-redux/redux-quiz-app/hand-drill.svg",name:"Hand"},{url:"https://static-assets.codecademy.com/skillpaths/react-redux/redux-quiz-app/hat.svg",name:"Hat"},{url:"https://static-assets.codecademy.com/skillpaths/react-redux/redux-quiz-app/internet.svg",name:"Internet"},{url:"https://static-assets.codecademy.com/skillpaths/react-redux/redux-quiz-app/ladybug.svg",name:"Ladybug"},{url:"https://static-assets.codecademy.com/skillpaths/react-redux/redux-quiz-app/leaves.svg",name:"Leaves"},{url:"https://static-assets.codecademy.com/skillpaths/react-redux/redux-quiz-app/medicine.svg",name:"Medicine"},{url:"https://static-assets.codecademy.com/skillpaths/react-redux/redux-quiz-app/nest.svg",name:"Nest"},{url:"https://static-assets.codecademy.com/skillpaths/react-redux/redux-quiz-app/shuttlecock.svg",name:"Shuttlecock"},{url:"https://static-assets.codecademy.com/skillpaths/react-redux/redux-quiz-app/spade.svg",name:"Spade"},{url:"https://static-assets.codecademy.com/skillpaths/react-redux/redux-quiz-app/statistics.svg",name:"Statistics"},{url:"https://static-assets.codecademy.com/skillpaths/react-redux/redux-quiz-app/sun.svg",name:"Sun"},{url:"https://static-assets.codecademy.com/skillpaths/react-redux/redux-quiz-app/tree.svg",name:"Tree"}];function b(){var e=Object(s.useState)(""),t=Object(o.a)(e,2),c=t[0],a=t[1],n=Object(s.useState)(""),i=Object(o.a)(n,2),r=(i[0],i[1]),u=Object(l.f)();return Object(j.jsx)("section",{children:Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault(),0!==c.length&&u.push(d.topicsRoute())},children:[Object(j.jsx)("h1",{className:"center",children:"Create a new topic"}),Object(j.jsxs)("div",{className:"form-section",children:[Object(j.jsx)("input",{id:"topic-name",type:"text",value:c,onChange:function(e){return a(e.currentTarget.value)},placeholder:"Topic Name"}),Object(j.jsxs)("select",{onChange:function(e){return r(e.currentTarget.value)},required:!0,defaultValue:"default",children:[Object(j.jsx)("option",{value:"default",disabled:!0,hidden:!0,children:"Choose an icon"}),h.map((function(e){var t=e.name,c=e.url;return Object(j.jsx)("option",{value:c,children:t},c)}))]})]}),Object(j.jsx)("button",{className:"center",children:"Add Topic"})]})})}function x(){return Object(j.jsxs)("section",{className:"center",children:[Object(j.jsx)("h1",{children:"Topics"}),Object(j.jsx)("ul",{className:"topics-list",children:Object.values({}).map((function(e){return Object(j.jsx)("li",{className:"topic",children:Object(j.jsx)(u.b,{to:d.topicRoute(e.id),className:"topic-link",children:Object(j.jsxs)("div",{className:"topic-container",children:[Object(j.jsx)("img",{src:e.icon,alt:""}),Object(j.jsxs)("div",{className:"text-content",children:[Object(j.jsx)("h2",{children:e.name}),Object(j.jsxs)("p",{children:[e.quizIds.length," Quizzes"]})]})]})})},e.id)}))}),Object(j.jsx)(u.b,{to:d.newTopicRoute(),className:"button create-new-topic-button",children:"Create New Topic"})]})}function m(){var e={},t={}[Object(l.g)().topicId],c=t.quizIds.map((function(t){return e[t]}));return Object(j.jsxs)("section",{children:[Object(j.jsx)("img",{src:t.icon,alt:"",className:"topic-icon"}),Object(j.jsxs)("h1",{children:["Topic: ",t.name]}),Object(j.jsx)("ul",{className:"quizzes-list",children:c.map((function(e){return Object(j.jsx)("li",{className:"quiz",children:Object(j.jsx)(u.b,{to:d.quizRoute(e.id),children:e.name})},e.id)}))}),Object(j.jsx)(u.b,{to:"/quizzes/new",className:"button center",children:"Create a New Quiz"})]})}function O(e){var t={}[e.id],c=Object(s.useState)(!1),a=Object(o.a)(c,2),n=a[0],i=a[1];return Object(j.jsx)("li",{children:Object(j.jsx)("button",{className:"card",onClick:function(e){return i(!n)},children:n?t.back:t.front})})}function v(){var e={}[Object(l.g)().quizId];return Object(j.jsxs)("section",{children:[Object(j.jsx)("h1",{children:e.name}),Object(j.jsx)("ul",{className:"cards-list",children:e.cardIds.map((function(e){return Object(j.jsx)(O,{id:e},e)}))}),Object(j.jsx)(u.b,{to:d.newQuizRoute(),className:"button center",children:"Create a New Quiz"})]})}function z(){return Object(j.jsxs)("section",{className:"center",children:[Object(j.jsx)("h1",{children:"Quizzes"}),Object(j.jsx)("ul",{className:"quizzes-list",children:Object.values({}).map((function(e){return Object(j.jsx)(u.b,{to:d.quizRoute(e.id),children:Object(j.jsx)("li",{className:"quiz",children:e.name})},e.id)}))}),Object(j.jsx)(u.b,{to:d.newQuizRoute(),className:"button",children:"Create New Quiz"})]})}function f(){return Object(j.jsxs)(u.a,{children:[Object(j.jsx)("nav",{children:Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:Object(j.jsx)(u.c,{to:d.topicsRoute(),activeClassName:"active",children:"Topics"})}),Object(j.jsx)("li",{children:Object(j.jsx)(u.c,{to:d.quizzesRoute(),activeClassName:"active",children:"Quizzes"})}),Object(j.jsx)("li",{children:Object(j.jsx)(u.c,{to:d.newQuizRoute(),activeClassName:"active",children:"New Quiz"})})]})}),Object(j.jsxs)(l.c,{children:[Object(j.jsx)(l.a,{path:"/topics",children:Object(j.jsx)(g,{})}),Object(j.jsx)(l.a,{path:"/quizzes",children:Object(j.jsx)(q,{})})]})]})}function g(){var e=Object(l.h)();return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)(l.c,{children:[Object(j.jsx)(l.a,{path:"".concat(e.path,"/new"),children:Object(j.jsx)(b,{})}),Object(j.jsx)(l.a,{path:"".concat(e.path,"/:topicId"),children:Object(j.jsx)(m,{})}),Object(j.jsx)(l.a,{path:"".concat(e.path),children:Object(j.jsx)(x,{})})]})})}function q(){var e=Object(l.h)();return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)(l.c,{children:[Object(j.jsx)(l.a,{path:"".concat(e.path,"/new"),children:Object(j.jsx)(p,{})}),Object(j.jsx)(l.a,{path:"".concat(e.path,"/:quizId"),children:Object(j.jsx)(v,{})}),Object(j.jsx)(l.a,{path:"".concat(e.path),children:Object(j.jsx)(z,{})})]})})}var k=c(23),N=Object(k.a)({reducer:{}});i.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(r.a,{store:N,children:Object(j.jsx)(f,{})})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.42dfddaa.chunk.js.map