import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Note } from './note.model';
import { NoteService } from './note.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  notes: Note[];
  constructor(private router: Router, 
    private noteService: NoteService){
    this.notes = noteService.notes;
  }

  isEmpty(){
    if(this.notes.length === 0){
      return true;
    } else{
      return false;
    }
  }
}
