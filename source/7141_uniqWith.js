// Module ID: 7141
// Function ID: 7142
// Name: uniqWith
// Dependencies: [7142]

// Module 7141 (uniqWith)

export default function uniqWith(arg0, fn) {
  if (typeof fn === "function") {
    const tmp = fn;
  }
  if (arg0) {
    if (arg0.length) {
      require(7142) /* baseUniq */(arg0, undefined, tmp);
    }
    return [];
  }
};
