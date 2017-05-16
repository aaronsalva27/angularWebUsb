import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `

<button md-button>Click me!</button>
<md-spinner></md-spinner>

<md-card class="example-card">
  <md-card-header>
    <div md-card-avatar class="example-header-image"></div>
    <md-card-title>Shiba Inu</md-card-title>
    <md-card-subtitle>Dog Breed</md-card-subtitle>
  </md-card-header>
  <md-card-content>
    <p>
      The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
      A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
      bred for hunting.
    </p>
  </md-card-content>
  <md-card-actions>
    <button md-button>LIKE</button>
    <button md-button>SHARE</button>
  </md-card-actions>
</md-card>

`
})
export class AboutComponent { }
