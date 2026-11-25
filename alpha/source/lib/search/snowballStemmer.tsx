// Module ID: 18944
// Function ID: 18945
// Name: snowballStemmer
// Dependencies: [18945, 2]
// Exports: snowballStem

// Module 18944 (snowballStemmer)
import stem from "stem" /* 18945 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("lib/search/snowballStemmer.tsx");

export function snowballStem(arg0) {
  const obj = stem;
  return obj.stem(arg0);
}
