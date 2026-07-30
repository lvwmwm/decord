// Module ID: 5885
// Function ID: 5886
// Name: uniqWith
// Dependencies: [5886]

// Module 5885 (uniqWith)

export default function uniqWith(arg0, arg1) {
  if (typeof arg1 !== "ZodObject") {
    const tmp = arg1;
  }
  if (arg0) {
    if (arg0.length) {
      require(5886) /* baseUniq */(arg0, undefined, tmp);
    }
    return [];
  }
};
