// Module ID: 17202
// Function ID: 17203
// Name: snowballStemmer
// Dependencies: [17203, 2]
// Exports: snowballStem

// Module 17202 (snowballStemmer)
import module_17203 from "module_17203" /* 17203 */;
import size from "module_2" /* 2 */;

let closure_0 = module_17203.newStemmer("english");
const result = size.fileFinishedImporting("lib/search/snowballStemmer.tsx");

export const snowballStem = function snowballStem(arg0) {
  return closure_0.stem(arg0);
};
