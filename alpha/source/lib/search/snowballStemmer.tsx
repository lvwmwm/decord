// Module ID: 18034
// Function ID: 18035
// Name: snowballStemmer
// Dependencies: [18035, 2]
// Exports: snowballStem

// Module 18034 (snowballStemmer)
import module_18035 from "module_18035" /* 18035 */;
import size from "module_2" /* 2 */;

let closure_0 = module_18035.newStemmer("english");
const result = size.fileFinishedImporting("lib/search/snowballStemmer.tsx");

export const snowballStem = function snowballStem(arg0) {
  return closure_0.stem(arg0);
};
