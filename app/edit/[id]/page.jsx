"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Navmain from "@/app/components/Navmain";

export default function EditPostPage({ params }) {
  
  const [title, setTitle] = useState("");
  const [img, setImg] = useState("");
  const [content, setContent] = useState("");
  const [avatarimg, setAvatarimg] = useState(""); 
  
  const { id } = params;
  const router = useRouter();

  const getPostById = async (id) => {
    try {
      const res = await fetch(`https://back-499-1.onrender.com/api/products/${id}`, {
        method: "GET",
        cache: "no-store",
      });
      if (!res.ok) {
        throw new Error("Failed to fetch a post");
      }
      const data = await res.json();
      console.log("edit post: ", data);
      setTitle(data.title);
      setImg(data.img);
      setContent(data.content);
      setAvatarimg(data.avatarimg);

    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getPostById(id);
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`https://back-499-1.onrender.com/api/products/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, img, content, avatarimg }),
      });

      if (!res.ok) {
        throw new Error("Failed to update post");
      }

      router.refresh();
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container mx-auto mt-4">
      <Navmain />
      <div className="my-8">
        <h3 className="text-3xl font-bold">Edit Post</h3>
        <hr className="my-3" />
        <Link href="/">
          <span className="bg-gray-500 inline-block text-white border py-2 px-3 rounded my-2">
            Go back
          </span>
        </Link>
      </div>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        <input
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          type="text"
          className="w-full bg-gray-200 border py-2 px-3 rounded text-lg my-2"
          placeholder="Post Title"
        />
        <input
          onChange={(e) => setAvatarimg(e.target.value)}
          value={avatarimg}
          type="text"
          className="w-full bg-gray-200 border py-2 px-3 rounded text-lg my-2"
          placeholder="Post avatar Url"
        />
        <input
          onChange={(e) => setImg(e.target.value)}
          value={img}
          type="text"
          className="w-full bg-gray-200 border py-2 px-3 rounded text-lg my-2"
          placeholder="Post Img Url"
        />
        <textarea
          onChange={(e) => setContent(e.target.value)}
          value={content}
          className="w-full bg-gray-200 border py-2 px-3 rounded text-lg my-2"
          placeholder="Your content"
          rows="5"
        ></textarea>
        <button
          type="submit"
          className="bg-green-500 text-white border py-2 px-3 rounded text-lg my-2 hover:bg-green-600"
        >
          Edit Post
        </button>
      </form>
    </div>
  );
}
