function sumEvenNumbers(numbers) {
  // Initialize a variable to hold the sum of even numbers
  let sum = 0;

  // Loop through the array and check if each number is even
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      // If the number is even, add it to the sum variable
      sum += numbers[i];
    }
  }

  // Return the sum of even numbers
  return sum;
}


const findLongestWord = sentence => {
  const words = sentence.split(' ');
  const longestWord = words.reduce((longest, current) => {
    return current.length > longest.length ? current : longest;
  }, '');
  return longestWord;
};

function createCounter() {
  let count = 0;
  
  function increment() {
    count++;
    console.log(count);
  }
  
  function decrement() {
    count--;
    console.log(count);
  }
  
  return { increment, decrement };
}

const counter = createCounter();
counter.increment(); // logs 1
counter.increment(); // logs 2
counter.decrement(); // logs 1

