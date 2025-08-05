import {Component} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  imports: [
    NgOptimizedImage
  ],
  styleUrls: ['./header.css']
})

export class Header {}
