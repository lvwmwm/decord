// Module ID: 15875
// Function ID: 15876
// Name: snowballStem
// Dependencies: [15876, 2]
// Exports: snowballStem

// Module 15875 (snowballStem)
import module_15876 from "module_15876";

let closure_0 = module_15876.newStemmer("english");
const result = require("set").fileFinishedImporting("lib/search/snowballStemmer.tsx");

export const snowballStem = function snowballStem(arg0) {
  return closure_0.stem(arg0);
};
