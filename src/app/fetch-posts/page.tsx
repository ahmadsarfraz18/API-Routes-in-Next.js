// "use client"

// import {useState, useEffect} from "react"

// export default function FetchPostsPage() {
//     const [posts, setPosts] = useState([])
//     const [error, setError] = useState ("")
//     const [loading, setLoading] = useState(true)

//     useEffect(() => {
//         fetch("/api/external")
//         .then((res) => res.json())
//         .then ((data) => {
//             if(data.success){
//                 setPosts(data.data)
//             } else {
//                 setError(data.message)
//             }
//         })
//         .catch((err) => setError("an unexpected error"))
//         .finally(()=> setLoading(false))
//     }, [])

//     return (
//         <div>
//             {/* <h1>Posts</h1> */}
//             {/* <h1>id</h1> */}
//             <h1>title</h1>
//             <ul>
//                 {posts.map((post: {id: number; title: string}) => (
//                     <li key={post.id}>{post.title}</li>
//                 ))}
//             </ul>
//         </div>
//     )

// } 

"use client";

import { useState, useEffect } from "react";

export default function FetchPostsPage() {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("/api/external")
            .then((res) => res.json())
            .then((data) => {
                if (data.success) {
                    setPosts(data.data);
                } else {
                    setError(data.message);
                }
            })
            .catch((err) => setError("An unexpected error occurred"))
            .finally(() => setLoading(false));
    }, []);

    return (
        <div className="min-h-screen bg-green-500 p-6">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold text-pink-800 mb-4 text-center bg-black text-white px-4 py-2 shadow-lg shadow-black">id</h1>

                {loading && (
                    <div className="flex justify-center items-center h-32">
                        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
                    </div>
                )}

                {error && (
                    <div className="text-center text-red-500 font-semibold mt-4">
                        {error}
                    </div>
                )}

                {!loading && !error && posts.length === 0 && (
                    <div className="text-center text-gray-500 font-medium mt-4">
                        No posts available.
                    </div>
                )}

                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                    {posts.map((post: { id: number; title: string }) => (
                        <li
                            key={post.id}
                            className="bg-white rounded-lg shadow-md p-4 border border-gray-200"
                        >
                            <h2 className="text-lg font-semibold text-gray-700">
                                {post.title}
                            </h2>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}






