// Module ID: 15474
// Function ID: 118080
// Name: snowballStem
// Dependencies: [15475, 2]
// Exports: snowballStem

// Module 15474 (snowballStem)
import module_15475 from "module_15475";

let closure_0 = module_15475.newStemmer("english");
const result = require("set").fileFinishedImporting("lib/search/snowballStemmer.tsx");

export const snowballStem = function snowballStem(arg0) {
  return closure_0.stem(arg0);
};
