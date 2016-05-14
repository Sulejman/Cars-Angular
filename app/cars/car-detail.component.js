System.register(['angular2/core', 'angular2/router', './car.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, car_service_1;
    var CarDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (car_service_1_1) {
                car_service_1 = car_service_1_1;
            }],
        execute: function() {
            CarDetailComponent = (function () {
                function CarDetailComponent(_carService, _router, _routeParams) {
                    this._carService = _carService;
                    this._router = _router;
                    this._routeParams = _routeParams;
                    this.pageTitle = 'Car Detail';
                }
                CarDetailComponent.prototype.ngOnInit = function () {
                    if (!this.car) {
                        var id = +this._routeParams.get('id');
                        // this.pageTitle += `: ${id}`;
                        this.getCar(id);
                    }
                };
                CarDetailComponent.prototype.getCar = function (id) {
                    var _this = this;
                    this._carService.getCar(id)
                        .subscribe(function (car) { return _this.car = car; }, function (error) { return _this.errorMessage = error; });
                };
                CarDetailComponent.prototype.getInt = function (stringNumber) {
                    return parseInt(stringNumber);
                };
                CarDetailComponent.prototype.onBack = function () {
                    this._router.navigate(['Cars']);
                };
                CarDetailComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/cars/car-detail.component.html',
                        directives: []
                    }), 
                    __metadata('design:paramtypes', [car_service_1.CarService, router_1.Router, router_1.RouteParams])
                ], CarDetailComponent);
                return CarDetailComponent;
            }());
            exports_1("CarDetailComponent", CarDetailComponent);
        }
    }
});
//# sourceMappingURL=car-detail.component.js.map