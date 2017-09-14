import { Component } from '@angular/core';

@Component({
    selector: "profile",
    templateUrl: "./profile.component.html",
    styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {

    fullname: any;
    dob: any;
    emailid: any;
    mobno: any;
    area: any;
    city: any;
    pincode: any;
    onButton(val1: any, val2: any, val3: any, val4: any, val5: any, val6: any, val7: any) {
        this.fullname = val1;
        this.dob = val2;
        this.emailid = val3;
        this.mobno = val4;
        this.area = val5;
        this.city = val6;
        this.pincode = val7;
    }
}
