// Module ID: 16449
// Function ID: 127074
// Name: AgeUpdateFooter
// Dependencies: []
// Exports: default

// Module 16449 (AgeUpdateFooter)
importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
let closure_4 = arg1(dependencyMap[2]).createStyles({ text: { textAlign: "center" } });
const obj = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/parental_consent/native/AgeUpdateFooter.tsx");

export default function AgeUpdateFooter() {
  let obj = { style: callback().text };
  const intl = arg1(dependencyMap[4]).intl;
  obj = {
    handleAgeVerifyHook() {
      let obj = callback2(closure_2[6]);
      obj = { entryPoint: callback(closure_2[7]).AgeVerificationModalEntryPoint.PARENTAL_CONSENT_LOCKOUT };
      return obj.showAgeVerificationGetStartedModal(obj);
    }
  };
  obj.children = intl.format(importDefault(dependencyMap[5]).ifObbX, obj);
  return jsx(arg1(dependencyMap[3]).Text, obj);
};
