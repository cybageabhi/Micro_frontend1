import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardSidebarComponent } from './Components/dashboard-sidebar/dashboard-sidebar.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardSidebarComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('../../../mfe1/src/app/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'myprofile',
        loadChildren: () => import('../../../mfe2/src/app/Components/my-profile/my-profile.module').then(m => m.MyProfileModule)
      },
      // { path: '', redirectTo: 'dashboard', pathMatch: 'full' } // Default route
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
