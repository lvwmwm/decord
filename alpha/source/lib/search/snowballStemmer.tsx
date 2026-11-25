// Module ID: 18943
// Function ID: 18944
// Name: snowballStemmer
// Dependencies: [18944, 2]
// Exports: snowballStem

// Module 18943 (snowballStemmer)
import stem from "stem" /* 18944 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("lib/search/snowballStemmer.tsx");

export function snowballStem(arg0) {
  const obj = stem;
  return obj.stem(arg0);
}
