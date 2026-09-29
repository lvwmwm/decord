// Module ID: 16695
// Function ID: 16696
// Name: snowballStemmer
// Dependencies: [16696, 2]
// Exports: snowballStem

// Module 16695 (snowballStemmer)
import module_16696 from "module_16696" /* 16696 */;
import size from "module_2" /* 2 */;

let closure_0 = module_16696.newStemmer("english");
const result = size.fileFinishedImporting("lib/search/snowballStemmer.tsx");

export const snowballStem = function snowballStem(arg0) {
  return closure_0.stem(arg0);
};
