import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: 'threed', loadChildren: () => import('./modules/threed/threed.module').then(m => m.ThreedModule)},
  {path:'', redirectTo:'threed', pathMatch:'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],// <-- debugging purposes only
  exports: [RouterModule]
})
export class AppRoutingModule { }
