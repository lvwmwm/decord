// Module ID: 4621
// Function ID: 4622
// Name: cloneRegExp
// Dependencies: []

// Module 4621 (cloneRegExp)
const re0 = /\w*$/;

export default function cloneRegExp(source) {
  const constructor = new source.constructor(source.source, regex.exec(source));
  constructor.lastIndex = source.lastIndex;
  return constructor;
};
