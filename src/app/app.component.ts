import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NzInputModule } from 'ng-zorro-antd/input';
import { InputPracticeComponent } from "./input-practice/input-practice.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NzInputModule, InputPracticeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Proctice';
}
