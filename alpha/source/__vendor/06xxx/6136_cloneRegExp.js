// Module ID: 6136
// Function ID: 6137
// Name: cloneRegExp
// Dependencies: []

// Module 6136 (cloneRegExp)
const re0 = /\w*$/;

export default function cloneRegExp(source) {
  const constructor = new source.constructor(source.source, re0.exec(source));
  constructor.lastIndex = source.lastIndex;
  return constructor;
};
