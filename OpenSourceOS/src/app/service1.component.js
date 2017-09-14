"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var core_2 = require("@angular/core");
var app_service_1 = require("./app.service");
var appService2 = (function () {
    function appService2(_appService) {
        this._appService = _appService;
        this.places = [];
    }
    appService2.prototype.ngOnInit = function () {
        this.places = this._appService.getInfo();
    };
    return appService2;
}());
appService2 = __decorate([
    core_2.Injectable(),
    core_1.Component({
        selector: "service",
        templateUrl: "./service.component.html",
        providers: [app_service_1.TestService]
    }),
    __metadata("design:paramtypes", [app_service_1.TestService])
], appService2);
exports.appService2 = appService2;
//# sourceMappingURL=service1.component.js.map