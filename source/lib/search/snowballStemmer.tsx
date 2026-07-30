// Module ID: 15542
// Function ID: 15543
// Name: snowballStem
// Dependencies: [15543, 2]
// Exports: snowballStem

// Module 15542 (snowballStem)
import module_15543 from "module_15543";

let closure_0 = module_15543.newStemmer("english");
const result = require("set").fileFinishedImporting("lib/search/snowballStemmer.tsx");

export const snowballStem = function snowballStem(arg0) {
  return closure_0.stem(arg0);
};
