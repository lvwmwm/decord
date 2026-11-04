// Module ID: 5963
// Function ID: 5964
// Name: cloneRegExp
// Dependencies: []

// Module 5963 (cloneRegExp)
const re0 = /\w*$/;

export default function cloneRegExp(source) {
  const constructor = new source.constructor(source.source, re0.exec(source));
  constructor.lastIndex = source.lastIndex;
  return constructor;
};
