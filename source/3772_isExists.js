// Module ID: 3772
// Function ID: 3773
// Name: isExists
// Dependencies: []
// Exports: default

// Module 3772 (isExists)

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
