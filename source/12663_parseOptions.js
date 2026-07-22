// Module ID: 12663
// Function ID: 97341
// Name: parseOptions
// Dependencies: []

// Module 12663 (parseOptions)
let closure_0 = Object.freeze({ loose: true });
let closure_1 = Object.freeze({});

export default function parseOptions(arg0) {
  let tmp = arg0;
  if (arg0) {
    if ("object" !== typeof tmp) {
      tmp = closure_0;
    }
    let tmp2 = tmp;
  } else {
    tmp2 = closure_1;
  }
  return tmp2;
};
