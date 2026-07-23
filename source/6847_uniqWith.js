// Module ID: 6847
// Function ID: 54131
// Name: uniqWith
// Dependencies: [6848]

// Module 6847 (uniqWith)

export default function uniqWith(arg0, arg1) {
  if ("function" === typeof arg1) {
    const tmp = arg1;
  }
  if (arg0) {
    if (arg0.length) {
      require(6848) /* baseUniq */(arg0, undefined, tmp);
    }
    return [];
  }
};
