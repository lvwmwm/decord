// Module ID: 15451
// Function ID: 117903
// Name: snowballStem
// Dependencies: [15452, 2]
// Exports: snowballStem

// Module 15451 (snowballStem)
import module_15452 from "module_15452";

let closure_0 = module_15452.newStemmer("english");
const result = require("set").fileFinishedImporting("lib/search/snowballStemmer.tsx");

export const snowballStem = function snowballStem(arg0) {
  return closure_0.stem(arg0);
};
