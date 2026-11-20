// Module ID: 18661
// Function ID: 18662
// Name: snowballStemmer
// Dependencies: [18662, 2]
// Exports: snowballStem

// Module 18661 (snowballStemmer)
import stem from "stem" /* 18662 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("lib/search/snowballStemmer.tsx");

export function snowballStem(arg0) {
  const obj = stem;
  return obj.stem(arg0);
}
