import { NextResponse } from "next/server";

import { auth } from "@/auth";

const protectedRoutes = ["/news"];

export const middleware = auth((req) => {
  const { pathname, origin } = req.nextUrl;

  const isProtected = protectedRoutes.some(
    (route) => pathname === route || pathname.startsWith(`${route}/`),
  );

  if (isProtected && !req.auth) {
    const signInUrl = new URL("/api/auth/signin", origin);
    signInUrl.searchParams.set("callbackUrl", req.nextUrl.href);
    return NextResponse.redirect(signInUrl);
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
