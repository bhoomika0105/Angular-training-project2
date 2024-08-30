import { Component ,OnInit} from '@angular/core';
import { homeService } from '../../assets/home.service';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrl: './user-table.component.scss'
})
export class UserTableComponent implements OnInit{

  ngOnInit(): void {
    this.displayDetails()
  }
  constructor(private service:homeService){}
  values:any=[];
displayDetails(){
 this.values=this.service.getDetailes();
}
}
