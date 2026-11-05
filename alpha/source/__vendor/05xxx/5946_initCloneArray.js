// Module ID: 5946
// Function ID: 5947
// Name: initCloneArray
// Dependencies: []

// Module 5946 (initCloneArray)

export default function initCloneArray(arg0) {
  let length = arg0.length;
  const constructor = new arg0.constructor(length);
  if (length) {
    length = typeof arg0[0] === "string";
  }
  if (length) {
    length = hasOwnProperty.call(arg0, "index");
  }
  if (length) {
    ({ index: tmp.index, input: tmp.input } = arg0);
  }
  return constructor;
};
