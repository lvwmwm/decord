// Module ID: 15810
// Function ID: 15811
// Name: snowballStem
// Dependencies: [15811, 2]
// Exports: snowballStem

// Module 15810 (snowballStem)
import module_15811 from "module_15811";

let closure_0 = module_15811.newStemmer("english");
const result = require("set").fileFinishedImporting("lib/search/snowballStemmer.tsx");

export const snowballStem = function snowballStem(arg0) {
  return closure_0.stem(arg0);
};
