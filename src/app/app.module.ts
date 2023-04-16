import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { LucideAngularModule, Home, Hash, Bell, Mail, Bookmark, Twitter, User, MoreHorizontal, Image, Laugh, List, Smile, CalendarClock, MapPin } from 'lucide-angular';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { TweetComponent } from './components/tweet/tweet.component';
import { NewPostComponent } from './components/new-post/new-post.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    TweetComponent,
    NewPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    LucideAngularModule.pick({ Home, Hash, Bell, Mail, Bookmark, Twitter, User, MoreHorizontal, Image, Laugh, List, Smile, CalendarClock, MapPin })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
