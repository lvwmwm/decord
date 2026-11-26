// Module ID: 18803
// Function ID: 18804
// Name: snowballStemmer
// Dependencies: [18804, 2]
// Exports: snowballStem

// Module 18803 (snowballStemmer)
import stem from "stem" /* 18804 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("lib/search/snowballStemmer.tsx");

export function snowballStem(arg0) {
  const obj = stem;
  return obj.stem(arg0);
}
