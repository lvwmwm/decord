// Module ID: 5629
// Function ID: 5630
// Name: cloneRegExp
// Dependencies: []

// Module 5629 (cloneRegExp)
const re0 = /\w*$/;

export default function cloneRegExp(source) {
  const constructor = new source.constructor(source.source, re0.exec(source));
  constructor.lastIndex = source.lastIndex;
  return constructor;
};
