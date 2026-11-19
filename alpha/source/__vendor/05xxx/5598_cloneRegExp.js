// Module ID: 5598
// Function ID: 5599
// Name: cloneRegExp
// Dependencies: []

// Module 5598 (cloneRegExp)
const re0 = /\w*$/;

export default function cloneRegExp(source) {
  const constructor = new source.constructor(source.source, re0.exec(source));
  constructor.lastIndex = source.lastIndex;
  return constructor;
};
