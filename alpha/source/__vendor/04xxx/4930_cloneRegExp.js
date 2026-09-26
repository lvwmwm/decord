// Module ID: 4930
// Function ID: 4931
// Name: cloneRegExp
// Dependencies: []

// Module 4930 (cloneRegExp)
const re0 = /\w*$/;

export default function cloneRegExp(source) {
  const constructor = new source.constructor(source.source, re0.exec(source));
  constructor.lastIndex = source.lastIndex;
  return constructor;
};
