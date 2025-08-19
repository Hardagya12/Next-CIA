"use client";
import { useState } from "react";
import { useParams } from "next/navigation";

export default function DeletePostPage() {
  const { id } = useParams();
  const [response, setResponse] = useState(null);

  const handleDelete = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "DELETE",
    });
    setResponse({ status: res.status, message: "Post deleted " });
  };

  return (
    <div>
      <h2>DELETE Request: /api/delete/{id}</h2>
      <button onClick={handleDelete}>Delete Post</button>
      {response && (
        <pre style={{ marginTop: "1rem" }}>{JSON.stringify(response, null, 2)}</pre>
      )}
    </div>
  );
}