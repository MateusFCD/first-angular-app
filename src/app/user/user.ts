import {Component, Input, Output, EventEmitter} from '@angular/core';

interface UserProp {
  id: string;
  name: string;
  avatar: string;
}

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {
  @Input({required: true}) user!: UserProp;
  @Output() select = new EventEmitter();

  get imagePath() {
    return 'assets/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
