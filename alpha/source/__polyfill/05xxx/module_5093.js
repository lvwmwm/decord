// Module ID: 5093
// Function ID: 5094
// Dependencies: []

// Module 5093

export default function getIterator(arg0) {
  if (null != arg0) {
    if (undefined !== arg0[iterator]) {
      return arg0[iterator]();
    }
  }
};
