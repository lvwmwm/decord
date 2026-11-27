// Module ID: 11455
// Function ID: 11456
// Name: conjureCopyDefaultName
// Dependencies: [1112, 4245, 6935, 2]
// Exports: default

// Module 11455 (conjureCopyDefaultName)
import intl4 from "intl" /* 1112 */;
import _modDef4245 from "module_4245" /* 4245 */;
import ConjureProjectTypes from "ConjureProjectTypes" /* 6935 */;
import size from "module_2" /* 2 */;

const re3 = /[\uD800-\uDBFF]$/;
const result = size.fileFinishedImporting("modules/conjure/remix/conjureCopyDefaultName.tsx");

export default function conjureCopyDefaultName(projectName) {
  let formatToPlainStringResult;
  const MAX_PROJECT_NAME_LENGTH = ConjureProjectTypes.MAX_PROJECT_NAME_LENGTH;
  const intl = intl4.intl;
  const maxResult = max(0, MAX_PROJECT_NAME_LENGTH - intl.formatToPlainString(_modDef4245.F6fHag, { projectName: "" }).length);
  if (projectName.length <= maxResult) {
    const intl3 = tmp(1112).intl;
    const obj = { projectName };
    formatToPlainStringResult = intl3.formatToPlainString(tmp3(4245).F6fHag, obj);
  } else {
    const str = projectName.slice(0, maxResult);
    const replaced = str.replace(re3, "");
    const trimEndResult = replaced.trimEnd();
    const intl2 = tmp(1112).intl;
    const obj2 = { projectName: trimEndResult };
    formatToPlainStringResult = intl2.formatToPlainString(tmp3(4245).F6fHag, obj2);
  }
  return formatToPlainStringResult;
};
