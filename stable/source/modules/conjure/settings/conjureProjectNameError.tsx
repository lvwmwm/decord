// Module ID: 11845
// Function ID: 11846
// Name: conjureProjectNameError
// Dependencies: [1128, 3862, 6806, 2]
// Exports: conjureProjectNameError

// Module 11845 (conjureProjectNameError)
import intl3 from "intl" /* 1128 */;
import _modDef3862 from "module_3862" /* 3862 */;
import ConjureProjectTypes from "ConjureProjectTypes" /* 6806 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/settings/conjureProjectNameError.tsx");

export const conjureProjectNameError = function conjureProjectNameError(trimmed) {
  let stringResult;
  if ("" === trimmed) {
    const intl2 = intl3.intl;
    stringResult = intl2.string(_modDef3862.l669D8);
  } else {
    stringResult = null;
    if (trimmed.length < ConjureProjectTypes.MIN_PROJECT_NAME_LENGTH) {
      const intl = tmp5(1128).intl;
      const formatToPlainString = intl.formatToPlainString;
      const range = { min: ConjureProjectTypes.MIN_PROJECT_NAME_LENGTH, max: ConjureProjectTypes.MAX_PROJECT_NAME_LENGTH };
      const ONSqYd = tmp5(1128).t.ONSqYd;
      stringResult = formatToPlainString(ONSqYd, range);
    }
  }
  return stringResult;
};
