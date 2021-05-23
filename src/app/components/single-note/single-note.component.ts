import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NoteService } from 'src/app/note.service';
import { Note } from "./../../note.model";

@Component({
  selector: 'app-single-note',
  templateUrl: './single-note.component.html',
  styleUrls: ['./single-note.component.scss']
})
export class SingleNoteComponent implements OnInit {
  noteIndex: number;
  note: Note;

  constructor(private router: ActivatedRoute, private noteService: NoteService){
    this.noteIndex = parseInt(this.router.snapshot.paramMap.get('id'));
    this.note = noteService.notes[this.noteIndex];
   }

  ngOnInit(): void {
  }

}
