// Module ID: 4328
// Function ID: 4329
// Name: cloneRegExp
// Dependencies: []

// Module 4328 (cloneRegExp)
const re0 = /\w*$/;

export default function cloneRegExp(source) {
  const constructor = new source.constructor(source.source, regex.exec(source));
  constructor.lastIndex = source.lastIndex;
  return constructor;
};
