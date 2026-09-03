// Module ID: 16547
// Function ID: 16548
// Name: snowballStem
// Dependencies: [16548, 2]
// Exports: snowballStem

// Module 16547 (snowballStem)
import set from "set" /* 2 */;
import module_16548 from "module_16548" /* 16548 */;

let closure_0 = module_16548.newStemmer("english");
const result = set.fileFinishedImporting("lib/search/snowballStemmer.tsx");

export const snowballStem = function snowballStem(arg0) {
  return closure_0.stem(arg0);
};
