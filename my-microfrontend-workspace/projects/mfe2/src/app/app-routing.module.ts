import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyProfileComponent } from './Components/my-profile/my-profile.component';

const routes: Routes = [
  {
    path:"",redirectTo:"myprofile",pathMatch:"full"
  },
  {
    path:"myprfile",component:MyProfileComponent
    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
