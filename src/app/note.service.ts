import { Injectable, Input } from "@angular/core";
import { Note } from "./note.model";



@Injectable()
export class NoteService{
    note: Note;
    notes: Note[] = [
        new Note("Chemistry Notes", "Alkanes, Alkenes, Alkynes"),
        new Note("Accounts", "SBI Bank A/C no: 652022461470"),
        new Note("Shopping List", "Fish, Milk, Eggs, Banana"),
      ];

    constructor(){
    }

    getNote(note: Note, noteIndex: number){
        if(note.title !== "" || note.description !== ""){
         if(isNaN(noteIndex)){
            this.note = note;
            this.notes.unshift(this.note);
         }else{
            this.note = note;
            this.notes.splice(noteIndex, 1)
            this.notes.unshift(this.note);
         }
        } else {
            return;
        }
    }

    delete(index){
        this.notes.splice(index, 1)
    }    

}