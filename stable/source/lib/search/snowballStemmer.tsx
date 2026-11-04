// Module ID: 18174
// Function ID: 18175
// Name: snowballStemmer
// Dependencies: [18175, 2]
// Exports: snowballStem

// Module 18174 (snowballStemmer)
import module_18175 from "module_18175" /* 18175 */;
import size from "module_2" /* 2 */;

let closure_0 = module_18175.newStemmer("english");
const result = size.fileFinishedImporting("lib/search/snowballStemmer.tsx");

export const snowballStem = function snowballStem(arg0) {
  return closure_0.stem(arg0);
};
