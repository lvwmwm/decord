// Module ID: 15866
// Function ID: 15867
// Name: snowballStem
// Dependencies: [15867, 2]
// Exports: snowballStem

// Module 15866 (snowballStem)
import module_15867 from "module_15867";

let closure_0 = module_15867.newStemmer("english");
const result = require("set").fileFinishedImporting("lib/search/snowballStemmer.tsx");

export const snowballStem = function snowballStem(arg0) {
  return closure_0.stem(arg0);
};
