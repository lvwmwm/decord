// Module ID: 5765
// Function ID: 5766
// Name: cloneRegExp
// Dependencies: []

// Module 5765 (cloneRegExp)
const re0 = /\w*$/;

export default function cloneRegExp(source) {
  const constructor = new source.constructor(source.source, re0.exec(source));
  constructor.lastIndex = source.lastIndex;
  return constructor;
};
