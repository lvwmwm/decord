// Module ID: 19527
// Function ID: 19528
// Name: snowballStemmer
// Dependencies: [19528, 2]
// Exports: snowballStem

// Module 19527 (snowballStemmer)
import stem from "stem" /* 19528 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("lib/search/snowballStemmer.tsx");

export function snowballStem(arg0) {
  const obj = stem;
  return obj.stem(arg0);
}
