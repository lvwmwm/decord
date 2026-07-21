// Module ID: 16018
// Function ID: 122943
// Dependencies: []

// Module 16018
let closure_2 = importDefault(dependencyMap[0]);
let obj = { [arg1(dependencyMap[1]).AgeSignalsVerificationStatus.VERIFIED]: "VERIFIED", [arg1(dependencyMap[1]).AgeSignalsVerificationStatus.SUPERVISED]: "SUPERVISED", [arg1(dependencyMap[1]).AgeSignalsVerificationStatus.SUPERVISED_APPROVAL_PENDING]: "SUPERVISED_APPROVAL_PENDING", [arg1(dependencyMap[1]).AgeSignalsVerificationStatus.SUPERVISED_APPROVAL_DENIED]: "SUPERVISED_APPROVAL_DENIED", [arg1(dependencyMap[1]).AgeSignalsVerificationStatus.UNKNOWN]: "UNKNOWN", [arg1(dependencyMap[1]).AgeSignalsVerificationStatus.DECLARED]: "DECLARED" };
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
    arg1 = arg0;
    const dependencyMap = arg1;
    // CreateGeneratorClosureLongIndex (0x67)
    return callback(tmp)();
  }
};
const result = arg1(dependencyMap[2]).fileFinishedImporting("modules/age_assurance/native/AppStoreAgeAssurance.android.tsx");

export default obj;
