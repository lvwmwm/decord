// Module ID: 15686
// Function ID: 15687
// Name: snowballStem
// Dependencies: [15687, 2]
// Exports: snowballStem

// Module 15686 (snowballStem)
import module_15687 from "module_15687";

let closure_0 = module_15687.newStemmer("english");
const result = require("set").fileFinishedImporting("lib/search/snowballStemmer.tsx");

export const snowballStem = function snowballStem(arg0) {
  return closure_0.stem(arg0);
};
