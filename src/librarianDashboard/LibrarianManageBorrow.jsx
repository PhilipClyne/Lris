import React, { useEffect, useState } from "react";
import { Table } from "flowbite-react";
import { Link } from "react-router-dom";
const LibrarianManageBorrow = () => {
  const [allBooks, setAllBooks] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/all-borrow-books")
      .then((res) => res.json())
      .then((data) => setAllBooks(data));
  }, []);

  //delete a book
  const handleDelete = (id) => {
    fetch(`http://localhost:5000/borrowbook/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => alert("Book borrowed"));
  };

  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl font-bold">Borrow Book List</h2>

      {/* tbale for book data */}
      <Table className="lg:w-[1180px]">
        <Table.Head>
          <Table.HeadCell>No.</Table.HeadCell>
          <Table.HeadCell>Book Name</Table.HeadCell>
          <Table.HeadCell>Author Name</Table.HeadCell>
          <Table.HeadCell>Date Borrow</Table.HeadCell>
          <Table.HeadCell>Date Return</Table.HeadCell>
          <Table.HeadCell>
            <span>Confirm?</span>
          </Table.HeadCell>
        </Table.Head>

        {allBooks.map((book, index) => (
          <Table.Body className="divide-y" key={book._id}>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {index + 1}
              </Table.Cell>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {book.bookTitle}
              </Table.Cell>
              <Table.Cell>{book.borrower}</Table.Cell>
              <Table.Cell>{book.dateBorrow}</Table.Cell>
              <Table.Cell>{book.dateReturn}</Table.Cell>
              <Table.Cell>
                <button
                  onClick={() => handleDelete(book._id)}
                  className="bg-red-600 px-4 py-1 font-semibold text-white rounded-sm hover:bg-sky-600"
                >
                  Confirm
                </button>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        ))}
      </Table>
    </div>
  );
};

export default LibrarianManageBorrow;
