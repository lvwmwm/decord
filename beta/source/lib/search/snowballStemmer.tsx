// Module ID: 18761
// Function ID: 18762
// Name: snowballStemmer
// Dependencies: [18762, 2]
// Exports: snowballStem

// Module 18761 (snowballStemmer)
import module_18762 from "module_18762" /* 18762 */;
import size from "module_2" /* 2 */;

let closure_0 = module_18762.newStemmer("english");
const result = size.fileFinishedImporting("lib/search/snowballStemmer.tsx");

export function snowballStem(arg0) {
  return closure_0.stem(arg0);
}
