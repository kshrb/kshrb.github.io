(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{YaKa:function(n,l,e){"use strict";e.r(l);var t=e("CcnG"),o=function(){function n(){}return n.prototype.ngOnInit=function(){},n}(),u=function(){return function(){}}(),i=e("pMnS"),r=e("oBZk"),a=e("ZZ/e"),s=e("ZYCi"),c=e("Ip0R"),g=t.lb({encapsulation:0,styles:[['.diesel-usage-container[_ngcontent-%COMP%]{padding-top:1.6rem;padding-bottom:1.6rem}.diesel-usage-content[_ngcontent-%COMP%]{width:743px;margin:0 auto;max-width:100%}@media (max-width:575px){.diesel-usage-content[_ngcontent-%COMP%]{padding-left:1rem;padding-right:1rem}}.diesel-usage-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]{padding:0;margin:0;min-height:0;border-radius:0 0 .5rem .5rem;-webkit-border-radius:0 0 .5rem .5rem;-moz-border-radius:0 0 .5rem .5rem;box-shadow:0 5px 8px rgba(0,0,0,.1);-webkit-box-shadow:0 5px 8px rgba(0,0,0,.1);-moz-box-shadow:0 5px 8px rgba(0,0,0,.1)}.diesel-usage-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{--min-height:0;--inner-border-width:0;--border-style:none;--border-color:var(--transparent);--padding-start:0;--inner-padding-end:0;--ion-safe-area-right:0;--background:var(--transparent);font-size:1.2rem;padding:1rem 1.5rem;font-weight:500}.diesel-usage-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:2rem;margin-right:1rem}.diesel-usage-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   .unit[_ngcontent-%COMP%]{font-size:1.5rem}.diesel-usage-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   .unit[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:75%}.diesel-usage-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{margin:0}@media (min-width:768px){.diesel-usage-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]{border-radius:0 0 1.2rem 1.2rem;-webkit-border-radius:0 0 1.2rem 1.2rem;-moz-border-radius:0 0 1.2rem 1.2rem}.diesel-usage-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{font-size:1.6rem;padding:1.5rem 3rem}.diesel-usage-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   .unit[_ngcontent-%COMP%]{font-size:1.8rem}}.diesel-usage-graph[_ngcontent-%COMP%]{height:27.5rem;background:url(grass-bg.c248a2c0c37b8935b337.png) left bottom no-repeat;position:relative;width:100%;border-radius:.5rem;-webkit-border-radius:.5rem;-moz-border-radius:.5rem;box-shadow:0 -5px 8px rgba(0,0,0,.1);-webkit-box-shadow:0 -5px 8px rgba(0,0,0,.1);-moz-box-shadow:0 -5px 8px rgba(0,0,0,.1)}.diesel-usage-graph[_ngcontent-%COMP%]   .engine-hrs-icon[_ngcontent-%COMP%]{position:absolute;bottom:4rem;left:2.2rem}.diesel-usage-graph[_ngcontent-%COMP%]   .engine-hrs-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{display:block}.diesel-usage-graph[_ngcontent-%COMP%]   .diesel-tank[_ngcontent-%COMP%]{position:absolute;bottom:1.3rem;left:2.2rem;height:23.5rem;width:14.7rem;overflow:hidden}.diesel-usage-graph[_ngcontent-%COMP%]   .diesel-tank[_ngcontent-%COMP%]   ion-text[_ngcontent-%COMP%]{position:absolute;z-index:1;left:1.6rem;bottom:5.7rem}.diesel-usage-graph[_ngcontent-%COMP%]   .diesel-tank[_ngcontent-%COMP%]   ion-text[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .diesel-usage-graph[_ngcontent-%COMP%]   .diesel-tank[_ngcontent-%COMP%]   ion-text[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin:0}.diesel-usage-graph[_ngcontent-%COMP%]   .diesel-tank[_ngcontent-%COMP%]   ion-text[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:2rem}.diesel-usage-graph[_ngcontent-%COMP%]   .diesel-tank[_ngcontent-%COMP%]   ion-text[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:3rem;font-weight:600}.diesel-usage-graph[_ngcontent-%COMP%]   .diesel-tank[_ngcontent-%COMP%]:before{content:"";height:100%;width:100%;background:url(fuel-tank.d3452971a7752bf19e7c.png) left bottom/contain no-repeat;display:block;position:absolute;left:0;bottom:0;z-index:2}.diesel-usage-graph[_ngcontent-%COMP%]   .tank-level-container[_ngcontent-%COMP%]{height:calc(100% - 2rem);position:absolute;bottom:0;left:0;right:.1rem;overflow:hidden}.diesel-usage-graph[_ngcontent-%COMP%]   .tank-level-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{background-color:var(--fuel);display:block;width:100%;position:absolute;bottom:0;left:0}.diesel-usage-graph[_ngcontent-%COMP%]   .tank-level-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:before{content:"";background:url(wave-pattern.3fe1565f197a81fe9fc4.png) left bottom/contain;background-repeat-y:no-repeat;height:1.4rem;position:absolute;left:0;top:0;width:100%;animation:20s linear infinite slide;-webkit-animation:20s linear infinite slide}@keyframes slide{from{background-position:0 0}to{background-position:-700px 0}}@-webkit-keyframes slide{from{background-position:0 0}to{background-position:-700px 0}}.diesel-usage-graph[_ngcontent-%COMP%]   .tractor-icons[_ngcontent-%COMP%]{position:absolute;bottom:1.3rem;right:35%}.diesel-usage-graph[_ngcontent-%COMP%]   .tractor-icons[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{display:block}.tractor-service-due[_ngcontent-%COMP%]{margin-top:3rem}.tractor-service-due[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{font-size:1.2rem;font-weight:500;margin-bottom:.5rem;display:block}@media (min-width:768px){@keyframes slide{from{background-position:0 0}to{background-position:-1500px 0}}@-webkit-keyframes slide{from{background-position:0 0}to{background-position:-1500px 0}}.diesel-usage-graph[_ngcontent-%COMP%]{border-radius:1.2rem;-webkit-border-radius:1.2rem;-moz-border-radius:1.2rem}.tractor-service-due[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{font-size:1.5rem}}.tractor-service-due[_ngcontent-%COMP%]   ion-progress-bar[_ngcontent-%COMP%]{height:2.5rem;border-radius:2.5rem;-webkit-border-radius:2.5rem;-moz-border-radius:2.5rem;--background:linear-gradient(var(--ion-color-secondary-tint), var(--ion-color-secondary-shade));--progress-background:linear-gradient(var(--ion-color-light-tint), var(--ion-color-light-shade))}.tractor-service-due[_ngcontent-%COMP%]   .hrs-unit[_ngcontent-%COMP%]{font-size:1.2rem;font-weight:500;color:var(--ion-color-secondary-shade);text-align:center;margin-top:.5rem}.tractor-service-due[_ngcontent-%COMP%]   .hrs-unit[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:75%;font-weight:400}@media (min-width:768px){.tractor-service-due[_ngcontent-%COMP%]   .hrs-unit[_ngcontent-%COMP%]{font-size:1.4rem}}']],data:{}});function b(n){return t.Fb(0,[(n()(),t.nb(0,0,null,null,14,"ion-header",[],null,null,null,r.T,r.m)),t.mb(1,49152,null,0,a.y,[t.h,t.k],null,null),(n()(),t.nb(2,0,null,0,12,"ion-toolbar",[["class","custom-header"],["color","primary"]],null,null,null,r.nb,r.G)),t.mb(3,49152,null,0,a.yb,[t.h,t.k],{color:[0,"color"]},null),(n()(),t.nb(4,0,null,0,7,"ion-buttons",[["routerLink","/tab"],["slot","start"]],null,[[null,"click"]],function(n,l,e){var o=!0;return"click"===l&&(o=!1!==t.xb(n,6).onClick()&&o),"click"===l&&(o=!1!==t.xb(n,7).onClick(e)&&o),o},r.K,r.d)),t.mb(5,49152,null,0,a.i,[t.h,t.k],null,null),t.mb(6,16384,null,0,s.n,[s.m,s.a,[8,null],t.B,t.k],{routerLink:[0,"routerLink"]},null),t.mb(7,737280,null,0,a.Hb,[c.h,a.Eb,t.k,s.m,[2,s.n]],null,null),(n()(),t.nb(8,0,null,0,3,"ion-button",[],null,null,null,r.J,r.c)),t.mb(9,49152,null,0,a.h,[t.h,t.k],null,null),(n()(),t.nb(10,0,null,0,1,"ion-icon",[["name","arrow-left"]],null,null,null,r.U,r.n)),t.mb(11,49152,null,0,a.z,[t.h,t.k],{name:[0,"name"]},null),(n()(),t.nb(12,0,null,0,2,"ion-title",[["slot","start"]],null,null,null,r.mb,r.F)),t.mb(13,49152,null,0,a.wb,[t.h,t.k],null,null),(n()(),t.Db(-1,0,[" Engine Hours "])),(n()(),t.nb(15,0,null,null,48,"ion-content",[],null,null,null,r.N,r.g)),t.mb(16,49152,null,0,a.r,[t.h,t.k],null,null),(n()(),t.nb(17,0,null,0,46,"div",[["class","diesel-usage-container"]],null,null,null,null,null)),(n()(),t.nb(18,0,null,null,45,"div",[["class","container"]],null,null,null,null,null)),(n()(),t.nb(19,0,null,null,4,"div",[["class","diesel-usage-graph"]],null,null,null,null,null)),(n()(),t.nb(20,0,null,null,1,"div",[["class","engine-hrs-icon"]],null,null,null,null,null)),(n()(),t.nb(21,0,null,null,0,"img",[["alt",""],["src","../assets/images/engine.png"]],null,null,null,null,null)),(n()(),t.nb(22,0,null,null,1,"div",[["class","tractor-icons"]],null,null,null,null,null)),(n()(),t.nb(23,0,null,null,0,"img",[["alt",""],["src","../assets/images/tractor-icon.png"]],null,null,null,null,null)),(n()(),t.nb(24,0,null,null,39,"div",[["class","diesel-usage-content"]],null,null,null,null,null)),(n()(),t.nb(25,0,null,null,28,"ion-list",[],null,null,null,r.Y,r.q)),t.mb(26,49152,null,0,a.L,[t.h,t.k],null,null),(n()(),t.nb(27,0,null,0,26,"div",[["secondary-bg",""]],null,null,null,null,null)),(n()(),t.nb(28,0,null,null,12,"ion-item",[],null,null,null,r.V,r.o)),t.mb(29,49152,null,0,a.E,[t.h,t.k],null,null),(n()(),t.nb(30,0,null,0,1,"ion-icon",[["name","engine-hrs"]],null,null,null,r.U,r.n)),t.mb(31,49152,null,0,a.z,[t.h,t.k],{name:[0,"name"]},null),(n()(),t.nb(32,0,null,0,8,"ion-label",[],null,null,null,r.W,r.p)),t.mb(33,49152,null,0,a.K,[t.h,t.k],null,null),(n()(),t.nb(34,0,null,0,6,"div",[["align-items-center",""],["d-flex",""],["justify-content-between",""]],null,null,null,null,null)),(n()(),t.nb(35,0,null,null,1,"div",[["slot","start"]],null,null,null,null,null)),(n()(),t.Db(-1,null,["Todays Engine Hours"])),(n()(),t.nb(37,0,null,null,3,"div",[["class","unit"],["slot","end"]],null,null,null,null,null)),(n()(),t.Db(-1,null,["2 "])),(n()(),t.nb(39,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),t.Db(-1,null,["Hrs"])),(n()(),t.nb(41,0,null,null,12,"ion-item",[],null,null,null,r.V,r.o)),t.mb(42,49152,null,0,a.E,[t.h,t.k],null,null),(n()(),t.nb(43,0,null,0,1,"ion-icon",[["name","engine"]],null,null,null,r.U,r.n)),t.mb(44,49152,null,0,a.z,[t.h,t.k],{name:[0,"name"]},null),(n()(),t.nb(45,0,null,0,8,"ion-label",[],null,null,null,r.W,r.p)),t.mb(46,49152,null,0,a.K,[t.h,t.k],null,null),(n()(),t.nb(47,0,null,0,6,"div",[["align-items-center",""],["d-flex",""],["justify-content-between",""]],null,null,null,null,null)),(n()(),t.nb(48,0,null,null,1,"div",[["slot","start"]],null,null,null,null,null)),(n()(),t.Db(-1,null,["Cumulative Engine Hours"])),(n()(),t.nb(50,0,null,null,3,"div",[["class","unit"],["slot","end"]],null,null,null,null,null)),(n()(),t.Db(-1,null,["260 "])),(n()(),t.nb(52,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),t.Db(-1,null,["Hrs"])),(n()(),t.nb(54,0,null,null,9,"div",[["class","tractor-service-due"]],null,null,null,null,null)),(n()(),t.nb(55,0,null,null,2,"ion-label",[],null,null,null,r.W,r.p)),t.mb(56,49152,null,0,a.K,[t.h,t.k],null,null),(n()(),t.Db(-1,0,["Tractor Service Due In"])),(n()(),t.nb(58,0,null,null,1,"ion-progress-bar",[["value","0.6"]],null,null,null,r.cb,r.v)),t.mb(59,49152,null,0,a.V,[t.h,t.k],{value:[0,"value"]},null),(n()(),t.nb(60,0,null,null,3,"div",[["class","hrs-unit"]],null,null,null,null,null)),(n()(),t.Db(-1,null,["40 "])),(n()(),t.nb(62,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),t.Db(-1,null,["Hrs left"])),(n()(),t.nb(64,0,null,null,7,"ion-footer",[],null,null,null,r.R,r.k)),t.mb(65,49152,null,0,a.w,[t.h,t.k],null,null),(n()(),t.nb(66,0,null,0,5,"div",[["align-items-center",""],["d-flex",""],["justify-content-center",""],["padding",""]],null,null,null,null,null)),(n()(),t.nb(67,0,null,null,4,"ion-button",[["color","primary"],["shape","round"]],null,null,null,r.J,r.c)),t.mb(68,49152,null,0,a.h,[t.h,t.k],{color:[0,"color"],shape:[1,"shape"]},null),(n()(),t.nb(69,0,null,0,1,"ion-icon",[["name","booking-services"],["slot","start"]],null,null,null,r.U,r.n)),t.mb(70,49152,null,0,a.z,[t.h,t.k],{name:[0,"name"]},null),(n()(),t.Db(-1,0,[" Book Servicing "]))],function(n,l){n(l,3,0,"primary"),n(l,6,0,"/tab"),n(l,7,0),n(l,11,0,"arrow-left"),n(l,31,0,"engine-hrs"),n(l,44,0,"engine"),n(l,59,0,"0.6"),n(l,68,0,"primary","round"),n(l,70,0,"booking-services")},null)}function d(n){return t.Fb(0,[(n()(),t.nb(0,0,null,null,1,"app-engine-usage",[],null,null,null,b,g)),t.mb(1,114688,null,0,o,[],null,null)],function(n,l){n(l,1,0)},null)}var m=t.jb("app-engine-usage",o,d,{},{},[]),p=e("gIcY");e.d(l,"EngineUsagePageModuleNgFactory",function(){return h});var h=t.kb(u,[],function(n){return t.ub([t.vb(512,t.j,t.Z,[[8,[i.a,m]],[3,t.j],t.v]),t.vb(4608,c.l,c.k,[t.s,[2,c.s]]),t.vb(4608,p.g,p.g,[]),t.vb(4608,a.a,a.a,[t.x,t.g]),t.vb(4608,a.Db,a.Db,[a.a,t.j,t.p,c.c]),t.vb(4608,a.Gb,a.Gb,[a.a,t.j,t.p,c.c]),t.vb(1073742336,c.b,c.b,[]),t.vb(1073742336,p.f,p.f,[]),t.vb(1073742336,p.a,p.a,[]),t.vb(1073742336,a.Ab,a.Ab,[]),t.vb(1073742336,s.o,s.o,[[2,s.u],[2,s.m]]),t.vb(1073742336,u,u,[]),t.vb(1024,s.k,function(){return[[{path:"",component:o}]]},[])])})}}]);