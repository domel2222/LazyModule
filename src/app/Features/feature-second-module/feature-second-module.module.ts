import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FeatureSecondModuleRoutingModule } from './feature-second-module-routing.module';
import { ChildSecondComponent } from './second/child-second/child-second.component';
import { SecondComponent } from './second/second.component';
import { ChildTwoSecondComponent } from './second/child-two-second/child-two-second.component';

@NgModule({
  declarations: [SecondComponent, ChildSecondComponent, ChildTwoSecondComponent],
  imports: [CommonModule, FeatureSecondModuleRoutingModule],
})
export class FeatureSecondModule {}
