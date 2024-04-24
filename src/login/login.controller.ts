import { Controller,Post,Req} from '@nestjs/common';
import { stringify } from 'querystring';

@Controller('login')
export class LoginController {
    @Post()
    EfetuarLogin(@Req() request: Request): Request{
        return request;
    }
}
