// Module ID: 15269
// Function ID: 115306
// Name: snowballStem
// Dependencies: []
// Exports: snowballStem

// Module 15269 (snowballStem)
const _module = require(dependencyMap[0]);
let closure_0 = _module.newStemmer("english");
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("lib/search/snowballStemmer.tsx");

export const snowballStem = function snowballStem(arg0) {
  return closure_0.stem(arg0);
};
