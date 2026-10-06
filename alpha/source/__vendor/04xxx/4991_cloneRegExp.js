// Module ID: 4991
// Function ID: 4992
// Name: cloneRegExp
// Dependencies: []

// Module 4991 (cloneRegExp)
const re0 = /\w*$/;

export default function cloneRegExp(source) {
  const constructor = new source.constructor(source.source, re0.exec(source));
  constructor.lastIndex = source.lastIndex;
  return constructor;
};
