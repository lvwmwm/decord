// Module ID: 19330
// Function ID: 19331
// Name: snowballStemmer
// Dependencies: [19331, 2]
// Exports: snowballStem

// Module 19330 (snowballStemmer)
import stem from "stem" /* 19331 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("lib/search/snowballStemmer.tsx");

export function snowballStem(arg0) {
  const obj = stem;
  return obj.stem(arg0);
}
