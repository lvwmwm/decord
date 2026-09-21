// Module ID: 4850
// Function ID: 4851
// Name: cloneRegExp
// Dependencies: []

// Module 4850 (cloneRegExp)
const re0 = /\w*$/;

export default function cloneRegExp(source) {
  const constructor = new source.constructor(source.source, re0.exec(source));
  constructor.lastIndex = source.lastIndex;
  return constructor;
};
