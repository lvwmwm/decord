// Module ID: 16999
// Function ID: 17000
// Name: conjureProjectNameError
// Dependencies: [1126, 3827, 6940, 2]
// Exports: conjureProjectNameError

// Module 16999 (conjureProjectNameError)
import intl3 from "intl" /* 1126 */;
import _modDef3827 from "module_3827" /* 3827 */;
import ConjureTypes from "ConjureTypes" /* 6940 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/settings/conjureProjectNameError.tsx");

export const conjureProjectNameError = function conjureProjectNameError(trimmed) {
  let stringResult;
  if ("" === trimmed) {
    const intl2 = intl3.intl;
    stringResult = intl2.string(_modDef3827.l669D8);
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
