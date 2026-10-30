// Module ID: 12419
// Function ID: 12420
// Name: conjureProjectNameError
// Dependencies: [1114, 3865, 6839, 2]
// Exports: conjureProjectNameError

// Module 12419 (conjureProjectNameError)
import intl3 from "intl" /* 1114 */;
import _modDef3865 from "module_3865" /* 3865 */;
import ConjureProjectTypes from "ConjureProjectTypes" /* 6839 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/settings/conjureProjectNameError.tsx");

export function conjureProjectNameError(trimmed) {
  let stringResult;
  if ("" === trimmed) {
    const intl2 = intl3.intl;
    stringResult = intl2.string(_modDef3865.l669D8);
  } else {
    stringResult = null;
    if (trimmed.length < ConjureProjectTypes.MIN_PROJECT_NAME_LENGTH) {
      const intl = tmp5(1114).intl;
      const formatToPlainString = intl.formatToPlainString;
      const range = { min: ConjureProjectTypes.MIN_PROJECT_NAME_LENGTH, max: ConjureProjectTypes.MAX_PROJECT_NAME_LENGTH };
      const ONSqYd = tmp5(1114).t.ONSqYd;
      stringResult = formatToPlainString(ONSqYd, range);
    }
  }
  return stringResult;
}
