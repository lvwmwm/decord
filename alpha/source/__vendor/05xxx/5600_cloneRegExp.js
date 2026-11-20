// Module ID: 5600
// Function ID: 5601
// Name: cloneRegExp
// Dependencies: []

// Module 5600 (cloneRegExp)
const re0 = /\w*$/;

export default function cloneRegExp(source) {
  const constructor = new source.constructor(source.source, re0.exec(source));
  constructor.lastIndex = source.lastIndex;
  return constructor;
};
