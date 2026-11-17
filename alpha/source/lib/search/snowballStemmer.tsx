// Module ID: 19569
// Function ID: 19570
// Name: snowballStemmer
// Dependencies: [19570, 2]
// Exports: snowballStem

// Module 19569 (snowballStemmer)
import stem from "stem" /* 19570 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("lib/search/snowballStemmer.tsx");

export function snowballStem(arg0) {
  const obj = stem;
  return obj.stem(arg0);
}
