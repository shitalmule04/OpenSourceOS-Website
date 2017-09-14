import { Component } from '@angular/core';

@Component({
    selector: "login",
    templateUrl: `./login.component.html`,
    styleUrls: ['./login.component.css'],
})
export class LoginComponent {
    emailid: any = 'abc@gmail.com';      
    passwdord1: any ='abc1234';
    onButton(val1: any, val2: any)
    {
        if (val1 == this.emailid && val2 == this.passwdord1)
        {
            alert("Login Successfully..!!");
        }
        else
        {
            alert("Invalid Email or Password");
        }
    }
}
