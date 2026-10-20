// Module ID: 5740
// Function ID: 5741
// Name: cloneRegExp
// Dependencies: []

// Module 5740 (cloneRegExp)
const re0 = /\w*$/;

export default function cloneRegExp(source) {
  const constructor = new source.constructor(source.source, re0.exec(source));
  constructor.lastIndex = source.lastIndex;
  return constructor;
};
