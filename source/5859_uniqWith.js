// Module ID: 5859
// Function ID: 51685
// Name: uniqWith
// Dependencies: [5860]

// Module 5859 (uniqWith)

export default function uniqWith(arg0, arg1) {
  if ("function" === typeof arg1) {
    const tmp = arg1;
  }
  if (arg0) {
    if (arg0.length) {
      require(5860) /* baseUniq */(arg0, undefined, tmp);
    }
    return [];
  }
};
