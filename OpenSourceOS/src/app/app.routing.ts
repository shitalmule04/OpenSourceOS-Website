import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';
import { AboutComponent } from './about.component';
import { ContactComponent } from './contact.component';
import { ProfileComponent } from './profile.component';
import { LoginComponent } from './login.component';
import { RouterModule, Routes } from '@angular/router';
import { appService2 } from './service1.component';

const routes: Routes = [
    { path: 'homeurl', component: HomeComponent },
    { path: 'abouturl', component: AboutComponent },
    { path: 'contacturl', component: ContactComponent },
    { path: 'profileurl', component: ProfileComponent },
    { path: 'loginurl', component: LoginComponent },
    { path: 'serviceurl', component: appService2 },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})

export class AppRouting {

}