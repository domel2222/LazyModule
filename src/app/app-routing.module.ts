import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildSecondComponent } from './Features/feature-second-module/second/child-second/child-second.component';
import { ChildTwoSecondComponent } from './Features/feature-second-module/second/child-two-second/child-two-second.component';
import { SecondComponent } from './Features/feature-second-module/second/second.component';

const routes: Routes = [
  {
    path: 'demoLazy',
    loadChildren: () =>
      import(
        './Features/feature-first-module/feature-first-module.module'
      ).then((m) => m.FeatureFirstModule),
  },
  { path: '', redirectTo: 'secondEager', pathMatch: 'full' },
  {
    path: 'secondEager',
    component: SecondComponent,
    children: [
      { path: 'childsecond1', component: ChildSecondComponent },
      { path: 'childsecond2', component: ChildTwoSecondComponent },
      { path: '**', redirectTo: 'secondEager' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
