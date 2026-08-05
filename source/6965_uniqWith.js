// Module ID: 6965
// Function ID: 6966
// Name: uniqWith
// Dependencies: [6966]

// Module 6965 (uniqWith)

export default function uniqWith(arg0, fn) {
  if (typeof fn === "function") {
    const tmp = fn;
  }
  if (arg0) {
    if (arg0.length) {
      require(6966) /* baseUniq */(arg0, undefined, tmp);
    }
    return [];
  }
};
