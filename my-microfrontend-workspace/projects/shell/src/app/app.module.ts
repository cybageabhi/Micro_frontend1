import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardModule } from '../../../mfe1/src/app/dashboard/dashboard.module';
import { DashboardSidebarComponent } from './Components/dashboard-sidebar/dashboard-sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardSidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
