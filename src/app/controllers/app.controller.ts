import { Controller, Get } from '@nestjs/common';

@Controller('/api')
export class AppController {
    @Get('/testAuth')
    getHello() {
        return {
            status: 'ok',
        };
    }

    @Get('/health')
    getHealthCheck() {
        return {
            status: 'ok',
        };
    }
}
