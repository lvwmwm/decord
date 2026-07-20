// Module ID: 4252
// Function ID: 37269
// Name: cloneRegExp
// Dependencies: []

// Module 4252 (cloneRegExp)
let closure_0 = /\w*$/;

export default function cloneRegExp(lastIndex) {
  let constructor;
  let source;
  ({ constructor, source } = lastIndex);
  constructor = new constructor(source, regex.exec(lastIndex));
  constructor.lastIndex = lastIndex.lastIndex;
  return constructor;
};
