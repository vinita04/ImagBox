import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ImagBoxApp';
  BoxNumber=6;
	imageSrc=[];
  imageData={};
  Imglocation='assets/defaultImage.jpg';
  ngOnInit(): void {
    for(let i=0; i<this.BoxNumber; i++){
      this.imageData['location']=this.Imglocation;
      this.imageSrc.push(Object.assign({}, this.imageData));
      
    }
  }
  deleteDisable(row : any){
		if(this.imageSrc[row]!=undefined && this.imageSrc[row]['location']!=this.Imglocation){
			return true;
		}
		return false;
  };
  clearImg(row : any){
      this.imageSrc.splice(row,1);
      this.imageData['location']=this.Imglocation;
      this.imageSrc.push(Object.assign({}, this.imageData));
  }
  
   clickUpload() {
		for(var j=0;j<this.imageSrc.length;j++){
			if(this.imageSrc[j]['location']==this.Imglocation){
        let element:HTMLElement=document.getElementById('box'+j) as HTMLElement;
        element.click();
        break;
			}
		}
  }
 
  onSelectFile(event : any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        for(var k=0;k<this.imageSrc.length;k++){
          if(this.imageSrc[k]['location']==this.Imglocation){
            this.imageSrc[k]['location']=event.target.result;
            break;
          }
        }
      }
    }
  }
}
