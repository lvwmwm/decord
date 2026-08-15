// Module ID: 15934
// Function ID: 15935
// Name: snowballStem
// Dependencies: [15935, 2]
// Exports: snowballStem

// Module 15934 (snowballStem)
import module_15935 from "module_15935";

let closure_0 = module_15935.newStemmer("english");
const result = require("set").fileFinishedImporting("lib/search/snowballStemmer.tsx");

export const snowballStem = function snowballStem(arg0) {
  return closure_0.stem(arg0);
};
