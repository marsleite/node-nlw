import { Request, Response } from 'express';
import { AuthenticateUserService } from '../services/AuthenticateUserServices';

class AuthenticateUserController {
  async handle(req: Request, res: Response) {
    
    const service = new AuthenticateUserService();
    // service.execute(req.body);
  }
}