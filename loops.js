function forLoop(array) {
  for (let i=0; i<25; i++) {
    array.push(`"I am ${i} strange loop."`);
  }
  return array;
}

  1) loops
       forLoop(array)
         adds `"I am ${i} strange loop${i === 0 ? '' : 's'}."` to an array 25 times:

      AssertionError: expected '"I am 1 strange loop."' to equal 'I am 1 strange loop.'
      + expected - actual

      -"I am 1 strange loop."
      +I am 1 strange loop.

      at Context.it (test/loops-test.js:38:35)

