// Module ID: 16143
// Function ID: 125158
// Dependencies: [5, 16144, 2]

// Module 16143
import asyncGeneratorStep from "asyncGeneratorStep";

const require = arg1;
let obj = { [arg1(16144).AgeSignalsVerificationStatus.VERIFIED]: "VERIFIED", [arg1(16144).AgeSignalsVerificationStatus.SUPERVISED]: "SUPERVISED", [arg1(16144).AgeSignalsVerificationStatus.SUPERVISED_APPROVAL_PENDING]: "SUPERVISED_APPROVAL_PENDING", [arg1(16144).AgeSignalsVerificationStatus.SUPERVISED_APPROVAL_DENIED]: "SUPERVISED_APPROVAL_DENIED", [arg1(16144).AgeSignalsVerificationStatus.UNKNOWN]: "UNKNOWN", [arg1(16144).AgeSignalsVerificationStatus.DECLARED]: "DECLARED" };
const entries = Object.entries(obj);
let closure_4 = Object.fromEntries(entries.map((arg0) => {
  let tmp;
  let tmp2;
  [tmp, tmp2] = arg0;
  const items = [tmp2, Number(tmp)];
  return items;
}));
obj = {
  getAgeSignals() {
    // CreateGeneratorClosureLongIndex (0x67)
    return callback(tmp)();
  },
  getIsConsideredOlderThan(arg0, arg1) {
    let closure_0 = arg0;
    let closure_1 = arg1;
    // CreateGeneratorClosureLongIndex (0x67)
    return callback(tmp)();
  }
};
const result = require("set").fileFinishedImporting("modules/age_assurance/native/AppStoreAgeAssurance.android.tsx");

export default obj;
