// Module ID: 18832
// Function ID: 18833
// Name: snowballStemmer
// Dependencies: [18833, 2]
// Exports: snowballStem

// Module 18832 (snowballStemmer)
import stem from "stem" /* 18833 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("lib/search/snowballStemmer.tsx");

export function snowballStem(arg0) {
  const obj = stem;
  return obj.stem(arg0);
}
