function forLoop(array) {
  for (let i=0; i<25; i++) {
    array.push(`"I am ${i} strange loop."`);
  }
  return array;
}


  1) loops
       forLoop(array)
         adds `"I am ${i} strange loop${i === 0 ? '' : 's'}."` to an array 25 times:
     TypeError: Cannot read property 'slice' of undefined
      at Context.it (test/loops-test.js:33:38)
