// Module ID: 18346
// Function ID: 18347
// Name: openConjureShareSheet
// Dependencies: [5127, 18347, 2119, 2]
// Exports: default

// Module 18346 (openConjureShareSheet)
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5127 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/share/native/openConjureShareSheet.tsx");

export default function openConjureShareSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(18347, dependencyMap.paths), "ConjureShareSheet", arg0);
};
