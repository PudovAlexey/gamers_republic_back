import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { UserEntity } from 'src/users/entities/user.entity';
import { CreateUserInput } from 'src/users/inputs/create.user.input';
import { UpdateUserInput } from 'src/users/inputs/update.user.input';
import { UserService } from 'src/users/services/user/user.service';

@Resolver('User')
export class UserResolver {
  constructor(private userService: UserService) {}

  @Query(() => [UserEntity])
  async getAllUsers(): Promise<UserEntity[]> {
    return await this.userService.getAllUsers();
  }

  @Query(() => UserEntity)
  async getUserById(@Args('getUserById') id: number): Promise<UserEntity> {
    return await this.userService.getUserById(id);
  }

  @Mutation(() => UserEntity)
  async createUser(
    @Args('createUser') createUserInput: CreateUserInput,
  ): Promise<UserEntity> {
    return await this.userService.createIser(createUserInput);
  }
  @Mutation(() => UserEntity)
  async updateUserById(
    @Args('updateUserById') updateUserInput: UpdateUserInput,
  ): Promise<UserEntity> {
    return await this.userService.updateUserById(updateUserInput);
  }

  @Mutation(() => Number)
  async removeUserById(@Args('removeUserById') id: number): Promise<number> {
    return await this.userService.removeUserById(id);
  }
}
