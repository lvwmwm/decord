// Module ID: 4613
// Function ID: 4614
// Name: cloneRegExp
// Dependencies: []

// Module 4613 (cloneRegExp)
const re0 = /\w*$/;

export default function cloneRegExp(source) {
  const constructor = new source.constructor(source.source, regex.exec(source));
  constructor.lastIndex = source.lastIndex;
  return constructor;
};
