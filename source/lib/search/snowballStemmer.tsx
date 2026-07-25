// Module ID: 15461
// Function ID: 118031
// Name: snowballStem
// Dependencies: [15462, 2]
// Exports: snowballStem

// Module 15461 (snowballStem)
import module_15462 from "module_15462";

let closure_0 = module_15462.newStemmer("english");
const result = require("set").fileFinishedImporting("lib/search/snowballStemmer.tsx");

export const snowballStem = function snowballStem(arg0) {
  return closure_0.stem(arg0);
};
