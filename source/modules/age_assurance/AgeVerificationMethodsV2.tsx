// Module ID: 7612
// Function ID: 60627
// Name: _fetchAgeVerificationMethodsV
// Dependencies: [5, 653, 507, 2]
// Exports: fetchAgeVerificationMethodsV2

// Module 7612 (_fetchAgeVerificationMethodsV)
import asyncGeneratorStep from "asyncGeneratorStep";
import { Endpoints } from "ME";

const require = arg1;
async function _fetchAgeVerificationMethodsV() {
  const HTTP = outer2_0(outer2_1[2]).HTTP;
  const methods = yield HTTP.get({ url: outer2_3.AGE_VERIFICATION_METHODS_V2, rejectWithError: true }).body.methods;
  return methods.map((method) => {
    const obj = { method: method.method, vendor: method.vendor, title: method.title, description: method.description };
    const provided_by = method.provided_by;
    let tmp = null;
    if (null != provided_by) {
      tmp = provided_by;
    }
    obj.providedBy = tmp;
    return obj;
  });
}
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/age_assurance/AgeVerificationMethodsV2.tsx");

export const fetchAgeVerificationMethodsV2 = function fetchAgeVerificationMethodsV2() {
  return _fetchAgeVerificationMethodsV(...arguments);
};
