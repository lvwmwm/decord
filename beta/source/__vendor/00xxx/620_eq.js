// Module ID: 620
// Function ID: 621
// Name: eq
// Dependencies: []

// Module 620 (eq)

export default function eq(arg0, arg1) {
  let tmp = arg0 === arg1;
  if (!tmp) {
    tmp = arg0 != arg0 && arg1 != arg1;
    const tmp2 = arg0 != arg0 && arg1 != arg1;
  }
  return tmp;
};
