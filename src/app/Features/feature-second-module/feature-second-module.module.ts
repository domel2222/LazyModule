import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FeatureSecondModuleRoutingModule } from './feature-second-module-routing.module';
import { ChildSecondComponent } from './second/child-second/child-second.component';
import { ChildTwoSecondComponent } from './second/child-two-second/child-two-second.component';
import { SecondComponent } from './second/second.component';

@NgModule({
  declarations: [
    SecondComponent,
    ChildSecondComponent,
    ChildTwoSecondComponent,
  ],
  imports: [CommonModule, RouterModule],
})
export class FeatureSecondModule {}
