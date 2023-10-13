function avg(books) {
  let sum = books.reduce((accumulator, currentvalue) => {
    return accumulator + currentvalue.pages;
  });
  return sum / books.length;
}
