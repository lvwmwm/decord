// Module ID: 19525
// Function ID: 19526
// Name: snowballStemmer
// Dependencies: [19526, 2]
// Exports: snowballStem

// Module 19525 (snowballStemmer)
import stem from "stem" /* 19526 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("lib/search/snowballStemmer.tsx");

export function snowballStem(arg0) {
  const obj = stem;
  return obj.stem(arg0);
}
