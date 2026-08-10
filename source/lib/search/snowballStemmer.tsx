// Module ID: 15793
// Function ID: 15794
// Name: snowballStem
// Dependencies: [15794, 2]
// Exports: snowballStem

// Module 15793 (snowballStem)
import module_15794 from "module_15794";

let closure_0 = module_15794.newStemmer("english");
const result = require("set").fileFinishedImporting("lib/search/snowballStemmer.tsx");

export const snowballStem = function snowballStem(arg0) {
  return closure_0.stem(arg0);
};
