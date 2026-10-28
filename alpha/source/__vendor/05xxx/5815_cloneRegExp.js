// Module ID: 5815
// Function ID: 5816
// Name: cloneRegExp
// Dependencies: []

// Module 5815 (cloneRegExp)
const re0 = /\w*$/;

export default function cloneRegExp(source) {
  const constructor = new source.constructor(source.source, re0.exec(source));
  constructor.lastIndex = source.lastIndex;
  return constructor;
};
