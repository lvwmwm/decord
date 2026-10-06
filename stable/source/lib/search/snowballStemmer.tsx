// Module ID: 16509
// Function ID: 16510
// Name: snowballStemmer
// Dependencies: [16510, 2]
// Exports: snowballStem

// Module 16509 (snowballStemmer)
import module_16510 from "module_16510" /* 16510 */;
import size from "module_2" /* 2 */;

let closure_0 = module_16510.newStemmer("english");
const result = size.fileFinishedImporting("lib/search/snowballStemmer.tsx");

export const snowballStem = function snowballStem(arg0) {
  return closure_0.stem(arg0);
};
