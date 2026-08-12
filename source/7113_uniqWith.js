// Module ID: 7113
// Function ID: 7114
// Name: uniqWith
// Dependencies: [7114]

// Module 7113 (uniqWith)

export default function uniqWith(arg0, fn) {
  if (typeof fn === "function") {
    const tmp = fn;
  }
  if (arg0) {
    if (arg0.length) {
      require(7114) /* baseUniq */(arg0, undefined, tmp);
    }
    return [];
  }
};
