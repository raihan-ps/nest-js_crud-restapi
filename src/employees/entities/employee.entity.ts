import { Schema, SchemaFactory, Prop } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class Employee extends Document {
    @Prop()
    name: string;

    @Prop()
    email: string;

    @Prop({ enum: ['INTERN', 'ADMIN', 'ENGINEER'] })
    role: 'INTERN' | 'ADMIN' | 'ENGINEER';

    @Prop({ default: Date.now })
    createdAt: Date;

    @Prop({ default: Date.now })
    updatedAt: Date;
}

export const EmployeeSchema = SchemaFactory.createForClass(Employee);
