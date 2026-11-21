// Module ID: 5719
// Function ID: 5720
// Name: cloneRegExp
// Dependencies: []

// Module 5719 (cloneRegExp)
const re0 = /\w*$/;

export default function cloneRegExp(source) {
  const constructor = new source.constructor(source.source, re0.exec(source));
  constructor.lastIndex = source.lastIndex;
  return constructor;
};
