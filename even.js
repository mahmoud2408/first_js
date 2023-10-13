function even(array) {
  for (var i = 0; i < array.length; i++) {
    if (!(array[i] % 2 === 0)) {
      let array = array.splice(i, 1);
    }
  }
}
