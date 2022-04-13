import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { FooterComponent } from './footer/footer.component';
import { LayoutModule } from './layout/layout.module';
import { NavComponent } from './nav/nav.component';
import { MycardComponent } from './mycard/mycard.component';
import { MyListComponent } from './my-list/my-list.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [AppComponent, CardComponent, MycardComponent, MyListComponent],
  imports: [BrowserModule, AppRoutingModule, LayoutModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
