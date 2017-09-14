"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var home_component_1 = require("./home.component");
var about_component_1 = require("./about.component");
var contact_component_1 = require("./contact.component");
var profile_component_1 = require("./profile.component");
var login_component_1 = require("./login.component");
var router_1 = require("@angular/router");
var service1_component_1 = require("./service1.component");
var routes = [
    { path: 'homeurl', component: home_component_1.HomeComponent },
    { path: 'abouturl', component: about_component_1.AboutComponent },
    { path: 'contacturl', component: contact_component_1.ContactComponent },
    { path: 'profileurl', component: profile_component_1.ProfileComponent },
    { path: 'loginurl', component: login_component_1.LoginComponent },
    { path: 'serviceurl', component: service1_component_1.appService2 },
];
var AppRouting = (function () {
    function AppRouting() {
    }
    return AppRouting;
}());
AppRouting = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(routes)],
        exports: [router_1.RouterModule],
    })
], AppRouting);
exports.AppRouting = AppRouting;
//# sourceMappingURL=app.routing.js.map