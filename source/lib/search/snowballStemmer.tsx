// Module ID: 15785
// Function ID: 15786
// Name: snowballStem
// Dependencies: [15786, 2]
// Exports: snowballStem

// Module 15785 (snowballStem)
import module_15786 from "module_15786";

let closure_0 = module_15786.newStemmer("english");
const result = require("set").fileFinishedImporting("lib/search/snowballStemmer.tsx");

export const snowballStem = function snowballStem(arg0) {
  return closure_0.stem(arg0);
};
