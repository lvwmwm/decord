// Module ID: 4985
// Function ID: 4986
// Name: cloneRegExp
// Dependencies: []

// Module 4985 (cloneRegExp)
const re0 = /\w*$/;

export default function cloneRegExp(source) {
  const constructor = new source.constructor(source.source, re0.exec(source));
  constructor.lastIndex = source.lastIndex;
  return constructor;
};
