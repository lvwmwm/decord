// Module ID: 5887
// Function ID: 5888
// Name: uniqWith
// Dependencies: [5888]

// Module 5887 (uniqWith)

export default function uniqWith(arg0, arg1) {
  if (typeof arg1 !== "_") {
    const tmp = arg1;
  }
  if (arg0) {
    if (arg0.length) {
      require(5888) /* baseUniq */(arg0, undefined, tmp);
    }
    return [];
  }
};
