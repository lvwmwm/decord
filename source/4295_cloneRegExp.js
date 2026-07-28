// Module ID: 4295
// Function ID: 37490
// Name: cloneRegExp
// Dependencies: []

// Module 4295 (cloneRegExp)
const re0 = /\w*$/;

export default function cloneRegExp(lastIndex) {
  let constructor;
  let source;
  ({ constructor, source } = lastIndex);
  constructor = new constructor(source, regex.exec(lastIndex));
  constructor.lastIndex = lastIndex.lastIndex;
  return constructor;
};
