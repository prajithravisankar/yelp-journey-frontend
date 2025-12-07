"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignupPage() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const res = await fetch(
                `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/signup`,
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ email, password }),
                }
            );

            if (!res.ok) {
                const data = await res.json().catch(() => ({}));
                setError(data.error || "Signup failed");
                setLoading(false);
                return;
            }

            // on success, send user to login
            router.push("/login");
        } catch (err) {
            setError("Network error");
            setLoading(false);
        }
    }

    return (
        <main className="min-h-screen flex items-center justify-center">
            <form onSubmit={handleSubmit} className="space-y-4 border p-6 rounded-md">
                <h1 className="text-xl font-semibold">Sign up</h1>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border px-2 py-1 w-64"
                    required
                />
                <input
                    type="password"
                    placeholder="Password (min 6 chars)"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="border px-2 py-1 w-64"
                    required
                />
                {error && <p className="text-red-500 text-sm">{error}</p>}
                <button
                    type="submit"
                    disabled={loading}
                    className="bg-black text-white px-4 py-2 rounded"
                >
                    {loading ? "Creating..." : "Create account"}
                </button>
            </form>
        </main>
    );
}
