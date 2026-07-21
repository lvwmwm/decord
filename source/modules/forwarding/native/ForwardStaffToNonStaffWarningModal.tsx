// Module ID: 9869
// Function ID: 76410
// Name: ForwardStaffToNonStaffWarningModal
// Dependencies: []
// Exports: default

// Module 9869 (ForwardStaffToNonStaffWarningModal)
const _module = require(dependencyMap[0]);
({ jsx: closure_2, Fragment: closure_3, jsxs: closure_4 } = _module);
const _module1 = require(dependencyMap[3]);
const result = _module1.fileFinishedImporting("modules/forwarding/native/ForwardStaffToNonStaffWarningModal.tsx");

export default function ForwardStaffToNonStaffWarningModal(arg0) {
  let onBack;
  let onConfirm;
  ({ onConfirm, onBack } = arg0);
  let obj = {};
  const intl = require(dependencyMap[2]).intl;
  obj.title = intl.string(require(dependencyMap[2]).t.YrV3I9);
  const intl2 = require(dependencyMap[2]).intl;
  obj.content = intl2.string(require(dependencyMap[2]).t.MXSMtl);
  obj = {};
  obj = {};
  const intl3 = require(dependencyMap[2]).intl;
  obj.text = intl3.string(require(dependencyMap[2]).t.X7eUJq);
  obj.onPress = onConfirm;
  const items = [callback(require(dependencyMap[1]).AlertActionButton, obj, "confirm"), ];
  const obj1 = { variant: "secondary" };
  const intl4 = require(dependencyMap[2]).intl;
  obj1.text = intl4.string(require(dependencyMap[2]).t.13/7kX);
  obj1.onPress = onBack;
  items[1] = callback(require(dependencyMap[1]).AlertActionButton, obj1, "back");
  obj.children = items;
  obj.actions = callback2(closure_3, obj);
  return callback(require(dependencyMap[1]).AlertModal, obj);
};
