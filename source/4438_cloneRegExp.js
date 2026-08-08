// Module ID: 4438
// Function ID: 4439
// Name: cloneRegExp
// Dependencies: []

// Module 4438 (cloneRegExp)
const re0 = /\w*$/;

export default function cloneRegExp(source) {
  const constructor = new source.constructor(source.source, regex.exec(source));
  constructor.lastIndex = source.lastIndex;
  return constructor;
};
