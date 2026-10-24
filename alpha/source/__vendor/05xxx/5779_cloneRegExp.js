// Module ID: 5779
// Function ID: 5780
// Name: cloneRegExp
// Dependencies: []

// Module 5779 (cloneRegExp)
const re0 = /\w*$/;

export default function cloneRegExp(source) {
  const constructor = new source.constructor(source.source, re0.exec(source));
  constructor.lastIndex = source.lastIndex;
  return constructor;
};
