// Module ID: 440
// Function ID: 6009
// Name: logError
// Dependencies: []

// Module 440 (logError)
arg5.default = function logError() {
  const length = arguments.length;
  const arr = new Array(length);
  for (let num = 0; num < length; num = num + 1) {
    arr[num] = arguments[num];
  }
  if (1 === arr.length) {
    const _Error = Error;
    if (arr[0] instanceof Error) {
      const error2 = arr[0];
      const _console = console;
      console.error(`Error: "${error2.message}".  Stack:
  ${error2.stack}`);
    }
  }
  error.apply(console, arr);
};
