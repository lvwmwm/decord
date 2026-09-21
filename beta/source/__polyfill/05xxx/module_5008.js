// Module ID: 5008
// Function ID: 5009
// Dependencies: []

// Module 5008

export default function getIterator(arg0) {
  if (null != arg0) {
    if (undefined !== arg0[iterator]) {
      return arg0[iterator]();
    }
  }
};
