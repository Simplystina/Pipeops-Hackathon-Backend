"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const InviteBusiness = {
    body: joi_1.default.object().keys({
        email: joi_1.default.string().email().required()
    })
};
const login = {
    body: joi_1.default.object().keys({
        email: joi_1.default.string().email().required(),
        password: joi_1.default.string().required()
    })
};
const signup = {
    body: joi_1.default.object().keys({
        email: joi_1.default.string().email().required(),
        password: joi_1.default.string().required(),
        firstName: joi_1.default.string().required(),
        lastName: joi_1.default.string().required()
    })
};
exports.default = {
    InviteBusiness,
    login,
    signup
};
