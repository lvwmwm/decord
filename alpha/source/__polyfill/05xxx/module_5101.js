// Module ID: 5101
// Function ID: 5102
// Dependencies: []

// Module 5101

export default function getIterator(arg0) {
  if (null != arg0) {
    if (undefined !== arg0[iterator]) {
      return arg0[iterator]();
    }
  }
};
