// Module ID: 5177
// Function ID: 5178
// Name: cloneRegExp
// Dependencies: []

// Module 5177 (cloneRegExp)
const re0 = /\w*$/;

export default function cloneRegExp(source) {
  const constructor = new source.constructor(source.source, re0.exec(source));
  constructor.lastIndex = source.lastIndex;
  return constructor;
};
