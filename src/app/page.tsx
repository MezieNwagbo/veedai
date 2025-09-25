"use client";

import { useState } from "react";

import { authClient } from "@/lib/auth-client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { data: session } = authClient.useSession();

  const onSubmit = () => {
    authClient.signUp.email(
      {
        name: userDetails.name,
        email: userDetails.email,
        password: userDetails.password,
      },
      {
        onRequest: (ctx) => {
          console.log("Requesting...");
        },
        onSuccess: (ctx) => {
          window.alert("User created successfully");
        },
        onError: (ctx) => {
          console.log(ctx);

          window.alert("Something went wrong");
        },
      }
    );
  };

  if (session) {
    return (
      <div className="p-4 space-y-5 w-1/3 mx-auto">
        <h5>Welcome</h5>

        <Button className="w-full" onClick={() => authClient.signOut()}>
          Sign out
        </Button>
      </div>
    );
  }

  return (
    <div className="p-4 space-y-5 w-1/3 mx-auto">
      <Input
        type="text"
        placeholder="Name"
        value={userDetails.name}
        onChange={(e) =>
          setUserDetails({ ...userDetails, name: e.target.value })
        }
      />
      <Input
        type="email"
        placeholder="Email"
        value={userDetails.email}
        onChange={(e) =>
          setUserDetails({ ...userDetails, email: e.target.value })
        }
      />
      <Input
        type="password"
        placeholder="Password"
        value={userDetails.password}
        onChange={(e) =>
          setUserDetails({ ...userDetails, password: e.target.value })
        }
      />
      <Button className="w-full" onClick={onSubmit}>
        Create user
      </Button>
    </div>
  );
}
