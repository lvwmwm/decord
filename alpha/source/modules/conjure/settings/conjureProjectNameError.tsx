// Module ID: 18330
// Function ID: 18331
// Name: conjureProjectNameError
// Dependencies: [1113, 4121, 6530, 2]
// Exports: conjureProjectNameError

// Module 18330 (conjureProjectNameError)
import intl3 from "intl" /* 1113 */;
import _modDef4121 from "module_4121" /* 4121 */;
import ConjureProjectTypes from "ConjureProjectTypes" /* 6530 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/settings/conjureProjectNameError.tsx");

export function conjureProjectNameError(trimmed) {
  let stringResult;
  if ("" === trimmed) {
    const intl2 = intl3.intl;
    stringResult = intl2.string(_modDef4121.l669D8);
  } else {
    stringResult = null;
    if (trimmed.length < ConjureProjectTypes.MIN_PROJECT_NAME_LENGTH) {
      const intl = tmp5(1113).intl;
      const formatToPlainString = intl.formatToPlainString;
      const range = { min: ConjureProjectTypes.MIN_PROJECT_NAME_LENGTH, max: ConjureProjectTypes.MAX_PROJECT_NAME_LENGTH };
      const ONSqYd = tmp5(1113).t.ONSqYd;
      stringResult = formatToPlainString(ONSqYd, range);
    }
  }
  return stringResult;
}
