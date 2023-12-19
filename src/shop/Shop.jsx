import React, { useEffect, useState } from "react";
import { Card } from "flowbite-react";
const shop = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/all-books").then((res) =>
      res.json().then((data) => setBooks(data))
    );
  }, []);
  return (
    <div className="mt-28 px-4 lg:px-24">
      <h2 className="text-5xl font-bold text-center">All Books Are Here</h2>

      <div className="grid gap-8 my-12 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1">
        {books.map((books) => (
          <Card>
            <img src={books.imageURL} alt="" className="h-96" />
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {books.bookTitle}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem
              error autem aspernatur omnis? Itaque voluptates veniam, recusandae
              omnis eveniet tempora deserunt culpa? Non doloremque porro,
              voluptate quis architecto eveniet quod!
            </p>
            <button className="bg-blue-700 font-semibold text-white py-2 rounded">
              Buy/Read Now
            </button>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default shop;
