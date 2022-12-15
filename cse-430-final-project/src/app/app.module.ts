import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from "@angular/common/http"

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header/header.component';
import { HomeComponent } from './home/home.component';
import { myClimbsComponent } from './my-climbs/my-climbs.component';
import { myClimbsListComponent } from './my-climbs/my-climbs-list/my-climbs-list.component';
import { myClimbsItemComponent } from './my-climbs/my-climbs-item/my-climbs-item.component';
import { myClimbsCreateComponent } from './my-climbs/my-climbs-create/my-climbs-create.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'home', component: HomeComponent},
  {path: 'my-climbs', component: myClimbsComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    myClimbsComponent,
    myClimbsListComponent,
    myClimbsItemComponent,
    myClimbsCreateComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
