import { Field, ID, ObjectType } from "@nestjs/graphql";
import { CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn, Column, Entity } from "typeorm";

@ObjectType()
@Entity('users')
export class UserEntity {
    @Field(() => ID)
    @PrimaryGeneratedColumn()
    id: number;

    @Field()
    @CreateDateColumn()
    createdAt: Date;

    @Field({nullable: true})
    @UpdateDateColumn({nullable: true})
    updatedAt: Date;

    @Field()
    @Column()
    email: string;

    @Field()
    @Column()
    name: string;
}