// Module ID: 7071
// Function ID: 7072
// Name: uniqWith
// Dependencies: [7072]

// Module 7071 (uniqWith)

export default function uniqWith(arg0, fn) {
  if (typeof fn === "function") {
    const tmp = fn;
  }
  if (arg0) {
    if (arg0.length) {
      require(7072) /* baseUniq */(arg0, undefined, tmp);
    }
    return [];
  }
};
