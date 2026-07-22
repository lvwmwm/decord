// Module ID: 11647
// Function ID: 90383
// Name: UserProfileConfirmVideoUnstableConnection
// Dependencies: []
// Exports: default

// Module 11647 (UserProfileConfirmVideoUnstableConnection)
importAll(dependencyMap[0]);
({ jsx: closure_2, jsxs: closure_3 } = arg1(dependencyMap[1]));
const tmp3 = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/user_profile/native/UserProfileConfirmVideoUnstableConnection.tsx");

export default function UserProfileConfirmVideoUnstableConnection(onConfirm) {
  let obj = {};
  const intl = arg1(dependencyMap[3]).intl;
  obj.title = intl.string(arg1(dependencyMap[3]).t.m2Hyj0);
  const intl2 = arg1(dependencyMap[3]).intl;
  obj.content = intl2.string(arg1(dependencyMap[3]).t.EhaK6B);
  obj = {};
  obj = {};
  const intl3 = arg1(dependencyMap[3]).intl;
  obj.text = intl3.string(arg1(dependencyMap[3]).t.ND1my3);
  obj.onPress = onConfirm.onConfirm;
  const items = [callback(arg1(dependencyMap[2]).AlertActionButton, obj, "confirm"), ];
  const obj1 = { variant: "secondary" };
  const intl4 = arg1(dependencyMap[3]).intl;
  obj1.text = intl4.string(arg1(dependencyMap[3]).t.jEqEhy);
  items[1] = callback(arg1(dependencyMap[2]).AlertActionButton, obj1, "cancel");
  obj.children = items;
  obj.actions = callback2(arg1(dependencyMap[4]).AlertActions, obj);
  return callback(arg1(dependencyMap[2]).AlertModal, obj);
};
