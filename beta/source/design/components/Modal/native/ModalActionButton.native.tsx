// Module ID: 10459
// Function ID: 10460
// Name: ModalActionButton
// Dependencies: [19, 17, 21, 4836, 5281, 2]
// Exports: ModalActionButton

// Module 10459 (ModalActionButton)
import react_native from "react-native" /* 17 */;
import components_Button_Button from "components/Button/Button" /* 5281 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let hasOwnProperty;
const View = react_native.View;
({ jsx: c3, Fragment: closure_4, jsxs: hasOwnProperty } = Fragment);
let closure_6 = createStyles.createStyles({ spacer: { marginTop: 12 } });
const result = size.fileFinishedImporting("design/components/Modal/native/ModalActionButton.native.tsx");

export const ModalActionButton = function ModalActionButton(variant) {
  let items;
  variant = variant.variant;
  const merged = Object.assign(variant, Object.assign({ variant: 0 }));
  let tmp5 = "secondary" === variant;
  const tmp3 = hasOwnProperty;
  const tmp4 = React3;
  if (tmp5) {
    const obj = { style: tmp2.spacer };
    tmp5 = _false(View, obj);
  }
  const obj2 = { children: items };
  items = [tmp5, ];
  const obj3 = { variant, size: "lg" };
  const Button = components_Button_Button.Button;
  const merged1 = Object.assign(merged);
  items[1] = _false(Button, obj3);
  return tmp3(tmp4, obj2);
};
