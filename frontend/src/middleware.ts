import {auth} from "@/auth"

const protectedRoutes = [
    "/our"
]

export const middleware = auth((req) => {
    const {pathname, origin} = req.nextUrl
    const isProtected = protectedRoutes.some((route) =>
        pathname === route || pathname.startsWith(route + "/")
    )

    if (isProtected && !req.auth) {
        const signInUrl = new URL("/api/auth/signin", origin)
        signInUrl.searchParams.set("callbackUrl", req.nextUrl.href)
        return Response.redirect(signInUrl)
    }
})

export const config = {
    matcher: [
        "/((?!api|_next/static|_next/image|favicon.ico).*)",
    ],
}
