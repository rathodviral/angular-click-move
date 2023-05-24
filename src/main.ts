import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="container">
    <h1>Hello from {{name}}!</h1>
    <hr/>
      <div class="row">
        <div class="col-3 card flex-row py-2">
          <span class="badge text-bg-primary mx-1" *ngFor="let item of lList; let i = index" [ngClass]="{'text-bg-danger':lActive.value === item}" (click)="lActive = {value:item, index:i}">{{item}}</span>
        </div>
        <div class="col">
          <div class="btn-group-vertical" role="group" aria-label="Vertical button group">
            <button type="button" class="btn btn-primary" (click)="mListLeft()" [disabled]="!mActive.value">Left</button>
            <button type="button" class="btn btn-primary" (click)="lListRight()" [disabled]="!lActive.value">Right</button>
          </div>
        </div>
        <div class="col-3 card py-2 flex-row">
          <span class="badge text-bg-primary mx-1" *ngFor="let item of mList; let i = index" [ngClass]="{'text-bg-danger':mActive.value === item}" (click)="mActive = {value:item, index:i}">{{item}}</span>
        </div>
        <div class="col">
          <div class="btn-group-vertical" role="group" aria-label="Vertical button group">
            <button type="button" class="btn btn-primary" (click)="rListLeft()" [disabled]="!rActive.value">Left</button>
            <button type="button" class="btn btn-primary" (click)="mListRight()" [disabled]="!mActive.value">Right</button>
          </div>
        </div>
        <div class="col-3 card py-2 flex-row">
          <span class="badge text-bg-primary mx-1" *ngFor="let item of rList; let i = index" [ngClass]="{'text-bg-danger':rActive.value === item}" (click)="rActive = {value:item, index:i}">{{item}}</span>
        </div>
      </div>
    </div>
  `,
})
export class App {
  name = 'Angular';
  lList: any[] = ['item1', 'item2', 'item3'];
  mList: any[] = [];
  rList: any[] = [];
  lActive: any = { value: '', index: '' };
  mActive: any = { value: '', index: '' };
  rActive: any = { value: '', index: '' };

  lListRight() {
    this.lList.splice(this.lActive.index, 1);
    this.mList.push(this.lActive.value);
    this.lActive = { value: '', index: '' };
  }

  mListLeft() {
    this.mList.splice(this.mActive.index, 1);
    this.lList.push(this.mActive.value);
    this.mActive = { value: '', index: '' };
  }

  mListRight() {
    this.mList.splice(this.mActive.index, 1);
    this.rList.push(this.mActive.value);
    this.mActive = { value: '', index: '' };
  }

  rListLeft() {
    this.rList.splice(this.rActive.index, 1);
    this.mList.push(this.rActive.value);
    this.rActive = { value: '', index: '' };
  }
}

bootstrapApplication(App);
