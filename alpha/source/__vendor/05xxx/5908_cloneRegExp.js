// Module ID: 5908
// Function ID: 5909
// Name: cloneRegExp
// Dependencies: []

// Module 5908 (cloneRegExp)
const re0 = /\w*$/;

export default function cloneRegExp(source) {
  const constructor = new source.constructor(source.source, re0.exec(source));
  constructor.lastIndex = source.lastIndex;
  return constructor;
};
