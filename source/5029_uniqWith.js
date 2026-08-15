// Module ID: 5029
// Function ID: 5030
// Name: uniqWith
// Dependencies: [5030]

// Module 5029 (uniqWith)

export default function uniqWith(arg0, fn) {
  if (typeof fn === "function") {
    const tmp = fn;
  }
  if (arg0) {
    if (arg0.length) {
      require(5030) /* baseUniq */(arg0, undefined, tmp);
    }
    return [];
  }
};
