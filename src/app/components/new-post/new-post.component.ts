import { Component, OnInit } from '@angular/core';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {
  tweetMessage: string = '';
  tweetMaxLength: number = 240;
  tweetRemaining: number = this.tweetMaxLength;
  showCountChars: boolean = false;
  showDivider: boolean = false;
  rows: number = 1;
  disabledButton: boolean = true;

  constructor(private service: MessagesService) { }

  ngOnInit(): void {
  }

  showTweetLimitCount() {
    if(this.tweetMessage.length > 0 ) {
      this.showCountChars = true;
      this.tweetRemaining = this.tweetMaxLength - this.tweetMessage.length;
      this.disabledButton = false;
    } else {
      this.showCountChars = false;
      this.disabledButton = true;
    }
  }

  showDividerAndIncreaseRows() {
    this.showDivider = true;
    this.rows = 2;
  }

  postTweet() {
    this.service.addMessage(this.tweetMessage);
    this.tweetMessage = '';
    this.tweetRemaining = this.tweetMaxLength;
    this.showCountChars = false;
    this.showDivider = false;
    this.rows = 1;
    this.disabledButton = true;
  }

}
