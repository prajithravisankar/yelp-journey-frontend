"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function DashboardPage() {
    const { data: session, status } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (status === "unauthenticated") {
            router.push("/login");
        }
    }, [status, router]);

    if (status === "loading") {
        return <p>Loading...</p>;
    }

    if (!session?.user) {
        return null;
    }

    return (
        <main className="min-h-screen flex items-center justify-center">
            <div className="border p-6 rounded-md">
                <h1 className="text-xl font-semibold mb-2">
                    Welcome, {session.user.email}
                </h1>
                <p>This is your dashboard. 🎉</p>
            </div>
        </main>
    );
}
