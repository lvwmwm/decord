// Module ID: 18440
// Function ID: 18441
// Name: openConjureShareSheet
// Dependencies: [5006, 18441, 2121, 2]
// Exports: default

// Module 18440 (openConjureShareSheet)
import asyncRequire from "asyncRequire" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5006 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/share/native/openConjureShareSheet.tsx");

export default function openConjureShareSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(18441, dependencyMap.paths), "ConjureShareSheet", arg0);
};
