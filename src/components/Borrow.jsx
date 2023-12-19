import React, { useState } from "react";
import {
  Button,
  Checkbox,
  Label,
  Select,
  TextInput,
  Textarea,
} from "flowbite-react";
const Borrow = () => {
  const bookCategories = [
    "Fiction",
    "Non-Fiction",
    "Mistery",
    "Programming",
    "Science Fiction",
    "Fantasy",
    "Horror",
    "Bibliography",
    "Autobiographic",
    "History",
    "Self-help",
    "Memoir",
    "Business",
    "Children",
    "Fairy Tale",
    "Education",
    "Travel",
    "Religion",
    "Hentai",
    "Porn",
    "NSFW",
  ];
  const [selectedBookCategory, , setSelectedBookCategory] = useState(
    bookCategories[0]
  );
  const handleChangeSelectedValue = (event) => {
    console.log(event.target.value);
    setSelectedBookCategory(event.target.value);
  };

  // hanlde book submission
  const handleBookSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    const bookTitle = form.bookTitle.value;
    const borrower = form.borrower.value;
    // const imageURL = form.imageURL.value;
    // const category = form.categoryName.value;
    const dateBorrow = form.dateBorrow.value;
    const dateReturn = form.dateReturn.value;

    const bookObj = {
      bookTitle,
      borrower,
      dateBorrow,
      dateReturn,
    };
    console.log(bookObj);

    //send data to db

    fetch("http://localhost:5000/upload-borrow", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookObj),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Book borrow Success!");
        form.reset();
      });
    fetch("http://localhost:5000/upload-borrow-history", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookObj),
    })
      .then((res) => res.json())
      .then((data) => {
        // alert("Book borrow Success!");
        // form.reset();
      });
  };
  return (
    <div className="px-4 my-14 ">
      <h2 className="mb-8 text-3xl font-bold">Borrow A Book</h2>

      <form
        onSubmit={handleBookSubmit}
        className="flex lg:w-[1180px] flex-col flex-wrap gap-4"
      >
        {/* first row */}
        <div className="flex gap-8">
          {/* Book Title */}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="bookTitle" value="Book Title" />
            </div>
            <TextInput
              id="bookTitle"
              name="bookTitle"
              placeholder="Book Name"
              required
              type="text"
            />
          </div>
          {/*  borrower */}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="borrower" value="Book borrower" />
            </div>
            <TextInput
              id="borrower"
              name="borrower"
              placeholder="Borrower Name"
              required
              type="text"
              // defaultValue={borrower}
            />
          </div>
        </div>

        {/* third row */}
        <div className="flex gap-8">
          {/* Book Description */}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="dateBorrow" value="Date Borrow" />
            </div>
            <TextInput
              id="dateBorrow"
              name="dateBorrow"
              placeholder="Book Description"
              required
              type="text"
            />
          </div>
          {/*  Book PDF URL */}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="dateReturn" value="Date Return" />
            </div>
            <TextInput
              id="dateReturn"
              name="dateReturn"
              placeholder="Date Return"
              required
              type="text"
            />
          </div>
        </div>
        <Button type="submit" className="mt-5">
          Ask for Borrow
        </Button>
      </form>
    </div>
  );
};

export default Borrow;
