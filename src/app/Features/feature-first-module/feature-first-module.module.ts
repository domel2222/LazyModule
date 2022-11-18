import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FeatureFirstModuleRoutingModule } from './feature-first-module-routing.module';
import { FirstComponent } from './first/first.component';

@NgModule({
  declarations: [FirstComponent],
  imports: [CommonModule, FeatureFirstModuleRoutingModule],
})
export class FeatureFirstModule {}
