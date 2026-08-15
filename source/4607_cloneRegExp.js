// Module ID: 4607
// Function ID: 4608
// Name: cloneRegExp
// Dependencies: []

// Module 4607 (cloneRegExp)
const re0 = /\w*$/;

export default function cloneRegExp(source) {
  const constructor = new source.constructor(source.source, regex.exec(source));
  constructor.lastIndex = source.lastIndex;
  return constructor;
};
