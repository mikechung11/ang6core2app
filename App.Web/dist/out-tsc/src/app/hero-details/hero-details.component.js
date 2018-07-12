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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var hero_1 = require("../hero");
var hero_service_1 = require("../hero.service");
var HeroDetailsComponent = /** @class */ (function () {
    function HeroDetailsComponent(route, heroService, location) {
        this.route = route;
        this.heroService = heroService;
        this.location = location;
    }
    HeroDetailsComponent.prototype.ngOnInit = function () {
        this.getHero();
    };
    HeroDetailsComponent.prototype.getHero = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('id');
        this.heroService.getHero(id)
            .subscribe(function (hero) { return _this.hero = hero; });
    };
    HeroDetailsComponent.prototype.goBack = function () {
        this.location.back();
    };
    HeroDetailsComponent.prototype.save = function () {
        var _this = this;
        this.heroService.updateHero(this.hero)
            .subscribe(function () { return _this.goBack(); });
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", hero_1.Hero)
    ], HeroDetailsComponent.prototype, "hero", void 0);
    HeroDetailsComponent = __decorate([
        core_1.Component({
            selector: 'app-hero-details',
            templateUrl: './hero-details.component.html',
            styleUrls: ['./hero-details.component.css']
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            hero_service_1.HeroService,
            common_1.Location])
    ], HeroDetailsComponent);
    return HeroDetailsComponent;
}());
exports.HeroDetailsComponent = HeroDetailsComponent;
//# sourceMappingURL=hero-details.component.js.map