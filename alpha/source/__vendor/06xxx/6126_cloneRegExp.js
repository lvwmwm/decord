// Module ID: 6126
// Function ID: 6127
// Name: cloneRegExp
// Dependencies: []

// Module 6126 (cloneRegExp)
const re0 = /\w*$/;

export default function cloneRegExp(source) {
  const constructor = new source.constructor(source.source, re0.exec(source));
  constructor.lastIndex = source.lastIndex;
  return constructor;
};
