// Module ID: 6992
// Function ID: 6993
// Name: uniqWith
// Dependencies: [6993]

// Module 6992 (uniqWith)

export default function uniqWith(arg0, fn) {
  if (typeof fn === "function") {
    const tmp = fn;
  }
  if (arg0) {
    if (arg0.length) {
      require(6993) /* baseUniq */(arg0, undefined, tmp);
    }
    return [];
  }
};
