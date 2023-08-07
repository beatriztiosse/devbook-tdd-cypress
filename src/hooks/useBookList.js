import { useEffect, useState } from "react"
import { api } from "../services/api";

export const useBookList = (initial) => {
  const [books, setBooks] = useState(initial);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const sortBooksById = (books) => {
    return books.sort((a, b) => a.id - b.id);
  }

  useEffect(() => {
    const fetchBooks = async () => {
      setLoading(true);
      setError(false)
      try {
        const response = await api.get('/books');
        setBooks(sortBooksById(response.data));
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    fetchBooks();
  }, []);
  
  return { books, loading, error }
}
