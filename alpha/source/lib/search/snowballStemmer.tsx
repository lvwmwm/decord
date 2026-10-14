// Module ID: 17483
// Function ID: 17484
// Name: snowballStemmer
// Dependencies: [17484, 2]
// Exports: snowballStem

// Module 17483 (snowballStemmer)
import module_17484 from "module_17484" /* 17484 */;
import size from "module_2" /* 2 */;

let closure_0 = module_17484.newStemmer("english");
const result = size.fileFinishedImporting("lib/search/snowballStemmer.tsx");

export const snowballStem = function snowballStem(arg0) {
  return closure_0.stem(arg0);
};
