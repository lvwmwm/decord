// Module ID: 6758
// Function ID: 59388
// Name: _fetchAgeVerificationMethodsV
// Dependencies: [5, 6727, 653, 1868, 507, 2]
// Exports: fetchAgeVerificationMethodsV2

// Module 6758 (_fetchAgeVerificationMethodsV)
import closure_2 from "set";
import set from "set";
import { Endpoints } from "ME";
import set from "ME";

let VerificationMethod;
let VerificationVendorName;
const require = arg1;
async function _fetchAgeVerificationMethodsV() {
  const HTTP = outer2_0(outer2_1[4]).HTTP;
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
({ VerificationMethod, VerificationVendorName } = set);
let obj = { [arg1(1868).AgeAssuranceMethod.FACIAL_AGE_ESTIMATION]: VerificationMethod.FACIAL_AGE_ESTIMATION, [arg1(1868).AgeAssuranceMethod.ID_SELFIE_MATCH]: VerificationMethod.ID_VERIFICATION };
obj = { [arg1(1868).AgeAssuranceVendor.K_ID]: VerificationVendorName.K_ID, [arg1(1868).AgeAssuranceVendor.INCODE]: VerificationVendorName.INCODE, [arg1(1868).AgeAssuranceVendor.GOOGLE_WALLET]: VerificationVendorName.GOOGLE_WALLET };
const result = set.fileFinishedImporting("modules/age_assurance/AgeVerificationMethodsV2.tsx");

export const V2_METHOD_TO_VERIFICATION_METHOD = obj;
export const V2_VENDOR_TO_VERIFICATION_VENDOR = obj;
export const fetchAgeVerificationMethodsV2 = function fetchAgeVerificationMethodsV2() {
  return _fetchAgeVerificationMethodsV(...arguments);
};
