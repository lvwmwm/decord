// Module ID: 17067
// Function ID: 17068
// Name: conjureProjectNameError
// Dependencies: [1126, 3849, 6946, 2]
// Exports: conjureProjectNameError

// Module 17067 (conjureProjectNameError)
import intl3 from "intl" /* 1126 */;
import _modDef3849 from "module_3849" /* 3849 */;
import ConjureTypes from "ConjureTypes" /* 6946 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/settings/conjureProjectNameError.tsx");

export const conjureProjectNameError = function conjureProjectNameError(trimmed) {
  let stringResult;
  if ("" === trimmed) {
    const intl2 = intl3.intl;
    stringResult = intl2.string(_modDef3849.l669D8);
  } else {
    stringResult = null;
    if (trimmed.length < ConjureTypes.MIN_PROJECT_NAME_LENGTH) {
      const intl = tmp5(1126).intl;
      const formatToPlainString = intl.formatToPlainString;
      const range = { min: ConjureTypes.MIN_PROJECT_NAME_LENGTH, max: ConjureTypes.MAX_PROJECT_NAME_LENGTH };
      const ONSqYd = tmp5(1126).t.ONSqYd;
      stringResult = formatToPlainString(ONSqYd, range);
    }
  }
  return stringResult;
};
