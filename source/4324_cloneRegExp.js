// Module ID: 4324
// Function ID: 4325
// Name: cloneRegExp
// Dependencies: []

// Module 4324 (cloneRegExp)
const re0 = /\w*$/;

export default function cloneRegExp(source) {
  const constructor = new source.constructor(source.source, regex.exec(source));
  constructor.lastIndex = source.lastIndex;
  return constructor;
};
