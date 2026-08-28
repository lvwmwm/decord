// Module ID: 4584
// Function ID: 4585
// Name: cloneRegExp
// Dependencies: []

// Module 4584 (cloneRegExp)
const re0 = /\w*$/;

export default function cloneRegExp(source) {
  const constructor = new source.constructor(source.source, regex.exec(source));
  constructor.lastIndex = source.lastIndex;
  return constructor;
};
