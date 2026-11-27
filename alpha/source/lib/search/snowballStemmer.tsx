// Module ID: 19022
// Function ID: 19023
// Name: snowballStemmer
// Dependencies: [19023, 2]
// Exports: snowballStem

// Module 19022 (snowballStemmer)
import stem from "stem" /* 19023 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("lib/search/snowballStemmer.tsx");

export function snowballStem(arg0) {
  const obj = stem;
  return obj.stem(arg0);
}
