# JavaScript Library Project

This is a solution to the [Library project from the Odin Project](https://www.theodinproject.com/lessons/node-path-javascript-library). 

## The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- Add new books to the library and remove existing ones

## Screenshot

![](./screenshot.jpg)

## Links

- [View Code](https://github.com/elizerdim/javascript-library)
- [Live Preview](https://elizerdim.github.io/javascript-library/)

## Built with

- HTML
- CSS 
- JavaScript
- Object-Oriented Programming

## What I learned

- Using JSON.stringify and JSON.parse on class instances converts them into object literals, which removes their prototype. Setting their prototype after retrieving them from the localStorage solves this issue.

```js
const library = JSON.parse(localStorage.getItem('books')) || [];
library.forEach(book => Object.setPrototypeOf(book, Book.prototype))
```

## Useful resources

- [`<dialog>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog) - `<dialog>` element can be used for form modals.
- [checkbox input](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox) - `<fieldset>` and `<legend>` elements can be used to link a question to checkbox and radio type input elements along with `<label>` elements that describe choices.
- [form validation](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation) - built-in form validation attributes
- [creating a unique id number](https://stackoverflow.com/a/40591207) - Date.now() + Math.random() creates a unique number that can be used as an id