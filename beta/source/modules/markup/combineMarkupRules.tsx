// Module ID: 5208
// Function ID: 5209
// Name: combineMarkupRules
// Dependencies: [2]
// Exports: default

// Module 5208 (combineMarkupRules)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/markup/combineMarkupRules.tsx");

export default function combineMarkupRules(items) {
  const obj = {};
  const iter = items[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp2 = nextResult;
    for (const key10012 in nextResult) {
      let tmp16 = key10012;
      let obj2 = {};
      if (key10012 in obj) {
        let merged = Object.assign(obj[tmp16]);
        let merged1 = Object.assign(tmp2[tmp16]);
        let tmp8 = obj2;
      } else {
        let merged2 = Object.assign(tmp2[tmp16]);
        tmp8 = obj2;
      }
      obj[key10012] = tmp8;
      continue;
    }
    continue;
  }
  return obj;
};
