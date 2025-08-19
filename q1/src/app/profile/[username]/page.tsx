"use client";
import { useParams } from "next/navigation";

export default function ProfilePage() {
  const { username } = useParams();
  return <h2>Profile Page: {username}</h2>;
}