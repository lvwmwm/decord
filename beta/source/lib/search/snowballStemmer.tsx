// Module ID: 19157
// Function ID: 19158
// Name: snowballStemmer
// Dependencies: [19158, 2]
// Exports: snowballStem

// Module 19157 (snowballStemmer)
import stem from "stem" /* 19158 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("lib/search/snowballStemmer.tsx");

export function snowballStem(arg0) {
  const obj = stem;
  return obj.stem(arg0);
}
