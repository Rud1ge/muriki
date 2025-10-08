"use client";

import {useState} from "react";
import {signIn} from "next-auth/react";
import {LogIn} from "lucide-react";

export default function SignIn() {
    const [isLoading, setIsLoading] = useState(false);

    const handleSignIn = async () => {
        try {
            setIsLoading(true);
            await signIn("authentik");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <button
            type="button"
            className="flex items-center gap-1 cursor-pointer disabled:opacity-60"
            onClick={handleSignIn}
            disabled={isLoading}
        >
            {isLoading ? "Вход..." : "Авторизация"} <LogIn className="size-4"/>
        </button>
    );
}
