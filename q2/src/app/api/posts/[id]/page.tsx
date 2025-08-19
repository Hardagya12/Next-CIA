"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function SinglePostPage() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => res.json())
      .then(data => setPost(data));
  }, [id]);

  return (
    <div>
      <h2>GET Request: /api/posts/{id}</h2>
      {post ? (
        <div>
          <strong>{post.title}</strong>
          <p>{post.body}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}