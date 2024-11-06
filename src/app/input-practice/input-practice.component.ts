import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { ChatAIServiceService } from '../chat-aiservice.service';

@Component({
  selector: 'app-input-practice',
  standalone: true,
  imports: [FormsModule,NzInputModule,NzSpaceModule,NzIconModule,NzCardModule,NzButtonModule],
  templateUrl: './input-practice.component.html',
  styleUrl: './input-practice.component.scss'
})
export class InputPracticeComponent {
  constructor(private chatAIService:ChatAIServiceService){

  }
  inputContext=""
  responseContent=""
  isLoading=false

  generateResponse(){
    this.isLoading=true
    this.chatAIService.generateContent(this.inputContext).subscribe(
      value=>{this.responseContent=value,
        this.isLoading=false
      },
      error=>{console.log(error),
        this.isLoading=false
      }
    )
  }

  }
import { NzButtonModule } from 'ng-zorro-antd/button';




