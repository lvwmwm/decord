// Module ID: 5091
// Function ID: 5092
// Dependencies: []

// Module 5091

export default function getIterator(arg0) {
  if (null != arg0) {
    if (undefined !== arg0[iterator]) {
      return arg0[iterator]();
    }
  }
};
