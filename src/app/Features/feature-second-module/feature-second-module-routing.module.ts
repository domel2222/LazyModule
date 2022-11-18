import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildSecondComponent } from './second/child-second/child-second.component';
import { SecondComponent } from './second/second.component';

const routes: Routes = [
  {
    path: 'secondEager',
    component: SecondComponent,
    children: [
      { path: 'childsecond1', component: ChildSecondComponent },
      { path: '**', redirectTo: 'secondEager' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeatureSecondModuleRoutingModule {}
