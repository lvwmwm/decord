// Module ID: 4923
// Function ID: 4924
// Name: cloneRegExp
// Dependencies: []

// Module 4923 (cloneRegExp)
const re0 = /\w*$/;

export default function cloneRegExp(source) {
  const constructor = new source.constructor(source.source, re0.exec(source));
  constructor.lastIndex = source.lastIndex;
  return constructor;
};
