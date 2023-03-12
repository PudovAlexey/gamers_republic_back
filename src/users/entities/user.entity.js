"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UserEntity = void 0;
var graphql_1 = require("@nestjs/graphql");
var typeorm_1 = require("typeorm");
var UserEntity = /** @class */ (function () {
    function UserEntity() {
    }
    __decorate([
        (0, graphql_1.Field)(function () { return graphql_1.ID; }),
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], UserEntity.prototype, "id");
    __decorate([
        (0, graphql_1.Field)(),
        (0, typeorm_1.CreateDateColumn)()
    ], UserEntity.prototype, "createdAt");
    __decorate([
        (0, graphql_1.Field)({ nullable: true }),
        (0, typeorm_1.UpdateDateColumn)({ nullable: true })
    ], UserEntity.prototype, "updatedAt");
    __decorate([
        (0, graphql_1.Field)(),
        (0, typeorm_1.Column)()
    ], UserEntity.prototype, "email");
    __decorate([
        (0, graphql_1.Field)(),
        (0, typeorm_1.Column)()
    ], UserEntity.prototype, "name");
    UserEntity = __decorate([
        (0, graphql_1.ObjectType)(),
        (0, typeorm_1.Entity)('users')
    ], UserEntity);
    return UserEntity;
}());
exports.UserEntity = UserEntity;
