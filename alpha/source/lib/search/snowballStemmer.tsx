// Module ID: 18837
// Function ID: 18838
// Name: snowballStemmer
// Dependencies: [18838, 2]
// Exports: snowballStem

// Module 18837 (snowballStemmer)
import stem from "stem" /* 18838 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("lib/search/snowballStemmer.tsx");

export function snowballStem(arg0) {
  const obj = stem;
  return obj.stem(arg0);
}
