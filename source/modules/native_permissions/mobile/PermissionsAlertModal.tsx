// Module ID: 4682
// Function ID: 40792
// Name: PermissionsAlertModal
// Dependencies: []
// Exports: default

// Module 4682 (PermissionsAlertModal)
importAll(dependencyMap[0]);
({ jsx: closure_2, jsxs: closure_3 } = arg1(dependencyMap[1]));
const tmp3 = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/native_permissions/mobile/PermissionsAlertModal.tsx");

export default function PermissionsAlertModal(arg0) {
  let body;
  let onConfirm;
  let title;
  ({ title, body, onConfirm } = arg0);
  let obj = { title, content: body };
  obj = {};
  obj = { onPress: onConfirm };
  const intl = arg1(dependencyMap[4]).intl;
  obj.text = intl.string(arg1(dependencyMap[4]).t.jVcuVY);
  const items = [callback(arg1(dependencyMap[2]).AlertActionButton, obj, "confirm"), ];
  const obj1 = { variant: "secondary" };
  const intl2 = arg1(dependencyMap[4]).intl;
  obj1.text = intl2.string(arg1(dependencyMap[4]).t.cpT0Cq);
  items[1] = callback(arg1(dependencyMap[2]).AlertActionButton, obj1, "close");
  obj.children = items;
  obj.actions = callback2(arg1(dependencyMap[3]).AlertActions, obj);
  return callback(arg1(dependencyMap[2]).AlertModal, obj);
};
