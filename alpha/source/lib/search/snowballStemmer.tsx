// Module ID: 18845
// Function ID: 18846
// Name: snowballStemmer
// Dependencies: [18846, 2]
// Exports: snowballStem

// Module 18845 (snowballStemmer)
import stem from "stem" /* 18846 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("lib/search/snowballStemmer.tsx");

export function snowballStem(arg0) {
  const obj = stem;
  return obj.stem(arg0);
}
