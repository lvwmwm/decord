// Module ID: 4419
// Function ID: 4420
// Name: cloneRegExp
// Dependencies: []

// Module 4419 (cloneRegExp)
const re0 = /\w*$/;

export default function cloneRegExp(source) {
  const constructor = new source.constructor(source.source, regex.exec(source));
  constructor.lastIndex = source.lastIndex;
  return constructor;
};
