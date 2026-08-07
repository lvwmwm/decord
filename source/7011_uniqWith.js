// Module ID: 7011
// Function ID: 7012
// Name: uniqWith
// Dependencies: [7012]

// Module 7011 (uniqWith)

export default function uniqWith(arg0, fn) {
  if (typeof fn === "function") {
    const tmp = fn;
  }
  if (arg0) {
    if (arg0.length) {
      require(7012) /* baseUniq */(arg0, undefined, tmp);
    }
    return [];
  }
};
