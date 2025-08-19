"use client";
import { useState } from "react";

export default function CreatePostPage() {
  const [response, setResponse] = useState(null);

  const handleCreate = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: "Hello",
        body: "Next.js API test",
        userId: 1,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const data = await res.json();
    setResponse(data);
  };

  return (
    <div>
      <h2>POST Request: /api/create</h2>
      <button onClick={handleCreate}>Create Post</button>
      {response && (
        <pre style={{ marginTop: "1rem" }}>{JSON.stringify(response, null, 2)}</pre>
      )}
    </div>
  );
}