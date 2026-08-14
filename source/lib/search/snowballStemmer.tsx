// Module ID: 15884
// Function ID: 15885
// Name: snowballStem
// Dependencies: [15885, 2]
// Exports: snowballStem

// Module 15884 (snowballStem)
import module_15885 from "module_15885";

let closure_0 = module_15885.newStemmer("english");
const result = require("set").fileFinishedImporting("lib/search/snowballStemmer.tsx");

export const snowballStem = function snowballStem(arg0) {
  return closure_0.stem(arg0);
};
