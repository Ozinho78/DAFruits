import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SinglefruitComponent } from "./singlefruit/singlefruit.component";
import { FruitlistdataService } from '../fruitlistdata.service';

@Component({
  selector: 'app-fruitlist',
  standalone: true,
  imports: [CommonModule, SinglefruitComponent],
  templateUrl: './fruitlist.component.html',
  styleUrl: './fruitlist.component.scss'
})
export class FruitlistComponent {

  howItWorks = "not bad";

  fruitlistdata = inject(FruitlistdataService);

  // fontColorGood = 'green';
  // fontColorBad = 'red';

  addComment(comment:string, index: number){
    console.log(index,': ',comment);
    this.fruitlistdata.fruitlist[index].reviews.push({
      name: "Michael F.",
      text: comment
    });
  }

  numLog(index: number){
    console.log(index); 
  }

  nameLog(name: string){
    console.log(name); 
  }

  getRoundedStars(value: number): number {
    return Math.round(value);
  }

}
