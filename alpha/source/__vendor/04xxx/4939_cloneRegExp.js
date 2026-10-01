// Module ID: 4939
// Function ID: 4940
// Name: cloneRegExp
// Dependencies: []

// Module 4939 (cloneRegExp)
const re0 = /\w*$/;

export default function cloneRegExp(source) {
  const constructor = new source.constructor(source.source, re0.exec(source));
  constructor.lastIndex = source.lastIndex;
  return constructor;
};
