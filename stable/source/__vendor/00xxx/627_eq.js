// Module ID: 627
// Function ID: 628
// Name: eq
// Dependencies: []

// Module 627 (eq)

export default function eq(arg0, arg1) {
  let tmp = arg0 === arg1;
  if (!tmp) {
    tmp = arg0 != arg0 && arg1 != arg1;
  }
  return tmp;
};
