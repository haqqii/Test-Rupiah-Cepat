<template>
  <div id="app">
    <Question
      v-for="(q, index) in questions"
      :key="index"
      :number="q.number"
      :question="q.question"
      :answer="q.answer"
      :answerT="q.answerT"
      :opsional="q.opsional"
    />
  </div>
</template>

<script>
import { ref } from 'vue';
import Question from './components/Question';
import Slider from './components/Slider';

export default {
  components: {
    Question,
  },
  setup() {
    const questions = ref([
      {
        number: 'Question 1',
        question:
          'Use native JavaScript to achieve a function of image slider/carousel.',
        answerT: ' ',
      },
      {
        number: 'Question 2',
        question:
          'An integer, if its digits are symmetrical, then this number is symmetrical. Please find all the symmetrical numbers from 1 to 10000.',
        answer: `function isPalindrome(number) {
  const numStr = number.toString();
  const reversedNumStr = numStr.split('').reverse().join('');
  return numStr === reversedNumStr;
}

function findPalindromicNumbersInRange(start, end) {
  const palindromicNumbers = [];

  for (let i = start; i <= end; i++) {
    if (isPalindrome(i)) {
      palindromicNumbers.push(i);
    }
  }

  return palindromicNumbers;
}

const startNumber = 1;
const endNumber = 10000;
const palindromicNumbersInRange = findPalindromicNumbersInRange(startNumber, endNumber);

console.log("Palindromic numbers from 1 to 10000:", palindromicNumbersInRange);
`,
      },
      {
        number: 'Question 3',
        question: 'Write a closure of getting and storing a bank account.',
        answer: `function createBankAccount() {
  let accountNumber;
  let balance = 0;

  function getAccountNumber() {
    return accountNumber;
  }

  function getBalance() {
    return balance;
  }

  function deposit(amount) {
    if (amount > 0) {
      balance += amount;
      return true;
    }
    return false;
  }

  function withdraw(amount) {
    if (amount > 0 && amount <= balance) {
      balance -= amount;
      return true;
    }
    return false;
  }

  function setAccountNumber(number) {
    accountNumber = number;
  }

  return {
    getAccountNumber,
    getBalance,
    deposit,
    withdraw,
    setAccountNumber,
  };
}

const myAccount = createBankAccount();
myAccount.setAccountNumber('123456789');
console.log('Account Number:', myAccount.getAccountNumber()); // Output: Account Number: 123456789
console.log('Initial Balance:', myAccount.getBalance()); // Output: Initial Balance: 0

myAccount.deposit(1000);
console.log('Updated Balance:', myAccount.getBalance()); // Output: Updated Balance: 1000

myAccount.withdraw(500);
console.log('Updated Balance after Withdrawal:', myAccount.getBalance()); // Output: Updated Balance after Withdrawal: 500
`,
      },
      {
        number: 'Question 4',
        question:
          'How many methods of achieving inheritance are there in JavaScript? Please write a method that we can use to extend object A’s methods to object B.',
        answer: `1. Prototype Chain Inheritance:
This is the default way JavaScript handles inheritance. Each object has a prototype, and when a property or method is accessed on an object, if it doesn't exist on the object itself, JavaScript looks up the prototype chain until it finds the property or reaches the top of the chain (usually Object.prototype). You can create instances that inherit from another object by setting their prototype property to that object.

2. Constructor Function Inheritance:
You can create a constructor function that sets properties and methods on the this context, and then use the new keyword to create instances. The instances will inherit the properties and methods from the constructor function's prototype.</p>

3. Class Syntax Inheritance (ES6):
JavaScript introduced the class syntax in ECMAScript 2015 (ES6), providing a more familiar way to create classes and inheritance similar to other programming languages.

Here's an example of using the prototype chain to extend methods from object A to object B:

function ObjectA() {
  this.methodA = function() {
    console.log('Method A from Object A');
  };
}

function ObjectB() {
  // Inherit ObjectA's methods
  ObjectA.call(this);

  this.methodB = function() {
    console.log('Method B from Object B');
  };
}

const instanceB = new ObjectB();

instanceB.methodA(); // Calls methodA from Object A
instanceB.methodB(); // Calls methodB from Object B
`,
      },
      {
        number: 'Question 5',
        question:
          'Using flexbox layout, let the aaa of the string ‘11123111aaa’ be wrapped to the next line',
        answerT:
          'Open <a href="./components/Question.vue">this page</a> for the answer',
      },
      {
        number: 'Question 6',
        question: 'Realize with JS method 5! , 5! = 1*2*3*4*5',
        answer: `function calculateFactorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    let factorial = 1;
    for (let i = 2; i <= n; i++) {
      factorial *= i;
    }
    return factorial;
  }
}

const number = 5;
const factorial = calculateFactorial(number);
console.log(factorial);
`,
      },
      {
        number: 'Question 7',
        question:
          'What are the advantages of TypeScript? What is a declaration file?',
        answer: `function calculateFactorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    let factorial = 1;
    for (let i = 2; i <= n; i++) {
      factorial *= i;
    }
    return factorial;
  }
}

const number = 5;
const factorial = calculateFactorial(number);
console.log(factorial);
`,
      },
      {
        number: 'Question 8',
        question:
          'Tell us what you know about Promise, Async/Await, and Generator Function',
        answerT: `1. Promises:
<p>Promises were introduced to JavaScript to handle asynchronous operations in a more structured and readable way. A promise represents a value that might be available now, or in the future, or never. It has three states: pending, fulfilled, or rejected. Promises allow you to chain operations and handle asynchronous errors more easily.

<p>2. Async </p>
<p> Async/Await is a more recent addition to JavaScript that provides a syntactical enhancement to Promises. It allows you to write asynchronous code that looks more like synchronous code, making it easier to understand and maintain. The async keyword is used to declare an asynchronous function, and the await keyword is used within an async function to pause execution until a Promise is resolved.</p>

<p>3. Generator Function </p>
<p> Generator Functions are a special type of function introduced in ES6 that can be paused and resumed, allowing you to write asynchronous code that looks sequential. They use the function* syntax and the yield keyword to pause the function's execution and return a value. Generator Functions are often used in conjunction with libraries like Redux-Saga for handling complex asynchronous flows. </p>
`,
        opsional: `Example Promises:
const fetchData = new Promise((resolve, reject) => {
  // Simulating an asynchronous operation
  setTimeout(() => {
    const data = 'Some data';
    resolve(data); // Resolves the promise with the data
  }, 1000);
});

fetchData.then(data => {
  console.log(data);
}).catch(error => {
  console.error(error);
});



Example Async:
async function fetchData() {
  try {
    const data = await fetchSomeData();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

fetchData();


Example Generator Function:
function* generateNumbers() {
  yield 1;
  yield 2;
  yield 3;
}

const iterator = generateNumbers();
console.log(iterator.next().value); // 1
console.log(iterator.next().value); // 2
console.log(iterator.next().value); // 3


`,
      },
      {
        number: 'Question 9',
        question: 'Explain the workflow of Vuex, its role and usage scenarios.',
        answerT: `Vuex is a state management pattern and library for Vue.js applications. It offers a structured workflow:

<p>- State: Centralized data storage, the "single source of truth" for your app.</p>

<p>- Actions: Dispatched to perform async tasks and commit mutations.</p>

<p>- Mutations: Modify state with synchronous, trackable changes.</p>

<p>- Getters: Computed properties to derive values from state.</p>

<p>- Modules: Divide store into manageable sections for complex apps.</p>

<p>Role and Usage:</p>

<p>- Central Store: Manages app-wide state.</p>
<p>- Predictable Changes: Clear tracking of state mutations.</p>
<p>- Component Communication: Bridge for component interaction.</p>
<p>- Async Operations: Actions handle async tasks before mutations.</p>
<p>- Debugging: Enables time-travel debugging.</p>
<p>- Reusable Logic: Encapsulates logic for reuse.</p>
<p>- Large Apps: Ideal for scalable, organized state management.</p>



`,
      },
      {
        number: 'Question 10',
        question: 'What is the difference between Vues computed and watch?',
        answerT: `<b>Computed</b> properties in Vue.js are used to calculate and cache derived values based on existing data, ensuring efficiency by recomputing only when dependencies change. On the other hand, <b>watch</b> is employed to perform asynchronous or custom actions in response to changes in specific data properties, offering more flexibility for executing side effects. Choose between them based on whether you need to efficiently derive values or react to changes with more diverse behaviors.`,
      },
      {
        number: 'Question 11',
        question:
          'Write a regexp to match the parameters in Url (Show at least 3 examples).',
        answer: `Input URL: /user/john
Matched: user, john

Input URL: /product/12345
Matched: product, 12345

Input URL: /category/electronics
Matched: category, electronics`,
      },
      {
        number: 'Question 12',
        question:
          'How to make the browser support fonts smaller than 12px? Explain the difference among em, px and rem.',
        answer: ``,
      },
      {
        number: 'Question 13',
        question:
          'Describe the differences between arrow function and normal function.',
        answerT: `Arrow functions in JavaScript feature concise syntax and inherit their this value from their surrounding scope, whereas traditional functions employ the function keyword, have their own this context, and can be used as constructors or methods with dynamic this binding. Arrow functions omit separate this and are suited for concise expressions, while regular functions are versatile, accommodating complex logic, constructor usage, and dynamic binding.`,
      },
      {
        number: 'Question 14',
        question:
          'Among ReactJS, VueJS, and AngularJS, which one do you like over the others? Briefly describe why you like it.',
        answerT: `I like framework VueJS
        because Vue is lauded for its simplicity and gentle learning curve. Its template syntax resembles HTML, and it offers a straightforward way to build interactive UIs. Vue also provides options for both building small components or complete SPAs, making it versatile.`,
      },
      {
        number: 'Question 15',
        question: 'Describe the caching mechanism of HTTP and browser.',
        answer: `HTTP Caching Mechanism:

1. Cache-Control Header: The Cache-Control header is used in HTTP responses to specify caching directives. It defines how the browser and intermediate proxies should handle the caching of the response. Common directives include:
  - public: The response can be cached by both the browser and intermediaries.
  - private: The response is intended for a specific user and should not be cached by intermediaries.
  - max-age: Specifies the time in seconds that the resource can be cached.
  - no-cache: The resource should not be served from cache without validation from the server.
  - no-store: The response should not be stored in cache at all.
2. Expires Header: The Expires header specifies an exact date and time when the cached resource will expire. This method is less commonly used compared to Cache-Control.
. ETag and Last-Modified Headers: These headers are used for conditional requests. The ETag is a unique identifier for a version of a resource, and the Last-Modified header indicates the last modification date of the resource. When a cached resource is requested again, the browser can send these values to the server to check if the resource has changed. If not, the server responds with a "304 Not Modified" status, and the cached resource can be used.

Browser Caching Mechanism:

1. Memory Cache: This is a fast and short-lived cache stored in the browser's memory. It holds recently accessed resources like CSS, JavaScript, and images. Resources are quickly accessible, but the cache is cleared when the browser is closed.
2. Disk Cache: This is a more persistent cache stored on the user's device's disk. It's used for resources that aren't frequently updated, such as stylesheets and images. The disk cache survives browser sessions.
3. Service Worker Cache: Service workers are scripts that run in the background and can intercept and handle network requests. They allow developers to control caching strategies and cache resources for offline access or improved performance.
4. Application Cache (Obsolete): This was an older mechanism that allowed web developers to specify a manifest file containing resources to be cached for offline use. It has been deprecated in favor of Service Workers.`,
      },

      // Tambahkan lebih banyak pertanyaan dan jawaban
    ]);

    return {
      questions,
    };
  },
};
</script>

<style>
#app {
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>
