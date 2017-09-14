"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var app_routing_1 = require("./app.routing");
var app_component_1 = require("./app.component");
var home_component_1 = require("./home.component");
var about_component_1 = require("./about.component");
var contact_component_1 = require("./contact.component");
var profile_component_1 = require("./profile.component");
var login_component_1 = require("./login.component");
var app_service_1 = require("./app.service");
var service1_component_1 = require("./service1.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, app_routing_1.AppRouting, forms_1.FormsModule],
        declarations: [app_component_1.AppComponent, home_component_1.HomeComponent, about_component_1.AboutComponent, contact_component_1.ContactComponent, profile_component_1.ProfileComponent, login_component_1.LoginComponent, service1_component_1.appService2],
        bootstrap: [app_component_1.AppComponent],
        providers: [app_service_1.TestService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map