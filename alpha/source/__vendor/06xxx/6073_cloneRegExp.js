// Module ID: 6073
// Function ID: 6074
// Name: cloneRegExp
// Dependencies: []

// Module 6073 (cloneRegExp)
const re0 = /\w*$/;

export default function cloneRegExp(source) {
  const constructor = new source.constructor(source.source, re0.exec(source));
  constructor.lastIndex = source.lastIndex;
  return constructor;
};
