import {Component} from "@angular/core";
import {HttpClient} from "@angular/common/http";
//TODO przykładowe Demo, do zaorania w późniejszej fazie projektu
@Component({
  selector: 'app-cms-frontend',
  templateUrl: 'demo.component.html',
  styleUrl: 'demo.component.css'
})
export class DemoComponent {

  data;

  constructor() {

    //zamockowane dane
    this.data = [
      {componentId: 'title', content: 'tytuł naszej strony'},
      {componentId: 'imageGallery', src: 'https://www.esencjakulinarna.pl/wp-content/uploads/2023/08/prosty-chleb-pszenny.jpg', style: 'width: 500px'},

      {componentId: 'description', content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'},
      {componentId: 'imageGallery', src: 'https://variety.com/wp-content/uploads/2022/04/MCDSHFO_EC033.jpg', style: 'width: 700px'},
    ]
  }

}
