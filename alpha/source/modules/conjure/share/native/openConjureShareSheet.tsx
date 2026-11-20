// Module ID: 18217
// Function ID: 18218
// Name: openConjureShareSheet
// Dependencies: [5008, 18218, 2119, 2]
// Exports: default

// Module 18217 (openConjureShareSheet)
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5008 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/share/native/openConjureShareSheet.tsx");

export default function openConjureShareSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(18218, dependencyMap.paths), "ConjureShareSheet", arg0);
};
