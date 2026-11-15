// Module ID: 12442
// Function ID: 12443
// Name: openConjureShareSheet
// Dependencies: [5406, 12443, 2118, 2]
// Exports: default

// Module 12442 (openConjureShareSheet)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5406 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/share/native/openConjureShareSheet.tsx");

export default function openConjureShareSheet(projectId) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { projectId };
  obj.openLazy(asyncRequire(12443, dependencyMap.paths), "ConjureShareSheet", obj2);
};
