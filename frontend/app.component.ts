import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { HttpClient} from '@angular/common/http';

export class dataModel
{
  id?:number;
  userid:number;
  Name: string;
  Email: string;
  ContactNum: Number;
  Address: string
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  public clientsData : string;
 
  ngOnInit() {
    this.user='Submit';
    this.getdata();
   
}
  private url = "http://localhost:3000/customers";
  postId;
  user;
  activeindex=-1;
  constructor(private http: HttpClient) { }
  mydata= [];
  data:dataModel=new dataModel();
  
  onSubmit(form:NgForm):void
  {
if (this.user=='Submit')
{
    console.log(form.value);
    console.log(this.data.userid);
    this.http.post<any>('http://localhost:3000/customers', {
      userid: this.data.userid,
      Name: this.data.Name,
      Email: this.data.Email,
      ContactNum: this.data.ContactNum,
      Address:this.data.Address,
    })
    .subscribe(data => {
      this.getdata();
    })
  }
  else
  {
    this.update();
  }
    
  }
  update()
  {
    console.log(this.activeindex);
    this.http.patch('http://localhost:3000/customers/'+this.activeindex, {
      id:this.activeindex,
      userid: this.data.userid,
      Name: this.data.Name,
      Email: this.data.Email,
      ContactNum: this.data.ContactNum,
      Address:this.data.Address,
    })
    .subscribe(data => {
     
      this.getdata();
    })
  }
  delete(id)
  {
    
    return this.http.delete<any>('http://localhost:3000/customers/'+id)
    .subscribe((res: any[])=>{
      
      this.getdata();
    } )
  }
  edit(obj) {
   
    console.log(obj);
    this.user='Update';
    this.data.userid=obj.userid,
    this.data.Name=obj.Name,
    this.data.Email=obj.Email,
    this.data.ContactNum=obj.ContactNum,
    this.data.Address=obj.Address,
    this.activeindex=obj.id;
  }
  getdata(){
    
    return this.http.get<any>(this.url)
    .subscribe((res: any[])=>{
      this.mydata= res;
    } )
     
  }
 
}
