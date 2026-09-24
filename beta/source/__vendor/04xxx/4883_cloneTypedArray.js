// Module ID: 4883
// Function ID: 4884
// Name: cloneTypedArray
// Dependencies: [4881]

// Module 4883 (cloneTypedArray)
import cloneArrayBuffer from "cloneArrayBuffer" /* 4881 */;


export default function cloneTypedArray(buffer, arg1) {
  if (arg1) {
    buffer = cloneArrayBuffer(buffer.buffer);
  } else {
    buffer = buffer.buffer;
  }
  const constructor = new buffer.constructor(buffer, buffer.byteOffset, buffer.length);
  return constructor;
};
