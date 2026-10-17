// Module ID: 5276
// Function ID: 5277
// Name: cloneRegExp
// Dependencies: []

// Module 5276 (cloneRegExp)
const re0 = /\w*$/;

export default function cloneRegExp(source) {
  const constructor = new source.constructor(source.source, re0.exec(source));
  constructor.lastIndex = source.lastIndex;
  return constructor;
};
