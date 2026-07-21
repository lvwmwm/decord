// Module ID: 4236
// Function ID: 37276
// Name: initCloneArray
// Dependencies: []

// Module 4236 (initCloneArray)

export default function initCloneArray(arg0) {
  let constructor;
  let length;
  ({ length, constructor } = arg0);
  constructor = new constructor(length);
  if (length) {
    length = "string" === typeof arg0[0];
  }
  if (length) {
    length = hasOwnProperty.call(arg0, "index");
  }
  if (length) {
    ({ index: tmp.index, input: tmp.input } = arg0);
  }
  return constructor;
};
