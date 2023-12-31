import { api } from "../../../src/services/api";

describe("Devbook application", () => {
  before(() => {
    return api.delete("/books?_cleanup=true").catch((err) => err);
  });

  beforeEach(() => {
    const books = [
      { title: "Refactoring", id: 1 },
      { title: "Domain-driven design", id: 2 },
      { title: "Building Microservices", id: 3 },
    ];

    return books.map(async (item) =>
      await api.post("books", item, {
        headers: { "Content-Type": "application/json" },
      })
    );
  });

  afterEach(() => {
    return api.delete("/books?_cleanup=true").catch((err) => err);
  });

  it("Visits the Devbook application", () => {
    cy.visit("http://localhost:3000");
    cy.get('h2[data-test="heading"]').contains("DevBook");
  });

  it("Shows a booklist", () => {
    cy.visit("http://localhost:3000");
    cy.get('div[data-test="book-list"]').should("exist");
    cy.get("div.book-item").should((books) => {
      expect(books).to.have.length(books.length);
      const titles = [...books].map(
        (book) => book.querySelector("h4").innerHTML
      );
      expect(titles).to.deep.equal(["Refactoring", "Domain-driven design", "Building Microservices"]);
    });
  });
});
