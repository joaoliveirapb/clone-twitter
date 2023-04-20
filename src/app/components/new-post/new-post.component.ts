import { Component, Input, OnInit } from '@angular/core';
import { MessagesService } from 'src/app/services/messages.service';
import { ModalService } from 'src/app/services/modal.service';

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
  @Input() lines: string = '0';
  disabledButton: boolean = true;

  constructor(private service: MessagesService, private modalService: ModalService) { }

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
    if(this.lines === '1') {
      this.lines = '2';
    }
  }

  postTweet() {
    this.service.addMessage(this.tweetMessage);
    this.tweetMessage = '';
    this.tweetRemaining = this.tweetMaxLength;
    this.showCountChars = false;
    this.showDivider = false;
    if(this.lines === '2') this.lines = '1';
    this.disabledButton = true;
    this.modalService.closeModalNewPost();
  }

}
