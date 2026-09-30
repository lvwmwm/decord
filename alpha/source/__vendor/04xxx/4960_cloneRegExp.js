// Module ID: 4960
// Function ID: 4961
// Name: cloneRegExp
// Dependencies: []

// Module 4960 (cloneRegExp)
const re0 = /\w*$/;

export default function cloneRegExp(source) {
  const constructor = new source.constructor(source.source, re0.exec(source));
  constructor.lastIndex = source.lastIndex;
  return constructor;
};
