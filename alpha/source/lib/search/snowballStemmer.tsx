// Module ID: 19524
// Function ID: 19525
// Name: snowballStemmer
// Dependencies: [19525, 2]
// Exports: snowballStem

// Module 19524 (snowballStemmer)
import stem from "stem" /* 19525 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("lib/search/snowballStemmer.tsx");

export function snowballStem(arg0) {
  const obj = stem;
  return obj.stem(arg0);
}
