(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{IPhM:function(n,t,l){"use strict";l.r(t);var e=l("CcnG"),r=l("mrSG"),o=l("ri4N"),i=l("jGdz"),a=l("gF0x"),u=l("tVuA"),s=function(){function n(n,t,l,e,r,o){var i=this;this.translate=n,this.localStorageService=t,this.route=l,this.router=e,this.appToaster=r,this.alertService=o,this.route.queryParams.subscribe(function(n){i.router.getCurrentNavigation().extras.state&&(i.alertSet=i.router.getCurrentNavigation().extras.state.alertSet,console.log("this.alerts"+JSON.stringify(i.alertSet)))})}return n.prototype.ionViewDidEnter=function(){return r.b(this,void 0,void 0,function(){var n,t,l;return r.e(this,function(e){return this.alertSet.alerts&&(this.alertSet.alerts.sort(function(n,t){return n.timeStamp>t.timeStamp?-1:1}),this.todayDisplay=new Date,(n=new Date).setHours(0),n.setMinutes(0),n.setSeconds(0),t=n.getTime(),n.setHours(23),n.setMinutes(59),n.setSeconds(59),l=n.getTime(),console.log("startMsec==="+t+" endMsec==="+l),console.log("this.alertSet.alerts[0]  ",1e3*this.alertSet.alerts[0].timeStamp),console.log("this.alertSet.alerts[1]  ",1e3*this.alertSet.alerts[1].timeStamp),this.displayAlerts=this.alertSet.alerts.filter(function(n){return 1e3*n.timeStamp>=t&&1e3*n.timeStamp<=l}),0===this.displayAlerts.length?this.appToaster.presentToast("No alerts for today..."):this.markVisibleAsRead(),console.log("this.displayAlerts==="+JSON.stringify(this.displayAlerts))),[2]})})},n.prototype.ngOnInit=function(){var n=this.localStorageService.getKey("language");n&&this.translate.use(n)},n.prototype.showAllAlerts=function(){this.displayAlerts=this.alertSet.alerts,this.markVisibleAsRead()},n.prototype.markVisibleAsRead=function(){var n=this.displayAlerts.map(function(n){return{alertId:n.alertId,vin:n.vin}});console.log("alertsToMarkRead=="+n),this.alertService.markAsRead(n).subscribe(function(n){console.log("alerts marked as read successfully")},function(n){console.log("There was an error marking alerts as read")})},n}(),c=function(){return function(){}}(),b=l("pMnS"),d=l("oBZk"),m=l("ZZ/e"),p=l("Ryqz"),g=l("Ip0R"),h=l("ZYCi"),f=e.nb({encapsulation:0,styles:[['.fuel-alert[_ngcontent-%COMP%]{padding-left:3rem;padding-right:3rem;padding-bottom:4.5rem}.fuel-alert[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{font-size:1.4rem;font-family:var(--semi-bold);color:var(--title-color)}.alert-timeline[_ngcontent-%COMP%]{margin-top:2.7rem}.alert-timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:0;padding:0;list-style-type:none}.alert-timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding-left:3rem;position:relative}.alert-timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] + li[_ngcontent-%COMP%]{margin-top:2rem}.alert-timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:after{content:"";height:.55rem;width:.55rem;border-radius:50%;-webkit-border-radius:50%;-moz-border-radius:50%;background:var(--white);position:absolute;left:0;top:1.2rem;--shadow:0rem 0rem 0rem 0.4rem rgb(var(--ion-color-primary-rgb)),0rem 0rem 0rem 1rem rgb(var(--ion-color-primary-rgb), 0.1);box-shadow:var(--shadow);-webkit-box-shadow:var(--shadow);-moz-box-shadow:var(--shadow)}.alert-timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before{content:"";position:absolute;top:4rem;left:.2rem;border-left:.5px dashed rgba(0,0,0,.2);height:calc(100% - 3rem)}.alert-timeline[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child:before{content:none}.alert-timeline[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]{margin:0;box-shadow:var(--shadow-secondary);-webkit-box-shadow:var(--shadow-secondary);-moz-box-shadow:var(--shadow-secondary);border-radius:2rem;-webkit-border-radius:2rem;-moz-border-radius:2rem;padding:1.5rem 2rem;background:url(ellipse-small.10db62022b3969ccf648.png) right top/contain no-repeat;font-family:var(--semi-bold)}.alert-timeline[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%]{padding:0}.alert-timeline[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-title[_ngcontent-%COMP%]{font-size:1.4rem;color:var(--dark-shade-black)}.alert-timeline[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-subtitle[_ngcontent-%COMP%]{font-size:1rem;color:var(--label-grey);margin-top:.5rem}']],data:{}});function k(n){return e.Jb(0,[(n()(),e.pb(0,0,null,null,13,"li",[],null,null,null,null,null)),(n()(),e.pb(1,0,null,null,12,"ion-card",[],null,[[null,"click"]],function(n,t,l){var e=!0;return"click"===t&&(e=!1!==n.component.markAsRead(n.context.$implicit.alertId)&&e),e},d.cb,d.e)),e.ob(2,49152,null,0,m.k,[e.h,e.k],null,null),(n()(),e.pb(3,0,null,0,10,"ion-card-header",[],null,null,null,d.Z,d.g)),e.ob(4,49152,null,0,m.m,[e.h,e.k],null,null),(n()(),e.pb(5,0,null,0,4,"ion-card-title",[],null,null,null,d.bb,d.i)),e.ob(6,49152,null,0,m.o,[e.h,e.k],null,null),(n()(),e.Hb(7,0,[""," - ",""])),e.Bb(0,p.a,[o.a]),e.Bb(0,p.a,[o.a]),(n()(),e.pb(10,0,null,0,3,"ion-card-subtitle",[],null,null,null,d.ab,d.h)),e.ob(11,49152,null,0,m.n,[e.h,e.k],null,null),(n()(),e.Hb(12,0,[" ",""])),e.Db(13,2)],null,function(n,t){n(t,7,0,e.Ib(t,7,0,e.zb(t,8).transform(t.context.$implicit.alertName)),e.Ib(t,7,1,e.zb(t,9).transform(t.context.$implicit.alertDescription)));var l=e.Ib(t,12,0,n(t,13,0,e.zb(t.parent,0),1e3*t.context.$implicit.timeStamp," dd MMMM yyyy HH:mm:ss"));n(t,12,0,l)})}function M(n){return e.Jb(0,[e.Bb(0,g.d,[e.u]),(n()(),e.pb(1,0,null,null,15,"ion-header",[["class","custom-header"]],null,null,null,d.lb,d.r)),e.ob(2,49152,null,0,m.z,[e.h,e.k],null,null),(n()(),e.pb(3,0,null,0,13,"ion-toolbar",[],null,null,null,d.Nb,d.T)),e.ob(4,49152,null,0,m.zb,[e.h,e.k],null,null),(n()(),e.pb(5,0,null,0,7,"ion-buttons",[["class","back-icon"],["color","primary"],["slot","start"]],null,null,null,d.X,d.d)),e.ob(6,49152,null,0,m.j,[e.h,e.k],null,null),(n()(),e.pb(7,0,null,0,5,"ion-button",[["routerDirection","back"],["routerLink","/alert"]],null,[[null,"click"]],function(n,t,l){var r=!0;return"click"===t&&(r=!1!==e.zb(n,9).onClick()&&r),"click"===t&&(r=!1!==e.zb(n,10).onClick(l)&&r),r},d.W,d.c)),e.ob(8,49152,null,0,m.i,[e.h,e.k],{routerDirection:[0,"routerDirection"]},null),e.ob(9,16384,null,0,h.n,[h.m,h.a,[8,null],e.D,e.k],{routerLink:[0,"routerLink"]},null),e.ob(10,737280,null,0,m.Kb,[g.h,m.Fb,e.k,h.m,[2,h.n]],{routerDirection:[0,"routerDirection"]},null),(n()(),e.pb(11,0,null,0,1,"ion-icon",[["name","back"]],null,null,null,d.mb,d.s)),e.ob(12,49152,null,0,m.A,[e.h,e.k],{name:[0,"name"]},null),(n()(),e.pb(13,0,null,0,3,"ion-title",[["class","page-title"],["slot","start"]],null,null,null,d.Lb,d.R)),e.ob(14,49152,null,0,m.xb,[e.h,e.k],null,null),(n()(),e.Hb(15,0,[" ",""])),e.Bb(0,p.a,[o.a]),(n()(),e.pb(17,0,null,null,15,"ion-content",[],null,null,null,d.gb,d.m)),e.ob(18,49152,null,0,m.s,[e.h,e.k],null,null),(n()(),e.pb(19,0,null,0,8,"div",[["class","fuel-alert"]],null,null,null,null,null)),(n()(),e.pb(20,0,null,null,3,"ion-label",[],null,null,null,d.qb,d.w)),e.ob(21,49152,null,0,m.L,[e.h,e.k],null,null),(n()(),e.Hb(22,0,["",""])),e.Db(23,2),(n()(),e.pb(24,0,null,null,3,"div",[["class","alert-timeline"]],null,null,null,null,null)),(n()(),e.pb(25,0,null,null,2,"ul",[],null,null,null,null,null)),(n()(),e.gb(16777216,null,null,1,null,k)),e.ob(27,278528,null,0,g.j,[e.O,e.L,e.s],{ngForOf:[0,"ngForOf"]},null),(n()(),e.pb(28,0,null,0,4,"div",[["class","bottom-btns-group"],["d-flex",""],["justify-content-center",""]],null,null,null,null,null)),(n()(),e.pb(29,0,null,null,3,"ion-button",[["lg",""]],null,[[null,"click"]],function(n,t,l){var e=!0;return"click"===t&&(e=!1!==n.component.showAllAlerts()&&e),e},d.W,d.c)),e.ob(30,49152,null,0,m.i,[e.h,e.k],null,null),(n()(),e.Hb(31,0,["",""])),e.Bb(0,p.a,[o.a])],function(n,t){var l=t.component;n(t,8,0,"back"),n(t,9,0,"/alert"),n(t,10,0,"back"),n(t,12,0,"back"),n(t,27,0,l.displayAlerts)},function(n,t){var l=t.component;n(t,15,0,e.Ib(t,15,0,e.zb(t,16).transform(l.alertSet.alertName)));var r=e.Ib(t,22,0,n(t,23,0,e.zb(t,0),l.todayDisplay," dd MMMM yyyy"));n(t,22,0,r),n(t,31,0,e.Ib(t,31,0,e.zb(t,32).transform("SHOW-ALL")))})}function v(n){return e.Jb(0,[(n()(),e.pb(0,0,null,null,1,"app-fuel-alert",[],null,null,null,M,f)),e.ob(1,114688,null,0,s,[o.a,i.a,h.a,h.m,a.a,u.a],null,null)],function(n,t){n(t,1,0)},null)}var y=e.lb("app-fuel-alert",s,v,{},{},[]),C=l("gIcY"),O=l("bUwk"),w=l("M0ag");l.d(t,"AlertDetailPageModuleNgFactory",function(){return P});var P=e.mb(c,[],function(n){return e.wb([e.xb(512,e.j,e.bb,[[8,[b.a,y]],[3,e.j],e.x]),e.xb(4608,g.m,g.l,[e.u,[2,g.t]]),e.xb(4608,C.t,C.t,[]),e.xb(4608,m.a,m.a,[e.z,e.g]),e.xb(4608,m.Eb,m.Eb,[m.a,e.j,e.q,g.c]),e.xb(4608,m.Ib,m.Ib,[m.a,e.j,e.q,g.c]),e.xb(4608,o.a,o.a,[O.a]),e.xb(1073742336,g.b,g.b,[]),e.xb(1073742336,C.r,C.r,[]),e.xb(1073742336,C.e,C.e,[]),e.xb(1073742336,m.Bb,m.Bb,[]),e.xb(1073742336,w.a,w.a,[]),e.xb(1073742336,h.q,h.q,[[2,h.w],[2,h.m]]),e.xb(1073742336,c,c,[]),e.xb(1024,h.k,function(){return[[{path:"",component:s}]]},[])])})},Ryqz:function(n,t,l){"use strict";l.d(t,"a",function(){return e}),l("ri4N");var e=function(){function n(n){this.translate=n}return n.prototype.transform=function(n){return this.translate.data[n]||n},n}()},gF0x:function(n,t,l){"use strict";l.d(t,"a",function(){return i});var e=l("mrSG"),r=l("ZZ/e"),o=l("CcnG"),i=function(){function n(n){this.toastController=n}return n.prototype.presentToast=function(n){return e.b(this,void 0,void 0,function(){return e.e(this,function(t){switch(t.label){case 0:return[4,this.toastController.create({duration:2e3,message:n})];case 1:return t.sent().present(),[2]}})})},n.prototype.presentToastWithOptions=function(){return e.b(this,void 0,void 0,function(){return e.e(this,function(n){switch(n.label){case 0:return[4,this.toastController.create({closeButtonText:"Done",message:"Click to Close",position:"top",showCloseButton:!0})];case 1:return n.sent().present(),[2]}})})},n.ngInjectableDef=o.S({factory:function(){return new n(o.W(r.Nb))},token:n,providedIn:"root"}),n}()}}]);