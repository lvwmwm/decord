// Module ID: 15710
// Function ID: 15711
// Name: snowballStem
// Dependencies: [15711, 2]
// Exports: snowballStem

// Module 15710 (snowballStem)
import module_15711 from "module_15711";

let closure_0 = module_15711.newStemmer("english");
const result = require("set").fileFinishedImporting("lib/search/snowballStemmer.tsx");

export const snowballStem = function snowballStem(arg0) {
  return closure_0.stem(arg0);
};
