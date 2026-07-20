// Module ID: 9892
// Function ID: 76557
// Name: ModalActionButton
// Dependencies: []
// Exports: ModalActionButton

// Module 9892 (ModalActionButton)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_3, Fragment: closure_4, jsxs: closure_5 } = arg1(dependencyMap[2]));
const tmp3 = arg1(dependencyMap[2]);
let closure_6 = arg1(dependencyMap[3]).createStyles({ spacer: { marginTop: 12 } });
const obj = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[5]).fileFinishedImporting("design/components/Modal/native/ModalActionButton.native.tsx");

export const ModalActionButton = function ModalActionButton(variant) {
  variant = variant.variant;
  let obj = Object.create(null);
  obj.variant = 0;
  const merged = Object.assign(variant, obj);
  obj = {};
  let tmp6 = "secondary" === variant;
  if (tmp6) {
    obj = { style: tmp3.spacer };
    tmp6 = callback(View, obj);
  }
  const items = [tmp6, ];
  const obj1 = {};
  const merged1 = Object.assign(merged);
  obj1["variant"] = variant;
  obj1["size"] = "lg";
  items[1] = callback(arg1(dependencyMap[4]).Button, obj1);
  obj.children = items;
  return closure_5(closure_4, obj);
};
