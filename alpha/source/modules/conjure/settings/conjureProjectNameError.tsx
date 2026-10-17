// Module ID: 11639
// Function ID: 11640
// Name: conjureProjectNameError
// Dependencies: [1128, 3883, 6294, 2]
// Exports: conjureProjectNameError

// Module 11639 (conjureProjectNameError)
import intl3 from "intl" /* 1128 */;
import _modDef3883 from "module_3883" /* 3883 */;
import ConjureProjectTypes from "ConjureProjectTypes" /* 6294 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/settings/conjureProjectNameError.tsx");

export const conjureProjectNameError = function conjureProjectNameError(trimmed) {
  let stringResult;
  if ("" === trimmed) {
    const intl2 = intl3.intl;
    stringResult = intl2.string(_modDef3883.l669D8);
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
