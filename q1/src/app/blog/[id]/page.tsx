"use client";
import { useParams } from "next/navigation";

export default function BlogPage() {
  const { id } = useParams();
  return <h2>Blog Post ID: {id}</h2>;
}