// Module ID: 19154
// Function ID: 19155
// Name: snowballStemmer
// Dependencies: [19155, 2]
// Exports: snowballStem

// Module 19154 (snowballStemmer)
import stem from "stem" /* 19155 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("lib/search/snowballStemmer.tsx");

export function snowballStem(arg0) {
  const obj = stem;
  return obj.stem(arg0);
}
