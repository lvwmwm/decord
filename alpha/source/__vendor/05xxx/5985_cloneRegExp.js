// Module ID: 5985
// Function ID: 5986
// Name: cloneRegExp
// Dependencies: []

// Module 5985 (cloneRegExp)
const re0 = /\w*$/;

export default function cloneRegExp(source) {
  const constructor = new source.constructor(source.source, re0.exec(source));
  constructor.lastIndex = source.lastIndex;
  return constructor;
};
