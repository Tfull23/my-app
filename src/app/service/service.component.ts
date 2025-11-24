import { Component } from '@angular/core';
import { HighlightDirective } from "./highlight.directive";

@Component({
  selector: 'app-service',
  imports: [HighlightDirective],
  templateUrl: './service.component.html',
  styleUrl: './service.component.css'
})
export class ServiceComponent {

}
