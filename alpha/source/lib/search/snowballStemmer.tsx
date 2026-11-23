// Module ID: 18790
// Function ID: 18791
// Name: snowballStemmer
// Dependencies: [18791, 2]
// Exports: snowballStem

// Module 18790 (snowballStemmer)
import stem from "stem" /* 18791 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("lib/search/snowballStemmer.tsx");

export function snowballStem(arg0) {
  const obj = stem;
  return obj.stem(arg0);
}
