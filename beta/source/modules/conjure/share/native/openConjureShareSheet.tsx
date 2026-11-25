// Module ID: 18355
// Function ID: 18356
// Name: openConjureShareSheet
// Dependencies: [5127, 18356, 2119, 2]
// Exports: default

// Module 18355 (openConjureShareSheet)
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5127 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/share/native/openConjureShareSheet.tsx");

export default function openConjureShareSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(18356, dependencyMap.paths), "ConjureShareSheet", arg0);
};
