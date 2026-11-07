// Module ID: 12411
// Function ID: 12412
// Name: openConjureShareSheet
// Dependencies: [5374, 12412, 2118, 2]
// Exports: default

// Module 12411 (openConjureShareSheet)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5374 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/share/native/openConjureShareSheet.tsx");

export default function openConjureShareSheet(projectId) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { projectId };
  obj.openLazy(asyncRequire(12412, dependencyMap.paths), "ConjureShareSheet", obj2);
};
