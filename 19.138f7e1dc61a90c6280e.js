(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"+muV":function(n,t){},IMhh:function(n,t,l){"use strict";l.r(t);var e=l("CcnG"),o=l("mrSG"),u=l("acRR"),i=l("ZZ/e"),r=l("grKV"),a=(l("lZOh"),l("oDQ7")),c=l("bUwk"),s=function(){function n(n){this.http=n}return n.prototype.getGeoFences=function(){return this.http.get(a.a.allGeoFences)},n.prototype.getVehicalDetails=function(){return this.http.get(a.a.vehicalTracking)},n.prototype.getWeatherDetails=function(n,t){return this.http.getWeather(""+a.a.weatherDetails+n+","+t)},n.prototype.updateStatus=function(n,t){return this.http.put(a.a.allGeoFences,{geofenceID:[n],status:!t})},n.prototype.deleteGeofence=function(n){return this.http.delete(a.a.allGeoFences+"?geofenceid="+n+"&action=yes")},n.ngInjectableDef=e.Q({factory:function(){return new n(e.U(c.a))},token:n,providedIn:"root"}),n}(),g=function(){function n(n,t,l,e,o){this.navParams=n,this.service=t,this.loadingController=l,this.popoverController=e,this.utilsService=o,this.GeofenceId=this.navParams.get("geoFenceId"),this.status=this.navParams.get("status")}return n.prototype.ngOnInit=function(){},n.prototype.updateStatus=function(){return o.__awaiter(this,void 0,void 0,function(){var n,t=this;return o.__generator(this,function(l){switch(l.label){case 0:return[4,this.getLoading()];case 1:return[4,(n=l.sent()).present()];case 2:return l.sent(),this.service.updateStatus(this.GeofenceId,this.status).subscribe(function(l){console.log(l),n.dismiss(),t.popoverController.dismiss({oper:"updateStatus",geofenceid:t.GeofenceId,status:!t.status})}),[2]}})})},n.prototype.deleteGeofence=function(){return o.__awaiter(this,void 0,void 0,function(){var n,t=this;return o.__generator(this,function(l){switch(l.label){case 0:return[4,this.getLoading()];case 1:return[4,(n=l.sent()).present()];case 2:return l.sent(),this.service.deleteGeofence(this.GeofenceId).subscribe(function(l){console.log(l),n.dismiss(),t.popoverController.dismiss({oper:"delete",geofenceid:t.GeofenceId,status:t.status})},function(t){console.log(t.message),n.dismiss()}),[2]}})})},n.prototype.getLoading=function(){return o.__awaiter(this,void 0,void 0,function(){return o.__generator(this,function(n){switch(n.label){case 0:return[4,this.loadingController.create({message:"Please wait...",spinner:"crescent",duration:3e5})];case 1:return[2,n.sent()]}})})},n.prototype.assignTracktors=function(){this.utilsService.navigateToPage("assign-tractors")},n}(),b=function(){function n(n,t,l,e){this.messageService=n,this.popoverController=t,this.loadingController=l,this.service=e,this.geoFences=[],this.oldFencesCount=0}return n.prototype.ngOnInit=function(){},n.prototype.ionViewDidEnter=function(){return o.__awaiter(this,void 0,void 0,function(){var n,t=this;return o.__generator(this,function(l){switch(l.label){case 0:return[4,this.getLoading()];case 1:return(n=l.sent()).present(),this.service.getGeoFences().subscribe(function(l){n.dismiss(),console.log("GEO FENSES===="+JSON.stringify(l)),l&&l.data?(t.geoFences=l.data,t.oldFencesCount=l.totalRecords):alert("No geofences available")},function(n){console.log(n.message)}),[2]}})})},n.prototype.createPopover=function(n,t,l){return o.__awaiter(this,void 0,void 0,function(){var e,u=this;return o.__generator(this,function(o){switch(o.label){case 0:return[4,this.popoverController.create({component:g,event:n,translucent:!0,cssClass:"custom-popover",showBackdrop:!1,mode:"md",componentProps:{geoFenceId:t,status:l}})];case 1:return(e=o.sent()).onDidDismiss().then(function(n){if(n&&n.data){if(console.log("fenceOpData=="+JSON.stringify(n)),"updateStatus"===n.data.oper)u.geoFences.find(function(t){return t.geofenceID==n.data.geofenceid}).status=n.data.status;else if("delete"===n.data.oper){var t=u.geoFences.findIndex(function(t){return t.geofenceID==n.data.geofenceid});u.geoFences.splice(t,1)}}else console.log("NO FENCE RECD")}),[2,e]}})})},n.prototype.presentPopover=function(n,t,l){return o.__awaiter(this,void 0,void 0,function(){return o.__generator(this,function(e){switch(e.label){case 0:return[4,this.createPopover(n,t,l)];case 1:return[4,e.sent().present()];case 2:return e.sent(),[2]}})})},n.prototype.getLoading=function(){return o.__awaiter(this,void 0,void 0,function(){return o.__generator(this,function(n){switch(n.label){case 0:return[4,this.loadingController.create({message:"Please wait...",spinner:"crescent",duration:3e5})];case 1:return[2,n.sent()]}})})},n}(),p=function(){return function(){}}(),d=l("pMnS"),f=l("oBZk"),h=l("Ryqz"),m=l("ri4N"),v=l("Ip0R"),k=l("ZYCi"),y=l("xd8J"),C=l("MqVi"),_=e.lb({encapsulation:0,styles:[["ion-content[_ngcontent-%COMP%]{--padding-top:0}.geofence-status[_ngcontent-%COMP%]{font-family:var(--regular);font-size:1.3rem;font-weight:600;font-stretch:normal;line-height:1.31;letter-spacing:.1px;text-align:left;color:var(--ion-color-dark);margin-left:3rem}.geofence-status[_ngcontent-%COMP%]   .geofence-count[_ngcontent-%COMP%]{width:26px;height:26px;display:inline-block;line-height:26px;text-align:center;--border-radius:100%;border-radius:var(--border-radius);-webkit-border-radius:var(--border-radius);-moz-border-radius:var(--border-radius);margin-left:1rem;background-color:var(--counter-bg)}ion-list[_ngcontent-%COMP%]{padding-top:0;padding-bottom:0;margin-bottom:3rem}ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{--border-radius:2rem;--box-shadow:var(--shadow-general);--min-height:9.4rem;--padding-start:0;--inner-padding-start:0;--inner-padding-end:0;margin:2rem 3rem;position:relative;--background:url(/assets/images/ellipse.png) right top/contain no-repeat var(--ion-color-light);--inner-border-width:0}ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   .geofence-block[_ngcontent-%COMP%]{width:100%;padding:1.7rem 1.8rem}.geofence-list-box[_ngcontent-%COMP%] + .block-list[_ngcontent-%COMP%]{margin-top:1.2rem}.block-list[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{--padding-start:1.5rem;--padding-end:1.5rem;min-width:5.8rem;font-size:1rem;--box-shadow:none}.block-list[_ngcontent-%COMP%]   ion-button.inactive-btn[_ngcontent-%COMP%]{--ion-color-danger:var(--inactive-btn-color);--background:var(--ion-color-danger)}.block-list[_ngcontent-%COMP%]   .geofence-text[_ngcontent-%COMP%]{font-family:var(--semi-bold);font-size:9px;font-weight:600;font-style:normal;font-stretch:normal;line-height:1.78;letter-spacing:.1px;text-align:left;color:var(--label-grey)}.heading-block[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-family:var(--regular);font-size:1.4rem;font-weight:600;line-height:1.14;letter-spacing:.1px;text-align:center;color:var(--dark-shade-black);margin:0}.heading-block[_ngcontent-%COMP%]   .geofence-date[_ngcontent-%COMP%]{font-family:var(--regular);font-size:.9rem;font-weight:600;line-height:1;letter-spacing:.1px;text-align:left;color:var(--label-grey);display:block;margin-top:.5rem}.popover-dp[_ngcontent-%COMP%]{position:relative}.popover-dp[_ngcontent-%COMP%]   .icon-btn[_ngcontent-%COMP%]{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:0;margin-inline-end:0;--padding-start:0;--padding-end:0;width:3.6rem;height:3.6rem;margin-right:-1.6rem;margin-top:-1.2rem;--background:var(--transparent);--background-activated:var(--transparent);--background-focused:var(--transparent);--color:var(--dark-red);--color-activated:var(--light-red);--color-focused:var(--light-red);--box-shadow:none}"]],data:{}});function M(n){return e.Gb(0,[(n()(),e.nb(0,0,null,null,22,"ion-item",[["class","geofence-list"]],null,null,null,f.lb,f.v)),e.mb(1,49152,null,0,i.F,[e.h,e.k],null,null),(n()(),e.nb(2,0,null,0,20,"div",[["class","geofence-block"],["d-flex",""],["flex-column",""]],null,null,null,null,null)),(n()(),e.nb(3,0,null,null,11,"div",[["class","geofence-list-box"],["d-flex",""],["justify-content-between",""]],null,null,null,null,null)),(n()(),e.nb(4,0,null,null,5,"div",[["class","heading-block"]],null,null,null,null,null)),(n()(),e.nb(5,0,null,null,1,"h4",[],null,null,null,null,null)),(n()(),e.Eb(6,null,["",""])),(n()(),e.nb(7,0,null,null,2,"span",[["class","geofence-date"]],null,null,null,null,null)),(n()(),e.Eb(8,null,["",""])),e.Ab(9,2),(n()(),e.nb(10,0,null,null,4,"div",[["class","popover-dp"]],null,null,null,null,null)),(n()(),e.nb(11,0,null,null,3,"ion-button",[["class","icon-btn"],["shape","round"]],null,[[null,"click"]],function(n,t,l){var e=!0;return"click"===t&&(e=!1!==n.component.presentPopover(l,n.context.$implicit.geofenceID,n.context.$implicit.status)&&e),e},f.S,f.c)),e.mb(12,49152,null,0,i.i,[e.h,e.k],{shape:[0,"shape"]},null),(n()(),e.nb(13,0,null,0,1,"ion-icon",[["name","more"],["slot","icon-only"]],null,null,null,f.ib,f.s)),e.mb(14,49152,null,0,i.A,[e.h,e.k],{name:[0,"name"]},null),(n()(),e.nb(15,0,null,null,7,"div",[["align-items-center",""],["class","block-list"],["d-flex",""],["justify-content-between",""]],null,null,null,null,null)),(n()(),e.nb(16,0,null,null,3,"ion-button",[["shape","round"],["size","small"]],null,null,null,f.S,f.c)),e.mb(17,49152,null,0,i.i,[e.h,e.k],{color:[0,"color"],shape:[1,"shape"],size:[2,"size"]},null),(n()(),e.Eb(18,0,["",""])),e.yb(0,h.a,[m.a]),(n()(),e.nb(20,0,null,null,2,"span",[["class","geofence-text"]],null,null,null,null,null)),(n()(),e.Eb(21,null,["",""])),e.yb(0,h.a,[m.a])],function(n,t){n(t,12,0,"round"),n(t,14,0,"more"),n(t,17,0,t.context.$implicit.status?"success":"primary","round","small")},function(n,t){n(t,6,0,t.context.$implicit.geofenceName);var l=e.Fb(t,8,0,n(t,9,0,e.xb(t.parent,0),t.context.$implicit.startDateTime," dd MMMM yyyy"));n(t,8,0,l),n(t,18,0,t.context.$implicit.status?"ACTIVE":e.Fb(t,18,0,e.xb(t,19).transform("INACTIVE"))),n(t,21,0,"STATE"!=t.context.$implicit.visibilityType&&"DISTRICT"!=t.context.$implicit.visibilityType?"CUSTOM-GEOFENCE":e.Fb(t,21,0,e.xb(t,22).transform(t.context.$implicit.visibilityType)))})}function O(n){return e.Gb(0,[e.yb(0,v.d,[e.s]),(n()(),e.nb(1,0,null,null,17,"ion-header",[["class","custom-header"]],null,null,null,f.hb,f.r)),e.mb(2,49152,null,0,i.z,[e.h,e.k],null,null),(n()(),e.nb(3,0,null,0,15,"ion-toolbar",[],null,null,null,f.Fb,f.P)),e.mb(4,49152,null,0,i.zb,[e.h,e.k],null,null),(n()(),e.nb(5,0,null,0,7,"ion-buttons",[["class","back-icon"],["color","primary"],["routerLink","/tab"],["slot","start"]],null,[[null,"click"]],function(n,t,l){var o=!0;return"click"===t&&(o=!1!==e.xb(n,7).onClick()&&o),"click"===t&&(o=!1!==e.xb(n,8).onClick(l)&&o),o},f.T,f.d)),e.mb(6,49152,null,0,i.j,[e.h,e.k],null,null),e.mb(7,16384,null,0,k.n,[k.m,k.a,[8,null],e.B,e.k],{routerLink:[0,"routerLink"]},null),e.mb(8,737280,null,0,i.Kb,[v.h,i.Fb,e.k,k.m,[2,k.n]],null,null),(n()(),e.nb(9,0,null,0,3,"ion-button",[],null,null,null,f.S,f.c)),e.mb(10,49152,null,0,i.i,[e.h,e.k],null,null),(n()(),e.nb(11,0,null,0,1,"ion-icon",[["name","back"]],null,null,null,f.ib,f.s)),e.mb(12,49152,null,0,i.A,[e.h,e.k],{name:[0,"name"]},null),(n()(),e.nb(13,0,null,0,1,"app-select-language",[],null,null,null,y.b,y.a)),e.mb(14,114688,null,0,C.a,[m.a],null,null),(n()(),e.nb(15,0,null,0,3,"ion-title",[["class","page-title"],["slot","start"]],null,null,null,f.Db,f.N)),e.mb(16,49152,null,0,i.xb,[e.h,e.k],null,null),(n()(),e.Eb(17,0,[" ",""])),e.yb(0,h.a,[m.a]),(n()(),e.nb(19,0,null,null,21,"ion-content",[],null,null,null,f.cb,f.m)),e.mb(20,49152,null,0,i.s,[e.h,e.k],null,null),(n()(),e.nb(21,0,null,0,6,"ion-list",[],null,null,null,f.ob,f.x)),e.mb(22,49152,null,0,i.M,[e.h,e.k],null,null),(n()(),e.nb(23,0,null,0,4,"div",[["class","geofence-status"]],null,null,null,null,null)),(n()(),e.Eb(24,null,[""," "])),e.yb(0,h.a,[m.a]),(n()(),e.nb(26,0,null,null,1,"span",[["class","geofence-count"]],null,null,null,null,null)),(n()(),e.Eb(-1,null,["1"])),(n()(),e.nb(28,0,null,0,8,"ion-list",[],null,null,null,f.ob,f.x)),e.mb(29,49152,null,0,i.M,[e.h,e.k],null,null),(n()(),e.nb(30,0,null,0,4,"div",[["class","geofence-status"]],null,null,null,null,null)),(n()(),e.Eb(31,null,[""," "])),e.yb(0,h.a,[m.a]),(n()(),e.nb(33,0,null,null,1,"span",[["class","geofence-count"]],null,null,null,null,null)),(n()(),e.Eb(34,null,["",""])),(n()(),e.eb(16777216,null,0,1,null,M)),e.mb(36,278528,null,0,v.j,[e.M,e.J,e.q],{ngForOf:[0,"ngForOf"]},null),(n()(),e.nb(37,0,null,0,3,"div",[["class","bottom-btns-group"],["d-flex",""],["justify-content-center",""]],null,null,null,null,null)),(n()(),e.nb(38,0,null,null,2,"ion-button",[["lg",""]],null,null,null,f.S,f.c)),e.mb(39,49152,null,0,i.i,[e.h,e.k],null,null),(n()(),e.Eb(-1,0,["Create New Geofence"]))],function(n,t){var l=t.component;n(t,7,0,"/tab"),n(t,8,0),n(t,12,0,"back"),n(t,14,0),n(t,36,0,l.geoFences)},function(n,t){var l=t.component;n(t,17,0,e.Fb(t,17,0,e.xb(t,18).transform("GEOFENCE-TITLE"))),n(t,24,0,e.Fb(t,24,0,e.xb(t,25).transform("RECENTLY-CREATED-GEOFENCE"))),n(t,31,0,e.Fb(t,31,0,e.xb(t,32).transform("PREVIOUSLY-CREATED-GEOFENCE"))),n(t,34,0,l.oldFencesCount)})}function w(n){return e.Gb(0,[(n()(),e.nb(0,0,null,null,1,"app-geofence",[],null,null,null,O,_)),e.mb(1,114688,null,0,b,[u.a,i.Ib,i.Db,s],null,null)],function(n,t){n(t,1,0)},null)}var x=e.jb("app-geofence",b,w,{},{},[]),E=e.lb({encapsulation:0,styles:[[".popover-list[_ngcontent-%COMP%]{background:var(--ion-color-light);padding:.5rem 0}.popover-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;padding:0;margin:0}.popover-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:1.2rem;font-weight:600;color:var(--label-grey);display:block;text-decoration:none;padding:.7rem 1.8rem}.popover-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background:var(--light-grey)}"]],data:{}});function P(n){return e.Gb(0,[(n()(),e.nb(0,0,null,null,2,"li",[],null,null,null,null,null)),(n()(),e.nb(1,0,null,null,1,"a",[],null,[[null,"click"]],function(n,t,l){var e=!0;return"click"===t&&(e=!1!==n.component.assignTracktors()&&e),e},null,null)),(n()(),e.Eb(-1,null,[" Assign Tractors "]))],null,null)}function D(n){return e.Gb(0,[(n()(),e.nb(0,0,null,null,2,"li",[],null,null,null,null,null)),(n()(),e.nb(1,0,null,null,1,"a",[],null,[[null,"click"]],function(n,t,l){var e=!0;return"click"===t&&(e=!1!==n.component.updateStatus()&&e),e},null,null)),(n()(),e.Eb(-1,null,[" Inactive "]))],null,null)}function I(n){return e.Gb(0,[(n()(),e.nb(0,0,null,null,2,"li",[],null,null,null,null,null)),(n()(),e.nb(1,0,null,null,1,"a",[],null,[[null,"click"]],function(n,t,l){var e=!0;return"click"===t&&(e=!1!==n.component.updateStatus()&&e),e},null,null)),(n()(),e.Eb(-1,null,[" Active "]))],null,null)}function G(n){return e.Gb(0,[(n()(),e.nb(0,0,null,null,10,"div",[["class","popover-list"]],null,null,null,null,null)),(n()(),e.nb(1,0,null,null,9,"ul",[],null,null,null,null,null)),(n()(),e.eb(16777216,null,null,1,null,P)),e.mb(3,16384,null,0,v.k,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(n()(),e.eb(16777216,null,null,1,null,D)),e.mb(5,16384,null,0,v.k,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(n()(),e.eb(16777216,null,null,1,null,I)),e.mb(7,16384,null,0,v.k,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(n()(),e.nb(8,0,null,null,2,"li",[],null,null,null,null,null)),(n()(),e.nb(9,0,null,null,1,"a",[],null,[[null,"click"]],function(n,t,l){var e=!0;return"click"===t&&(e=!1!==n.component.deleteGeofence()&&e),e},null,null)),(n()(),e.Eb(-1,null,["Delete Geofence "]))],function(n,t){var l=t.component;n(t,3,0,l.status),n(t,5,0,l.status),n(t,7,0,!l.status)},null)}function F(n){return e.Gb(0,[(n()(),e.nb(0,0,null,null,1,"app-popover",[],null,null,null,G,E)),e.mb(1,114688,null,0,g,[i.Gb,s,i.Db,i.Ib,r.a],null,null)],function(n,t){n(t,1,0)},null)}var S=e.jb("app-popover",g,F,{},{},[]),T=l("gIcY"),V=l("M0ag");l.d(t,"GeofencePageModuleNgFactory",function(){return N});var N=e.kb(p,[],function(n){return e.ub([e.vb(512,e.j,e.Z,[[8,[d.a,x,S]],[3,e.j],e.v]),e.vb(4608,v.m,v.l,[e.s,[2,v.t]]),e.vb(4608,i.a,i.a,[e.x,e.g]),e.vb(4608,i.Eb,i.Eb,[i.a,e.j,e.p,v.c]),e.vb(4608,i.Ib,i.Ib,[i.a,e.j,e.p,v.c]),e.vb(4608,T.o,T.o,[]),e.vb(4608,m.a,m.a,[c.a]),e.vb(1073742336,v.b,v.b,[]),e.vb(1073742336,i.Bb,i.Bb,[]),e.vb(1073742336,T.m,T.m,[]),e.vb(1073742336,T.e,T.e,[]),e.vb(1073742336,V.a,V.a,[]),e.vb(1073742336,k.o,k.o,[[2,k.u],[2,k.m]]),e.vb(1073742336,p,p,[]),e.vb(1024,k.k,function(){return[[{path:"",component:b}]]},[])])})},MJ4E:function(n,t,l){"use strict";l.d(t,"a",function(){return i}),l("lZOh");var e=l("oDQ7"),o=l("bUwk"),u=(l("+muV"),l("CcnG")),i=function(){function n(n){this.http=n}return n.prototype.getVehicalAggreagtionDetails=function(n,t,l,o){return this.http.get(l?e.a.vehicalAgreegationVin+"/"+n+"?aggregationOption="+t+"&endDateTime="+o+"&startDateTime="+l:e.a.vehicalAgreegationVin+"/"+n+"?aggregationOption="+t)},n.prototype.getWeatherDetails=function(n,t){return this.http.getWeather(""+e.a.weatherDetails+n+","+t)},n.prototype.getVehicalServiceRemainderDetails=function(n,t,l){return this.http.get(t?e.a.VehicalServiceRemainderVin+"/"+n+"?endDateTime="+l+"&startDateTime="+t:e.a.VehicalServiceRemainderVin+"/"+n)},n.prototype.getVehicalDieselDetails=function(n){return this.http.get(e.a.vehicalVin+"/"+n)},n.ngInjectableDef=u.Q({factory:function(){return new n(u.U(o.a))},token:n,providedIn:"root"}),n}()},MqVi:function(n,t,l){"use strict";l.d(t,"a",function(){return e}),l("ri4N");var e=function(){function n(n){this.translate=n}return n.prototype.ngOnInit=function(){this.translate.use("en")},n.prototype.setLang=function(n){this.translate.use(n)},n}()},Ryqz:function(n,t,l){"use strict";l.d(t,"a",function(){return e}),l("ri4N");var e=function(){function n(n){this.translate=n}return n.prototype.transform=function(n){return this.translate.data[n]||n},n}()},grKV:function(n,t,l){"use strict";l.d(t,"a",function(){return i});var e=l("MJ4E"),o=l("CcnG"),u=l("ZYCi"),i=function(){function n(n,t){this.commonService=n,this.router=t}return n.prototype.convertSecondsToHoursAndMinutes=function(n){var t={hours:0,minutes:0},l=n%3600/60;return t.hours=Math.floor(n/3600),t.minutes=Math.floor(l),t},n.prototype.getStartAndEndDate=function(n){return{endDate:n.setHours(23,59,59,0)/1e3,strtDate:n.setHours(0,0,0,0)/1e3}},n.prototype.getAggregationData=function(n,t,l,e){return this.commonService.getVehicalAggreagtionDetails(n,t,l,e)},n.prototype.getServiceRemainderData=function(n,t,l){return this.commonService.getVehicalServiceRemainderDetails(n,t,l)},n.prototype.getVehicleVinDetails=function(n){return this.commonService.getVehicalDieselDetails(n)},n.prototype.navigateToPage=function(n){this.router.navigate([n])},n.ngInjectableDef=o.Q({factory:function(){return new n(o.U(e.a),o.U(u.m))},token:n,providedIn:"root"}),n}()},lZOh:function(n,t,l){"use strict";var e=l("6blF"),o=l("F/XL");e.a.of=o.a},xd8J:function(n,t,l){"use strict";var e=l("CcnG");l("MqVi"),l("ri4N"),l.d(t,"a",function(){return o}),l.d(t,"b",function(){return u});var o=e.lb({encapsulation:0,styles:[[""]],data:{}});function u(n){return e.Gb(0,[],null,null)}}}]);