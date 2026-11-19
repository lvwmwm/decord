// Module ID: 12213
// Function ID: 12214
// Name: openConjureProjectAboutSheet
// Dependencies: [5006, 12214, 2121, 2]
// Exports: default

// Module 12213 (openConjureProjectAboutSheet)
import asyncRequire from "asyncRequire" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5006 */;
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
  obj.openLazy(asyncRequire(12214, dependencyMap.paths), ConjureProjectAboutSheet, obj2);
};
export const CONJURE_PROJECT_ABOUT_SHEET_KEY = "ConjureProjectAboutSheet";
