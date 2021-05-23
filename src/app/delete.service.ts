import { Injectable } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { NewNoteComponent } from "./components/new-note/new-note.component";
import { NoteListComponent } from "./components/note-list/note-list.component";

@Injectable()
export class DeleteService{
   constructor(private route: Router){
   }

   onDelete(){
       console.log(this.route.url)
   }
}