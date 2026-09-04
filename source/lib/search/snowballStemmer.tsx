// Module ID: 16636
// Function ID: 16637
// Name: snowballStem
// Dependencies: [16637, 2]
// Exports: snowballStem

// Module 16636 (snowballStem)
import set from "set" /* 2 */;
import module_16637 from "module_16637" /* 16637 */;

let closure_0 = module_16637.newStemmer("english");
const result = set.fileFinishedImporting("lib/search/snowballStemmer.tsx");

export const snowballStem = function snowballStem(arg0) {
  return closure_0.stem(arg0);
};
