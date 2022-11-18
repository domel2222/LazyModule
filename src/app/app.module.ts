import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeatureFirstModule } from './Features/feature-first-module/feature-first-module.module';
import { FeatureSecondModule } from './Features/feature-second-module/feature-second-module.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FeatureSecondModule,
    FeatureFirstModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
