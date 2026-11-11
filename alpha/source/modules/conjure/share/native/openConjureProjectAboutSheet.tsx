// Module ID: 13677
// Function ID: 13678
// Name: openConjureProjectAboutSheet
// Dependencies: [5489, 13678, 2118, 2]
// Exports: default

// Module 13677 (openConjureProjectAboutSheet)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5489 */;
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
  obj.openLazy(asyncRequire(13678, dependencyMap.paths), ConjureProjectAboutSheet, obj2);
};
export const CONJURE_PROJECT_ABOUT_SHEET_KEY = "ConjureProjectAboutSheet";
