// Module ID: 16213
// Function ID: 125697
// Dependencies: [5, 16214, 2]

// Module 16213
import asyncGeneratorStep from "asyncGeneratorStep";

const require = arg1;
let obj = { [arg1(16214).AgeSignalsVerificationStatus.VERIFIED]: "VERIFIED", [arg1(16214).AgeSignalsVerificationStatus.SUPERVISED]: "SUPERVISED", [arg1(16214).AgeSignalsVerificationStatus.SUPERVISED_APPROVAL_PENDING]: "SUPERVISED_APPROVAL_PENDING", [arg1(16214).AgeSignalsVerificationStatus.SUPERVISED_APPROVAL_DENIED]: "SUPERVISED_APPROVAL_DENIED", [arg1(16214).AgeSignalsVerificationStatus.UNKNOWN]: "UNKNOWN", [arg1(16214).AgeSignalsVerificationStatus.DECLARED]: "DECLARED" };
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
