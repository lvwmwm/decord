// Module ID: 7516
// Function ID: 60204
// Name: FormRadioGroup
// Dependencies: []
// Exports: default

// Module 7516 (FormRadioGroup)
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_5, jsxs: closure_6 } = arg1(dependencyMap[2]));
const tmp2 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[6]).fileFinishedImporting("design/void/Form/native/FormRadioGroup.tsx");

export default function FormRadioGroup(arg0) {
  let accessibilityLabel;
  let children;
  let hasIcons;
  let hint;
  let icon;
  let title;
  let value;
  ({ title, children, hint } = arg0);
  let obj = { -9223372036854775808: "ThreadLockIcon", 9223372036854775807: "png", 0: true, 9223372036854775807: "/assets/design/components/Icon/native/redesign/generated/images", 9223372036854775807: 24, -9223372036854775808: 24, 9223372036854775807: null };
  ({ hasIcons, accessibilityLabel, value, icon } = arg0);
  Object.setPrototypeOf(null);
  const merged = Object.assign(arg0, obj);
  if (React.useContext(arg1(dependencyMap[3]).RedesignCompatContext)) {
    obj = { style: {} };
    obj = {};
    const obj1 = { defaultValue: value, hasIcons, title, accessibilityLabel, children };
    obj.children = callback(arg1(dependencyMap[4]).TableRadioGroup, obj1);
    const items = [callback(View, obj), ];
    let tmp16 = null;
    if (null != hint) {
      const obj2 = {};
      const obj3 = { marginTop: 8 };
      obj2.style = obj3;
      obj2.children = hint;
      tmp16 = callback(View, obj2);
    }
    items[1] = tmp16;
    obj.children = items;
    let tmp11Result = closure_6(View, obj);
    const tmp11 = closure_6;
    const tmp12 = View;
  } else {
    const obj4 = { title, accessibilityRole: "radiogroup", accessibilityLabel: title, hint, icon };
    const merged1 = Object.assign(merged);
    obj4["children"] = children;
    tmp11Result = callback(importDefault(dependencyMap[5]), obj4);
    const tmp6 = importDefault(dependencyMap[5]);
  }
  return tmp11Result;
};
