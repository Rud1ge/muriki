"use client";

import { useCallback, useState } from "react";
import { signIn } from "next-auth/react";
import { Button, Tooltip } from "@heroui/react";
import { LogIn } from "lucide-react";

export default function SignIn() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSignIn = useCallback(async () => {
    try {
      setIsLoading(true);
      await signIn("authentik");
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <Tooltip content="Войти через Authentik" color="primary" placement="bottom">
      <Button
        color="primary"
        variant="flat"
        isLoading={isLoading}
        onPress={handleSignIn}
        startContent={<LogIn className="size-4" />}
        className="font-medium"
      >
        Авторизация
      </Button>
    </Tooltip>
  );
}
