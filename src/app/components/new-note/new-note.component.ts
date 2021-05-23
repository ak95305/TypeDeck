import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NoteService } from 'src/app/note.service';
import { Note } from './../../note.model';

@Component({
  selector: 'app-new-note',
  templateUrl: './new-note.component.html',
  styleUrls: ['./new-note.component.scss']
})
export class NewNoteComponent implements OnInit {
  note: Note;
  noteIndex: number;
  oldNote: Note;
  oldTitle: String;
  oldDescription: String;

  constructor(private activateroute: ActivatedRoute, private noteService?: NoteService) {
    this.noteIndex = parseInt(this.activateroute.snapshot.paramMap.get('id'));
    if(this.noteIndex > -1){
      this.oldNote = noteService.notes[this.noteIndex];
    this.oldTitle = this.oldNote.title;
    this.oldDescription = this.oldNote.description;
    } else{
      return
    }
  }

  onSave(title: HTMLInputElement, description: HTMLInputElement){
    this.note = new Note(title.value, description.value);
    this.noteService.getNote(this.note, this.noteIndex);
  }
  ngOnInit(): void {
  }

}
