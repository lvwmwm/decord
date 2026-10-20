// Module ID: 17883
// Function ID: 17884
// Name: snowballStemmer
// Dependencies: [17884, 2]
// Exports: snowballStem

// Module 17883 (snowballStemmer)
import module_17884 from "module_17884" /* 17884 */;
import size from "module_2" /* 2 */;

let closure_0 = module_17884.newStemmer("english");
const result = size.fileFinishedImporting("lib/search/snowballStemmer.tsx");

export const snowballStem = function snowballStem(arg0) {
  return closure_0.stem(arg0);
};
