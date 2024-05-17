"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import DeleteBtn from '@/app/DeleteBtn';

export default function Home() {
  const [postData, setPostData] = useState([]);

  const getPosts = async () => {
    try {
      const res = await fetch("https://back-499-1.onrender.com/api/products", {
        cache: "no-store",
      });

      if (!res.ok) {
        throw new Error("Failed to fetch posts");
      }

      const data = await res.json();
      setPostData(data);
    } catch (error) {
      console.log("Error loading posts: ", error);
    }
  };
  useEffect(() => {
    getPosts();
  }, []);

  console.log(postData);

  return (
    <main>
      <button className="bg-green-600 p-3 text-white rounded">
        <Link href="/create">Create Post</Link>
      </button>
      <div className="grid grid-rows-3 gap-4">
        {postData && postData.length > 0 ? (
          postData.map((e) => (
            <div
              key={e._id}
              className="flex justify-between shadow-xl my-10 rounded-xl overflow-hidden"
            >
              <div className="">
                <div className="flex pt-6 pl-6 gap-6">
                  <Image
                    src={e.avatarimg}
                    width={40}
                    height={0}
                    alt="avatar"
                    className="rounded-full"
                  />
                  <span className="font-bold text-2xl w-10/12">{e.title}</span>
                </div>
                <div className="px-10 w-10/12">
                  <span className="p-12">{e.content}</span>
                </div>
                <div className="flex p-6 gap-4">
                  <Link
                    className="hover:bg-[#FFC017] text-black hover:text-black border py-2 px-5 rounded-xl text-lg"
                    href={`/edit/${e._id}`} 
                  >
                    Edit
                  </Link>
                  <DeleteBtn id={e._id}/>
                </div>
              </div>
              <div>
                <Image src={e.img} width={400} height={0} alt="data-img" className="bg-cover" />
              </div>
            </div>
          ))
        ) : (
          <p className="bg-gray-300 p-3 my-3">You do not have any post yet.</p>
        )}
      </div>
    </main>
  );
}
