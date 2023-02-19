import { Component } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  term:any =""

  onInput(event:Event) {
    this.term = (event.target as HTMLInputElement).value
  }

  onFormSubmit(event: any) {
    event.preventDefault();
    console.log(this.term)
  }
}
