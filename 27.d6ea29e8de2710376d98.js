(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{"1KUi":function(n,t,o){"use strict";o.r(t);var e=o("CcnG"),r=o("gF0x"),a=o("c7nT"),i=o("ri4N"),l=o("jGdz"),c=o("grKV"),d=function(){function n(n,t,o,e,r){this.utilsService=n,this.homeservice=t,this.translate=o,this.localStorageService=e,this.toaster=r}return n.prototype.ngOnInit=function(){this.vehiclesList(),this.userName=this.localStorageService.getKey("userData")},n.prototype.ionViewDidEnter=function(){var n=this.localStorageService.getKey("language");n&&this.translate.use(n);var t=this.localStorageService.getKey("userData");t&&(this.userName=t.firstName),this.vehiclesList()},n.prototype.addTracTor=function(){this.utilsService.navigateToPage("add-tractor")},n.prototype.selectedTractor=function(n){this.localStorageService.setKey("selectedTractor",n),this.utilsService.navigateToPage("/tabs/home")},n.prototype.vehiclesList=function(){var n=this;this.homeservice.getVehicalDetails().subscribe(function(t){t?n.vehicalsInfo=t:n.vehiclaNotavailable=n.translate.data.NO_TRACTOR_AVAILABLE},function(t){n.toaster.presentToast(n.translate.data.NO_TRACTOR_AVAILABLE)})},n}(),g=function(){return function(){}}(),m=o("pMnS"),u=o("oBZk"),s=o("ZZ/e"),b=o("Ryqz"),h=o("Ip0R"),p=o("ZYCi"),C=e.nb({encapsulation:0,styles:[[".tractor-list[_ngcontent-%COMP%]{padding:1.5rem 3rem 4.5rem}.footer-popup[_ngcontent-%COMP%]{position:fixed;bottom:0;left:50%;max-width:95%;transform:translateX(-50%);-ms-transform:translateX(-50%);-moz-transform:translateX(-50%);-webkit-transform:translateX(-50%);z-index:10}.footer-popup[_ngcontent-%COMP%]   .btns-footer[_ngcontent-%COMP%]{position:relative;z-index:9}.footer-popup[_ngcontent-%COMP%]   .btns-footer[_ngcontent-%COMP%]   .btn-bottom-fixed[_ngcontent-%COMP%]{min-width:10.5rem;width:auto;height:3.5rem;background:var(--light-red);--background:var(--light-red);--border-radius:2rem 2rem 0 0;border-radius:2rem 2rem 0 0;font-size:1.3rem;font-family:var(--medium);line-height:normal;letter-spacing:.01rem;text-align:center;color:var(--ion-color-light);margin:.5rem 1rem 0;border:.15rem solid var(--light-red);border-bottom:none!important}.footer-popup[_ngcontent-%COMP%]   .btns-footer[_ngcontent-%COMP%]   .btn-bottom-fixed.btn-light[_ngcontent-%COMP%]{background:var(--ion-color-light);--background:var(--ion-color-light);--background-focused:var(--ion-color-light);color:var(--light-red);--color-focused:var(--light-red);border-bottom:none;overflow:hidden}.footer-popup[_ngcontent-%COMP%]   .btns-footer[_ngcontent-%COMP%]   .btn-bottom-fixed[lg][_ngcontent-%COMP%]{min-width:19.4rem}.footer-popup[_ngcontent-%COMP%]   .all-day-summary[_ngcontent-%COMP%]{padding-bottom:4rem}main[_ngcontent-%COMP%]{padding-bottom:4rem;overflow:auto;justify-content:space-evenly;z-index:2;position:relative}main[_ngcontent-%COMP%]   .link-primary-light[_ngcontent-%COMP%]{color:var(--light-red);display:inherit;font-size:1.4rem;margin:1.5rem 0}main[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]{--background:var(--ion-color-light);--color:var(--title-color);border-radius:2rem;-webkit-border-radius:2rem;-moz-border-radius:2rem;box-shadow:var(--shadow-general);-webkit-box-shadow:var(--shadow-general);-moz-box-shadow:var(--shadow-general);padding:0;margin:0;overflow:visible;font-size:1.5rem}main[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%]{border-top-left-radius:2rem;border-top-right-radius:2rem}main[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%]   ion-card-title[_ngcontent-%COMP%]{--color:var(--ion-color-dark);color:var(--ion-color-dark);font-size:1.5rem;min-height:3.6rem;margin:auto}main[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%]   ion-card-title.title-md[_ngcontent-%COMP%]{font-size:2.2rem;font-family:var(--semi-bold)}main[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%]{width:12.4rem;height:12.4rem;margin:-8.2rem auto 1rem;position:relative}main[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%]{width:100%;min-height:100%;display:block;border-radius:50%}main[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%]   ion-avatar[class^=avatar-user][_ngcontent-%COMP%]{width:10.2rem;height:10.2rem;margin:-7.1rem auto 1rem;background:var(--ion-color-light);border-radius:50%;border:.5rem solid var(--light-gray);padding:.1rem}main[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%]   ion-avatar[class^=avatar-user][_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%]{box-shadow:var(--shadow-general);-webkit-box-shadow:var(--shadow-general);-moz-box-shadow:var(--shadow-general)}main[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%]   ion-avatar.avatar-user-md[_ngcontent-%COMP%]{width:13.4rem;height:13.4rem;margin:-8.7rem auto 1rem}main[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%]   .upload-profile[_ngcontent-%COMP%]{position:absolute;bottom:0;right:0;width:2.9rem;height:2.9rem;--border-color:var(--light-red);--border-style:solid;--border-width:0.1rem;--box-shadow:none;--padding-start:0;--padding-end:0;--padding-top:0;--padding-bottom:0}main[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%]   .upload-profile[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:1.5rem;color:var(--light-red);position:absolute;pointer-events:none}main[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%]   .upload-profile[_ngcontent-%COMP%]   ion-input[type=file][_ngcontent-%COMP%]{width:100%;height:100%;opacity:0}main[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   ion-card-subtitle[_ngcontent-%COMP%]{color:var(--label-grey);font-size:1.5rem}main[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]{padding:1rem 3rem 6rem;position:relative;margin:auto;width:30rem;flex:1 1 auto}main[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{--inner-padding-start:0;--inner-padding-end:0;--inner-padding-top:0;--inner-padding-bottom:0;--padding-start:0;--padding-end:0;--padding-top:0;--padding-bottom:0;--highlight-height:0.1rem;--highlight-color-focused:var(--border-gray);--background-focused:inherit}main[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   ion-item.controls-group[_ngcontent-%COMP%]{--padding-top:1.5rem}main[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   ion-item.controls-group[_ngcontent-%COMP%]   ion-datetime[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   ion-item.controls-group[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%]{font-size:1.5rem;--color:var(--title-color);--placeholder-color:var(--title-color);--placeholder-opacity:1;--padding-start:0;--padding-end:0;--padding-top:0;--padding-bottom:0}main[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   ion-item.checkbox[_ngcontent-%COMP%]{--border-width:0}main[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   ion-item.checkbox[_ngcontent-%COMP%]   ion-checkbox[_ngcontent-%COMP%]{--border-color:var(--light-red);--border-color-checked:var(--light-red);--size:2rem;-webkit-margin-end:1rem;margin-inline-end:1rem;margin-top:0;margin-bottom:0}main[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{color:var(--label-grey)}main[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-datetime[_ngcontent-%COMP%] + ion-icon[_ngcontent-%COMP%]{font-size:2rem;pointer-events:none;color:var(--ion-color-primary);position:absolute;right:0;bottom:.8rem;z-index:3}main[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   .footer-btn[_ngcontent-%COMP%]{min-width:11.4rem;width:auto;height:3.5rem;font-size:1.3rem;font-family:var(--medium);line-height:normal;letter-spacing:.01rem;text-align:center;color:var(--ion-color-light);margin:0 auto;border:.15rem solid var(--light-red);border-bottom:none;position:absolute;bottom:0;left:50%;transform:translateX(-50%);-ms-transform:translateX(-50%);-moz-transform:translateX(-50%);-webkit-transform:translateX(-50%);border-radius:2rem 2rem 0 0;-webkit-border-radius:2rem 2rem 0 0;-moz-border-radius:2rem 2rem 0 0;--border-radius:2rem 2rem 0 0;background:var(--light-red);--background:var(--light-red)}main[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   ion-card-content.padding-v-xtra[_ngcontent-%COMP%]{padding-top:3rem;padding-bottom:12rem}main[_ngcontent-%COMP%]   .form-card.card-style-2[_ngcontent-%COMP%]{margin-top:6.2rem}@media (max-width:640px) and (orientation:landscape){main[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   ion-card-content.padding-v-xtra[_ngcontent-%COMP%]{padding-top:2rem;padding-bottom:6rem}main[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   ion-card-content.padding-v-xtra[_ngcontent-%COMP%]   .controls-group[_ngcontent-%COMP%]{--padding-top:0}main[_ngcontent-%COMP%]   .form-card.card-style-2[_ngcontent-%COMP%]{margin-top:7.2rem}main[_ngcontent-%COMP%]   .form-card.card-style-2[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%]{padding:1.6rem 1.5rem 0}}main[_ngcontent-%COMP%]   .form-card.card-bg[_ngcontent-%COMP%]{background:url(card-bg.a48d74faf2472707ebac.png) right bottom no-repeat;margin-bottom:4rem}main[_ngcontent-%COMP%]   .form-card.card-bg[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]{padding:1rem 3rem 7.2rem}main[_ngcontent-%COMP%]   .form-card.card-no-header[_ngcontent-%COMP%]{margin-top:2rem}main[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .input-set[_ngcontent-%COMP%]   .label-common[_ngcontent-%COMP%]{transform:none;-ms-transform:none;-moz-transform:none;-webkit-transform:none;font-size:1.2rem}main[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .input-set[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{flex-grow:1;--min-height:30px}main[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .input-set[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] + ion-item[_ngcontent-%COMP%]{--padding-start:0.8rem!important}@media (max-width:640px) and (orientation:landscape){main[_ngcontent-%COMP%]{justify-content:flex-start}}@media (min-width:576px){main[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]{padding:0 3rem 4rem}main[_ngcontent-%COMP%]{justify-content:flex-start}}@media (min-width:768px){main[_ngcontent-%COMP%]{justify-content:space-evenly}}.tractor-list[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]{margin:0;box-shadow:var(--shadow-general);-webkit-box-shadow:var(--shadow-general);-moz-box-shadow:var(--shadow-general);--border-radius:1.8rem;border-radius:var(--border-radius);-webkit-border-radius:var(--border-radius);-moz-border-radius:var(--border-radius)}.tractor-list[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%] + ion-card[_ngcontent-%COMP%]{margin-top:2rem}.tractor-list[_ngcontent-%COMP%]   ion-thumbnail[_ngcontent-%COMP%]{--thumbnail-size:8.5rem;width:var(--thumbnail-size);min-width:var(--thumbnail-size);height:var(--thumbnail-size)}.tractor-list[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%]{padding:0;margin-bottom:1rem}.tractor-list[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%]   ion-card-title[_ngcontent-%COMP%]{font-size:1.3rem;font-family:var(--semi-bold);color:var(--black);text-transform:uppercase;white-space:nowrap}.tractor-list[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%]   ion-card-subtitle[_ngcontent-%COMP%]{font-size:1.1rem;text-transform:uppercase;color:var(--label-grey);font-family:var(--regular);margin-top:.4rem}.tractor-list[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]{padding:1.2rem 1rem .5rem;width:100%}.tractor-list[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{--background:var(--transparent);--background-activated:var(--transparent);--background-focused:var(--transparent);--border-width:0;--box-shadow:none;--color:var(--light-red);--color-activated:var(--light-red);--color-focused:var(--light-red);font-family:var(--semi-bold);font-size:1rem;min-height:0}.tractor-list[_ngcontent-%COMP%]   .date-placeholder[_ngcontent-%COMP%]{font-size:.9rem;font-family:var(--semi-bold);color:var(--label-grey)}"]],data:{}});function O(n){return e.Jb(0,[(n()(),e.pb(0,0,null,null,17,"ion-card",[["d-flex",""]],null,[[null,"click"]],function(n,t,o){var e=!0;return"click"===t&&(e=!1!==n.component.selectedTractor(n.context.$implicit.vin)&&e),e},u.cb,u.e)),e.ob(1,49152,null,0,s.k,[e.h,e.k],null,null),(n()(),e.pb(2,0,null,0,3,"ion-thumbnail",[["slot","start"]],null,null,null,u.Kb,u.Q)),e.ob(3,49152,null,0,s.wb,[e.h,e.k],null,null),(n()(),e.pb(4,0,null,0,1,"ion-img",[["src","../assets/images/tractor-thumbnail.jpg"]],null,null,null,u.nb,u.t)),e.ob(5,49152,null,0,s.B,[e.h,e.k],{src:[0,"src"]},null),(n()(),e.pb(6,0,null,0,11,"ion-card-content",[],null,null,null,u.Y,u.f)),e.ob(7,49152,null,0,s.l,[e.h,e.k],null,null),(n()(),e.pb(8,0,null,0,8,"ion-card-header",[],null,null,null,u.Z,u.g)),e.ob(9,49152,null,0,s.m,[e.h,e.k],null,null),(n()(),e.pb(10,0,null,0,3,"ion-card-title",[],null,null,null,u.bb,u.i)),e.ob(11,49152,null,0,s.o,[e.h,e.k],null,null),(n()(),e.Hb(12,0,[" ",""])),e.Bb(0,b.a,[i.a]),(n()(),e.pb(14,0,null,0,2,"ion-card-subtitle",[],null,null,null,u.ab,u.h)),e.ob(15,49152,null,0,s.n,[e.h,e.k],null,null),(n()(),e.Hb(16,0,["",""])),(n()(),e.pb(17,0,null,0,0,"div",[["align-items-center",""],["class","get-started-link"],["d-flex",""],["justify-content-between",""]],null,null,null,null,null))],function(n,t){n(t,5,0,"../assets/images/tractor-thumbnail.jpg")},function(n,t){n(t,12,0,e.Ib(t,12,0,e.zb(t,13).transform(t.context.$implicit.vehicleModel))),n(t,16,0,t.context.$implicit.regNo)})}function M(n){return e.Jb(0,[(n()(),e.pb(0,0,null,null,2,"div",[["class","tractor-list"]],null,null,null,null,null)),(n()(),e.gb(16777216,null,null,1,null,O)),e.ob(2,278528,null,0,h.j,[e.O,e.L,e.s],{ngForOf:[0,"ngForOf"]},null)],function(n,t){n(t,2,0,t.component.vehicalsInfo.data)},null)}function _(n){return e.Jb(0,[(n()(),e.pb(0,0,null,null,16,"ion-header",[["class","custom-header"]],null,null,null,u.lb,u.r)),e.ob(1,49152,null,0,s.z,[e.h,e.k],null,null),(n()(),e.pb(2,0,null,0,14,"ion-toolbar",[],null,null,null,u.Nb,u.T)),e.ob(3,49152,null,0,s.zb,[e.h,e.k],null,null),(n()(),e.pb(4,0,null,0,8,"ion-buttons",[["class","back-icon"],["color","primary"],["slot","start"]],null,null,null,u.X,u.d)),e.ob(5,49152,null,0,s.j,[e.h,e.k],null,null),(n()(),e.pb(6,0,null,0,6,"ion-button",[],null,[[null,"click"]],function(n,t,o){var r=!0;return"click"===t&&(r=!1!==e.zb(n,8).onClick()&&r),"click"===t&&(r=!1!==e.zb(n,10).onClick(o)&&r),r},u.W,u.c)),e.ob(7,49152,null,0,s.i,[e.h,e.k],null,null),e.ob(8,16384,null,0,p.n,[p.m,p.a,[8,null],e.D,e.k],{routerLink:[0,"routerLink"]},null),e.Ab(9,1),e.ob(10,737280,null,0,s.Kb,[h.h,s.Fb,e.k,p.m,[2,p.n]],null,null),(n()(),e.pb(11,0,null,0,1,"ion-icon",[["name","back"]],null,null,null,u.mb,u.s)),e.ob(12,49152,null,0,s.A,[e.h,e.k],{name:[0,"name"]},null),(n()(),e.pb(13,0,null,0,3,"ion-title",[["class","page-title"],["slot","start"]],null,null,null,u.Lb,u.R)),e.ob(14,49152,null,0,s.xb,[e.h,e.k],null,null),(n()(),e.Hb(15,0,[" ","'s ",""])),e.Bb(0,b.a,[i.a]),(n()(),e.pb(17,0,null,null,3,"ion-content",[],null,null,null,u.gb,u.m)),e.ob(18,49152,null,0,s.s,[e.h,e.k],null,null),(n()(),e.gb(16777216,null,0,1,null,M)),e.ob(20,16384,null,0,h.k,[e.O,e.L],{ngIf:[0,"ngIf"]},null)],function(n,t){var o=t.component,e=n(t,9,0,"/create-new-profile");n(t,8,0,e),n(t,10,0),n(t,12,0,"back"),n(t,20,0,o.vehicalsInfo)},function(n,t){n(t,15,0,t.component.userName,e.Ib(t,15,1,e.zb(t,16).transform("TRACTORS")))})}function P(n){return e.Jb(0,[(n()(),e.pb(0,0,null,null,1,"app-tractor-list",[],null,null,null,_,C)),e.ob(1,114688,null,0,d,[c.a,a.a,i.a,l.a,r.a],null,null)],function(n,t){n(t,1,0)},null)}var f=e.lb("app-tractor-list",d,P,{},{},[]),v=o("gIcY"),w=o("bUwk"),k=o("M0ag");o.d(t,"TractorListPageModuleNgFactory",function(){return x});var x=e.mb(g,[],function(n){return e.wb([e.xb(512,e.j,e.bb,[[8,[m.a,f]],[3,e.j],e.x]),e.xb(4608,h.m,h.l,[e.u,[2,h.t]]),e.xb(4608,v.t,v.t,[]),e.xb(4608,s.a,s.a,[e.z,e.g]),e.xb(4608,s.Eb,s.Eb,[s.a,e.j,e.q,h.c]),e.xb(4608,s.Ib,s.Ib,[s.a,e.j,e.q,h.c]),e.xb(4608,i.a,i.a,[w.a]),e.xb(1073742336,h.b,h.b,[]),e.xb(1073742336,v.r,v.r,[]),e.xb(1073742336,v.e,v.e,[]),e.xb(1073742336,s.Bb,s.Bb,[]),e.xb(1073742336,k.a,k.a,[]),e.xb(1073742336,p.q,p.q,[[2,p.w],[2,p.m]]),e.xb(1073742336,g,g,[]),e.xb(1024,p.k,function(){return[[{path:"",component:d}]]},[])])})},Ryqz:function(n,t,o){"use strict";o.d(t,"a",function(){return e}),o("ri4N");var e=function(){function n(n){this.translate=n}return n.prototype.transform=function(n){return this.translate.data[n]||n},n}()},gF0x:function(n,t,o){"use strict";o.d(t,"a",function(){return i});var e=o("mrSG"),r=o("ZZ/e"),a=o("CcnG"),i=function(){function n(n){this.toastController=n}return n.prototype.presentToast=function(n){return e.b(this,void 0,void 0,function(){return e.e(this,function(t){switch(t.label){case 0:return[4,this.toastController.create({duration:2e3,message:n})];case 1:return t.sent().present(),[2]}})})},n.prototype.presentToastWithOptions=function(){return e.b(this,void 0,void 0,function(){return e.e(this,function(n){switch(n.label){case 0:return[4,this.toastController.create({closeButtonText:"Done",message:"Click to Close",position:"top",showCloseButton:!0})];case 1:return n.sent().present(),[2]}})})},n.ngInjectableDef=a.S({factory:function(){return new n(a.W(r.Nb))},token:n,providedIn:"root"}),n}()}}]);