// Module ID: 16014
// Function ID: 122870
// Name: RedesignSkipAvatarUploadAlertModal
// Dependencies: []
// Exports: default

// Module 16014 (RedesignSkipAvatarUploadAlertModal)
importAll(dependencyMap[0]);
({ jsx: closure_2, jsxs: closure_3 } = arg1(dependencyMap[1]));
const tmp3 = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/avatar/native/components/RedesignSkipAvatarUploadAlertModal.tsx");

export default function RedesignSkipAvatarUploadAlertModal(onConfirm) {
  let obj = {};
  const intl = arg1(dependencyMap[3]).intl;
  obj.title = intl.string(arg1(dependencyMap[3]).t.DnKHuV);
  const intl2 = arg1(dependencyMap[3]).intl;
  obj.content = intl2.string(arg1(dependencyMap[3]).t.1EPySE);
  obj = {};
  obj = { onPress: onConfirm.onConfirm };
  const intl3 = arg1(dependencyMap[3]).intl;
  obj.text = intl3.string(arg1(dependencyMap[3]).t.nhJ8OC);
  const items = [callback(arg1(dependencyMap[2]).AlertActionButton, obj, "confirm"), ];
  const obj1 = { variant: "secondary" };
  const intl4 = arg1(dependencyMap[3]).intl;
  obj1.text = intl4.string(arg1(dependencyMap[3]).t.7eZ3ji);
  items[1] = callback(arg1(dependencyMap[2]).AlertActionButton, obj1, "add-profile-picture");
  obj.children = items;
  obj.actions = callback2(arg1(dependencyMap[4]).AlertActions, obj);
  return callback(arg1(dependencyMap[2]).AlertModal, obj);
};
