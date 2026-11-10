// Module ID: 18756
// Function ID: 18757
// Name: snowballStemmer
// Dependencies: [18757, 2]
// Exports: snowballStem

// Module 18756 (snowballStemmer)
import module_18757 from "module_18757" /* 18757 */;
import size from "module_2" /* 2 */;

let closure_0 = module_18757.newStemmer("english");
const result = size.fileFinishedImporting("lib/search/snowballStemmer.tsx");

export function snowballStem(arg0) {
  return closure_0.stem(arg0);
}
