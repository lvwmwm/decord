// Module ID: 4730
// Function ID: 4731
// Name: cloneRegExp
// Dependencies: []

// Module 4730 (cloneRegExp)
const re0 = /\w*$/;

export default function cloneRegExp(source) {
  const constructor = new source.constructor(source.source, re0.exec(source));
  constructor.lastIndex = source.lastIndex;
  return constructor;
};
