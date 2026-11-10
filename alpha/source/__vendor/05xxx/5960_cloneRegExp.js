// Module ID: 5960
// Function ID: 5961
// Name: cloneRegExp
// Dependencies: []

// Module 5960 (cloneRegExp)
const re0 = /\w*$/;

export default function cloneRegExp(source) {
  const constructor = new source.constructor(source.source, re0.exec(source));
  constructor.lastIndex = source.lastIndex;
  return constructor;
};
