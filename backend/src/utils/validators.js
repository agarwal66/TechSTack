const Joi = require("joi");

const registerSchema = Joi.object({
  name: Joi.string().min(2).max(50).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  confirmPassword: Joi.string()
    .valid(Joi.ref("password"))
    .required()
    .messages({
      "any.only": "Passwords do not match",
      "any.required": "Confirm password is required",
       }),
});

const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

const taskSchema = Joi.object({
  title: Joi.string().min(1).required(),
  description: Joi.string().allow(""),
  status: Joi.string().valid("pending", "done").optional(),
});

const profileUpdateSchema = Joi.object({
  name: Joi.string().min(2).max(50).optional(),
});

module.exports = {
  registerSchema,
  loginSchema,
  taskSchema,
  profileUpdateSchema,
};
