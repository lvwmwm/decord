// Module ID: 13029
// Function ID: 13030
// Name: openConjureProjectAboutSheet
// Dependencies: [5406, 13030, 2118, 2]
// Exports: default

// Module 13029 (openConjureProjectAboutSheet)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5406 */;
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
  obj.openLazy(asyncRequire(13030, dependencyMap.paths), ConjureProjectAboutSheet, obj2);
};
export const CONJURE_PROJECT_ABOUT_SHEET_KEY = "ConjureProjectAboutSheet";
