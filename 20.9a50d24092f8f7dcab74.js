(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"+muV":function(n,t){},"/3GC":function(n,t,e){"use strict";e.r(t);var o=e("CcnG"),l=e("gIcY"),r=e("oDQ7"),i=e("bUwk"),a=e("jGdz"),c=e("gF0x"),u=e("grKV"),g=function(){function n(n,t,e,o,l){this.http=n,this.utilsService=t,this.toaster=e,this.localStorageservive=o,this.formBuilder=l,this.submitted=!1}return n.prototype.ngOnInit=function(){this.localStorageservive.getKey("userName")&&(this.userName=this.localStorageservive.getKey("userName")),this.registerForm=this.formBuilder.group({username:["",l.l.required],password:["",l.l.required]})},n.prototype.login=function(n){var t=this;this.submitted=!0,this.registerForm.invalid||(this.user={password:n,requestedFrom:"WEB",userName:this.userName,vehicleCategory:"FD_DOM"},this.http.post(r.a.login,this.user).subscribe(function(n){n.token&&t.utilsService.navigateToPage("tabs/home")},function(n){t.toaster.presentToast("Invalid username and password")}))},n.prototype.rememberMe=function(n){n.target.checked||this.localStorageservive.setKey("userName",this.userName)},n.prototype.keyPress=function(n){var t=String.fromCharCode(n.charCode);/[+,0-9]/.test(t)||n.preventDefault()},n}(),m=function(){return function(){}}(),d=e("pMnS"),s=e("oBZk"),b=e("ZZ/e"),p=e("xd8J"),h=e("MqVi"),f=e("ri4N"),C=e("Ryqz"),M=e("Ip0R"),O=o.lb({encapsulation:0,styles:[[".footer-popup[_ngcontent-%COMP%]{position:fixed;bottom:0;left:50%;max-width:95%;transform:translateX(-50%);-ms-transform:translateX(-50%);-moz-transform:translateX(-50%);-webkit-transform:translateX(-50%)}.footer-popup[_ngcontent-%COMP%]   .btns-footer[_ngcontent-%COMP%]{position:relative;z-index:9}.footer-popup[_ngcontent-%COMP%]   .btns-footer[_ngcontent-%COMP%]   .btn-bottom-fixed[_ngcontent-%COMP%]{min-width:10.5rem;width:auto;height:3.5rem;background:var(--light-red);--background:var(--light-red);--border-radius:2rem 2rem 0 0;border-radius:2rem 2rem 0 0;font-size:1.3rem;font-family:var(--medium);line-height:normal;letter-spacing:.01rem;text-align:center;color:var(--ion-color-light);margin:.5rem 1rem 0;border:.15rem solid var(--light-red);border-bottom:none!important}.footer-popup[_ngcontent-%COMP%]   .btns-footer[_ngcontent-%COMP%]   .btn-bottom-fixed.btn-light[_ngcontent-%COMP%]{background:var(--ion-color-light);--background:var(--ion-color-light);--background-focused:var(--ion-color-light);color:var(--light-red);--color-focused:var(--light-red);border-bottom:none;overflow:hidden}.footer-popup[_ngcontent-%COMP%]   .all-day-summary[_ngcontent-%COMP%]{padding-bottom:4rem}main[_ngcontent-%COMP%]{padding-bottom:4rem;overflow:auto;justify-content:space-evenly;z-index:2;position:relative}main[_ngcontent-%COMP%]   .link-primary-light[_ngcontent-%COMP%]{color:var(--light-red);display:inherit;font-size:1.4rem;margin:1.5rem 0}main[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]{--background:var(--ion-color-light);--color:var(--title-color);border-radius:2rem;-webkit-border-radius:2rem;-moz-border-radius:2rem;box-shadow:var(--shadow-general);-webkit-box-shadow:var(--shadow-general);-moz-box-shadow:var(--shadow-general);padding:0;margin:0;overflow:visible;font-size:1.5rem}main[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%]{border-top-left-radius:2rem;border-top-right-radius:2rem}main[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%]   ion-card-title[_ngcontent-%COMP%]{--color:var(--ion-color-dark);color:var(--ion-color-dark);font-size:1.5rem;min-height:3.6rem;margin:auto}main[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%]   ion-card-title.title-md[_ngcontent-%COMP%]{font-size:2.2rem;font-family:var(--semi-bold)}main[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%]{width:12.4rem;height:12.4rem;margin:-8.2rem auto 1rem;position:relative}main[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%]{width:100%;min-height:100%;display:block;border-radius:50%}main[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%]   ion-avatar[class^=avatar-user][_ngcontent-%COMP%]{width:10.2rem;height:10.2rem;margin:-7.1rem auto 1rem;background:var(--ion-color-light);border-radius:50%;border:.5rem solid var(--light-gray);padding:.1rem}main[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%]   ion-avatar[class^=avatar-user][_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%]{box-shadow:var(--shadow-general);-webkit-box-shadow:var(--shadow-general);-moz-box-shadow:var(--shadow-general)}main[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%]   ion-avatar.avatar-user-md[_ngcontent-%COMP%]{width:13.4rem;height:13.4rem;margin:-8.7rem auto 1rem}main[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%]   ion-fab-button[_ngcontent-%COMP%]{position:absolute;bottom:0;right:0;width:2.9rem;height:2.9rem;--border-color:var(--light-red);--border-style:solid;--border-width:0.1rem;--box-shadow:none;--padding-start:0;--padding-end:0;--padding-top:0;--padding-bottom:0}main[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%]   ion-fab-button[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:1.5rem;color:var(--light-red)}main[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   ion-card-subtitle[_ngcontent-%COMP%]{color:var(--label-grey);font-size:1.5rem}main[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]{padding:1rem 3rem 6rem;position:relative;margin:auto;width:30rem;flex:1 1 auto}main[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{--inner-padding-start:0;--inner-padding-end:0;--inner-padding-top:0;--inner-padding-bottom:0;--padding-start:0;--padding-end:0;--padding-top:0;--padding-bottom:0;--highlight-height:0.1rem;--highlight-color-focused:var(--border-gray);--background-focused:inherit}main[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   ion-item.controls-group[_ngcontent-%COMP%]{--padding-top:1.5rem}main[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   ion-item.controls-group[_ngcontent-%COMP%]   ion-datetime[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   ion-item.controls-group[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%]{font-size:1.5rem;--color:var(--title-color);--placeholder-color:var(--title-color);--placeholder-opacity:1;--padding-start:0;--padding-end:0;--padding-top:0;--padding-bottom:0}main[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   ion-item.checkbox[_ngcontent-%COMP%]{--border-width:0}main[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   ion-item.checkbox[_ngcontent-%COMP%]   ion-checkbox[_ngcontent-%COMP%]{--border-color:var(--light-red);--border-color-checked:var(--light-red);--size:2rem;-webkit-margin-end:1rem;margin-inline-end:1rem;margin-top:0;margin-bottom:0}main[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{color:var(--label-grey)}main[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-datetime[_ngcontent-%COMP%] + ion-icon[_ngcontent-%COMP%]{font-size:2rem;pointer-events:none;color:var(--ion-color-primary);position:absolute;right:0;bottom:.8rem;z-index:3}main[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   .footer-btn[_ngcontent-%COMP%]{min-width:11.4rem;width:auto;height:3.5rem;font-size:1.3rem;font-family:var(--medium);line-height:normal;letter-spacing:.01rem;text-align:center;color:var(--ion-color-light);margin:0 auto;border:.15rem solid var(--light-red);border-bottom:none;position:absolute;bottom:0;left:50%;transform:translateX(-50%);-ms-transform:translateX(-50%);-moz-transform:translateX(-50%);-webkit-transform:translateX(-50%);border-radius:2rem 2rem 0 0;-webkit-border-radius:2rem 2rem 0 0;-moz-border-radius:2rem 2rem 0 0;--border-radius:2rem 2rem 0 0;background:var(--light-red);--background:var(--light-red)}main[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   ion-card-content.padding-v-xtra[_ngcontent-%COMP%]{padding-top:3rem;padding-bottom:12rem}main[_ngcontent-%COMP%]   .form-card.card-style-2[_ngcontent-%COMP%]{margin-top:6.2rem}@media (max-width:640px) and (orientation:landscape){main[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   ion-card-content.padding-v-xtra[_ngcontent-%COMP%]{padding-top:2rem;padding-bottom:6rem}main[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   ion-card-content.padding-v-xtra[_ngcontent-%COMP%]   .controls-group[_ngcontent-%COMP%]{--padding-top:0}main[_ngcontent-%COMP%]   .form-card.card-style-2[_ngcontent-%COMP%]{margin-top:7.2rem}main[_ngcontent-%COMP%]   .form-card.card-style-2[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%]{padding:1.6rem 1.5rem 0}}main[_ngcontent-%COMP%]   .form-card.card-bg[_ngcontent-%COMP%]{background:url(card-bg.a48d74faf2472707ebac.png) right bottom no-repeat;margin-bottom:4rem}main[_ngcontent-%COMP%]   .form-card.card-bg[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]{padding:1rem 3rem 7.2rem}main[_ngcontent-%COMP%]   .form-card.card-no-header[_ngcontent-%COMP%]{margin-top:2rem}main[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .input-set[_ngcontent-%COMP%]   .label-common[_ngcontent-%COMP%]{transform:none;-ms-transform:none;-moz-transform:none;-webkit-transform:none;font-size:1.2rem}main[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .input-set[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{flex-grow:1;--min-height:30px}main[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .input-set[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] + ion-item[_ngcontent-%COMP%]{--padding-start:0.8rem!important}@media (max-width:640px) and (orientation:landscape){main[_ngcontent-%COMP%]{justify-content:flex-start}}@media (min-width:576px){main[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]{padding:0 3rem 4rem}main[_ngcontent-%COMP%]{justify-content:flex-start}}@media (min-width:768px){main[_ngcontent-%COMP%]{justify-content:space-evenly}}.login-page[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]{position:relative;justify-content:space-between;padding-bottom:0;height:auto;min-height:100%}.login-page[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .footer-popup[_ngcontent-%COMP%]{position:static;transform:none;-ms-transform:none;-moz-transform:none;-webkit-transform:none}.login-page[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]:after, .login-page[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]:before{position:absolute;pointer-events:none;line-height:1;z-index:1}.login-page[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]:before{content:url(corner-top-right.568c4ffb3575624f9a17.png);top:0;right:0}.login-page[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]:after{content:url(corner-bottom-left.2e4a6ee468b2e1cd5e9b.png);left:0;bottom:0}.login-page[_ngcontent-%COMP%]   .logo-medium[_ngcontent-%COMP%]{margin:9rem 0 2.5rem}@media (min-width:576px){.login-page[_ngcontent-%COMP%]   .logo-medium[_ngcontent-%COMP%]{margin:2.5rem 0}}@media (max-width:640px) and (orientation:landscape){.login-page[_ngcontent-%COMP%]   .logo-medium[_ngcontent-%COMP%]{margin:2.5rem 0}}@media (min-width:768px){.login-page[_ngcontent-%COMP%]   .logo-medium[_ngcontent-%COMP%]{margin:10.6rem 0 2.5rem}}.login-page[_ngcontent-%COMP%]   .text-concat[_ngcontent-%COMP%]{font-size:1.4rem;margin:2rem auto}@media (min-width:576px){.login-page[_ngcontent-%COMP%]   .text-concat[_ngcontent-%COMP%]{margin:1 auto}}@media (min-width:768px){.login-page[_ngcontent-%COMP%]   .text-concat[_ngcontent-%COMP%]{margin:3rem auto}}.login-page[_ngcontent-%COMP%]   .checkbox[_ngcontent-%COMP%]{margin-bottom:3rem}"]],data:{}});function P(n){return o.Gb(0,[(n()(),o.nb(0,0,null,null,1,"div",[],null,null,null,null,null)),(n()(),o.Eb(-1,null,["UserName is required"]))],null,null)}function _(n){return o.Gb(0,[(n()(),o.nb(0,0,null,null,1,"div",[],null,null,null,null,null)),(n()(),o.Eb(-1,null,["password is required"]))],null,null)}function v(n){return o.Gb(0,[(n()(),o.nb(0,0,null,null,76,"ion-content",[["class","login-page"]],null,null,null,s.cb,s.m)),o.mb(1,49152,null,0,b.s,[o.h,o.k],null,null),(n()(),o.nb(2,0,null,0,1,"app-select-language",[],null,null,null,p.b,p.a)),o.mb(3,114688,null,0,h.a,[f.a],null,null),(n()(),o.nb(4,0,null,0,72,"main",[["class","ion-align-items-center"],["d-flex",""],["flex-column",""]],null,null,null,null,null)),(n()(),o.nb(5,0,null,null,61,"section",[["class","area-scrollable ion-align-items-center ion-justify-content-center"],["d-flex",""],["flex-column",""]],null,null,null,null,null)),(n()(),o.nb(6,0,null,null,0,"img",[["alt","DigiSense"],["class","logo-medium"],["src","../../../../assets/images/logo-medium.png"]],null,null,null,null,null)),(n()(),o.nb(7,0,null,null,59,"ion-card",[["class","form-card"],["color","light"],["mode","md"]],null,null,null,s.Y,s.e)),o.mb(8,49152,null,0,b.k,[o.h,o.k],{color:[0,"color"],mode:[1,"mode"]},null),(n()(),o.nb(9,0,null,0,57,"ion-card-content",[],null,null,null,s.U,s.f)),o.mb(10,49152,null,0,b.l,[o.h,o.k],null,null),(n()(),o.nb(11,0,null,0,55,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(n,t,e){var l=!0;return"submit"===t&&(l=!1!==o.xb(n,13).onSubmit(e)&&l),"reset"===t&&(l=!1!==o.xb(n,13).onReset()&&l),l},null,null)),o.mb(12,16384,null,0,l.n,[],null,null),o.mb(13,540672,null,0,l.d,[[8,null],[8,null]],{form:[0,"form"]},null),o.Bb(2048,null,l.a,null,[l.d]),o.mb(15,16384,null,0,l.i,[[4,l.a]],null,null),(n()(),o.nb(16,0,null,null,12,"ion-item",[["class","controls-group"],["lines","inset"]],null,null,null,s.lb,s.v)),o.mb(17,49152,null,0,b.F,[o.h,o.k],{lines:[0,"lines"]},null),(n()(),o.nb(18,0,null,0,3,"ion-label",[["position","floating"]],null,null,null,s.mb,s.w)),o.mb(19,49152,null,0,b.L,[o.h,o.k],{position:[0,"position"]},null),(n()(),o.Eb(20,0,["",""])),o.yb(0,C.a,[f.a]),(n()(),o.nb(22,0,null,0,6,"ion-input",[["formControlName","username"],["type","tel"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],function(n,t,e){var l=!0,r=n.component;return"ionBlur"===t&&(l=!1!==o.xb(n,24)._handleBlurEvent()&&l),"ionChange"===t&&(l=!1!==o.xb(n,24)._handleInputEvent(e.target.value)&&l),"ngModelChange"===t&&(l=!1!==(r.userName=e)&&l),l},s.kb,s.u)),o.mb(23,49152,null,0,b.E,[o.h,o.k],{type:[0,"type"]},null),o.mb(24,16384,null,0,b.Mb,[o.k],null,null),o.Bb(1024,null,l.f,function(n){return[n]},[b.Mb]),o.mb(26,671744,null,0,l.c,[[3,l.a],[8,null],[8,null],[6,l.f],[2,l.p]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),o.Bb(2048,null,l.g,null,[l.c]),o.mb(28,16384,null,0,l.h,[[4,l.g]],null,null),(n()(),o.eb(16777216,null,null,1,null,P)),o.mb(30,16384,null,0,M.k,[o.M,o.J],{ngIf:[0,"ngIf"]},null),(n()(),o.nb(31,0,null,null,12,"ion-item",[["class","controls-group"],["lines","inset"]],null,null,null,s.lb,s.v)),o.mb(32,49152,null,0,b.F,[o.h,o.k],{lines:[0,"lines"]},null),(n()(),o.nb(33,0,null,0,3,"ion-label",[["position","floating"]],null,null,null,s.mb,s.w)),o.mb(34,49152,null,0,b.L,[o.h,o.k],{position:[0,"position"]},null),(n()(),o.Eb(35,0,["",""])),o.yb(0,C.a,[f.a]),(n()(),o.nb(37,0,null,0,6,"ion-input",[["formControlName","password"],["type","password"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],function(n,t,e){var l=!0;return"ionBlur"===t&&(l=!1!==o.xb(n,39)._handleBlurEvent()&&l),"ionChange"===t&&(l=!1!==o.xb(n,39)._handleInputEvent(e.target.value)&&l),l},s.kb,s.u)),o.mb(38,49152,[["password",4]],0,b.E,[o.h,o.k],{type:[0,"type"]},null),o.mb(39,16384,null,0,b.Mb,[o.k],null,null),o.Bb(1024,null,l.f,function(n){return[n]},[b.Mb]),o.mb(41,671744,null,0,l.c,[[3,l.a],[8,null],[8,null],[6,l.f],[2,l.p]],{name:[0,"name"]},null),o.Bb(2048,null,l.g,null,[l.c]),o.mb(43,16384,null,0,l.h,[[4,l.g]],null,null),(n()(),o.eb(16777216,null,null,1,null,_)),o.mb(45,16384,null,0,M.k,[o.M,o.J],{ngIf:[0,"ngIf"]},null),(n()(),o.nb(46,0,null,null,3,"div",[["class","ion-text-right"]],null,null,null,null,null)),(n()(),o.nb(47,0,null,null,2,"a",[["class","link-primary-light"],["href","/."]],null,null,null,null,null)),(n()(),o.Eb(48,null,["","?"])),o.yb(0,C.a,[f.a]),(n()(),o.nb(50,0,null,null,8,"ion-item",[["class","checkbox"],["lines","none"]],null,null,null,s.lb,s.v)),o.mb(51,49152,null,0,b.F,[o.h,o.k],{lines:[0,"lines"]},null),(n()(),o.nb(52,0,null,0,2,"ion-label",[["color","dark"]],null,null,null,s.mb,s.w)),o.mb(53,49152,null,0,b.L,[o.h,o.k],{color:[0,"color"]},null),(n()(),o.Eb(-1,0,["Remember Me"])),(n()(),o.nb(55,0,null,0,3,"ion-checkbox",[["color","primary"],["mode","ios"],["slot","start"],["value","remember"]],null,[[null,"click"],[null,"ionBlur"],[null,"ionChange"]],function(n,t,e){var l=!0,r=n.component;return"ionBlur"===t&&(l=!1!==o.xb(n,58)._handleBlurEvent()&&l),"ionChange"===t&&(l=!1!==o.xb(n,58)._handleIonChange(e.target.checked)&&l),"click"===t&&(l=!1!==r.rememberMe(e)&&l),l},s.Z,s.j)),o.Bb(5120,null,l.f,function(n){return[n]},[b.b]),o.mb(57,49152,null,0,b.p,[o.h,o.k],{color:[0,"color"],mode:[1,"mode"],value:[2,"value"]},null),o.mb(58,16384,null,0,b.b,[o.k],null,null),(n()(),o.nb(59,0,null,null,3,"ion-button",[["class","footer-btn"]],null,[[null,"click"]],function(n,t,e){var l=!0;return"click"===t&&(l=!1!==n.component.login(o.xb(n,38).value)&&l),l},s.S,s.c)),o.mb(60,49152,null,0,b.i,[o.h,o.k],null,null),(n()(),o.Eb(61,0,["",""])),o.yb(0,C.a,[f.a]),(n()(),o.nb(63,0,null,null,3,"ion-button",[["class","footer-btn-fixed btn-light"]],null,null,null,s.S,s.c)),o.mb(64,49152,null,0,b.i,[o.h,o.k],null,null),(n()(),o.Eb(65,0,["",""])),o.yb(0,C.a,[f.a]),(n()(),o.nb(67,0,null,null,3,"ion-text",[["class","ion-text-uppercase text-concat"],["color","dark"]],null,null,null,s.Bb,s.L)),o.mb(68,49152,null,0,b.ub,[o.h,o.k],{color:[0,"color"]},null),(n()(),o.Eb(69,0,["",""])),o.yb(0,C.a,[f.a]),(n()(),o.nb(71,0,null,null,5,"section",[["class","footer-popup"]],null,null,null,null,null)),(n()(),o.nb(72,0,null,null,4,"div",[["class","ion-justify-content-center btns-footer"],["d-flex",""]],null,null,null,null,null)),(n()(),o.nb(73,0,null,null,3,"ion-button",[["class","btn-bottom-fixed btn-light"]],null,null,null,s.S,s.c)),o.mb(74,49152,null,0,b.i,[o.h,o.k],null,null),(n()(),o.Eb(75,0,["",""])),o.yb(0,C.a,[f.a])],function(n,t){var e=t.component;n(t,3,0),n(t,8,0,"light","md"),n(t,13,0,e.registerForm),n(t,17,0,"inset"),n(t,19,0,"floating"),n(t,23,0,"tel"),n(t,26,0,"username",e.userName),n(t,30,0,e.submitted&&(null==e.registerForm.controls.username.errors?null:e.registerForm.controls.username.errors.required)),n(t,32,0,"inset"),n(t,34,0,"floating"),n(t,38,0,"password"),n(t,41,0,"password"),n(t,45,0,e.submitted&&e.registerForm.controls.password.errors),n(t,51,0,"none"),n(t,53,0,"dark"),n(t,57,0,"primary","ios","remember"),n(t,68,0,"dark")},function(n,t){n(t,11,0,o.xb(t,15).ngClassUntouched,o.xb(t,15).ngClassTouched,o.xb(t,15).ngClassPristine,o.xb(t,15).ngClassDirty,o.xb(t,15).ngClassValid,o.xb(t,15).ngClassInvalid,o.xb(t,15).ngClassPending),n(t,20,0,o.Fb(t,20,0,o.xb(t,21).transform("MOBILE-NO"))),n(t,22,0,o.xb(t,28).ngClassUntouched,o.xb(t,28).ngClassTouched,o.xb(t,28).ngClassPristine,o.xb(t,28).ngClassDirty,o.xb(t,28).ngClassValid,o.xb(t,28).ngClassInvalid,o.xb(t,28).ngClassPending),n(t,35,0,o.Fb(t,35,0,o.xb(t,36).transform("Pin"))),n(t,37,0,o.xb(t,43).ngClassUntouched,o.xb(t,43).ngClassTouched,o.xb(t,43).ngClassPristine,o.xb(t,43).ngClassDirty,o.xb(t,43).ngClassValid,o.xb(t,43).ngClassInvalid,o.xb(t,43).ngClassPending),n(t,48,0,o.Fb(t,48,0,o.xb(t,49).transform("FORGOT-PIN"))),n(t,61,0,o.Fb(t,61,0,o.xb(t,62).transform("LOGIN"))),n(t,65,0,o.Fb(t,65,0,o.xb(t,66).transform("CREATE-ACCOUNT"))),n(t,69,0,o.Fb(t,69,0,o.xb(t,70).transform("OR"))),n(t,75,0,o.Fb(t,75,0,o.xb(t,76).transform("CREATE-ACCOUNT")))})}function x(n){return o.Gb(0,[(n()(),o.nb(0,0,null,null,1,"app-login",[],null,null,null,v,O)),o.mb(1,114688,null,0,g,[i.a,u.a,c.a,a.a,l.b],null,null)],function(n,t){n(t,1,0)},null)}var k=o.jb("app-login",g,x,{},{},[]),y=e("M0ag"),w=e("ZYCi");e.d(t,"LoginPageModuleNgFactory",function(){return D});var D=o.kb(m,[],function(n){return o.ub([o.vb(512,o.j,o.Z,[[8,[d.a,k]],[3,o.j],o.v]),o.vb(4608,M.m,M.l,[o.s,[2,M.t]]),o.vb(4608,b.a,b.a,[o.x,o.g]),o.vb(4608,b.Eb,b.Eb,[b.a,o.j,o.p,M.c]),o.vb(4608,b.Ib,b.Ib,[b.a,o.j,o.p,M.c]),o.vb(4608,l.o,l.o,[]),o.vb(4608,f.a,f.a,[i.a]),o.vb(4608,l.b,l.b,[]),o.vb(1073742336,M.b,M.b,[]),o.vb(1073742336,b.Bb,b.Bb,[]),o.vb(1073742336,l.m,l.m,[]),o.vb(1073742336,l.e,l.e,[]),o.vb(1073742336,y.a,y.a,[]),o.vb(1073742336,w.o,w.o,[[2,w.u],[2,w.m]]),o.vb(1073742336,l.k,l.k,[]),o.vb(1073742336,m,m,[]),o.vb(1024,w.k,function(){return[[{path:"",component:g}]]},[])])})},MJ4E:function(n,t,e){"use strict";e.d(t,"a",function(){return i}),e("lZOh");var o=e("oDQ7"),l=e("bUwk"),r=(e("+muV"),e("CcnG")),i=function(){function n(n){this.http=n}return n.prototype.getVehicalAggreagtionDetails=function(n,t,e,l){return this.http.get(e?o.a.vehicalAgreegationVin+"/"+n+"?aggregationOption="+t+"&endDateTime="+l+"&startDateTime="+e:o.a.vehicalAgreegationVin+"/"+n+"?aggregationOption="+t)},n.prototype.getWeatherDetails=function(n,t){return this.http.getWeather(""+o.a.weatherDetails+n+","+t)},n.prototype.getVehicalServiceRemainderDetails=function(n,t,e){return this.http.get(t?o.a.VehicalServiceRemainderVin+"/"+n+"?endDateTime="+e+"&startDateTime="+t:o.a.VehicalServiceRemainderVin+"/"+n)},n.prototype.getVehicalDieselDetails=function(n){return this.http.get(o.a.vehicalVin+"/"+n)},n.ngInjectableDef=r.Q({factory:function(){return new n(r.U(l.a))},token:n,providedIn:"root"}),n}()},MqVi:function(n,t,e){"use strict";e.d(t,"a",function(){return o}),e("ri4N");var o=function(){function n(n){this.translate=n}return n.prototype.ngOnInit=function(){this.translate.use("en")},n.prototype.setLang=function(n){this.translate.use(n)},n}()},Ryqz:function(n,t,e){"use strict";e.d(t,"a",function(){return o}),e("ri4N");var o=function(){function n(n){this.translate=n}return n.prototype.transform=function(n){return this.translate.data[n]||n},n}()},grKV:function(n,t,e){"use strict";e.d(t,"a",function(){return i});var o=e("MJ4E"),l=e("CcnG"),r=e("ZYCi"),i=function(){function n(n,t){this.commonService=n,this.router=t}return n.prototype.convertSecondsToHoursAndMinutes=function(n){var t={hours:0,minutes:0},e=n%3600/60;return t.hours=Math.floor(n/3600),t.minutes=Math.floor(e),t},n.prototype.getStartAndEndDate=function(n){return{endDate:n.setHours(23,59,59,0)/1e3,strtDate:n.setHours(0,0,0,0)/1e3}},n.prototype.getAggregationData=function(n,t,e,o){return this.commonService.getVehicalAggreagtionDetails(n,t,e,o)},n.prototype.getServiceRemainderData=function(n,t,e){return this.commonService.getVehicalServiceRemainderDetails(n,t,e)},n.prototype.getVehicleVinDetails=function(n){return this.commonService.getVehicalDieselDetails(n)},n.prototype.navigateToPage=function(n){this.router.navigate([n])},n.ngInjectableDef=l.Q({factory:function(){return new n(l.U(o.a),l.U(r.m))},token:n,providedIn:"root"}),n}()},lZOh:function(n,t,e){"use strict";var o=e("6blF"),l=e("F/XL");o.a.of=l.a},xd8J:function(n,t,e){"use strict";var o=e("CcnG");e("MqVi"),e("ri4N"),e.d(t,"a",function(){return l}),e.d(t,"b",function(){return r});var l=o.lb({encapsulation:0,styles:[[""]],data:{}});function r(n){return o.Gb(0,[],null,null)}}}]);