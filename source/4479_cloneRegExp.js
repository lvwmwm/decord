// Module ID: 4479
// Function ID: 4480
// Name: cloneRegExp
// Dependencies: []

// Module 4479 (cloneRegExp)
const re0 = /\w*$/;

export default function cloneRegExp(source) {
  const constructor = new source.constructor(source.source, regex.exec(source));
  constructor.lastIndex = source.lastIndex;
  return constructor;
};
