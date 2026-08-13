// Module ID: 7119
// Function ID: 7120
// Name: uniqWith
// Dependencies: [7120]

// Module 7119 (uniqWith)

export default function uniqWith(arg0, fn) {
  if (typeof fn === "function") {
    const tmp = fn;
  }
  if (arg0) {
    if (arg0.length) {
      require(7120) /* baseUniq */(arg0, undefined, tmp);
    }
    return [];
  }
};
