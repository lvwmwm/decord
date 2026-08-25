// Module ID: 16063
// Function ID: 16064
// Name: snowballStem
// Dependencies: [16064, 2]
// Exports: snowballStem

// Module 16063 (snowballStem)
import set from "set" /* 2 */;
import module_16064 from "module_16064" /* 16064 */;

let closure_0 = module_16064.newStemmer("english");
const result = set.fileFinishedImporting("lib/search/snowballStemmer.tsx");

export const snowballStem = function snowballStem(arg0) {
  return closure_0.stem(arg0);
};
