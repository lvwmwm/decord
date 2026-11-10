// Module ID: 12424
// Function ID: 12425
// Name: openConjureShareSheet
// Dependencies: [5376, 12425, 2118, 2]
// Exports: default

// Module 12424 (openConjureShareSheet)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5376 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/share/native/openConjureShareSheet.tsx");

export default function openConjureShareSheet(projectId) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { projectId };
  obj.openLazy(asyncRequire(12425, dependencyMap.paths), "ConjureShareSheet", obj2);
};
