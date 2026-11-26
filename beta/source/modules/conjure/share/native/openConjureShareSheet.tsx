// Module ID: 18359
// Function ID: 18360
// Name: openConjureShareSheet
// Dependencies: [5127, 18360, 2119, 2]
// Exports: default

// Module 18359 (openConjureShareSheet)
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5127 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/share/native/openConjureShareSheet.tsx");

export default function openConjureShareSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(18360, dependencyMap.paths), "ConjureShareSheet", arg0);
};
