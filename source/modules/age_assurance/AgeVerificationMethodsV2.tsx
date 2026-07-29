// Module ID: 6780
// Function ID: 6781
// Name: _fetchAgeVerificationMethodsV
// Dependencies: [5, 6748, 676, 1892, 530, 2]
// Exports: fetchAgeVerificationMethodsV2

// Module 6780 (_fetchAgeVerificationMethodsV)
import closure_2 from "set";
import set from "set";
import { Endpoints } from "ME";
import set from "ME";

let VerificationMethod;
let VerificationVendorName;
const require = arg1;
function _fetchAgeVerificationMethodsV() {
  const self = this;
  const tmp = callback(function*() {
    if (c2 === 2) {
      c2 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c2 = 2;
        if (0 === table) {
          if (arg0 === 1) {
            c2 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c2 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let closure_0 = tmp2;
            const HTTP = outer1_0(table[4]).HTTP;
            const obj1 = { url: null, rejectWithError: true };
            obj1[0] = outer1_3.AGE_VERIFICATION_METHODS_V2;
            table = 1;
            c2 = 1;
            const obj2 = { value: null, done: false };
            obj2[0] = HTTP.get(obj1);
            return obj2;
          }
        } else if (arg0 === 1) {
          c2 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c2 = 3;
          const obj3 = { value: null, done: true };
          obj3[0] = arg1;
          return obj3;
        } else {
          const methods = arg1.body.methods;
          c2 = 3;
          obj = { value: null, done: true };
          obj[0] = methods.map((method) => {
            const obj = { method: method.method, vendor: method.vendor, title: method.title, description: method.description, providedBy: null };
            let provided_by = method.provided_by;
            if (provided_by == null) {
              provided_by = null;
            }
            obj[4] = provided_by;
            return obj;
          });
          return obj;
        }
      } catch (tmp9) {
        c2 = tmp;
        throw tmp9;
      }
    }
  });
  const _fetchAgeVerificationMethodsV = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
({ VerificationMethod, VerificationVendorName } = set);
let obj = { [arg1(1892).AgeAssuranceMethod.FACIAL_AGE_ESTIMATION]: VerificationMethod.FACIAL_AGE_ESTIMATION, [arg1(1892).AgeAssuranceMethod.ID_SELFIE_MATCH]: VerificationMethod.ID_VERIFICATION };
obj = { [arg1(1892).AgeAssuranceVendor.K_ID]: VerificationVendorName.K_ID, [arg1(1892).AgeAssuranceVendor.INCODE]: VerificationVendorName.INCODE, [arg1(1892).AgeAssuranceVendor.GOOGLE_WALLET]: VerificationVendorName.GOOGLE_WALLET };
const result = set.fileFinishedImporting("modules/age_assurance/AgeVerificationMethodsV2.tsx");

export const V2_METHOD_TO_VERIFICATION_METHOD = obj;
export const V2_VENDOR_TO_VERIFICATION_VENDOR = obj;
export const fetchAgeVerificationMethodsV2 = function fetchAgeVerificationMethodsV2() {
  const self = this;
  const apply = _fetchAgeVerificationMethodsV.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
