import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from '../nav/nav.component';
import { FooterComponent } from '../footer/footer.component';
import { CopyrightComponent } from '../copyright/copyright.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [FooterComponent, NavComponent, CopyrightComponent],
  imports: [CommonModule, RouterModule],
  exports: [FooterComponent, NavComponent],
})
export class LayoutModule {}
