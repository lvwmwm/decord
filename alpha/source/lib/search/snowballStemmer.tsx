// Module ID: 19006
// Function ID: 19007
// Name: snowballStemmer
// Dependencies: [19007, 2]
// Exports: snowballStem

// Module 19006 (snowballStemmer)
import stem from "stem" /* 19007 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("lib/search/snowballStemmer.tsx");

export function snowballStem(arg0) {
  const obj = stem;
  return obj.stem(arg0);
}
