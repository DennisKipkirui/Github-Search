import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule, } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import {ProfileComponent} from './profile/profile.component'
import { ProfileService } from './services/profile.service';
import { HighlightDirective } from './highlight.directive';
import { DateAgoPipe } from './pipes/date-ago.pipe';
import { AboutComponent } from './about/about.component';




@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    // routingComponents,
    NavbarComponent,
    HighlightDirective,
    DateAgoPipe,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
