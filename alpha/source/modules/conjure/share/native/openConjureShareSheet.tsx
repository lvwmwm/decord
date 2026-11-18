// Module ID: 18447
// Function ID: 18448
// Name: openConjureShareSheet
// Dependencies: [5037, 18448, 2121, 2]
// Exports: default

// Module 18447 (openConjureShareSheet)
import asyncRequire from "asyncRequire" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5037 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/share/native/openConjureShareSheet.tsx");

export default function openConjureShareSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(18448, dependencyMap.paths), "ConjureShareSheet", arg0);
};
