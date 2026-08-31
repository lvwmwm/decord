// Module ID: 4586
// Function ID: 4587
// Name: cloneRegExp
// Dependencies: []

// Module 4586 (cloneRegExp)
const re0 = /\w*$/;

export default function cloneRegExp(source) {
  const constructor = new source.constructor(source.source, regex.exec(source));
  constructor.lastIndex = source.lastIndex;
  return constructor;
};
