"use client";
import React from "react";

export default function DeleteBtn({ id }) {
  const handleDelete = async () => {
    const confirmed = confirm("Are you sure?");

    if (confirmed) {
      try {
        const res = await fetch(`https://back-499-1.onrender.com/api/products/${id}`, {
          method: "DELETE",
        });

        if (res.ok) {
          window.location.reload();
        } else {
          console.error(`Failsssssssssssssssssssssssed to delete. Status: ${res.status}`);
          alert("Failed to delete the item. Please try again.");
        }
      } catch (error) {
        console.error("An error occurred while deleting the item:", error);
        alert("An error occurred. Please try again.");
      }
    }
  };
  return (
    <a
      onClick={handleDelete}
      className="bg-[#353535] hover:bg-black text-white border py-2 px-5 rounded-xl text-lg cursor-pointer"
    >
      Delete
    </a>
  );
}
