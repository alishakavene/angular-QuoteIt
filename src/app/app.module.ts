import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import{ FormsModule }from '@angular/forms';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { quoteComponent } from './quote/quote.component';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import { HighLightDirective } from './highlight.directive';
import { UnderlineDirective } from './underline.directive';
import { DirectiveDirective } from './directive.directive';





@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: quoteComponent },
    ]),
    
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    quoteComponent,
    QuoteFormComponent,
    HighLightDirective,
    UnderlineDirective,
    DirectiveDirective,
   
    
    
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }


