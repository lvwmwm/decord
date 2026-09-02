// Module ID: 16526
// Function ID: 16527
// Name: snowballStem
// Dependencies: [16527, 2]
// Exports: snowballStem

// Module 16526 (snowballStem)
import set from "set" /* 2 */;
import module_16527 from "module_16527" /* 16527 */;

let closure_0 = module_16527.newStemmer("english");
const result = set.fileFinishedImporting("lib/search/snowballStemmer.tsx");

export const snowballStem = function snowballStem(arg0) {
  return closure_0.stem(arg0);
};
