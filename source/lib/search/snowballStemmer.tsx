// Module ID: 15648
// Function ID: 15649
// Name: snowballStem
// Dependencies: [15649, 2]
// Exports: snowballStem

// Module 15648 (snowballStem)
import module_15649 from "module_15649";

let closure_0 = module_15649.newStemmer("english");
const result = require("set").fileFinishedImporting("lib/search/snowballStemmer.tsx");

export const snowballStem = function snowballStem(arg0) {
  return closure_0.stem(arg0);
};
