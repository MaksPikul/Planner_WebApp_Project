import * as z from "zod"

export const LoginSchema = z.object({
    email: z.string().email({
        message: "Email is required"
    }),
    password: z.string().min(1, {
        message: "Password is required"
    }),
    code: z.optional(z.string()),
})

export const RegisterSchema = z.object({
    name: z.string().min(3,{
        message: "Minimum name length - 3 characters"
    }),
    email: z.string().email({
        message: "Email is required"
    }),
    password: z.string().min(6, {
        message: "Minimum password length - 6 characters"
    }),
})

export const ResetSchema = z.object({
    email: z.string().email({
        message: "Email is required"
    }),
})

export const NewPasswordSchema = z.object({
    password: z.string().min(6,{
        message: "Minimum password length - 6 characters"
    }),
})

export const createBoardSchema = z.object({
    name: z.string().min(1,{
        message: "Board name required"
    }),
    imageUrl: z.string()
})