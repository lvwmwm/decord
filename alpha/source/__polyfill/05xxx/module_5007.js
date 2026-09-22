// Module ID: 5007
// Function ID: 5008
// Dependencies: []

// Module 5007

export default function getIterator(arg0) {
  if (null != arg0) {
    if (undefined !== arg0[iterator]) {
      return arg0[iterator]();
    }
  }
};
