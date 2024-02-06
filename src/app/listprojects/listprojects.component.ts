import { Component } from '@angular/core';
import { ExamenService } from '../service/examen.service';

@Component({
  selector: 'app-listprojects',
  templateUrl: './listprojects.component.html',
  styleUrls: ['./listprojects.component.css']
})
export class ListprojectsComponent {
constructor(private myService : ExamenService){}
projects : any
ngOnInit(){
  this.myService.fetchProjects().subscribe(
    data => {
      console.log(data)
      this.projects = data
    }
  )
}
}
