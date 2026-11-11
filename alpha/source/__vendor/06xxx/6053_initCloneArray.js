// Module ID: 6053
// Function ID: 6054
// Name: initCloneArray
// Dependencies: []

// Module 6053 (initCloneArray)

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
