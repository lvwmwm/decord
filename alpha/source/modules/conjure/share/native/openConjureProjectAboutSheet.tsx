// Module ID: 12381
// Function ID: 12382
// Name: openConjureProjectAboutSheet
// Dependencies: [5257, 12382, 2120, 2]
// Exports: default

// Module 12381 (openConjureProjectAboutSheet)
import asyncRequire from "asyncRequire" /* 2120 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5257 */;
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
  obj.openLazy(asyncRequire(12382, dependencyMap.paths), ConjureProjectAboutSheet, obj2);
};
export const CONJURE_PROJECT_ABOUT_SHEET_KEY = "ConjureProjectAboutSheet";
