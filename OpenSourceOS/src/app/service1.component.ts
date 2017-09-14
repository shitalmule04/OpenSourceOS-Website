import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { TestService } from './app.service';




@Injectable()


@Component({

    selector: "service",
    templateUrl: "./service.component.html",
    providers: [TestService]
})

export class appService2 {

    places: any = [];

    constructor(private _appService: TestService) { }
    ngOnInit() {
        this.places = this._appService.getInfo();
    }


}
