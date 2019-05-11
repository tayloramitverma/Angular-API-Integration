import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MydataserviceService } from '../mydataservice.service';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.css'],
  providers: [MydataserviceService]
})
export class ViewPostComponent implements OnInit {

	blog: any = [];
	slug: string;
  constructor(private route: ActivatedRoute, private service: MydataserviceService) { }

  ngOnInit() {
  	
  	this.getPostDetail();
  }

  getPostDetail(){
  		 this.slug = this.route.snapshot.paramMap.get('slug');
  		this.service.getMyBlogDetail(this.slug).subscribe((res) => {
    		this.blog = res;
    		console.log(res);
    	});
  }

}
