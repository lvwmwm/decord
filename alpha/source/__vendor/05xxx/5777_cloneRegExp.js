// Module ID: 5777
// Function ID: 5778
// Name: cloneRegExp
// Dependencies: []

// Module 5777 (cloneRegExp)
const re0 = /\w*$/;

export default function cloneRegExp(source) {
  const constructor = new source.constructor(source.source, re0.exec(source));
  constructor.lastIndex = source.lastIndex;
  return constructor;
};
