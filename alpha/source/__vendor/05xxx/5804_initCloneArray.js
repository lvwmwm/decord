// Module ID: 5804
// Function ID: 5805
// Name: initCloneArray
// Dependencies: []

// Module 5804 (initCloneArray)

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
