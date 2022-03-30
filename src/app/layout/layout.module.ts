import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from '../nav/nav.component';
import { FooterComponent } from '../footer/footer.component';
import { CopyrightComponent } from '../copyright/copyright.component';

@NgModule({
  declarations: [FooterComponent, NavComponent, CopyrightComponent],
  imports: [CommonModule],
  exports: [FooterComponent, NavComponent],
})
export class LayoutModule {}
