import joi from "joi";

export const transacoesSchema = joi.object({
    value: joi.string().required(),
    type: joi.string().required(),
    date: joi.string().required(),
    description: joi.string().required(),
});