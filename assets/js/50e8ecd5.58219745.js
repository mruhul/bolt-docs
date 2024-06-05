"use strict";(self.webpackChunkbolt_docs=self.webpackChunkbolt_docs||[]).push([[2434],{3993:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>c,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var t=o(4848),l=o(8453);const r={sidebar_position:1},s="Intro",a={id:"bolt-common-extensions/intro",title:"Intro",description:"A helper library that contains some useful extensions for different datatype that useful for day to day development",source:"@site/docs/bolt-common-extensions/intro.md",sourceDirName:"bolt-common-extensions",slug:"/bolt-common-extensions/intro",permalink:"/bolt-docs/docs/bolt-common-extensions/intro",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/bolt-common-extensions/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Translate your site",permalink:"/bolt-docs/docs/tutorial-extras/translate-your-site"},next:{title:"Tutorial Intro",permalink:"/bolt-docs/docs/bolt-sdui/intro"}},i={},d=[{value:"Getting Started",id:"getting-started",level:2},{value:"Extension Methods",id:"extension-methods",level:2},{value:"Convert String to Boolean",id:"convert-string-to-boolean",level:3},{value:"Convert nullable boolean to non nullable",id:"convert-nullable-boolean-to-non-nullable",level:3}];function u(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,l.R)(),...e.components},{Details:o}=n;return o||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"intro",children:"Intro"}),"\n",(0,t.jsx)(n.p,{children:"A helper library that contains some useful extensions for different datatype that useful for day to day development"}),"\n",(0,t.jsx)(n.h2,{id:"getting-started",children:"Getting Started"}),"\n",(0,t.jsxs)(n.p,{children:["Add ",(0,t.jsx)(n.code,{children:"Bolt.Common.Extensions"})," nuget package in your project."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csharp",children:"nuget add Bolt.Common.Extensions\n"})}),"\n",(0,t.jsx)(n.h2,{id:"extension-methods",children:"Extension Methods"}),"\n",(0,t.jsx)(n.h3,{id:"convert-string-to-boolean",children:"Convert String to Boolean"}),"\n",(0,t.jsx)(n.p,{children:"Convert string to nullable boolean. If a string is null or can't parse to boolean then return null"}),"\n",(0,t.jsxs)(o,{children:[(0,t.jsx)("summary",{children:"string?.ToBoolean() : bool?"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csharp",children:'var got = "true".ToBoolean();\ngot.ShouldBe(true);\n\nvar got = "True".ToBoolean();\ngot.ShouldBe(true);\n\nvar got = "false".ToBoolean();\ngot.ShouldBe(false);\n\nvar got = "False".ToBoolean();\ngot.ShouldBe(false);\n\nvar got = "123".ToBoolean();\ngot.ShouldBe(null);\n\nvar got = "".ToBoolean();\ngot.ShouldBe(null);\n\nstring? nullStr = null;\nvar got = nullStr.ToBoolean();\ngot.ShouldBe(null);\n\n'})})]}),"\n",(0,t.jsx)(n.h3,{id:"convert-nullable-boolean-to-non-nullable",children:"Convert nullable boolean to non nullable"}),"\n",(0,t.jsxs)(o,{children:[(0,t.jsx)("summary",{children:"boolean?.NullSafe()"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csharp",children:"\nboolean? maybeTrue = null;\nmaybeTrue.NullSafe().ShouldBe(false);\nmayBeTrue = true;\nmaybeTrue.NullSafe().ShouldBe(true);\n\n"})})]})]})}function c(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>s,x:()=>a});var t=o(6540);const l={},r=t.createContext(l);function s(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);