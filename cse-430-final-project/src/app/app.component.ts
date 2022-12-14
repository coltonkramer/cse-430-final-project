import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedFeature: string = 'home';

  switchView(selectedFeature: string){
    this.selectedFeature = selectedFeature;
  }
  onNavigate(feature: string){
    this.selectedFeature = feature;
  }

}
