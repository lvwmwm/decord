// Module ID: 11386
// Function ID: 88529
// Name: InvitesDisabledAlertModal
// Dependencies: []
// Exports: default

// Module 11386 (InvitesDisabledAlertModal)
importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/guild_sidebar/native/InvitesDisabledAlertModal.tsx");

export default function InvitesDisabledAlertModal() {
  let obj = {};
  const intl = arg1(dependencyMap[3]).intl;
  obj.title = intl.string(arg1(dependencyMap[3]).t.LpUfEt);
  const intl2 = arg1(dependencyMap[3]).intl;
  obj.content = intl2.string(arg1(dependencyMap[3]).t.QRXqzO);
  obj = {};
  obj = {};
  const intl3 = arg1(dependencyMap[3]).intl;
  obj.text = intl3.string(arg1(dependencyMap[3]).t.BddRzS);
  obj.children = jsx(arg1(dependencyMap[2]).AlertActionButton, obj, "okay");
  obj.actions = jsx(arg1(dependencyMap[4]).AlertActions, obj);
  return jsx(arg1(dependencyMap[2]).AlertModal, obj);
};
