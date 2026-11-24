// Module ID: 18307
// Function ID: 18308
// Name: conjureProjectNameError
// Dependencies: [1112, 4192, 6809, 2]
// Exports: conjureProjectNameError

// Module 18307 (conjureProjectNameError)
import intl3 from "intl" /* 1112 */;
import _modDef4192 from "module_4192" /* 4192 */;
import ConjureProjectTypes from "ConjureProjectTypes" /* 6809 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/settings/conjureProjectNameError.tsx");

export function conjureProjectNameError(trimmed) {
  let stringResult;
  if ("" === trimmed) {
    const intl2 = intl3.intl;
    stringResult = intl2.string(_modDef4192.l669D8);
  } else {
    stringResult = null;
    if (trimmed.length < ConjureProjectTypes.MIN_PROJECT_NAME_LENGTH) {
      const intl = tmp5(1112).intl;
      const formatToPlainString = intl.formatToPlainString;
      const range = { min: ConjureProjectTypes.MIN_PROJECT_NAME_LENGTH, max: ConjureProjectTypes.MAX_PROJECT_NAME_LENGTH };
      const ONSqYd = tmp5(1112).t.ONSqYd;
      stringResult = formatToPlainString(ONSqYd, range);
    }
  }
  return stringResult;
}
