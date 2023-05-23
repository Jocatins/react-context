# A Simple Book List Application

This is an application that takes in the name of a book and an author,
saves the items in a Local-Storage so refreshing the page does not make the items go away.
and displays the book and author in a list.

A `reducer` was added to the application to manipulate the state and update the
data in the application.

# Working with Local Storage

const book = {title: "titans way", author:"gypsy"}

localStorage.setItem("myBook", JSON.stringify(book))

const result = localStorage.getItem("myBook")

JSON.parse(result)
