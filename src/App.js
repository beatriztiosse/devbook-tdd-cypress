import { useEffect, useState } from "react"
import { BookListContainer } from "./components/BookListContainer";
import { Typography } from "@mui/material";

function App() {
  const [books, setBooks] = useState([]);
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
  
  return (
    <>
      <Typography variant="h2" component="h2" data-test="heading">DevBook</Typography>
      <BookListContainer />
    </>
  );
}

export default App;
