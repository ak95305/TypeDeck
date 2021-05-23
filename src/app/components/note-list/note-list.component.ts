import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/note.service';
import { Note } from './../../note.model';
import { ActivatedRoute, Router, RoutesRecognized } from '@angular/router';
import { DeleteService } from './../../delete.service';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.scss'],
})
export class NoteListComponent implements OnInit {
  notes: Note[];
  index;

  constructor(
    private noteService: NoteService,
    private router: Router,
  ) {
    this.notes = noteService.notes;
  }

  onSelect(note) {
    this.index = this.router.navigate(['/single-note', this.notes.indexOf(note)]);
  }

  onDelete(note) {
    this.index = this.notes.indexOf(note);
    this.notes.splice(this.index, 1);
  }

  ngOnInit(): void {}
}
