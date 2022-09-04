import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { HighlightedDirective } from './directives/highlighted.directive';
import { NgxUnlessDirective } from './directives/ngx-unless.directive';
import { HeightDirective } from './directives/height.directive';
import { StructuralDirective } from './directives/structural.directive';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    HighlightedDirective,
    NgxUnlessDirective,
    HeightDirective,
    StructuralDirective
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
