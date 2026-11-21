// Module ID: 18788
// Function ID: 18789
// Name: snowballStemmer
// Dependencies: [18789, 2]
// Exports: snowballStem

// Module 18788 (snowballStemmer)
import stem from "stem" /* 18789 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("lib/search/snowballStemmer.tsx");

export function snowballStem(arg0) {
  const obj = stem;
  return obj.stem(arg0);
}
