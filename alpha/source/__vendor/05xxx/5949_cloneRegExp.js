// Module ID: 5949
// Function ID: 5950
// Name: cloneRegExp
// Dependencies: []

// Module 5949 (cloneRegExp)
const re0 = /\w*$/;

export default function cloneRegExp(source) {
  const constructor = new source.constructor(source.source, re0.exec(source));
  constructor.lastIndex = source.lastIndex;
  return constructor;
};
