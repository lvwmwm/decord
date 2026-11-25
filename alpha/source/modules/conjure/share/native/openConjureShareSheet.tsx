// Module ID: 18497
// Function ID: 18498
// Name: openConjureShareSheet
// Dependencies: [5226, 18498, 2119, 2]
// Exports: default

// Module 18497 (openConjureShareSheet)
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5226 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/share/native/openConjureShareSheet.tsx");

export default function openConjureShareSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(18498, dependencyMap.paths), "ConjureShareSheet", arg0);
};
