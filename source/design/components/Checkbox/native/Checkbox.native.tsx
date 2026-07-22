// Module ID: 9014
// Function ID: 70933
// Name: Checkbox
// Dependencies: []
// Exports: Checkbox

// Module 9014 (Checkbox)
const _module = require(dependencyMap[0]);
({ Pressable: closure_2, View: closure_3 } = _module);
const _module1 = require(dependencyMap[1]);
({ jsx: closure_4, jsxs: closure_5 } = _module1);
const _module2 = require(dependencyMap[2]);
let closure_6 = _module2.createStyles({ textContainer: { flex: 1 }, labelContainer: { flex: true, alignItems: null } });
const _module3 = require(dependencyMap[8]);
const result = _module3.fileFinishedImporting("design/components/Checkbox/native/Checkbox.native.tsx");

export const Checkbox = function Checkbox(onToggle) {
  let checked;
  let description;
  let label;
  let required;
  ({ label, description, required, checked } = onToggle);
  const require = checked;
  const dependencyMap = onToggle.onToggle;
  const tmp = callback3();
  let obj = require(dependencyMap[3]);
  const checkboxA11yNative = obj.useCheckboxA11yNative({ checked });
  obj = { accessibilityRole: checkboxA11yNative.accessibilityRole };
  let str = "";
  let str2 = "";
  if (required) {
    const intl = require(dependencyMap[4]).intl;
    const _HermesInternal = HermesInternal;
    str2 = " (" + intl.string(require(dependencyMap[4]).t.EkokLy) + ")";
  }
  const sum = label + str2;
  if (null != description) {
    const _HermesInternal2 = HermesInternal;
    str = ", " + description;
  }
  obj.accessibilityLabel = sum + str;
  obj.accessibilityState = checkboxA11yNative.accessibilityState;
  obj.onPress = function onPress() {
    return onToggle(!checked);
  };
  obj = { direction: "horizontal" };
  const items = [callback(require(dependencyMap[6]).FormCheckbox, { checked }), ];
  const obj1 = { style: tmp.textContainer };
  const obj2 = { style: tmp.labelContainer };
  const obj3 = { variant: "text-md/medium" };
  const items1 = [label, ];
  if (required) {
    const obj4 = {};
    const intl2 = require(dependencyMap[4]).intl;
    obj4.aria-label = intl2.string(require(dependencyMap[4]).t.EkokLy);
    obj4.children = [-10111734812216596000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, -0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000009748035637130972];
    required = callback2(require(dependencyMap[7]).Text, obj4);
  }
  items1[1] = required;
  obj3.children = items1;
  obj2.children = callback2(require(dependencyMap[7]).Text, obj3);
  const items2 = [callback(closure_3, obj2), ];
  let tmp16 = null != description;
  if (tmp16) {
    const obj5 = { children: description };
    tmp16 = callback(require(dependencyMap[7]).Text, obj5);
  }
  items2[1] = tmp16;
  obj1.children = items2;
  items[1] = callback2(closure_3, obj1);
  obj.children = items;
  obj.children = callback2(require(dependencyMap[5]).Stack, obj);
  return callback(closure_2, obj);
};
