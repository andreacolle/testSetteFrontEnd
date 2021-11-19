import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticoliComponent } from './articoli/articoli.component';
import { ArticoliDataService } from './articoli/articoli-data.service';

@NgModule({
  declarations: [
    AppComponent,
    ArticoliComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ArticoliDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
