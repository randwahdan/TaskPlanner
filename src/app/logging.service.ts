import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {
  log(message: string) {
    const timestamp = new Date().toLocaleTimeString();
    console.log(`[${timestamp}]: ${message}`)
  }
}
