// Module ID: 15513
// Function ID: 118236
// Name: snowballStem
// Dependencies: [15514, 2]
// Exports: snowballStem

// Module 15513 (snowballStem)
import module_15514 from "module_15514";

let closure_0 = module_15514.newStemmer("english");
const result = require("set").fileFinishedImporting("lib/search/snowballStemmer.tsx");

export const snowballStem = function snowballStem(arg0) {
  return closure_0.stem(arg0);
};
