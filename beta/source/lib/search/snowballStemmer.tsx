// Module ID: 17191
// Function ID: 17192
// Name: snowballStemmer
// Dependencies: [17192, 2]
// Exports: snowballStem

// Module 17191 (snowballStemmer)
import module_17192 from "module_17192" /* 17192 */;
import size from "module_2" /* 2 */;

let closure_0 = module_17192.newStemmer("english");
const result = size.fileFinishedImporting("lib/search/snowballStemmer.tsx");

export const snowballStem = function snowballStem(arg0) {
  return closure_0.stem(arg0);
};
