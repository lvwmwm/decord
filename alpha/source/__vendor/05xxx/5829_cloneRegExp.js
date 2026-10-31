// Module ID: 5829
// Function ID: 5830
// Name: cloneRegExp
// Dependencies: []

// Module 5829 (cloneRegExp)
const re0 = /\w*$/;

export default function cloneRegExp(source) {
  const constructor = new source.constructor(source.source, re0.exec(source));
  constructor.lastIndex = source.lastIndex;
  return constructor;
};
