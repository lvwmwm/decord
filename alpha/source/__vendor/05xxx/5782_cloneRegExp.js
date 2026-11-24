// Module ID: 5782
// Function ID: 5783
// Name: cloneRegExp
// Dependencies: []

// Module 5782 (cloneRegExp)
const re0 = /\w*$/;

export default function cloneRegExp(source) {
  const constructor = new source.constructor(source.source, re0.exec(source));
  constructor.lastIndex = source.lastIndex;
  return constructor;
};
