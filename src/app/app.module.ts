import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { LucideAngularModule, Home, Hash, Bell, Mail, Bookmark, Twitter, User, MoreHorizontal, Image, Laugh, List, Smile, CalendarClock, MapPin, MessageCircle, ArrowLeftRight, Heart, BarChart2, Share, Search } from 'lucide-angular';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { TweetComponent } from './components/tweet/tweet.component';
import { NewPostComponent } from './components/new-post/new-post.component';

import { MessagesService } from './services/messages.service';
import { AvatarComponent } from './components/avatar/avatar.component';
import { SearchComponent } from './components/search/search.component';
import { PeopleToFollowComponent } from './components/people-to-follow/people-to-follow.component';
import { TrendingComponent } from './components/trending/trending.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    TweetComponent,
    NewPostComponent,
    AvatarComponent,
    SearchComponent,
    PeopleToFollowComponent,
    TrendingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    LucideAngularModule.pick({ Home, Hash, Bell, Mail, Bookmark, Twitter, User, MoreHorizontal, Image, Laugh, List, Smile, CalendarClock, MapPin, MessageCircle, ArrowLeftRight, Heart, BarChart2, Share, Search })
  ],
  providers: [
    MessagesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
