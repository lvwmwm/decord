// Module ID: 13331
// Function ID: 13332
// Name: openConjureShareSheet
// Dependencies: [5542, 13332, 2121, 2]
// Exports: default

// Module 13331 (openConjureShareSheet)
import asyncRequire from "asyncRequire" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5542 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/share/native/openConjureShareSheet.tsx");

export default function openConjureShareSheet(projectId) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { projectId };
  obj.openLazy(asyncRequire(13332, dependencyMap.paths), "ConjureShareSheet", obj2);
};
