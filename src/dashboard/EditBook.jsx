import React, { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import {
  Button,
  Checkbox,
  Label,
  Select,
  TextInput,
  Textarea,
} from "flowbite-react";
const EditBook = () => {
  const { id } = useParams();
  const {
    bookTitle,
    authorName,
    imageURL,
    category,
    bookDescription,
    bookPDFURL,
  } = useLoaderData();
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
  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;

    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const imageURL = form.imageURL.value;
    const category = form.categoryName.value;
    const bookDescription = form.bookDescription.value;
    const bookPDFURL = form.bookPDFURL.value;

    const updatebookObj = {
      bookTitle,
      authorName,
      imageURL,
      category,
      bookDescription,
      bookPDFURL,
    };

    fetch(`http://localhost:5000/book/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatebookObj),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Book Update Success!");
        form.reset();
      });

    // console.log(bookObj);
  };
  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl font-bold">Update A Book</h2>

      <form
        onSubmit={handleUpdate}
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
              defaultValue={bookTitle}
            />
          </div>
          {/*  Author */}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="authorName" value="Book Author" />
            </div>
            <TextInput
              id="authorName"
              name="authorName"
              placeholder="Author Name"
              required
              type="text"
              defaultValue={authorName}
            />
          </div>
        </div>
        {/* second row */}
        <div className="flex gap-8">
          {/* Book Image URL */}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="imageURL" value="Book Image URL" />
            </div>
            <TextInput
              id="imageURL"
              name="imageURL"
              placeholder="Book Image URL"
              required
              type="text"
              defaultValue={imageURL}
            />
          </div>
          {/*  category */}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="inputState" value="Book Category" />
            </div>
            <Select
              id="inputState"
              name="categoryName"
              className="w-full rounded"
              value={setSelectedBookCategory}
              onChange={handleChangeSelectedValue}
            >
              {bookCategories.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Select>
          </div>
        </div>
        {/* third row */}
        <div className="flex gap-8">
          {/* Book Description */}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="bookDescription" value="Book Description" />
            </div>
            <Textarea
              id="bookDescription"
              name="bookDescription"
              placeholder="Book Description"
              required
              rows={6}
              defaultValue={bookDescription}
            />
          </div>
          {/*  Book PDF URL */}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="bookPDFURL" value="Book PDF URL" />
            </div>
            <TextInput
              id="bookPDFURL"
              name="bookPDFURL"
              placeholder="Book PDF URL"
              required
              type="text"
              defaultValue={bookPDFURL}
            />
          </div>
        </div>
        <Button type="submit" className="mt-5">
          Update Book
        </Button>
      </form>
    </div>
  );
};

export default EditBook;
