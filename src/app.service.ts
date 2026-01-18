import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    let n = 0;
    for (let i = 0; i < 1000000000; i++) {
      n++
    }
    return n.toString();
  }
}
