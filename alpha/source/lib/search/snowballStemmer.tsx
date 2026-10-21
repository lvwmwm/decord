// Module ID: 17964
// Function ID: 17965
// Name: snowballStemmer
// Dependencies: [17965, 2]
// Exports: snowballStem

// Module 17964 (snowballStemmer)
import module_17965 from "module_17965" /* 17965 */;
import size from "module_2" /* 2 */;

let closure_0 = module_17965.newStemmer("english");
const result = size.fileFinishedImporting("lib/search/snowballStemmer.tsx");

export const snowballStem = function snowballStem(arg0) {
  return closure_0.stem(arg0);
};
