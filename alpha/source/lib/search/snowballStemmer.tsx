// Module ID: 17316
// Function ID: 17317
// Name: snowballStemmer
// Dependencies: [17317, 2]
// Exports: snowballStem

// Module 17316 (snowballStemmer)
import module_17317 from "module_17317" /* 17317 */;
import size from "module_2" /* 2 */;

let closure_0 = module_17317.newStemmer("english");
const result = size.fileFinishedImporting("lib/search/snowballStemmer.tsx");

export const snowballStem = function snowballStem(arg0) {
  return closure_0.stem(arg0);
};
