import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'demoLazy',
    loadChildren: () =>
      import(
        './Features/feature-first-module/feature-first-module.module'
      ).then((m) => m.FeatureFirstModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
