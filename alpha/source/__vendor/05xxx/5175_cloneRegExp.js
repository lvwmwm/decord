// Module ID: 5175
// Function ID: 5176
// Name: cloneRegExp
// Dependencies: []

// Module 5175 (cloneRegExp)
const re0 = /\w*$/;

export default function cloneRegExp(source) {
  const constructor = new source.constructor(source.source, re0.exec(source));
  constructor.lastIndex = source.lastIndex;
  return constructor;
};
