// Module ID: 5869
// Function ID: 51542
// Name: uniqWith
// Dependencies: [5870]

// Module 5869 (uniqWith)

export default function uniqWith(arg0, arg1) {
  if ("function" === typeof arg1) {
    const tmp = arg1;
  }
  if (arg0) {
    if (arg0.length) {
      require(5870) /* baseUniq */(arg0, undefined, tmp);
    }
    return [];
  }
};
