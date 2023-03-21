import { Component, ElementRef, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})


export class ContactComponent {
  @ViewChild('contactForm') myForm!: ElementRef;
  @ViewChild('nameField') nameField!: ElementRef;
  @ViewChild('mailField') mailField!: ElementRef;
  @ViewChild('messageField') messageField!: ElementRef;
  @ViewChild('submitBtn') submitBtn!: ElementRef;
  @ViewChild('loading') loading!: ElementRef;
  name: string;
  email: string;
  message: string;


  constructor(private http: HttpClient) { }

  onSubmit() {

    let nameField = this.nameField.nativeElement;
    let mailField = this.mailField.nativeElement;
    let messageField = this.messageField.nativeElement;
    let submitBtn = this.submitBtn.nativeElement;
    let loading = this.loading.nativeElement;

    nameField.disabled = true;
    mailField.disabled = true;
    messageField.disabled = true;
    submitBtn.disabled = true;
    loading.classList.remove("d-none");
    //Animation HIER
    submitBtn.classList.add("bg-red");

    var textMessage:string = mailField.value + " " + messageField.value;

    let fd = new FormData();
    fd.append('name', nameField.value);
    fd.append('mail', mailField.value);
    fd.append('message', textMessage);

    fetch('send_mail/send_mail.php', {
      method: 'POST',
      body: fd
    });

    alert("Mail wurde versendet!")
    submitBtn.classList.remove("bg-red");
    loading.classList.add("d-none");
    nameField.disabled = false;
    mailField.disabled = false;
    messageField.disabled = false;
    submitBtn.disabled = false;


  }
}

