// Module ID: 5239
// Function ID: 5240
// Name: cloneRegExp
// Dependencies: []

// Module 5239 (cloneRegExp)
const re0 = /\w*$/;

export default function cloneRegExp(source) {
  const constructor = new source.constructor(source.source, re0.exec(source));
  constructor.lastIndex = source.lastIndex;
  return constructor;
};
