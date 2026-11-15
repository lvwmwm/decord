// Module ID: 19212
// Function ID: 19213
// Name: snowballStemmer
// Dependencies: [19213, 2]
// Exports: snowballStem

// Module 19212 (snowballStemmer)
import stem from "stem" /* 19213 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("lib/search/snowballStemmer.tsx");

export function snowballStem(arg0) {
  const obj = stem;
  return obj.stem(arg0);
}
