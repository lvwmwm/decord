// Module ID: 15404
// Function ID: 117581
// Name: snowballStem
// Dependencies: [15405, 2]
// Exports: snowballStem

// Module 15404 (snowballStem)
import module_15405 from "module_15405";

let closure_0 = module_15405.newStemmer("english");
const result = require("set").fileFinishedImporting("lib/search/snowballStemmer.tsx");

export const snowballStem = function snowballStem(arg0) {
  return closure_0.stem(arg0);
};
