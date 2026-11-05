// Module ID: 19067
// Function ID: 19068
// Name: snowballStemmer
// Dependencies: [19068, 2]
// Exports: snowballStem

// Module 19067 (snowballStemmer)
import module_19068 from "module_19068" /* 19068 */;
import size from "module_2" /* 2 */;

let closure_0 = module_19068.newStemmer("english");
const result = size.fileFinishedImporting("lib/search/snowballStemmer.tsx");

export function snowballStem(arg0) {
  return closure_0.stem(arg0);
}
