// FUNCTIONS: Basics
// BEFORE YOU START: please read the /exercises-info/e1.md file.
// NAMED FUNCTION SYNTAX: is described in /exercises-info/e4.md file.

/**
 * ====================================================
 * Create a function to work as follows:
  * The function name is 'logMessage' strictly.
  * The function MUST use NAMED function syntax.
  * The function logs a message in the console.
  * The function does NOT require any arguments.
 * Message to print: 'Hello, World!'
 * logMessage() => 'Hello, World!'
*/

function logMessage() {
  console.log('Hello, World!');
}

logMessage();




/**
 * =============================================================
 * Create a function that works as follows:
  * The function name is 'logMyMessage' strictly.
  * The function MUST use NAMED function syntax.
  * The function logs a specific message in the console.
  * The message is a string value passed as an argument
 * Message example: 'I log my first message!'
 * logMyMessage('My message') => 'My message'
*/

function logMyMessage(arg1) {
  console.log(arg1);
}

logMyMessage('seize the means of production');



/**
 * ===============================================================
 * Create a  function that works as follows:
  * The function name is 'logMessageWithMyName' strictly.
  * The function MUST use NAMED function syntax.
  * The function logs a message of 'My name is <name>!'.
  * The name is a string value passed as an argument
 * logMessageWithMyName('Andrea') => 'My name is Andrea!'
*/

function logMessageWithMyName(arg2) {
  console.log('My Name is ' + arg2 + '!');
}

logMessageWithMyName('Marcos');




/**
 * ==============================================================
 * Create a function that works as follows:
  * the function name is 'logMyInfo' strictly.
  * The function MUST use NAMED function syntax.
  * The function of logs a message of 'My name is <name>. I am <age> years old!'. 
  * The name is a string value passed as an argument.
  * The age is a number value passed as an argument.
 * logMyInfo('Andrea', 18) => 'My name is Andrea. I am 18 years old!'
*/

function logMyInfo(arg3, arg4) {
  console.log('My Name is ' + arg3 + '. I am ' + arg4 + ' years old!');
}

logMyInfo('Emiliano', 32);


// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-1"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function


// Do not delete or change the lines beneath
const f = {
  logMessage: logMessage || undefined,
  logMyMessage: logMyMessage || undefined,
  logMessageWithMyName: logMessageWithMyName || undefined,
  logMyInfo: logMyInfo || undefined
}

export { f };
