// Module ID: 4884
// Function ID: 4885
// Name: cloneRegExp
// Dependencies: []

// Module 4884 (cloneRegExp)
const re0 = /\w*$/;

export default function cloneRegExp(source) {
  const constructor = new source.constructor(source.source, re0.exec(source));
  constructor.lastIndex = source.lastIndex;
  return constructor;
};
