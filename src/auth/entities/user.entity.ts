import { Prop, SchemaFactory } from "@nestjs/mongoose";

export class User {
  @Prop({unique:true, required: true})
  email: string;

  @Prop({required:true})
  name: string;

  @Prop({minlength:6, required:true})
  password: string;

  @Prop({default:true})
  isActive: string[];

  @Prop({type:[String], default:['user'] })
  roles: string[];
}

export const UserSchema = SchemaFactory.createForClass(User)
