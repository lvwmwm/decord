// Module ID: 19056
// Function ID: 19057
// Name: snowballStemmer
// Dependencies: [19057, 2]
// Exports: snowballStem

// Module 19056 (snowballStemmer)
import stem from "stem" /* 19057 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("lib/search/snowballStemmer.tsx");

export function snowballStem(arg0) {
  const obj = stem;
  return obj.stem(arg0);
}
