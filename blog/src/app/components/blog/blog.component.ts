import {Component, EventEmitter, OnInit, Output, Input} from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {


  @Input() filterText: string = "";
  @Input() id: number = 0;

  public items$: any;

  constructor(private service: DataService) {
  }


  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.service.getAll().subscribe(response => {
      this.items$ = response;
    });
  }


}
