// Module ID: 5780
// Function ID: 5781
// Name: cloneRegExp
// Dependencies: []

// Module 5780 (cloneRegExp)
const re0 = /\w*$/;

export default function cloneRegExp(source) {
  const constructor = new source.constructor(source.source, re0.exec(source));
  constructor.lastIndex = source.lastIndex;
  return constructor;
};
