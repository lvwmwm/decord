// Module ID: 17192
// Function ID: 17193
// Name: snowballStemmer
// Dependencies: [17193, 2]
// Exports: snowballStem

// Module 17192 (snowballStemmer)
import module_17193 from "module_17193" /* 17193 */;
import size from "module_2" /* 2 */;

let closure_0 = module_17193.newStemmer("english");
const result = size.fileFinishedImporting("lib/search/snowballStemmer.tsx");

export const snowballStem = function snowballStem(arg0) {
  return closure_0.stem(arg0);
};
