import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetbooksComponent } from './getbooks/getbooks.component';
import { AddbooksComponent } from './addbooks/addbooks.component';
import { UpdatebooksComponent } from './updatebooks/updatebooks.component';

@NgModule({
  declarations: [
    AppComponent,
    GetbooksComponent,
    AddbooksComponent,
    UpdatebooksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
