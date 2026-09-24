// Module ID: 17259
// Function ID: 17260
// Name: snowballStemmer
// Dependencies: [17260, 2]
// Exports: snowballStem

// Module 17259 (snowballStemmer)
import module_17260 from "module_17260" /* 17260 */;
import size from "module_2" /* 2 */;

let closure_0 = module_17260.newStemmer("english");
const result = size.fileFinishedImporting("lib/search/snowballStemmer.tsx");

export const snowballStem = function snowballStem(arg0) {
  return closure_0.stem(arg0);
};
