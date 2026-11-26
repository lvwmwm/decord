// Module ID: 18560
// Function ID: 18561
// Name: openConjureShareSheet
// Dependencies: [5257, 18561, 2120, 2]
// Exports: default

// Module 18560 (openConjureShareSheet)
import asyncRequire from "asyncRequire" /* 2120 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5257 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/share/native/openConjureShareSheet.tsx");

export default function openConjureShareSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(18561, dependencyMap.paths), "ConjureShareSheet", arg0);
};
