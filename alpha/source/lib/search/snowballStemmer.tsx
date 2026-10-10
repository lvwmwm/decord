// Module ID: 17388
// Function ID: 17389
// Name: snowballStemmer
// Dependencies: [17389, 2]
// Exports: snowballStem

// Module 17388 (snowballStemmer)
import module_17389 from "module_17389" /* 17389 */;
import size from "module_2" /* 2 */;

let closure_0 = module_17389.newStemmer("english");
const result = size.fileFinishedImporting("lib/search/snowballStemmer.tsx");

export const snowballStem = function snowballStem(arg0) {
  return closure_0.stem(arg0);
};
