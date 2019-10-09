import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {ThreedTableComponent} from "./components/threed-table/threed-table.component";
import {TableHomeComponent} from "./components/table-home/table-home.component";


const routes: Routes = [
  {
    path: '', component: TableHomeComponent, children: [

      {
        path: 'table', component: ThreedTableComponent
      },
      {
        path: '', redirectTo: 'table', pathMatch: 'full'
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ThreedRoutingModule {}
