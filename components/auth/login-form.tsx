"use client"

import { CardWrapper } from "./card-wrapper"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { LoginSchema } from "@/schemas"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "../ui/form"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { LoginButton } from "./login-button"
import { FormError } from "../form-error"
import { FormSuccess } from "../form-success"
import { Login } from "../../actions/login"
import { useTransition, useState } from "react"


export const LoginForm = () => {
    const [error, setError] = useState<string | undefined>("");
    const [success, setSuccess] = useState<string | undefined>("");
    const [isPending, startTransition] = useTransition()

    const form = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: "",
            password: "",
        }
    })

    const onSubmit = (values: z.infer<typeof LoginSchema>) => {
        setError("")
        setSuccess("")

        startTransition(()=>{
            Login(values)
            .then((data) =>{
                setError(data.error)
                setSuccess(data.success)
            })
            .
        })
    }

    return(
        <CardWrapper
            headerLabel="Welcome"
            backButtonHref="/auth/register"
            backButtonLabel="Don't have an account?"
            showSocial
        >
            <Form {...form}>
                <form 
                onSubmit={form.handleSubmit(() => {})}
                className="space-y-6">   

                    <div
                    className="space-y-4">

                        <FormField 
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input 
                                    {...field}
                                    disabled={isPending}
                                    placeholder="example@example.com"
                                    type="email"
                                    />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}/>


                        <FormField 
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input 
                                    {...field}
                                    disabled={isPending}
                                    placeholder="******"
                                    type="password"
                                    />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}/>

                    </div>
                    <FormError message={error} />
                    <FormSuccess message={success} />
                    <Button
                    disabled={isPending}
                    type="submit"
                    className="w-full">
                        button
                    </Button>
                </form>
            </Form>
        </CardWrapper>
    )
}
