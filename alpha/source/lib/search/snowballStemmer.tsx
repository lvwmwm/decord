// Module ID: 19106
// Function ID: 19107
// Name: snowballStemmer
// Dependencies: [19107, 2]
// Exports: snowballStem

// Module 19106 (snowballStemmer)
import stem from "stem" /* 19107 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("lib/search/snowballStemmer.tsx");

export function snowballStem(arg0) {
  const obj = stem;
  return obj.stem(arg0);
}
