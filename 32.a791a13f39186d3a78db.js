(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{GPsz:function(n,l,t){"use strict";t.r(l);var e=t("CcnG"),u=function(){function n(n){this.router=n,this.setTractorUsageActive=!1}return n.prototype.ngOnInit=function(){this.setTractorUsageActive="/tabs/tractor"===this.router.url},n.prototype.navigateToAskMe=function(){this.router.navigate(["tabs/askme"])},n.prototype.resetUsageDate=function(){localStorage.removeItem("usageDate")},n.prototype.navigateToPage=function(n){switch(n){case"tractor":this.setTractorUsageActive=!0,this.router.navigate(["tabs/tractor"]);break;case"home":this.setTractorUsageActive=!1,this.router.navigate(["tabs/home"]);break;default:this.router.navigate(["tabs/home"])}},n}(),a=function(){return function(){}}(),o=t("pMnS"),r=t("oBZk"),b=t("ZZ/e"),i=t("ZYCi"),c=e.lb({encapsulation:0,styles:[[""]],data:{}});function s(n){return e.Gb(0,[(n()(),e.nb(0,0,null,null,19,"ion-tabs",[],null,[[null,"ionTabButtonClick"]],function(n,l,t){var u=!0;return"ionTabButtonClick"===l&&(u=!1!==e.xb(n,1).select(t.detail.tab)&&u),u},r.Ab,r.K)),e.mb(1,49152,null,1,b.tb,[b.Fb],null,null),e.Cb(335544320,1,{tabBar:0}),(n()(),e.nb(3,0,null,1,16,"ion-tab-bar",[["box-shadow",""],["color","primary"],["d-flex",""],["fixed-container",""],["slot","bottom"]],null,null,null,r.yb,r.I)),e.mb(4,49152,[[1,4]],0,b.rb,[e.h,e.k],{color:[0,"color"]},null),(n()(),e.nb(5,0,null,0,6,"ion-tab-button",[["tab","home"]],null,[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.navigateToPage("home")&&e),e},r.zb,r.J)),e.mb(6,49152,null,0,b.sb,[e.h,e.k],{tab:[0,"tab"]},null),(n()(),e.nb(7,0,null,0,1,"ion-icon",[["name","dashboard"]],null,null,null,r.ib,r.s)),e.mb(8,49152,null,0,b.A,[e.h,e.k],{name:[0,"name"]},null),(n()(),e.nb(9,0,null,0,2,"ion-label",[],null,null,null,r.mb,r.w)),e.mb(10,49152,null,0,b.L,[e.h,e.k],null,null),(n()(),e.Eb(-1,0,["Home"])),(n()(),e.nb(12,0,null,0,0,"span",[["class","fb-space"]],null,null,null,null,null)),(n()(),e.nb(13,0,null,0,6,"ion-tab-button",[["tab","askme"]],null,[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.navigateToPage("askme")&&e),e},r.zb,r.J)),e.mb(14,49152,null,0,b.sb,[e.h,e.k],{tab:[0,"tab"]},null),(n()(),e.nb(15,0,null,0,1,"ion-icon",[["name","mic"]],null,null,null,r.ib,r.s)),e.mb(16,49152,null,0,b.A,[e.h,e.k],{name:[0,"name"]},null),(n()(),e.nb(17,0,null,0,2,"ion-label",[],null,null,null,r.mb,r.w)),e.mb(18,49152,null,0,b.L,[e.h,e.k],null,null),(n()(),e.Eb(-1,0,["Ask Me"])),(n()(),e.nb(20,0,null,null,9,"ion-button",[["class","tab-middle"],["size","default"]],null,[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.navigateToPage("tractor")&&e),e},r.S,r.c)),e.mb(21,49152,null,0,b.i,[e.h,e.k],{size:[0,"size"]},null),(n()(),e.nb(22,0,null,0,1,"ion-ripple-effect",[["type","unbounded"]],null,null,null,r.rb,r.B)),e.mb(23,49152,null,0,b.eb,[e.h,e.k],{type:[0,"type"]},null),(n()(),e.nb(24,0,null,0,5,"div",[["align-items-center",""],["center",""],["d-flex",""],["flex-column",""],["justify-content",""]],[[8,"className",0]],null,null,null,null)),(n()(),e.nb(25,0,null,null,1,"ion-icon",[["class","tractor-icon"],["name","tractor-use"]],null,null,null,r.ib,r.s)),e.mb(26,49152,null,0,b.A,[e.h,e.k],{name:[0,"name"]},null),(n()(),e.nb(27,0,null,null,2,"ion-label",[],null,null,null,r.mb,r.w)),e.mb(28,49152,null,0,b.L,[e.h,e.k],null,null),(n()(),e.Eb(-1,0,["Tractor Usage"]))],function(n,l){n(l,4,0,"primary"),n(l,6,0,"home"),n(l,8,0,"dashboard"),n(l,14,0,"askme"),n(l,16,0,"mic"),n(l,21,0,"default"),n(l,23,0,"unbounded"),n(l,26,0,"tractor-use")},function(n,l){n(l,24,0,l.component.setTractorUsageActive?"tractor-selected":"")})}function m(n){return e.Gb(0,[(n()(),e.nb(0,0,null,null,1,"app-tab",[],null,null,null,s,c)),e.mb(1,114688,null,0,u,[i.m],null,null)],function(n,l){n(l,1,0)},null)}var h=e.jb("app-tab",u,m,{},{},[]),p=t("Ip0R"),v=t("gIcY"),d=t("c7nT"),f=function(){function n(n){this.homeService=n}return n.prototype.resolve=function(){return this.homeService.getVehicalDetails()},n.ngInjectableDef=e.Q({factory:function(){return new n(e.U(d.a))},token:n,providedIn:"root"}),n}(),k=function(){return function(){}}();t.d(l,"TabPageModuleNgFactory",function(){return g});var g=e.kb(a,[],function(n){return e.ub([e.vb(512,e.j,e.Z,[[8,[o.a,h]],[3,e.j],e.v]),e.vb(4608,p.m,p.l,[e.s,[2,p.t]]),e.vb(4608,v.o,v.o,[]),e.vb(4608,b.a,b.a,[e.x,e.g]),e.vb(4608,b.Eb,b.Eb,[b.a,e.j,e.p,p.c]),e.vb(4608,b.Ib,b.Ib,[b.a,e.j,e.p,p.c]),e.vb(4608,f,f,[d.a]),e.vb(1073742336,p.b,p.b,[]),e.vb(1073742336,v.m,v.m,[]),e.vb(1073742336,v.e,v.e,[]),e.vb(1073742336,b.Bb,b.Bb,[]),e.vb(1073742336,i.o,i.o,[[2,i.u],[2,i.m]]),e.vb(1073742336,k,k,[]),e.vb(1073742336,a,a,[]),e.vb(1024,i.k,function(){return[[{children:[{children:[{loadChildren:"../dashboard/home/home.module#HomePageModule",path:""}],path:"home",resolve:{vehicals:f}},{children:[{loadChildren:"../tractor/tractor.module#TractorPageModule",path:""}],path:"tractor",resolve:{vehicals:f}},{children:[{loadChildren:"../askme/askme.module#AskmePageModule",path:""}],path:"askme"}],component:u,path:"tabs"},{path:"",pathMatch:"full",redirectTo:"/tabs/home"}],[{component:u,path:""}]]},[])])})},lZOh:function(n,l,t){"use strict";var e=t("6blF"),u=t("F/XL");e.a.of=u.a}}]);