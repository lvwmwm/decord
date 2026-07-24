// Module ID: 3506
// Function ID: 26945
// Name: isExists
// Dependencies: []
// Exports: default

// Module 3506 (isExists)

export default function isExists(arg0, arg1, arg2) {
  if (arguments.length < 3) {
    const _TypeError = TypeError;
    const typeError = new TypeError("3 argument required, but only " + arguments.length + " present");
    throw typeError;
  } else {
    const _Date = Date;
    const date = new Date(arg0, arg1, arg2);
    return date.getFullYear() === arg0 && date.getMonth() === arg1 && date.getDate() === arg2;
  }
};
export default exports.default;
