// Module ID: 18475
// Function ID: 18476
// Name: showConjurePublishSheet
// Dependencies: [5257, 18476, 2120, 2]
// Exports: default

// Module 18475 (showConjurePublishSheet)
import asyncRequire from "asyncRequire" /* 2120 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5257 */;
import size from "module_2" /* 2 */;

const ConjurePublishSheet = "ConjurePublishSheet";
const result = size.fileFinishedImporting("modules/conjure/publish/native/showConjurePublishSheet.tsx");

export default function showConjurePublishSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(18476, dependencyMap.paths), ConjurePublishSheet, arg0);
};
export const CONJURE_PUBLISH_SHEET_KEY = "ConjurePublishSheet";
