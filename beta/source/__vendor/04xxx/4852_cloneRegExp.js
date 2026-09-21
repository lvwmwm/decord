// Module ID: 4852
// Function ID: 4853
// Name: cloneRegExp
// Dependencies: []

// Module 4852 (cloneRegExp)
const re0 = /\w*$/;

export default function cloneRegExp(source) {
  const constructor = new source.constructor(source.source, re0.exec(source));
  constructor.lastIndex = source.lastIndex;
  return constructor;
};
