// Module ID: 4478
// Function ID: 4479
// Name: cloneRegExp
// Dependencies: []

// Module 4478 (cloneRegExp)
const re0 = /\w*$/;

export default function cloneRegExp(source) {
  const constructor = new source.constructor(source.source, regex.exec(source));
  constructor.lastIndex = source.lastIndex;
  return constructor;
};
