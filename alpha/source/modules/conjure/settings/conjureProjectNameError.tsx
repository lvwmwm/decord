// Module ID: 14429
// Function ID: 14430
// Name: conjureProjectNameError
// Dependencies: [1113, 4133, 7026, 2]
// Exports: conjureProjectNameError

// Module 14429 (conjureProjectNameError)
import intl3 from "intl" /* 1113 */;
import _modDef4133 from "module_4133" /* 4133 */;
import ConjureProjectTypes from "ConjureProjectTypes" /* 7026 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/settings/conjureProjectNameError.tsx");

export function conjureProjectNameError(trimmed) {
  let stringResult;
  if ("" === trimmed) {
    const intl2 = intl3.intl;
    stringResult = intl2.string(_modDef4133.l669D8);
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
