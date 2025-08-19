"use client";
import { useState } from "react";
import { useParams } from "next/navigation";

export default function UpdatePostPage() {
  const { id } = useParams();
  const [response, setResponse] = useState(null);

  const handleUpdate = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        id,
        title: "Updated Title",
        body: "Updated body content",
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
      <h2>PUT Request: /api/update/{id}</h2>
      <button onClick={handleUpdate}>Update Post</button>
      {response && (
        <pre style={{ marginTop: "1rem" }}>{JSON.stringify(response, null, 2)}</pre>
      )}
    </div>
  );
}