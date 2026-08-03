// Module ID: 4390
// Function ID: 4391
// Name: cloneRegExp
// Dependencies: []

// Module 4390 (cloneRegExp)
const re0 = /\w*$/;

export default function cloneRegExp(source) {
  const constructor = new source.constructor(source.source, regex.exec(source));
  constructor.lastIndex = source.lastIndex;
  return constructor;
};
