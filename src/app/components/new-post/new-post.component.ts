import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

  toggleShowTweetLimitCount() {
    if(this.tweetMessage.length > 0 ) {
      this.showCountChars = true;
      this.tweetRemaining = this.tweetMaxLength - this.tweetMessage.length;
    } else {
      this.showCountChars = false;
    }
  }

  toggleShowDivider() {
    this.showDivider = true;
  }

  rowsWhenTweetBoxInFocus(focus: boolean) {
    focus ? this.rows = 2 : this.rows = 1;
  }

  postTweet() {
    alert(this.tweetMessage)
    this.tweetMessage = '';
  }

}
