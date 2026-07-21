// Module ID: 4256
// Function ID: 37325
// Name: cloneRegExp
// Dependencies: []

// Module 4256 (cloneRegExp)
let closure_0 = /\w*$/;

export default function cloneRegExp(lastIndex) {
  let constructor;
  let source;
  ({ constructor, source } = lastIndex);
  constructor = new constructor(source, regex.exec(lastIndex));
  constructor.lastIndex = lastIndex.lastIndex;
  return constructor;
};
