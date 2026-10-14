// Module ID: 5181
// Function ID: 5182
// Name: cloneRegExp
// Dependencies: []

// Module 5181 (cloneRegExp)
const re0 = /\w*$/;

export default function cloneRegExp(source) {
  const constructor = new source.constructor(source.source, re0.exec(source));
  constructor.lastIndex = source.lastIndex;
  return constructor;
};
