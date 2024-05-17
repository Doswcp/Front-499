"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Navmain from "../components/Navmain";

function CreatePostPage() {
  const [title, setTitle] = useState("");
  const [img, setImg] = useState("");
  const [content, setContent] = useState("");
  const [avatarimg, setAvatarimg] = useState(""); 

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !img || !content || !avatarimg) {
      alert("Please complete all inputs");
      return;
    }

    try {
      const res = await fetch("https://back-499-1.onrender.com/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, img, content, avatarimg }),
      });

      if (res.ok) {
        router.push("/");
      } else {
        throw new Error("Failed to create a post");
      }
    } catch (error) {
      console.error(error);
      alert("There was an error creating the post. Please try again.");
    }
  };

  return (
    <div className="container mx-auto mt-4">
      <Navmain />
      <div className="my-8">
        <h3 className="text-3xl font-bold">Create Post</h3>
        <hr className="my-3" />
        <Link href="/">
          <span className="bg-gray-500 inline-block text-white border py-2 px-3 rounded my-2">
            Go back
          </span>
        </Link>
      </div>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          className="w-full bg-gray-200 border py-2 px-3 rounded text-lg my-2"
          placeholder="Post Title"
        />
        <input
          value={avatarimg}
          onChange={(e) => setAvatarimg(e.target.value)}
          type="text"
          className="w-full bg-gray-200 border py-2 px-3 rounded text-lg my-2"
          placeholder="Post Avatar Url"
        />
        <input
          value={img}
          onChange={(e) => setImg(e.target.value)}
          type="text"
          className="w-full bg-gray-200 border py-2 px-3 rounded text-lg my-2"
          placeholder="Post Img Url"
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full bg-gray-200 border py-2 px-3 rounded text-lg my-2"
          placeholder="Your content"
          rows="5"
        ></textarea>
        <button
          type="submit"
          className="bg-green-500 text-white border py-2 px-3 rounded text-lg my-2 hover:bg-green-600"
        >
          Create Post
        </button>
      </form>
    </div>
  );
}

export default CreatePostPage;