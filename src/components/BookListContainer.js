import { useEffect, useState } from "react"
import { BookLists } from "./BookLists";
import { api } from "../services/api";
import { useBookList } from "../hooks/useBookList";

export const BookListContainer = () => {
  const { books, loading, error } = useBookList([])
  
  return (
    <>
      <BookLists books={books} loading={loading} erroe={error} />
    </>
  );
}
