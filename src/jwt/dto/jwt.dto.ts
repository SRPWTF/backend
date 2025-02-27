import { IsNotEmpty, IsString } from 'class-validator';

export class JwtDto {
  @IsString()
  @IsNotEmpty()
  accessToken: string;

  @IsString()
  @IsNotEmpty()
  refreshToken: string;
}
