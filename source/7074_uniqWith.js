// Module ID: 7074
// Function ID: 7075
// Name: uniqWith
// Dependencies: [7075]

// Module 7074 (uniqWith)

export default function uniqWith(arg0, fn) {
  if (typeof fn === "function") {
    const tmp = fn;
  }
  if (arg0) {
    if (arg0.length) {
      require(7075) /* baseUniq */(arg0, undefined, tmp);
    }
    return [];
  }
};
