import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ViewPostComponent } from './view-post/view-post.component';

const routes: Routes = [
	{ path: '', redirectTo: '/home', pathMatch: 'full' },
 	{ path: 'home', component: DashboardComponent },
 	{ path: 'about', component: AboutComponent },
 	{ path: 'post/:slug', component: ViewPostComponent },
 	{ path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
