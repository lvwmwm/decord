// Module ID: 5760
// Function ID: 5761
// Name: cloneRegExp
// Dependencies: []

// Module 5760 (cloneRegExp)
const re0 = /\w*$/;

export default function cloneRegExp(source) {
  const constructor = new source.constructor(source.source, re0.exec(source));
  constructor.lastIndex = source.lastIndex;
  return constructor;
};
