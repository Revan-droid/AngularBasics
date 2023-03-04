
import { Component } from "@angular/core";
import { CoursesService } from "./courses.service";
@Component({
    selector:"courses",
    template:`<h1>{{"Title:"+getTitle()}}<h1>
            <ul>
                <li *ngFor="let avatar of avatars">
                    {{avatar}}  
                </li>
            </ul>
              `
})
export class CoursesComponent{
    title="List of Dattathreyaa avatars";
    avatars;
    constructor(service :CoursesService){//dependency injection
        this.avatars=service.getavatars();
    }
    getTitle(){
        return this.title;
    }
}