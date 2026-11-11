// Module ID: 13230
// Function ID: 13231
// Name: openConjureShareSheet
// Dependencies: [5489, 13231, 2118, 2]
// Exports: default

// Module 13230 (openConjureShareSheet)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5489 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/share/native/openConjureShareSheet.tsx");

export default function openConjureShareSheet(projectId) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { projectId };
  obj.openLazy(asyncRequire(13231, dependencyMap.paths), "ConjureShareSheet", obj2);
};
