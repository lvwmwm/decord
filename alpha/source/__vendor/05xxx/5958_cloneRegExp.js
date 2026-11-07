// Module ID: 5958
// Function ID: 5959
// Name: cloneRegExp
// Dependencies: []

// Module 5958 (cloneRegExp)
const re0 = /\w*$/;

export default function cloneRegExp(source) {
  const constructor = new source.constructor(source.source, re0.exec(source));
  constructor.lastIndex = source.lastIndex;
  return constructor;
};
