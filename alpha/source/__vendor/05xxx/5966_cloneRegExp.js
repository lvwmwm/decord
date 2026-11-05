// Module ID: 5966
// Function ID: 5967
// Name: cloneRegExp
// Dependencies: []

// Module 5966 (cloneRegExp)
const re0 = /\w*$/;

export default function cloneRegExp(source) {
  const constructor = new source.constructor(source.source, re0.exec(source));
  constructor.lastIndex = source.lastIndex;
  return constructor;
};
