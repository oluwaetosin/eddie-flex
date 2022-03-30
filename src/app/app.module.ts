import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { FooterComponent } from './footer/footer.component';
import { LayoutModule } from './layout/layout.module';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [AppComponent, CardComponent],
  imports: [BrowserModule, AppRoutingModule, LayoutModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
