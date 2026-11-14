// Module ID: 19522
// Function ID: 19523
// Name: snowballStemmer
// Dependencies: [19523, 2]
// Exports: snowballStem

// Module 19522 (snowballStemmer)
import stem from "stem" /* 19523 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("lib/search/snowballStemmer.tsx");

export function snowballStem(arg0) {
  const obj = stem;
  return obj.stem(arg0);
}
