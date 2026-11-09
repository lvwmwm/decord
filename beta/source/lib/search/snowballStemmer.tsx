// Module ID: 19119
// Function ID: 19120
// Name: snowballStemmer
// Dependencies: [19120, 2]
// Exports: snowballStem

// Module 19119 (snowballStemmer)
import stem from "stem" /* 19120 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("lib/search/snowballStemmer.tsx");

export function snowballStem(arg0) {
  const obj = stem;
  return obj.stem(arg0);
}
