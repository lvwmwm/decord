// Module ID: 4582
// Function ID: 4583
// Name: cloneRegExp
// Dependencies: []

// Module 4582 (cloneRegExp)
const re0 = /\w*$/;

export default function cloneRegExp(source) {
  const constructor = new source.constructor(source.source, regex.exec(source));
  constructor.lastIndex = source.lastIndex;
  return constructor;
};
