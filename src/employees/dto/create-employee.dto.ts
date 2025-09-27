import { IsEmail, IsEnum, IsNotEmpty, IsString } from "class-validator";

export class CreateEmployeeDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsNotEmpty({ message: 'Email is required' })
    @IsEmail({}, { message: 'Invalid email format' })
    email: string;

    @IsEnum(["INTERN", "ENGINEER", "ADMIN"],{
        message: 'Valid role required'
    })
    role: "INTERN" | "ENGINEER" | "ADMIN";
}
