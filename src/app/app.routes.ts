import { Routes } from '@angular/router';
import { HomeHomeComponent } from './home-home/home-home.component';
import { ContactHomeComponent } from './contact-home/contact-home.component';
import { ProjectComponent } from './project/project.component';
import { ServiceComponent } from './service/service.component';

export const routes: Routes = [
  {path: 'home', component: HomeHomeComponent},
  {path: 'contact', component: ContactHomeComponent},
  {path: 'project', component: ProjectComponent},
  {path: 'service', component: ServiceComponent},
  { path: '' , redirectTo:'/home', pathMatch:'full' }
];
