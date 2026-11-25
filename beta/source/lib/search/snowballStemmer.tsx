// Module ID: 18799
// Function ID: 18800
// Name: snowballStemmer
// Dependencies: [18800, 2]
// Exports: snowballStem

// Module 18799 (snowballStemmer)
import stem from "stem" /* 18800 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("lib/search/snowballStemmer.tsx");

export function snowballStem(arg0) {
  const obj = stem;
  return obj.stem(arg0);
}
