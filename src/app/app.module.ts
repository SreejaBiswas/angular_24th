import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PipetestComponent } from './pipetest/pipetest.component';
import { TrimPipe } from 'src/pipes/trim.pipe';
import { ServicetestComponent } from './servicetest/servicetest.component';

@NgModule({
  declarations: [
    AppComponent,
    PipetestComponent,
    TrimPipe,
    ServicetestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
