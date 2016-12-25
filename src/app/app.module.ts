import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule, routedComponents } from './app-routing.module';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent, routedComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: []
})
export class AppModule {}
