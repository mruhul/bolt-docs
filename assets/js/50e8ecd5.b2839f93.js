"use strict";(self.webpackChunkbolt_docs=self.webpackChunkbolt_docs||[]).push([[2434],{3993:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var t=n(4848),s=n(8453);const r={sidebar_position:1},l="Intro",a={id:"bolt-common-extensions/intro",title:"Intro",description:"A helper library that contains some useful extensions for different datatype that useful for day to day development",source:"@site/docs/bolt-common-extensions/intro.md",sourceDirName:"bolt-common-extensions",slug:"/bolt-common-extensions/intro",permalink:"/bolt-docs/docs/bolt-common-extensions/intro",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/bolt-common-extensions/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Translate your site",permalink:"/bolt-docs/docs/tutorial-extras/translate-your-site"},next:{title:"Tutorial Intro",permalink:"/bolt-docs/docs/bolt-sdui/intro"}},i={},d=[{value:"Getting Started",id:"getting-started",level:2},{value:"Extension Methods",id:"extension-methods",level:2},{value:"Boolean",id:"boolean",level:3}];function c(e){const o={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.h1,{id:"intro",children:"Intro"}),"\n",(0,t.jsx)(o.p,{children:"A helper library that contains some useful extensions for different datatype that useful for day to day development"}),"\n",(0,t.jsx)(o.h2,{id:"getting-started",children:"Getting Started"}),"\n",(0,t.jsxs)(o.p,{children:["Add ",(0,t.jsx)(o.code,{children:"Bolt.Common.Extensions"})," nuget package in your project."]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-csharp",children:"nuget add Bolt.Common.Extensions\n"})}),"\n",(0,t.jsx)(o.h2,{id:"extension-methods",children:"Extension Methods"}),"\n",(0,t.jsx)(o.h3,{id:"boolean",children:"Boolean"}),"\n",(0,t.jsx)(o.p,{children:"Convert string to nullable boolean. If a string is null or can't parse to boolean then return null"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-csharp",children:'var got = "true".ToBoolean();\ngot.ShouldBe(true);\n\nvar got = "True".ToBoolean();\ngot.ShouldBe(true);\n\nvar got = "false".ToBoolean();\ngot.ShouldBe(false);\n\nvar got = "False".ToBoolean();\ngot.ShouldBe(false);\n\nvar got = "123".ToBoolean();\ngot.ShouldBe(null);\n\nvar got = "".ToBoolean();\ngot.ShouldBe(null);\n\nstring? nullStr = null;\nvar got = nullStr.ToBoolean();\ngot.ShouldBe(null);\n\n'})})]})}function u(e={}){const{wrapper:o}={...(0,s.R)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},8453:(e,o,n)=>{n.d(o,{R:()=>l,x:()=>a});var t=n(6540);const s={},r=t.createContext(s);function l(e){const o=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function a(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),t.createElement(r.Provider,{value:o},e.children)}}}]);