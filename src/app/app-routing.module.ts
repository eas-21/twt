import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './shared/admin-layout/admin-layout.component';
import { HomeComponent } from './core/home/home.component';
import { TwtServicesComponent } from './core/twt-services/twt-services.component';
import { IotComponent } from './core/twt-services/iot/iot.component';

const routes: Routes = [{
  path:'',component:AdminLayoutComponent,

children:[
{
  path:'',component:HomeComponent,
  loadChildren:()=>import('../app/core/home/home.module').then(m=>m.HomeModule)
},
{
  path:'service',component:TwtServicesComponent,
  loadChildren:()=>import('../app/core/home/home.module').then(m=>m.HomeModule)
},
{path:'IOT', component: IotComponent},
]}
]

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    scrollPositionRestoration: 'top'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
