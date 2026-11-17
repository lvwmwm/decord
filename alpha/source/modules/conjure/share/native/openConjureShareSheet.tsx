// Module ID: 14579
// Function ID: 14580
// Name: openConjureShareSheet
// Dependencies: [5546, 14580, 2121, 2]
// Exports: default

// Module 14579 (openConjureShareSheet)
import asyncRequire from "asyncRequire" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5546 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/share/native/openConjureShareSheet.tsx");

export default function openConjureShareSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(14580, dependencyMap.paths), "ConjureShareSheet", arg0);
};
