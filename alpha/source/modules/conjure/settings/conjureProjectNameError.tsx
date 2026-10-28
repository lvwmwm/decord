// Module ID: 12204
// Function ID: 12205
// Name: conjureProjectNameError
// Dependencies: [1125, 3863, 6809, 2]
// Exports: conjureProjectNameError

// Module 12204 (conjureProjectNameError)
import intl3 from "intl" /* 1125 */;
import _modDef3863 from "module_3863" /* 3863 */;
import ConjureProjectTypes from "ConjureProjectTypes" /* 6809 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/settings/conjureProjectNameError.tsx");

export const conjureProjectNameError = function conjureProjectNameError(trimmed) {
  let stringResult;
  if ("" === trimmed) {
    const intl2 = intl3.intl;
    stringResult = intl2.string(_modDef3863.l669D8);
  } else {
    stringResult = null;
    if (trimmed.length < ConjureProjectTypes.MIN_PROJECT_NAME_LENGTH) {
      const intl = tmp5(1125).intl;
      const formatToPlainString = intl.formatToPlainString;
      const range = { min: ConjureProjectTypes.MIN_PROJECT_NAME_LENGTH, max: ConjureProjectTypes.MAX_PROJECT_NAME_LENGTH };
      const ONSqYd = tmp5(1125).t.ONSqYd;
      stringResult = formatToPlainString(ONSqYd, range);
    }
  }
  return stringResult;
};
