import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-text',
  templateUrl: './edit-text.component.html',
  styleUrls: ['./edit-text.component.css']
})
export class EditTextComponent implements OnInit {

  public textArea: string = '';
  public isEmojiPickerVisible?: boolean;
  public addEmoji(event) {
    this.textArea = `${this.textArea}${event.emoji.native}`;
    this.isEmojiPickerVisible = false;
  }

  ckeditorContent;

  constructor() { }

  ngOnInit(): void {

    let fileButtonContainer = document.getElementById('button-file-img');
    let file = document.getElementById('file-img-input');

    fileButtonContainer?.addEventListener('click', () => {
      file?.click();
    });

    const openChatButton = document.querySelector("#open-chat");
    const closeChatButton = document.querySelector("#close-chat");
    const chat = document.querySelector('#chat-popup');
    
    const toggleChatPopup = () => {
      chat?.classList.toggle("hide");
    };
    
    [openChatButton, closeChatButton].forEach((el) => {
      el?.addEventListener("click", () => toggleChatPopup());
    });

    const openDivButton = document.querySelector("#open-div");
    const div = document.querySelector('#div-chat');
    
    const toggleDiv = () => {
      div?.classList.toggle("hide");
    };
    
    [openDivButton].forEach((el) => {
      el?.addEventListener("click", () => toggleDiv());
    });

  }

}
