// Module ID: 13329
// Function ID: 13330
// Name: openConjureShareSheet
// Dependencies: [5552, 13330, 2121, 2]
// Exports: default

// Module 13329 (openConjureShareSheet)
import asyncRequire from "asyncRequire" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5552 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/share/native/openConjureShareSheet.tsx");

export default function openConjureShareSheet(projectId) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { projectId };
  obj.openLazy(asyncRequire(13330, dependencyMap.paths), "ConjureShareSheet", obj2);
};
