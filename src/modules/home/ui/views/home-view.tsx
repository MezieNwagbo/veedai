"use client";

import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export const HomeView = () => {
  const { data: session } = authClient.useSession();
  const router = useRouter();

  if (!session) {
    return <p className="text-center p-20">Loading...</p>;
  }

  return (
    <div className="w-full p-10">
      <p className="text-center">Logged in as {session?.user?.name}</p>
      <Button
        className="text-center"
        onClick={() =>
          authClient.signOut({
            fetchOptions: { onSuccess: () => router.push("/sign-in") },
          })
        }
      >
        Sign out
      </Button>
    </div>
  );
};
