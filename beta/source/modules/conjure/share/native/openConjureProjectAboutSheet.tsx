// Module ID: 12284
// Function ID: 12285
// Name: openConjureProjectAboutSheet
// Dependencies: [5127, 12285, 2119, 2]
// Exports: default

// Module 12284 (openConjureProjectAboutSheet)
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5127 */;
import size from "module_2" /* 2 */;

const ConjureProjectAboutSheet = "ConjureProjectAboutSheet";
const result = size.fileFinishedImporting("modules/conjure/share/native/openConjureProjectAboutSheet.tsx");

export default function openConjureProjectAboutSheet(applicationId, source) {
  let tmp = arg2;
  if (arg2 === undefined) {
    tmp = null;
  }
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { applicationId, source, ticket: tmp };
  obj.openLazy(asyncRequire(12285, dependencyMap.paths), ConjureProjectAboutSheet, obj2);
};
export const CONJURE_PROJECT_ABOUT_SHEET_KEY = "ConjureProjectAboutSheet";
