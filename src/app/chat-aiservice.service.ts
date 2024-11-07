import { Injectable, input } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';

interface TextGenerationResponse {
  output: {
    choices: [
      {
        finish_reason: string;
        message: {
          role: string;
          content: string;
        }
      }
    ];
  };
  usage: {
    total_tokens: number;
    output_tokens: number;
    input_tokens: number;
  };
  request_id: string;
}

@Injectable({
  providedIn: 'root'
})
export class ChatAIServiceService {

  private apiUrl = environment.apiUrl;
  private apiKey = environment.apiKey;



  constructor(private httpClient: HttpClient) { }

  generateContent(inputMessage:string="你好！"): Observable<string> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.apiKey}`,
      'Content-Type': 'application/json'
    });

    const body = {
      "model": "qwen-max",
      "input": {
        "messages": [
          { "role": "system", "content": "你是柯南，你很幽默健谈，通常别人问你问题时你总能幽默回答，但是有时很抽象" },
          { "content": inputMessage, "role": "user" }
        ]
      },
      "parameters": {
        "temperature": 0.8,
        "seed": 55555,
        "result_format": "message"
      }
    };

    // 使用 map 操作符从响应中提取 content 字段
    return this.httpClient.post<TextGenerationResponse>(this.apiUrl, body, { headers }).pipe(
      map(response => response.output.choices[0].message.content)
    );
  }}
