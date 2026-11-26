// Module ID: 18281
// Function ID: 18282
// Name: conjureProjectNameError
// Dependencies: [1112, 4190, 6622, 2]
// Exports: conjureProjectNameError

// Module 18281 (conjureProjectNameError)
import intl3 from "intl" /* 1112 */;
import _modDef4190 from "module_4190" /* 4190 */;
import ConjureProjectTypes from "ConjureProjectTypes" /* 6622 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/settings/conjureProjectNameError.tsx");

export function conjureProjectNameError(trimmed) {
  let stringResult;
  if ("" === trimmed) {
    const intl2 = intl3.intl;
    stringResult = intl2.string(_modDef4190.l669D8);
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
