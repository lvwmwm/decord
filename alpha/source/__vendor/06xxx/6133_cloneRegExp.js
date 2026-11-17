// Module ID: 6133
// Function ID: 6134
// Name: cloneRegExp
// Dependencies: []

// Module 6133 (cloneRegExp)
const re0 = /\w*$/;

export default function cloneRegExp(source) {
  const constructor = new source.constructor(source.source, re0.exec(source));
  constructor.lastIndex = source.lastIndex;
  return constructor;
};
