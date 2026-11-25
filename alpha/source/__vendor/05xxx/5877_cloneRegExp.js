// Module ID: 5877
// Function ID: 5878
// Name: cloneRegExp
// Dependencies: []

// Module 5877 (cloneRegExp)
const re0 = /\w*$/;

export default function cloneRegExp(source) {
  const constructor = new source.constructor(source.source, re0.exec(source));
  constructor.lastIndex = source.lastIndex;
  return constructor;
};
