// Module ID: 18056
// Function ID: 18057
// Name: snowballStemmer
// Dependencies: [18057, 2]
// Exports: snowballStem

// Module 18056 (snowballStemmer)
import module_18057 from "module_18057" /* 18057 */;
import size from "module_2" /* 2 */;

let closure_0 = module_18057.newStemmer("english");
const result = size.fileFinishedImporting("lib/search/snowballStemmer.tsx");

export const snowballStem = function snowballStem(arg0) {
  return closure_0.stem(arg0);
};
