"use client"
import Link from 'next/link'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React from 'react'

const NavigationTest = () => {
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const q = searchParams.get("q")
    const handleClick = () => {
        console.log("clicked")
        router.push("/")
        // router.replace("/")
        // router.back()
    }
    console.log(q)
    return (
        <div>
            <Link href={"/"} prefetch={false}>Click Here</Link>
            <button onClick={handleClick}>Write and Redirect</button>
        </div>
    )
}

export default NavigationTest
