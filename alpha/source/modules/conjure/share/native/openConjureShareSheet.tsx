// Module ID: 18571
// Function ID: 18572
// Name: openConjureShareSheet
// Dependencies: [5257, 18572, 2120, 2]
// Exports: default

// Module 18571 (openConjureShareSheet)
import asyncRequire from "asyncRequire" /* 2120 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5257 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/share/native/openConjureShareSheet.tsx");

export default function openConjureShareSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(18572, dependencyMap.paths), "ConjureShareSheet", arg0);
};
