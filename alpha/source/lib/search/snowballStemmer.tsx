// Module ID: 19335
// Function ID: 19336
// Name: snowballStemmer
// Dependencies: [19336, 2]
// Exports: snowballStem

// Module 19335 (snowballStemmer)
import stem from "stem" /* 19336 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("lib/search/snowballStemmer.tsx");

export function snowballStem(arg0) {
  const obj = stem;
  return obj.stem(arg0);
}
