// Module ID: 14644
// Function ID: 110421
// Name: PromotionalEmailCheckBox
// Dependencies: []
// Exports: default

// Module 14644 (PromotionalEmailCheckBox)
importAll(dependencyMap[0]);
({ View: closure_2, Pressable: closure_3 } = arg1(dependencyMap[1]));
const tmp3 = arg1(dependencyMap[1]);
({ usePromoEmailConsentStore: closure_4, setPromoEmailConsentChecked: closure_5 } = arg1(dependencyMap[2]));
const tmp4 = arg1(dependencyMap[2]);
({ jsx: closure_6, jsxs: closure_7 } = arg1(dependencyMap[3]));
const tmp5 = arg1(dependencyMap[3]);
let closure_8 = arg1(dependencyMap[4]).createStyles({ checkboxRow: {}, checkboxLabel: { flex: 1 } });
const obj = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/auth/native/components/PromotionalEmailCheckBox.tsx");

export default function PromotionalEmailCheckBox(style) {
  const tmp = callback4();
  const tmp3 = callback((checked) => checked.checked);
  const arg1 = tmp3;
  let obj = arg1(dependencyMap[5]);
  const checkboxA11yNative = obj.useCheckboxA11yNative({ checked: tmp3 });
  let tmp7 = null;
  if (tmp2) {
    obj = { style: style.style };
    obj = { accessibilityRole: tmp5 };
    const intl = arg1(dependencyMap[6]).intl;
    obj.accessibilityLabel = intl.string(arg1(dependencyMap[6]).t.ylFCLt);
    obj.accessibilityState = tmp6;
    obj.onPress = function onPress() {
      return callback(!tmp3);
    };
    obj.style = tmp.checkboxRow;
    const obj1 = { checked: tmp3 };
    const items = [callback2(arg1(dependencyMap[7]).FormCheckbox, obj1), ];
    const obj2 = { style: tmp.checkboxLabel };
    const intl2 = arg1(dependencyMap[6]).intl;
    obj2.children = intl2.string(arg1(dependencyMap[6]).t.ylFCLt);
    items[1] = callback2(arg1(dependencyMap[8]).Text, obj2);
    obj.children = items;
    obj.children = callback3(closure_3, obj);
    tmp7 = callback2(closure_2, obj);
  }
  return tmp7;
};
