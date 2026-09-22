// Module ID: 4851
// Function ID: 4852
// Name: cloneRegExp
// Dependencies: []

// Module 4851 (cloneRegExp)
const re0 = /\w*$/;

export default function cloneRegExp(source) {
  const constructor = new source.constructor(source.source, re0.exec(source));
  constructor.lastIndex = source.lastIndex;
  return constructor;
};
