// Module ID: 5006
// Function ID: 5007
// Dependencies: []

// Module 5006

export default function getIterator(arg0) {
  if (null != arg0) {
    if (undefined !== arg0[iterator]) {
      return arg0[iterator]();
    }
  }
};
