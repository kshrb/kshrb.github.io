(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"2PzP":function(n,t,l){"use strict";l.d(t,"a",function(){return i});var o=l("mrSG"),e=l("ZZ/e"),r=l("ri4N"),a=l("CcnG"),i=function(){function n(n,t){this.loadingController=n,this.translate=t}return n.prototype.dismissLoader=function(){return o.b(this,void 0,void 0,function(){var n=this;return o.e(this,function(t){return this.loader&&this.loader.present().then(function(){return o.b(n,void 0,void 0,function(){return o.e(this,function(n){switch(n.label){case 0:return[4,this.loader.dismiss()];case 1:return n.sent(),[2]}})})}),[2]})})},n.prototype.createLoader=function(n){return o.b(this,void 0,void 0,function(){var n;return o.e(this,function(t){switch(t.label){case 0:return n=this,[4,this.loadingController.create({message:this.translate.data.LOADING,duration:3e5,spinner:"crescent"})];case 1:return n.loader=t.sent(),[4,this.loader.present()];case 2:return[2,t.sent()]}})})},n.ngInjectableDef=a.S({factory:function(){return new n(a.W(e.Db),a.W(r.a))},token:n,providedIn:"root"}),n}()},Ryqz:function(n,t,l){"use strict";l.d(t,"a",function(){return o}),l("ri4N");var o=function(){function n(n){this.translate=n}return n.prototype.transform=function(n){return this.translate.data[n]||n},n}()},awEp:function(n,t,l){"use strict";l.r(t);var o=l("CcnG"),e=l("gIcY"),r=l("oDQ7"),a=l("bUwk"),i=l("ri4N"),u=l("2PzP"),c=l("jGdz"),s=l("gF0x"),g=l("grKV"),d=function(){function n(n,t,l,o,e,r,a,i){this.formbuilder=n,this.utilsService=t,this.localStorageService=l,this.translate=o,this.http=e,this.loader=r,this.location=a,this.toaster=i,this.isSubmitted=!1,this.currentDate=(new Date).toISOString(),this.profileImage="assets/images/user1.png"}return n.prototype.ngOnInit=function(){this.formgroup=this.formbuilder.group({fullName:["",e.q.compose([e.q.required,e.q.pattern("[a-zA-Z][a-zA-Z ]+")])],birthofDate:["",e.q.required],mobileNo:["",[e.q.required,e.q.maxLength(10),e.q.pattern("[7-9]\\d{9}")]],email:["",e.q.email]}),this.formgroup.controls.mobileNo.setValue(this.localStorageService.getKey("mobNum"))},n.prototype.ionViewDidEnter=function(){this.loader.createLoader();var n=this.localStorageService.getKey("language");n&&this.translate.use(n),this.getUserProfile()},n.prototype.createNewProfile=function(){var n=this;if(this.isSubmitted=!0,this.formgroup.invalid)return"";this.loader.createLoader();var t={firstName:this.formgroup.value.fullName,eMailID:this.formgroup.value.email||"",status:1,languagePreference:this.localStorageService.getKey("language")||"en",imageURL:this.imageurl};this.http.put(r.a.profile,t).subscribe(function(l){n.getUsersUpdatedProfile(),n.toaster.presentToast(n.translate.data["PROFILE-UPDATE-SUCCESSFULLY"]),n.localStorageService.setKey("userData",JSON.stringify(t))},function(t){n.loader.dismissLoader(),n.toaster.presentToast(n.translate.data.PROFILE_DATA_NOT_UPDATE)})},n.prototype.getUsersUpdatedProfile=function(){var n=this;this.utilsService.getUserProfile().subscribe(function(t){n.localStorageService.setKey("userData",t.data),n.loader.dismissLoader(),"/tabs/home"===n.localStorageService.getKey("path")?(n.localStorageService.removeKey("path"),n.utilsService.navigateToPage("/tabs/home")):n.utilsService.navigateToPage("/language")})},n.prototype.onProfileSelect=function(n){var t=this,l=n.target;if(l.files&&l.files[0]){var o=new FileReader,e=this;o.onload=function(n){e.profileImage=n.target.result},o.readAsDataURL(l.files[0]);var r=new FormData;r.append("image",l.files[0]),this.loader.createLoader(),this.utilsService.postProfileImage(r).subscribe(function(n){t.imageurl=n.imageURL,t.loader.dismissLoader()},function(n){t.loader.dismissLoader(),t.toaster.presentToast(t.translate.data["IMAGE-SELECTER"])})}},n.prototype.getUserProfile=function(){var n=this;this.utilsService.getUserProfile().subscribe(function(t){n.formgroup.patchValue({fullName:t.data.firstName,birthofDate:n.dateFormator(t.data.dateOfBirth),mobileNo:t.data.mobileNo,email:t.data.eMailID}),n.imageurl=t.data.imageURL;var l=n.imageurl.split("=");n.utilsService.getProfileImage(l[1]).subscribe(function(t){n.createImageFromBlob(t)},function(n){console.log(n)}),n.loader.dismissLoader()})},n.prototype.dateFormator=function(n){var t=new Date(1e3*n);return t.getDate()+" "+["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][t.getMonth()]+","+t.getFullYear()},n.prototype.onkeydown=function(n){var t=String.fromCharCode(n.charCode);/^[a-zA-Z ]*$/.test(t)||n.preventDefault()},n.prototype.navigation=function(){this.localStorageService.removeKey("path"),this.location.back()},n.prototype.createImageFromBlob=function(n){var t=this,l=new FileReader;l.addEventListener("load",function(){t.profileImage=l.result},!1),n&&l.readAsDataURL(n),this.loader.dismissLoader()},n}(),b=function(){return function(){}}(),m=l("pMnS"),p=l("Ryqz"),f=l("oBZk"),h=l("ZZ/e"),C=l("Ip0R"),P=o.nb({encapsulation:0,styles:[[".footer-popup[_ngcontent-%COMP%]{position:fixed;bottom:0;left:50%;max-width:95%;transform:translateX(-50%);-ms-transform:translateX(-50%);-moz-transform:translateX(-50%);-webkit-transform:translateX(-50%);z-index:10}.footer-popup[_ngcontent-%COMP%]   .btns-footer[_ngcontent-%COMP%]{position:relative;z-index:9}.footer-popup[_ngcontent-%COMP%]   .btns-footer[_ngcontent-%COMP%]   .btn-bottom-fixed[_ngcontent-%COMP%]{min-width:10.5rem;width:auto;height:3.5rem;background:var(--light-red);--background:var(--light-red);--border-radius:2rem 2rem 0 0;border-radius:2rem 2rem 0 0;font-size:1.3rem;font-family:var(--medium);line-height:normal;letter-spacing:.01rem;text-align:center;color:var(--ion-color-light);margin:.5rem 1rem 0;border:.15rem solid var(--light-red);border-bottom:none!important}.footer-popup[_ngcontent-%COMP%]   .btns-footer[_ngcontent-%COMP%]   .btn-bottom-fixed.btn-light[_ngcontent-%COMP%]{background:var(--ion-color-light);--background:var(--ion-color-light);--background-focused:var(--ion-color-light);color:var(--light-red);--color-focused:var(--light-red);border-bottom:none;overflow:hidden}.footer-popup[_ngcontent-%COMP%]   .btns-footer[_ngcontent-%COMP%]   .btn-bottom-fixed[lg][_ngcontent-%COMP%]{min-width:19.4rem}.footer-popup[_ngcontent-%COMP%]   .all-day-summary[_ngcontent-%COMP%]{padding-bottom:4rem}main[_ngcontent-%COMP%]{padding-bottom:4rem;overflow:auto;justify-content:space-evenly;z-index:2;position:relative}main[_ngcontent-%COMP%]   .link-primary-light[_ngcontent-%COMP%]{color:var(--light-red);display:inherit;font-size:1.4rem;margin:1.5rem 0}main[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]{--background:var(--ion-color-light);--color:var(--title-color);border-radius:2rem;-webkit-border-radius:2rem;-moz-border-radius:2rem;box-shadow:var(--shadow-general);-webkit-box-shadow:var(--shadow-general);-moz-box-shadow:var(--shadow-general);padding:0;margin:0;overflow:visible;font-size:1.5rem}main[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%]{border-top-left-radius:2rem;border-top-right-radius:2rem}main[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%]   ion-card-title[_ngcontent-%COMP%]{--color:var(--ion-color-dark);color:var(--ion-color-dark);font-size:1.5rem;min-height:3.6rem;margin:auto}main[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%]   ion-card-title.title-md[_ngcontent-%COMP%]{font-size:2.2rem;font-family:var(--semi-bold)}main[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%]{width:12.4rem;height:12.4rem;margin:-8.2rem auto 1rem;position:relative}main[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%]{width:100%;min-height:100%;display:block;border-radius:50%}main[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%]   ion-avatar[class^=avatar-user][_ngcontent-%COMP%]{width:10.2rem;height:10.2rem;margin:-7.1rem auto 1rem;background:var(--ion-color-light);border-radius:50%;border:.5rem solid var(--light-gray);padding:.1rem}main[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%]   ion-avatar[class^=avatar-user][_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%]{box-shadow:var(--shadow-general);-webkit-box-shadow:var(--shadow-general);-moz-box-shadow:var(--shadow-general)}main[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%]   ion-avatar.avatar-user-md[_ngcontent-%COMP%]{width:13.4rem;height:13.4rem;margin:-8.7rem auto 1rem}main[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%]   .upload-profile[_ngcontent-%COMP%]{position:absolute;bottom:0;right:0;width:2.9rem;height:2.9rem;--border-color:var(--light-red);--border-style:solid;--border-width:0.1rem;--box-shadow:none;--padding-start:0;--padding-end:0;--padding-top:0;--padding-bottom:0}main[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%]   .upload-profile[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:1.5rem;color:var(--light-red);position:absolute;pointer-events:none}main[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%]   .upload-profile[_ngcontent-%COMP%]   ion-input[type=file][_ngcontent-%COMP%]{width:100%;height:100%;opacity:0}main[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   ion-card-subtitle[_ngcontent-%COMP%]{color:var(--label-grey);font-size:1.5rem}main[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]{padding:1rem 3rem 6rem;position:relative;margin:auto;width:30rem;flex:1 1 auto}main[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{--inner-padding-start:0;--inner-padding-end:0;--inner-padding-top:0;--inner-padding-bottom:0;--padding-start:0;--padding-end:0;--padding-top:0;--padding-bottom:0;--highlight-height:0.1rem;--highlight-color-focused:var(--border-gray);--background-focused:inherit}main[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   ion-item.controls-group[_ngcontent-%COMP%]{--padding-top:1.5rem}main[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   ion-item.controls-group[_ngcontent-%COMP%]   ion-datetime[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   ion-item.controls-group[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%]{font-size:1.5rem;--color:var(--title-color);--placeholder-color:var(--title-color);--placeholder-opacity:1;--padding-start:0;--padding-end:0;--padding-top:0;--padding-bottom:0}main[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   ion-item.checkbox[_ngcontent-%COMP%]{--border-width:0}main[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   ion-item.checkbox[_ngcontent-%COMP%]   ion-checkbox[_ngcontent-%COMP%]{--border-color:var(--light-red);--border-color-checked:var(--light-red);--size:2rem;-webkit-margin-end:1rem;margin-inline-end:1rem;margin-top:0;margin-bottom:0}main[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{color:var(--label-grey)}main[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-datetime[_ngcontent-%COMP%] + ion-icon[_ngcontent-%COMP%]{font-size:2rem;pointer-events:none;color:var(--ion-color-primary);position:absolute;right:0;bottom:.8rem;z-index:3}main[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   .footer-btn[_ngcontent-%COMP%]{min-width:11.4rem;width:auto;height:3.5rem;font-size:1.3rem;font-family:var(--medium);line-height:normal;letter-spacing:.01rem;text-align:center;color:var(--ion-color-light);margin:0 auto;border:.15rem solid var(--light-red);border-bottom:none;position:absolute;bottom:0;left:50%;transform:translateX(-50%);-ms-transform:translateX(-50%);-moz-transform:translateX(-50%);-webkit-transform:translateX(-50%);border-radius:2rem 2rem 0 0;-webkit-border-radius:2rem 2rem 0 0;-moz-border-radius:2rem 2rem 0 0;--border-radius:2rem 2rem 0 0;background:var(--light-red);--background:var(--light-red)}main[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   ion-card-content.padding-v-xtra[_ngcontent-%COMP%]{padding-top:3rem;padding-bottom:12rem}main[_ngcontent-%COMP%]   .form-card.card-style-2[_ngcontent-%COMP%]{margin-top:6.2rem}@media (max-width:640px) and (orientation:landscape){main[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   ion-card-content.padding-v-xtra[_ngcontent-%COMP%]{padding-top:2rem;padding-bottom:6rem}main[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   ion-card-content.padding-v-xtra[_ngcontent-%COMP%]   .controls-group[_ngcontent-%COMP%]{--padding-top:0}main[_ngcontent-%COMP%]   .form-card.card-style-2[_ngcontent-%COMP%]{margin-top:7.2rem}main[_ngcontent-%COMP%]   .form-card.card-style-2[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%]{padding:1.6rem 1.5rem 0}}main[_ngcontent-%COMP%]   .form-card.card-bg[_ngcontent-%COMP%]{background:url(card-bg.a48d74faf2472707ebac.png) right bottom no-repeat;margin-bottom:4rem}main[_ngcontent-%COMP%]   .form-card.card-bg[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]{padding:1rem 3rem 7.2rem}main[_ngcontent-%COMP%]   .form-card.card-no-header[_ngcontent-%COMP%]{margin-top:2rem}main[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .input-set[_ngcontent-%COMP%]   .label-common[_ngcontent-%COMP%]{transform:none;-ms-transform:none;-moz-transform:none;-webkit-transform:none;font-size:1.2rem}main[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .input-set[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{flex-grow:1;--min-height:30px}main[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   .input-set[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] + ion-item[_ngcontent-%COMP%]{--padding-start:0.8rem!important}@media (max-width:640px) and (orientation:landscape){main[_ngcontent-%COMP%]{justify-content:flex-start}}@media (min-width:576px){main[_ngcontent-%COMP%]   .form-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]{padding:0 3rem 4rem}main[_ngcontent-%COMP%]{justify-content:flex-start}}@media (min-width:768px){main[_ngcontent-%COMP%]{justify-content:space-evenly}}ion-card-header[_ngcontent-%COMP%]{padding-bottom:0}"]],data:{}});function M(n){return o.Jb(0,[(n()(),o.pb(0,0,null,null,2,"div",[],null,null,null,null,null)),(n()(),o.Hb(1,null,[""," "])),o.Bb(0,p.a,[i.a])],null,function(n,t){n(t,1,0,o.Ib(t,1,0,o.zb(t,2).transform("INVALID_FULLNAME")))})}function v(n){return o.Jb(0,[(n()(),o.pb(0,0,null,null,2,"div",[],null,null,null,null,null)),(n()(),o.Hb(1,null,[""," "])),o.Bb(0,p.a,[i.a])],null,function(n,t){n(t,1,0,o.Ib(t,1,0,o.zb(t,2).transform("INVALID_FULLNAME")))})}function _(n){return o.Jb(0,[(n()(),o.pb(0,0,null,null,2,"div",[],null,null,null,null,null)),(n()(),o.Hb(1,null,[" ",""])),o.Bb(0,p.a,[i.a])],null,function(n,t){n(t,1,0,o.Ib(t,1,0,o.zb(t,2).transform("DATE_OF_BIRTH_REQUIRD")))})}function O(n){return o.Jb(0,[(n()(),o.pb(0,0,null,null,2,"div",[],null,null,null,null,null)),(n()(),o.Hb(1,null,[" ",""])),o.Bb(0,p.a,[i.a])],null,function(n,t){n(t,1,0,o.Ib(t,1,0,o.zb(t,2).transform("MOBILE_NUMBER_REQUIRED")))})}function z(n){return o.Jb(0,[(n()(),o.pb(0,0,null,null,2,"div",[],null,null,null,null,null)),(n()(),o.Hb(1,null,[" ",""])),o.Bb(0,p.a,[i.a])],null,function(n,t){n(t,1,0,o.Ib(t,1,0,o.zb(t,2).transform("NOT_VALID_NUMBER")))})}function k(n){return o.Jb(0,[(n()(),o.pb(0,0,null,null,2,"div",[],null,null,null,null,null)),(n()(),o.Hb(1,null,["",""])),o.Bb(0,p.a,[i.a])],null,function(n,t){n(t,1,0,o.Ib(t,1,0,o.zb(t,2).transform("NOT_VALID_EMAIL")))})}function y(n){return o.Jb(0,[(n()(),o.pb(0,0,null,null,13,"ion-header",[["class","custom-header"]],null,null,null,f.lb,f.r)),o.ob(1,49152,null,0,h.z,[o.h,o.k],null,null),(n()(),o.pb(2,0,null,0,11,"ion-toolbar",[],null,null,null,f.Nb,f.T)),o.ob(3,49152,null,0,h.zb,[o.h,o.k],null,null),(n()(),o.pb(4,0,null,0,5,"ion-buttons",[["class","back-icon"],["color","primary"],["slot","start"]],null,null,null,f.X,f.d)),o.ob(5,49152,null,0,h.j,[o.h,o.k],null,null),(n()(),o.pb(6,0,null,0,3,"ion-button",[],null,[[null,"click"]],function(n,t,l){var o=!0;return"click"===t&&(o=!1!==n.component.navigation()&&o),o},f.W,f.c)),o.ob(7,49152,null,0,h.i,[o.h,o.k],null,null),(n()(),o.pb(8,0,null,0,1,"ion-icon",[["name","back"]],null,null,null,f.mb,f.s)),o.ob(9,49152,null,0,h.A,[o.h,o.k],{name:[0,"name"]},null),(n()(),o.pb(10,0,null,0,3,"ion-title",[["class","page-title"],["slot","start"]],null,null,null,f.Lb,f.R)),o.ob(11,49152,null,0,h.xb,[o.h,o.k],null,null),(n()(),o.Hb(12,0,["",""])),o.Bb(0,p.a,[i.a]),(n()(),o.pb(14,0,null,null,106,"ion-content",[],null,null,null,f.gb,f.m)),o.ob(15,49152,null,0,h.s,[o.h,o.k],null,null),(n()(),o.pb(16,0,null,0,94,"main",[["class","align-items-center justify-content-start"],["d-flex",""],["flex-column",""],["full-h",""]],null,null,null,null,null)),(n()(),o.pb(17,0,null,null,93,"ion-card",[["class","form-card card-style-2 card-bg"],["color","light"]],null,null,null,f.cb,f.e)),o.ob(18,49152,null,0,h.k,[o.h,o.k],{color:[0,"color"]},null),(n()(),o.pb(19,0,null,0,13,"ion-card-header",[["color","dark"],["mode","ios"],["translucent","true"]],null,null,null,f.Z,f.g)),o.ob(20,49152,null,0,h.m,[o.h,o.k],{color:[0,"color"],mode:[1,"mode"],translucent:[2,"translucent"]},null),(n()(),o.pb(21,0,null,0,11,"ion-avatar",[["class","avatar-user"]],null,null,null,f.V,f.b)),o.ob(22,49152,null,0,h.e,[o.h,o.k],null,null),(n()(),o.pb(23,0,null,0,1,"ion-img",[["alt","User name"],["id","profile-image"]],null,null,null,f.nb,f.t)),o.ob(24,49152,null,0,h.B,[o.h,o.k],{alt:[0,"alt"],src:[1,"src"]},null),(n()(),o.pb(25,0,null,0,7,"ion-fab-button",[["class","upload-profile"],["color","light"],["translucent","true"]],null,null,null,f.ib,f.p)),o.ob(26,49152,null,0,h.v,[o.h,o.k],{color:[0,"color"],translucent:[1,"translucent"]},null),(n()(),o.pb(27,0,null,0,3,"ion-input",[["accept","image/*"],["id","editPicture"],["type","file"]],null,[[null,"change"],[null,"ionBlur"],[null,"ionChange"]],function(n,t,l){var e=!0,r=n.component;return"ionBlur"===t&&(e=!1!==o.zb(n,30)._handleBlurEvent()&&e),"ionChange"===t&&(e=!1!==o.zb(n,30)._handleInputEvent(l.target.value)&&e),"change"===t&&(e=!1!==r.onProfileSelect(l)&&e),e},f.ob,f.u)),o.Eb(5120,null,e.i,function(n){return[n]},[h.Mb]),o.ob(29,49152,null,0,h.E,[o.h,o.k],{accept:[0,"accept"],type:[1,"type"]},null),o.ob(30,16384,null,0,h.Mb,[o.k],null,null),(n()(),o.pb(31,0,null,0,1,"ion-icon",[["class","edit-icon"],["name","edit-pic"]],null,null,null,f.mb,f.s)),o.ob(32,49152,null,0,h.A,[o.h,o.k],{name:[0,"name"]},null),(n()(),o.pb(33,0,null,0,77,"ion-card-content",[],null,null,null,f.Y,f.f)),o.ob(34,49152,null,0,h.l,[o.h,o.k],null,null),(n()(),o.pb(35,0,null,0,75,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(n,t,l){var e=!0;return"submit"===t&&(e=!1!==o.zb(n,37).onSubmit(l)&&e),"reset"===t&&(e=!1!==o.zb(n,37).onReset()&&e),e},null,null)),o.ob(36,16384,null,0,e.s,[],null,null),o.ob(37,540672,null,0,e.d,[[8,null],[8,null]],{form:[0,"form"]},null),o.Eb(2048,null,e.a,null,[e.d]),o.ob(39,16384,null,0,e.l,[[4,e.a]],null,null),(n()(),o.pb(40,0,null,null,12,"ion-item",[["class","controls-group"],["lines","inset"]],null,null,null,f.pb,f.v)),o.ob(41,49152,null,0,h.F,[o.h,o.k],{lines:[0,"lines"]},null),(n()(),o.pb(42,0,null,0,3,"ion-label",[["position","floating"]],null,null,null,f.qb,f.w)),o.ob(43,49152,null,0,h.L,[o.h,o.k],{position:[0,"position"]},null),(n()(),o.Hb(44,0,["",""])),o.Bb(0,p.a,[i.a]),(n()(),o.pb(46,0,null,0,6,"ion-input",[["formControlName","fullName"],["type","text"],["value",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"keypress"],[null,"ionBlur"],[null,"ionChange"]],function(n,t,l){var e=!0,r=n.component;return"ionBlur"===t&&(e=!1!==o.zb(n,47)._handleBlurEvent()&&e),"ionChange"===t&&(e=!1!==o.zb(n,47)._handleInputEvent(l.target.value)&&e),"keypress"===t&&(e=!1!==r.onkeydown(l)&&e),e},f.ob,f.u)),o.ob(47,16384,null,0,h.Mb,[o.k],null,null),o.Eb(1024,null,e.i,function(n){return[n]},[h.Mb]),o.ob(49,671744,null,0,e.c,[[3,e.a],[8,null],[8,null],[6,e.i],[2,e.u]],{name:[0,"name"]},null),o.Eb(2048,null,e.j,null,[e.c]),o.ob(51,16384,null,0,e.k,[[4,e.j]],null,null),o.ob(52,49152,null,0,h.E,[o.h,o.k],{type:[0,"type"],value:[1,"value"]},null),(n()(),o.gb(16777216,null,null,1,null,M)),o.ob(54,16384,null,0,C.k,[o.O,o.L],{ngIf:[0,"ngIf"]},null),(n()(),o.gb(16777216,null,null,1,null,v)),o.ob(56,16384,null,0,C.k,[o.O,o.L],{ngIf:[0,"ngIf"]},null),(n()(),o.pb(57,0,null,null,14,"ion-item",[["class","controls-group"],["lines","inset"]],null,null,null,f.pb,f.v)),o.ob(58,49152,null,0,h.F,[o.h,o.k],{lines:[0,"lines"]},null),(n()(),o.pb(59,0,null,0,3,"ion-label",[["position","floating"]],null,null,null,f.qb,f.w)),o.ob(60,49152,null,0,h.L,[o.h,o.k],{position:[0,"position"]},null),(n()(),o.Hb(61,0,["",""])),o.Bb(0,p.a,[i.a]),(n()(),o.pb(63,0,null,0,6,"ion-datetime",[["displayFormat","DD MMM YYYY"],["formControlName","birthofDate"],["pickerFormat","MMM DD YYYY"],["value",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],function(n,t,l){var e=!0;return"ionBlur"===t&&(e=!1!==o.zb(n,64)._handleBlurEvent()&&e),"ionChange"===t&&(e=!1!==o.zb(n,64)._handleChangeEvent(l.target.value)&&e),e},f.hb,f.n)),o.ob(64,16384,null,0,h.Lb,[o.k],null,null),o.Eb(1024,null,e.i,function(n){return[n]},[h.Lb]),o.ob(66,671744,null,0,e.c,[[3,e.a],[8,null],[8,null],[6,e.i],[2,e.u]],{name:[0,"name"]},null),o.Eb(2048,null,e.j,null,[e.c]),o.ob(68,16384,null,0,e.k,[[4,e.j]],null,null),o.ob(69,49152,null,0,h.t,[o.h,o.k],{max:[0,"max"],displayFormat:[1,"displayFormat"],pickerFormat:[2,"pickerFormat"],value:[3,"value"]},null),(n()(),o.pb(70,0,null,0,1,"ion-icon",[["name","calendar"]],null,null,null,f.mb,f.s)),o.ob(71,49152,null,0,h.A,[o.h,o.k],{name:[0,"name"]},null),(n()(),o.gb(16777216,null,null,1,null,_)),o.ob(73,16384,null,0,C.k,[o.O,o.L],{ngIf:[0,"ngIf"]},null),(n()(),o.pb(74,0,null,null,14,"ion-item",[["class","controls-group"],["lines","inset"]],null,null,null,f.pb,f.v)),o.ob(75,49152,null,0,h.F,[o.h,o.k],{lines:[0,"lines"]},null),(n()(),o.pb(76,0,null,0,3,"ion-label",[["position","floating"]],null,null,null,f.qb,f.w)),o.ob(77,49152,null,0,h.L,[o.h,o.k],{position:[0,"position"]},null),(n()(),o.Hb(78,0,["",""])),o.Bb(0,p.a,[i.a]),(n()(),o.pb(80,0,null,0,8,"ion-input",[["formControlName","mobileNo"],["maxlength","10"],["readonly",""],["type","tel"]],[[1,"maxlength",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],function(n,t,l){var e=!0;return"ionBlur"===t&&(e=!1!==o.zb(n,83)._handleBlurEvent()&&e),"ionChange"===t&&(e=!1!==o.zb(n,83)._handleInputEvent(l.target.value)&&e),e},f.ob,f.u)),o.ob(81,540672,null,0,e.f,[],{maxlength:[0,"maxlength"]},null),o.Eb(1024,null,e.h,function(n){return[n]},[e.f]),o.ob(83,16384,null,0,h.Mb,[o.k],null,null),o.Eb(1024,null,e.i,function(n){return[n]},[h.Mb]),o.ob(85,671744,null,0,e.c,[[3,e.a],[6,e.h],[8,null],[6,e.i],[2,e.u]],{name:[0,"name"]},null),o.Eb(2048,null,e.j,null,[e.c]),o.ob(87,16384,null,0,e.k,[[4,e.j]],null,null),o.ob(88,49152,null,0,h.E,[o.h,o.k],{maxlength:[0,"maxlength"],readonly:[1,"readonly"],type:[2,"type"]},null),(n()(),o.gb(16777216,null,null,1,null,O)),o.ob(90,16384,null,0,C.k,[o.O,o.L],{ngIf:[0,"ngIf"]},null),(n()(),o.gb(16777216,null,null,1,null,z)),o.ob(92,16384,null,0,C.k,[o.O,o.L],{ngIf:[0,"ngIf"]},null),(n()(),o.pb(93,0,null,null,15,"ion-item",[["class","controls-group"],["lines","inset"]],null,null,null,f.pb,f.v)),o.ob(94,49152,null,0,h.F,[o.h,o.k],{lines:[0,"lines"]},null),(n()(),o.pb(95,0,null,0,4,"ion-label",[["position","floating"]],null,null,null,f.qb,f.w)),o.ob(96,49152,null,0,h.L,[o.h,o.k],{position:[0,"position"]},null),(n()(),o.Hb(97,0,[""," (",")"])),o.Bb(0,p.a,[i.a]),o.Bb(0,p.a,[i.a]),(n()(),o.pb(100,0,null,0,8,"ion-input",[["formControlName","email"],["pattern","[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$"],["type","text"],["value",""]],[[1,"pattern",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],function(n,t,l){var e=!0;return"ionBlur"===t&&(e=!1!==o.zb(n,103)._handleBlurEvent()&&e),"ionChange"===t&&(e=!1!==o.zb(n,103)._handleInputEvent(l.target.value)&&e),e},f.ob,f.u)),o.ob(101,540672,null,0,e.n,[],{pattern:[0,"pattern"]},null),o.Eb(1024,null,e.h,function(n){return[n]},[e.n]),o.ob(103,16384,null,0,h.Mb,[o.k],null,null),o.Eb(1024,null,e.i,function(n){return[n]},[h.Mb]),o.ob(105,671744,null,0,e.c,[[3,e.a],[6,e.h],[8,null],[6,e.i],[2,e.u]],{name:[0,"name"]},null),o.Eb(2048,null,e.j,null,[e.c]),o.ob(107,16384,null,0,e.k,[[4,e.j]],null,null),o.ob(108,49152,null,0,h.E,[o.h,o.k],{pattern:[0,"pattern"],type:[1,"type"],value:[2,"value"]},null),(n()(),o.gb(16777216,null,null,1,null,k)),o.ob(110,16384,null,0,C.k,[o.O,o.L],{ngIf:[0,"ngIf"]},null),(n()(),o.pb(111,0,null,0,9,"section",[["class","footer-popup"]],null,null,null,null,null)),(n()(),o.pb(112,0,null,null,8,"div",[["class","ion-justify-content-center btns-footer"],["d-flex",""]],null,null,null,null,null)),(n()(),o.pb(113,0,null,null,3,"ion-button",[["class","btn-bottom-fixed btn-light"],["color","light"]],null,[[null,"click"]],function(n,t,l){var o=!0;return"click"===t&&(o=!1!==n.component.navigation()&&o),o},f.W,f.c)),o.ob(114,49152,null,0,h.i,[o.h,o.k],{color:[0,"color"]},null),(n()(),o.Hb(115,0,[""," "])),o.Bb(0,p.a,[i.a]),(n()(),o.pb(117,0,null,null,3,"ion-button",[["class","btn-bottom-fixed"],["color","primary"]],null,[[null,"click"]],function(n,t,l){var o=!0;return"click"===t&&(o=!1!==n.component.createNewProfile()&&o),o},f.W,f.c)),o.ob(118,49152,null,0,h.i,[o.h,o.k],{color:[0,"color"]},null),(n()(),o.Hb(119,0,[""," "])),o.Bb(0,p.a,[i.a])],function(n,t){var l=t.component;n(t,9,0,"back"),n(t,18,0,"light"),n(t,20,0,"dark","ios","true"),n(t,24,0,"User name",o.rb(1,"",l.profileImage,"")),n(t,26,0,"light","true"),n(t,29,0,"image/*","file"),n(t,32,0,"edit-pic"),n(t,37,0,l.formgroup),n(t,41,0,"inset"),n(t,43,0,"floating"),n(t,49,0,"fullName"),n(t,52,0,"text",""),n(t,54,0,l.isSubmitted&&(null==l.formgroup.controls.fullName.errors?null:l.formgroup.controls.fullName.errors.required)),n(t,56,0,l.isSubmitted&&(null==l.formgroup.controls.fullName.errors?null:l.formgroup.controls.fullName.errors.pattern)),n(t,58,0,"inset"),n(t,60,0,"floating"),n(t,66,0,"birthofDate"),n(t,69,0,l.currentDate,"DD MMM YYYY","MMM DD YYYY",""),n(t,71,0,"calendar"),n(t,73,0,l.isSubmitted&&(null==l.formgroup.controls.birthofDate.errors?null:l.formgroup.controls.birthofDate.errors.required)),n(t,75,0,"inset"),n(t,77,0,"floating"),n(t,81,0,"10"),n(t,85,0,"mobileNo"),n(t,88,0,"10","","tel"),n(t,90,0,l.isSubmitted&&(null==l.formgroup.controls.mobileNo.errors?null:l.formgroup.controls.mobileNo.errors.required)),n(t,92,0,l.isSubmitted&&(null==l.formgroup.controls.mobileNo.errors?null:l.formgroup.controls.mobileNo.errors.pattern)),n(t,94,0,"inset"),n(t,96,0,"floating"),n(t,101,0,"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$"),n(t,105,0,"email"),n(t,108,0,"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$","text",""),n(t,110,0,l.isSubmitted&&l.formgroup.controls.email.errors),n(t,114,0,"light"),n(t,118,0,"primary")},function(n,t){n(t,12,0,o.Ib(t,12,0,o.zb(t,13).transform("UPDATE-PROFILE"))),n(t,35,0,o.zb(t,39).ngClassUntouched,o.zb(t,39).ngClassTouched,o.zb(t,39).ngClassPristine,o.zb(t,39).ngClassDirty,o.zb(t,39).ngClassValid,o.zb(t,39).ngClassInvalid,o.zb(t,39).ngClassPending),n(t,44,0,o.Ib(t,44,0,o.zb(t,45).transform("FULL-NAME"))),n(t,46,0,o.zb(t,51).ngClassUntouched,o.zb(t,51).ngClassTouched,o.zb(t,51).ngClassPristine,o.zb(t,51).ngClassDirty,o.zb(t,51).ngClassValid,o.zb(t,51).ngClassInvalid,o.zb(t,51).ngClassPending),n(t,61,0,o.Ib(t,61,0,o.zb(t,62).transform("BIRTH-DATE"))),n(t,63,0,o.zb(t,68).ngClassUntouched,o.zb(t,68).ngClassTouched,o.zb(t,68).ngClassPristine,o.zb(t,68).ngClassDirty,o.zb(t,68).ngClassValid,o.zb(t,68).ngClassInvalid,o.zb(t,68).ngClassPending),n(t,78,0,o.Ib(t,78,0,o.zb(t,79).transform("MOBILE-NO"))),n(t,80,0,o.zb(t,81).maxlength?o.zb(t,81).maxlength:null,o.zb(t,87).ngClassUntouched,o.zb(t,87).ngClassTouched,o.zb(t,87).ngClassPristine,o.zb(t,87).ngClassDirty,o.zb(t,87).ngClassValid,o.zb(t,87).ngClassInvalid,o.zb(t,87).ngClassPending),n(t,97,0,o.Ib(t,97,0,o.zb(t,98).transform("EMAIL")),o.Ib(t,97,1,o.zb(t,99).transform("OPTIONAL"))),n(t,100,0,o.zb(t,101).pattern?o.zb(t,101).pattern:null,o.zb(t,107).ngClassUntouched,o.zb(t,107).ngClassTouched,o.zb(t,107).ngClassPristine,o.zb(t,107).ngClassDirty,o.zb(t,107).ngClassValid,o.zb(t,107).ngClassInvalid,o.zb(t,107).ngClassPending),n(t,115,0,o.Ib(t,115,0,o.zb(t,116).transform("CANCEL"))),n(t,119,0,o.Ib(t,119,0,o.zb(t,120).transform("SAVE")))})}function w(n){return o.Jb(0,[(n()(),o.pb(0,0,null,null,1,"app-create-new-profile",[],null,null,null,y,P)),o.ob(1,114688,null,0,d,[e.b,g.a,c.a,i.a,a.a,u.a,C.g,s.a],null,null)],function(n,t){n(t,1,0)},null)}var x=o.lb("app-create-new-profile",d,w,{},{},[]),I=l("M0ag"),E=l("ZYCi");l.d(t,"CreateNewProfilePageModuleNgFactory",function(){return L});var L=o.mb(b,[],function(n){return o.wb([o.xb(512,o.j,o.bb,[[8,[m.a,x]],[3,o.j],o.x]),o.xb(4608,C.m,C.l,[o.u,[2,C.t]]),o.xb(4608,e.t,e.t,[]),o.xb(4608,h.a,h.a,[o.z,o.g]),o.xb(4608,h.Eb,h.Eb,[h.a,o.j,o.q,C.c]),o.xb(4608,h.Ib,h.Ib,[h.a,o.j,o.q,C.c]),o.xb(4608,i.a,i.a,[a.a]),o.xb(4608,e.b,e.b,[]),o.xb(1073742336,C.b,C.b,[]),o.xb(1073742336,e.r,e.r,[]),o.xb(1073742336,e.e,e.e,[]),o.xb(1073742336,h.Bb,h.Bb,[]),o.xb(1073742336,I.a,I.a,[]),o.xb(1073742336,E.q,E.q,[[2,E.w],[2,E.m]]),o.xb(1073742336,e.o,e.o,[]),o.xb(1073742336,b,b,[]),o.xb(1024,E.k,function(){return[[{path:"",component:d}]]},[])])})},gF0x:function(n,t,l){"use strict";l.d(t,"a",function(){return a});var o=l("mrSG"),e=l("ZZ/e"),r=l("CcnG"),a=function(){function n(n){this.toastController=n}return n.prototype.presentToast=function(n){return o.b(this,void 0,void 0,function(){return o.e(this,function(t){switch(t.label){case 0:return[4,this.toastController.create({duration:2e3,message:n})];case 1:return t.sent().present(),[2]}})})},n.prototype.presentToastWithOptions=function(){return o.b(this,void 0,void 0,function(){return o.e(this,function(n){switch(n.label){case 0:return[4,this.toastController.create({closeButtonText:"Done",message:"Click to Close",position:"top",showCloseButton:!0})];case 1:return n.sent().present(),[2]}})})},n.ngInjectableDef=r.S({factory:function(){return new n(r.W(e.Nb))},token:n,providedIn:"root"}),n}()}}]);