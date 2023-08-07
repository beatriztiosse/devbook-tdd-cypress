import { Typography } from '@mui/material'
import React from 'react'

export const BookLists = ({ books, loading, error }) => {
  return (
    <div data-test="book-list">
      {books.map((book) => (
        <div className="book-item" key={book.title}>
          <Typography variant="h4" component="h4" className="titles">{book.title}</Typography>
        </div>
      ))}
    </div>
  )
}
