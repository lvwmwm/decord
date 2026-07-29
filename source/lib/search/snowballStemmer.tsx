// Module ID: 15548
// Function ID: 15549
// Name: snowballStem
// Dependencies: [15549, 2]
// Exports: snowballStem

// Module 15548 (snowballStem)
import module_15549 from "module_15549";

let closure_0 = module_15549.newStemmer("english");
const result = require("set").fileFinishedImporting("lib/search/snowballStemmer.tsx");

export const snowballStem = function snowballStem(arg0) {
  return closure_0.stem(arg0);
};
