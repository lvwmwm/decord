// Module ID: 5238
// Function ID: 5239
// Name: cloneRegExp
// Dependencies: []

// Module 5238 (cloneRegExp)
const re0 = /\w*$/;

export default function cloneRegExp(source) {
  const constructor = new source.constructor(source.source, re0.exec(source));
  constructor.lastIndex = source.lastIndex;
  return constructor;
};
