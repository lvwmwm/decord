// Module ID: 18653
// Function ID: 18654
// Name: snowballStemmer
// Dependencies: [18654, 2]
// Exports: snowballStem

// Module 18653 (snowballStemmer)
import module_18654 from "module_18654" /* 18654 */;
import size from "module_2" /* 2 */;

let closure_0 = module_18654.newStemmer("english");
const result = size.fileFinishedImporting("lib/search/snowballStemmer.tsx");

export function snowballStem(arg0) {
  return closure_0.stem(arg0);
}
