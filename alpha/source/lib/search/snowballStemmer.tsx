// Module ID: 19148
// Function ID: 19149
// Name: snowballStemmer
// Dependencies: [19149, 2]
// Exports: snowballStem

// Module 19148 (snowballStemmer)
import stem from "stem" /* 19149 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("lib/search/snowballStemmer.tsx");

export function snowballStem(arg0) {
  const obj = stem;
  return obj.stem(arg0);
}
