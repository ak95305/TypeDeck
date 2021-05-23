import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewNoteComponent } from './components/new-note/new-note.component';
import { EmptyBoxComponent } from './components/empty-box/empty-box.component';
import { SingleNoteComponent } from './components/single-note/single-note.component';
import { NoteListComponent } from './components/note-list/note-list.component';
import { NoteService } from './note.service';
import { DeleteService } from './delete.service';

let routes: Routes = [
  {path: '', redirectTo: '/notes', pathMatch: 'full'},
  {path: "notes", component: NoteListComponent},
  {path: "new-note", component: NewNoteComponent},
  {path: "single-note/:id", component: NewNoteComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    NewNoteComponent,
    EmptyBoxComponent,
    SingleNoteComponent,
    NoteListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [NoteService, DeleteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
