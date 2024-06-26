import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { BaseSchema } from 'src/common/base.schema';

@Schema({ timestamps: true })
export class Link extends BaseSchema {
  @ApiProperty({ required: false })
  @Prop()
  title: string;

  @ApiProperty()
  @Prop({ required: true })
  target: string;

  @ApiProperty({ required: false })
  @Prop({ default: 302 })
  code: number;

  @Prop({ index: true, unique: true })
  id: number;

  @ApiProperty({ required: false })
  @Prop({ required: true, unique: true, index: true })
  slug: string;

  @ApiProperty({ required: false })
  @Prop()
  password: string;

  @ApiProperty({ required: false })
  @Prop()
  ttl: Date;

  @ApiProperty({ required: false })
  @Prop({ default: 'none' })
  strategy: 'timer' | 'none' | 'confirm';
}

export const LinkSchema = SchemaFactory.createForClass(Link);
