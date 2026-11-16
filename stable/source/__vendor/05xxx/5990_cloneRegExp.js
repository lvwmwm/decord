// Module ID: 5990
// Function ID: 5991
// Name: cloneRegExp
// Dependencies: []

// Module 5990 (cloneRegExp)
const re0 = /\w*$/;

export default function cloneRegExp(source) {
  const constructor = new source.constructor(source.source, re0.exec(source));
  constructor.lastIndex = source.lastIndex;
  return constructor;
};
