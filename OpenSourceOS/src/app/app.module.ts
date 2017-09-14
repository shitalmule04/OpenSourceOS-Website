import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRouting } from './app.routing';
import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { AboutComponent } from './about.component';
import { ContactComponent } from './contact.component';
import { ProfileComponent } from './profile.component';
import { LoginComponent } from './login.component';
import { TestService } from './app.service';
import { appService2 } from './service1.component';

@NgModule({
    imports: [BrowserModule, AppRouting, FormsModule],
    declarations: [AppComponent, HomeComponent, AboutComponent, ContactComponent, ProfileComponent, LoginComponent, appService2 ],
    bootstrap: [AppComponent],
    providers: [TestService],
})
export class AppModule { }
