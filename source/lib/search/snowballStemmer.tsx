// Module ID: 15667
// Function ID: 15668
// Name: snowballStem
// Dependencies: [15668, 2]
// Exports: snowballStem

// Module 15667 (snowballStem)
import module_15668 from "module_15668";

let closure_0 = module_15668.newStemmer("english");
const result = require("set").fileFinishedImporting("lib/search/snowballStemmer.tsx");

export const snowballStem = function snowballStem(arg0) {
  return closure_0.stem(arg0);
};
