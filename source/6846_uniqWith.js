// Module ID: 6846
// Function ID: 54140
// Name: uniqWith
// Dependencies: [6847]

// Module 6846 (uniqWith)

export default function uniqWith(arg0, arg1) {
  if ("function" === typeof arg1) {
    const tmp = arg1;
  }
  if (arg0) {
    if (arg0.length) {
      require(6847) /* baseUniq */(arg0, undefined, tmp);
    }
    return [];
  }
};
