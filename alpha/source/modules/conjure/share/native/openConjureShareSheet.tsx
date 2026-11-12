// Module ID: 13224
// Function ID: 13225
// Name: openConjureShareSheet
// Dependencies: [5489, 13225, 2118, 2]
// Exports: default

// Module 13224 (openConjureShareSheet)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5489 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/share/native/openConjureShareSheet.tsx");

export default function openConjureShareSheet(projectId) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { projectId };
  obj.openLazy(asyncRequire(13225, dependencyMap.paths), "ConjureShareSheet", obj2);
};
