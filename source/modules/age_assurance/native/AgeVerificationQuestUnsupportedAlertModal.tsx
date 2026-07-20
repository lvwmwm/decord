// Module ID: 7544
// Function ID: 60399
// Name: AgeVerificationQuestUnsupportedAlertModal
// Dependencies: []
// Exports: default

// Module 7544 (AgeVerificationQuestUnsupportedAlertModal)
importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/age_assurance/native/AgeVerificationQuestUnsupportedAlertModal.tsx");

export default function AgeVerificationQuestUnsupportedAlertModal() {
  let obj = {};
  const intl = arg1(dependencyMap[3]).intl;
  obj.title = intl.string(importDefault(dependencyMap[4]).gUqXQN);
  const intl2 = arg1(dependencyMap[3]).intl;
  obj.content = intl2.string(importDefault(dependencyMap[4]).yBHwMy);
  obj = {};
  obj = {};
  const intl3 = arg1(dependencyMap[3]).intl;
  obj.text = intl3.string(arg1(dependencyMap[3]).t.NX+WJN);
  obj.children = jsx(arg1(dependencyMap[2]).AlertActionButton, obj, "got-it");
  obj.actions = jsx(arg1(dependencyMap[5]).AlertActions, obj);
  return jsx(arg1(dependencyMap[2]).AlertModal, obj);
};
