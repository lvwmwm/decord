// Module ID: 18127
// Function ID: 18128
// Name: showConjurePublishSheet
// Dependencies: [5008, 18128, 2119, 2]
// Exports: default

// Module 18127 (showConjurePublishSheet)
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5008 */;
import size from "module_2" /* 2 */;

const ConjurePublishSheet = "ConjurePublishSheet";
const result = size.fileFinishedImporting("modules/conjure/publish/native/showConjurePublishSheet.tsx");

export default function showConjurePublishSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(18128, dependencyMap.paths), ConjurePublishSheet, arg0);
};
export const CONJURE_PUBLISH_SHEET_KEY = "ConjurePublishSheet";
