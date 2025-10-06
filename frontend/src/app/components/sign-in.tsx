import {signIn} from "@/auth"
import {LogIn} from "lucide-react"

export default function SignIn() {
    return (
        <form
            action={async () => {
                "use server"
                await signIn("authentik")
            }}
        >
            <button type="submit" className="flex items-center gap-1 cursor-pointer">Авторизация <LogIn/></button>
        </form>
    )
}