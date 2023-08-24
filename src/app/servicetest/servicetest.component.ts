import { Component, OnInit } from '@angular/core';
import { PostService } from 'services/post.service';

@Component({
  selector: 'app-servicetest',
  templateUrl: './servicetest.component.html',
  styleUrls: ['./servicetest.component.css']
})
export class ServicetestComponent implements OnInit {
  posts:any;

  constructor(private service:PostService) {}
  
  ngOnInit() {
      this.service.getAllData()
      // to include the service layer in any angular component, 
      // we must call the subscribe method as follows.
        .subscribe(response => {
          this.posts = response;
        });
  }

}
