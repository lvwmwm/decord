// Module ID: 18385
// Function ID: 18386
// Name: openConjureShareSheet
// Dependencies: [5131, 18386, 2119, 2]
// Exports: default

// Module 18385 (openConjureShareSheet)
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5131 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/share/native/openConjureShareSheet.tsx");

export default function openConjureShareSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(18386, dependencyMap.paths), "ConjureShareSheet", arg0);
};
