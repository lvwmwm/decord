// Module ID: 5811
// Function ID: 5812
// Name: cloneRegExp
// Dependencies: []

// Module 5811 (cloneRegExp)
const re0 = /\w*$/;

export default function cloneRegExp(source) {
  const constructor = new source.constructor(source.source, re0.exec(source));
  constructor.lastIndex = source.lastIndex;
  return constructor;
};
