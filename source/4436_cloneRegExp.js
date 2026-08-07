// Module ID: 4436
// Function ID: 4437
// Name: cloneRegExp
// Dependencies: []

// Module 4436 (cloneRegExp)
const re0 = /\w*$/;

export default function cloneRegExp(source) {
  const constructor = new source.constructor(source.source, regex.exec(source));
  constructor.lastIndex = source.lastIndex;
  return constructor;
};
