(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{Ryqz:function(l,n,u){"use strict";u.d(n,"a",function(){return e}),u("ri4N");var e=function(){function l(l){this.translate=l}return l.prototype.transform=function(l){return this.translate.data[l]||l},l}()},XtWc:function(l,n,u){"use strict";u.r(n);var e=u("CcnG"),o=u("ri4N"),t=u("jGdz"),r=u("grKV"),a=function(){function l(l,n,u){this.translate=l,this.localStorageService=n,this.utilsService=u}return l.prototype.ngOnInit=function(){var l=this.localStorageService.getKey("language");l&&this.translate.use(l)},l.prototype.addReminder=function(){this.utilsService.navigateToPage("add-reminder")},l}(),i=function(){return function(){}}(),b=u("pMnS"),c=u("oBZk"),d=u("ZZ/e"),s=u("ZYCi"),m=u("Ip0R"),p=u("Ryqz"),g=u("gIcY"),h=e.nb({encapsulation:0,styles:[[".my-reminders-list[_ngcontent-%COMP%]{padding:3rem 3rem 4.5rem}.my-reminders-list[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]{margin:0;box-shadow:var(--shadow-secondary);-webkit-box-shadow:var(--shadow-secondary);-moz-box-shadow:var(--shadow-secondary);border-radius:2rem;-webkit-border-radius:2rem;-moz-border-radius:2rem;padding:1.7rem 1.95rem;background:url(ellipse-small.10db62022b3969ccf648.png) right top no-repeat;font-family:var(--semi-bold)}.my-reminders-list[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]{padding:0;font-size:1rem;color:var(--label-grey)}.my-reminders-list[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%]{padding:0;margin-bottom:2.5rem}.my-reminders-list[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-title[_ngcontent-%COMP%]{font-size:1.4rem;color:var(--dark-shade-black)}.my-reminders-list[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-title[_ngcontent-%COMP%]   .reminder-date[_ngcontent-%COMP%]{font-size:1rem;color:var(--label-grey);margin-left:1rem;border-left:1px solid var(--clock-border);padding-left:1rem}.my-reminders-list[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-subtitle[_ngcontent-%COMP%]{font-size:1rem;color:var(--label-grey);margin-top:.5rem}.my-reminders-list[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%] + ion-card[_ngcontent-%COMP%]{margin-top:2rem}.my-reminders-list[_ngcontent-%COMP%]   ion-toggle[_ngcontent-%COMP%]{padding:.5rem 1rem;margin-right:-1rem;--background:var(--toggle-background);--handle-background:var(--ion-color-primary);--background-checked:var(--toggle-background);--handle-background-checked:var(--ion-color-success)}"]],data:{}});function k(l){return e.Jb(0,[(l()(),e.pb(0,0,null,null,15,"ion-header",[["class","custom-header"]],null,null,null,c.lb,c.r)),e.ob(1,49152,null,0,d.z,[e.h,e.k],null,null),(l()(),e.pb(2,0,null,0,13,"ion-toolbar",[],null,null,null,c.Nb,c.T)),e.ob(3,49152,null,0,d.zb,[e.h,e.k],null,null),(l()(),e.pb(4,0,null,0,7,"ion-buttons",[["class","back-icon"],["color","primary"],["slot","start"]],null,null,null,c.X,c.d)),e.ob(5,49152,null,0,d.j,[e.h,e.k],null,null),(l()(),e.pb(6,0,null,0,5,"ion-button",[["routerDirection","back"],["routerLink","/tabs/home"]],null,[[null,"click"]],function(l,n,u){var o=!0;return"click"===n&&(o=!1!==e.zb(l,8).onClick()&&o),"click"===n&&(o=!1!==e.zb(l,9).onClick(u)&&o),o},c.W,c.c)),e.ob(7,49152,null,0,d.i,[e.h,e.k],{routerDirection:[0,"routerDirection"]},null),e.ob(8,16384,null,0,s.n,[s.m,s.a,[8,null],e.D,e.k],{routerLink:[0,"routerLink"]},null),e.ob(9,737280,null,0,d.Kb,[m.h,d.Fb,e.k,s.m,[2,s.n]],{routerDirection:[0,"routerDirection"]},null),(l()(),e.pb(10,0,null,0,1,"ion-icon",[["name","back"]],null,null,null,c.mb,c.s)),e.ob(11,49152,null,0,d.A,[e.h,e.k],{name:[0,"name"]},null),(l()(),e.pb(12,0,null,0,3,"ion-title",[["class","page-title"],["slot","start"]],null,null,null,c.Lb,c.R)),e.ob(13,49152,null,0,d.xb,[e.h,e.k],null,null),(l()(),e.Hb(14,0,[" ",""])),e.Bb(0,p.a,[o.a]),(l()(),e.pb(16,0,null,null,97,"ion-content",[],null,null,null,c.gb,c.m)),e.ob(17,49152,null,0,d.s,[e.h,e.k],null,null),(l()(),e.pb(18,0,null,0,8,"div",[["class","search-input-control d-flex align-items-center"]],null,null,null,null,null)),(l()(),e.pb(19,0,null,null,3,"ion-input",[["autocomplete","on"],["placeholder","Search reminders"]],null,[[null,"ionBlur"],[null,"ionChange"]],function(l,n,u){var o=!0;return"ionBlur"===n&&(o=!1!==e.zb(l,22)._handleBlurEvent()&&o),"ionChange"===n&&(o=!1!==e.zb(l,22)._handleInputEvent(u.target.value)&&o),o},c.ob,c.u)),e.Eb(5120,null,g.i,function(l){return[l]},[d.Mb]),e.ob(21,49152,null,0,d.E,[e.h,e.k],{autocomplete:[0,"autocomplete"],placeholder:[1,"placeholder"]},null),e.ob(22,16384,null,0,d.Mb,[e.k],null,null),(l()(),e.pb(23,0,null,null,3,"ion-button",[["shape","round"],["size","small"]],null,null,null,c.W,c.c)),e.ob(24,49152,null,0,d.i,[e.h,e.k],{shape:[0,"shape"],size:[1,"size"]},null),(l()(),e.Hb(25,0,["",""])),e.Bb(0,p.a,[o.a]),(l()(),e.pb(27,0,null,0,81,"div",[["class","my-reminders-list"]],null,null,null,null,null)),(l()(),e.pb(28,0,null,null,26,"ion-card",[],null,null,null,c.cb,c.e)),e.ob(29,49152,null,0,d.k,[e.h,e.k],null,null),(l()(),e.pb(30,0,null,0,16,"ion-card-header",[["d-flex",""],["justify-content-between",""]],null,null,null,c.Z,c.g)),e.ob(31,49152,null,0,d.m,[e.h,e.k],null,null),(l()(),e.pb(32,0,null,0,10,"div",[["class","title-content"]],null,null,null,null,null)),(l()(),e.pb(33,0,null,null,6,"ion-card-title",[],null,null,null,c.bb,c.i)),e.ob(34,49152,null,0,d.o,[e.h,e.k],null,null),(l()(),e.pb(35,0,null,0,2,"span",[],null,null,null,null,null)),(l()(),e.Hb(36,null,["",""])),e.Bb(0,p.a,[o.a]),(l()(),e.pb(38,0,null,0,1,"span",[["class","reminder-date"]],null,null,null,null,null)),(l()(),e.Hb(-1,null,["23 April 2019"])),(l()(),e.pb(40,0,null,null,2,"ion-card-subtitle",[],null,null,null,c.ab,c.h)),e.ob(41,49152,null,0,d.n,[e.h,e.k],null,null),(l()(),e.Hb(-1,0,["06:30 am, Tomorrow"])),(l()(),e.pb(43,0,null,0,3,"ion-toggle",[["checked",""],["mode","md"]],null,[[null,"ionBlur"],[null,"ionChange"]],function(l,n,u){var o=!0;return"ionBlur"===n&&(o=!1!==e.zb(l,46)._handleBlurEvent()&&o),"ionChange"===n&&(o=!1!==e.zb(l,46)._handleIonChange(u.target.checked)&&o),o},c.Mb,c.S)),e.Eb(5120,null,g.i,function(l){return[l]},[d.b]),e.ob(45,49152,null,0,d.yb,[e.h,e.k],{mode:[0,"mode"],checked:[1,"checked"]},null),e.ob(46,16384,null,0,d.b,[e.k],null,null),(l()(),e.pb(47,0,null,0,7,"ion-card-content",[],null,null,null,c.Y,c.f)),e.ob(48,49152,null,0,d.l,[e.h,e.k],null,null),(l()(),e.Hb(49,0,[" ",": Lorem ipsum dolor sit amet, consectetur "])),e.Bb(0,p.a,[o.a]),(l()(),e.pb(51,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e.Hb(-1,0,["adipiscing elit, sed do eiusmod tempor incididunt ut "])),(l()(),e.pb(53,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e.Hb(-1,0,["labore et dolore magna aliqua. "])),(l()(),e.pb(55,0,null,null,26,"ion-card",[],null,null,null,c.cb,c.e)),e.ob(56,49152,null,0,d.k,[e.h,e.k],null,null),(l()(),e.pb(57,0,null,0,16,"ion-card-header",[["d-flex",""],["justify-content-between",""]],null,null,null,c.Z,c.g)),e.ob(58,49152,null,0,d.m,[e.h,e.k],null,null),(l()(),e.pb(59,0,null,0,10,"div",[["class","title-content"]],null,null,null,null,null)),(l()(),e.pb(60,0,null,null,6,"ion-card-title",[],null,null,null,c.bb,c.i)),e.ob(61,49152,null,0,d.o,[e.h,e.k],null,null),(l()(),e.pb(62,0,null,0,2,"span",[],null,null,null,null,null)),(l()(),e.Hb(63,null,["",""])),e.Bb(0,p.a,[o.a]),(l()(),e.pb(65,0,null,0,1,"span",[["class","reminder-date"]],null,null,null,null,null)),(l()(),e.Hb(-1,null,["20 April 2019"])),(l()(),e.pb(67,0,null,null,2,"ion-card-subtitle",[],null,null,null,c.ab,c.h)),e.ob(68,49152,null,0,d.n,[e.h,e.k],null,null),(l()(),e.Hb(-1,0,["09:30 am, 02 May 2019"])),(l()(),e.pb(70,0,null,0,3,"ion-toggle",[["checked",""],["mode","md"]],null,[[null,"ionBlur"],[null,"ionChange"]],function(l,n,u){var o=!0;return"ionBlur"===n&&(o=!1!==e.zb(l,73)._handleBlurEvent()&&o),"ionChange"===n&&(o=!1!==e.zb(l,73)._handleIonChange(u.target.checked)&&o),o},c.Mb,c.S)),e.Eb(5120,null,g.i,function(l){return[l]},[d.b]),e.ob(72,49152,null,0,d.yb,[e.h,e.k],{mode:[0,"mode"],checked:[1,"checked"]},null),e.ob(73,16384,null,0,d.b,[e.k],null,null),(l()(),e.pb(74,0,null,0,7,"ion-card-content",[],null,null,null,c.Y,c.f)),e.ob(75,49152,null,0,d.l,[e.h,e.k],null,null),(l()(),e.Hb(76,0,[" ",": Lorem ipsum dolor sit amet, consectetur "])),e.Bb(0,p.a,[o.a]),(l()(),e.pb(78,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e.Hb(-1,0,["adipiscing elit, sed do eiusmod tempor incididunt ut "])),(l()(),e.pb(80,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e.Hb(-1,0,["labore et dolore magna aliqua. "])),(l()(),e.pb(82,0,null,null,26,"ion-card",[],null,null,null,c.cb,c.e)),e.ob(83,49152,null,0,d.k,[e.h,e.k],null,null),(l()(),e.pb(84,0,null,0,16,"ion-card-header",[["d-flex",""],["justify-content-between",""]],null,null,null,c.Z,c.g)),e.ob(85,49152,null,0,d.m,[e.h,e.k],null,null),(l()(),e.pb(86,0,null,0,10,"div",[["class","title-content"]],null,null,null,null,null)),(l()(),e.pb(87,0,null,null,6,"ion-card-title",[],null,null,null,c.bb,c.i)),e.ob(88,49152,null,0,d.o,[e.h,e.k],null,null),(l()(),e.pb(89,0,null,0,2,"span",[],null,null,null,null,null)),(l()(),e.Hb(90,null,["",""])),e.Bb(0,p.a,[o.a]),(l()(),e.pb(92,0,null,0,1,"span",[["class","reminder-date"]],null,null,null,null,null)),(l()(),e.Hb(-1,null,["11 March 2019"])),(l()(),e.pb(94,0,null,null,2,"ion-card-subtitle",[],null,null,null,c.ab,c.h)),e.ob(95,49152,null,0,d.n,[e.h,e.k],null,null),(l()(),e.Hb(-1,0,["08:30 am, 24 Feburary 2019"])),(l()(),e.pb(97,0,null,0,3,"ion-toggle",[["mode","md"]],null,[[null,"ionBlur"],[null,"ionChange"]],function(l,n,u){var o=!0;return"ionBlur"===n&&(o=!1!==e.zb(l,100)._handleBlurEvent()&&o),"ionChange"===n&&(o=!1!==e.zb(l,100)._handleIonChange(u.target.checked)&&o),o},c.Mb,c.S)),e.Eb(5120,null,g.i,function(l){return[l]},[d.b]),e.ob(99,49152,null,0,d.yb,[e.h,e.k],{mode:[0,"mode"]},null),e.ob(100,16384,null,0,d.b,[e.k],null,null),(l()(),e.pb(101,0,null,0,7,"ion-card-content",[],null,null,null,c.Y,c.f)),e.ob(102,49152,null,0,d.l,[e.h,e.k],null,null),(l()(),e.Hb(103,0,[" ",": Lorem ipsum dolor sit amet, consectetur "])),e.Bb(0,p.a,[o.a]),(l()(),e.pb(105,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e.Hb(-1,0,["adipiscing elit, sed do eiusmod tempor incididunt ut "])),(l()(),e.pb(107,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e.Hb(-1,0,["labore et dolore magna aliqua. "])),(l()(),e.pb(109,0,null,0,4,"div",[["class","bottom-btns-group"],["d-flex",""],["justify-content-center",""]],null,null,null,null,null)),(l()(),e.pb(110,0,null,null,3,"ion-button",[["lg",""]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.addReminder()&&e),e},c.W,c.c)),e.ob(111,49152,null,0,d.i,[e.h,e.k],null,null),(l()(),e.Hb(112,0,["",""])),e.Bb(0,p.a,[o.a])],function(l,n){l(n,7,0,"back"),l(n,8,0,"/tabs/home"),l(n,9,0,"back"),l(n,11,0,"back"),l(n,21,0,"on","Search reminders"),l(n,24,0,"round","small"),l(n,45,0,"md",""),l(n,72,0,"md",""),l(n,99,0,"md")},function(l,n){l(n,14,0,e.Ib(n,14,0,e.zb(n,15).transform("MY-REMINDERS"))),l(n,25,0,e.Ib(n,25,0,e.zb(n,26).transform("SEARCH"))),l(n,36,0,e.Ib(n,36,0,e.zb(n,37).transform("NRC-FOR-GRAPES"))),l(n,49,0,e.Ib(n,49,0,e.zb(n,50).transform("DESCRIPTION"))),l(n,63,0,e.Ib(n,63,0,e.zb(n,64).transform("TRACTOR-SERVICING"))),l(n,76,0,e.Ib(n,76,0,e.zb(n,77).transform("DESCRIPTION"))),l(n,90,0,e.Ib(n,90,0,e.zb(n,91).transform("TRACTOR-FUEL"))),l(n,103,0,e.Ib(n,103,0,e.zb(n,104).transform("DESCRIPTION"))),l(n,112,0,e.Ib(n,112,0,e.zb(n,113).transform("ADD-REMINDER")))})}function f(l){return e.Jb(0,[(l()(),e.pb(0,0,null,null,1,"app-my-reminder",[],null,null,null,k,h)),e.ob(1,114688,null,0,a,[o.a,t.a,r.a],null,null)],function(l,n){l(n,1,0)},null)}var C=e.lb("app-my-reminder",a,f,{},{},[]),v=u("bUwk"),y=u("M0ag");u.d(n,"MyReminderPageModuleNgFactory",function(){return M});var M=e.mb(i,[],function(l){return e.wb([e.xb(512,e.j,e.bb,[[8,[b.a,C]],[3,e.j],e.x]),e.xb(4608,m.m,m.l,[e.u,[2,m.t]]),e.xb(4608,g.t,g.t,[]),e.xb(4608,d.a,d.a,[e.z,e.g]),e.xb(4608,d.Eb,d.Eb,[d.a,e.j,e.q,m.c]),e.xb(4608,d.Ib,d.Ib,[d.a,e.j,e.q,m.c]),e.xb(4608,o.a,o.a,[v.a]),e.xb(1073742336,m.b,m.b,[]),e.xb(1073742336,g.r,g.r,[]),e.xb(1073742336,g.e,g.e,[]),e.xb(1073742336,d.Bb,d.Bb,[]),e.xb(1073742336,y.a,y.a,[]),e.xb(1073742336,s.q,s.q,[[2,s.w],[2,s.m]]),e.xb(1073742336,i,i,[]),e.xb(1024,s.k,function(){return[[{path:"",component:a}]]},[])])})}}]);