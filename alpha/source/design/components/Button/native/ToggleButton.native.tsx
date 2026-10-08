// Module ID: 14091
// Function ID: 14092
// Name: ToggleButton
// Dependencies: [109, 19, 21, 558, 576, 14092, 5376, 2]

// Module 14091 (ToggleButton)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import BaseTextButton2 from "BaseTextButton" /* 5376 */;
import useToggleButtonProps from "useToggleButtonProps" /* 14092 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_2 = ["pressed", "ref"];
const jsx = Fragment.jsx;
let obj = { Icon: BaseTextButton2.BaseTextButton.Icon };
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function ToggleButton(arg0) {
  let pressed;
  let ref;
  let tmp10;
  let tmp4;
  let tmp5;
  let tmp6;
  const obj = react2;
  const cResult = obj.c(10);
  if (cResult[0] !== arg0) {
    ({ pressed, ref } = arg0);
    const tmp9 = _objectWithoutProperties(arg0, closure_2);
    cResult[0] = arg0;
    cResult[1] = pressed;
    cResult[2] = tmp9;
    cResult[3] = ref;
    tmp6 = ref;
    tmp5 = tmp9;
    tmp4 = pressed;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
    tmp6 = cResult[3];
  }
  if (cResult[4] !== tmp5) {
    const obj2 = { on: tmp5, off: tmp5 };
    cResult[4] = tmp5;
    cResult[5] = obj2;
    tmp10 = obj2;
  } else {
    tmp10 = cResult[5];
  }
  const tmpResult = useToggleButtonProps;
  const toggleButtonProps = tmpResult.useToggleButtonProps(tmp10, tmp4);
  let str = "toggle-off";
  if (tmp4) {
    str = "toggle-on";
  }
  if (cResult[6] === tmp6) {
    if (cResult[7] === str) {
      let tmp12;
      if (cResult[8] === toggleButtonProps) {
        tmp12 = cResult[9];
      }
      return tmp12;
    }
  }
  const BaseTextButton = tmp(5376).BaseTextButton;
  const merged = Object.assign(toggleButtonProps);
  const tmp14 = <BaseTextButton ref={tmp6} variant={str} />;
  cResult[6] = tmp6;
  cResult[7] = str;
  cResult[8] = toggleButtonProps;
  cResult[9] = tmp14;
  tmp12 = tmp14;
}) : (function ToggleButton(pressed) {
  let str;
  pressed = pressed.pressed;
  const ref = pressed.ref;
  const merged = Object.assign(pressed, Object.assign({ pressed: 0, ref: 0 }));
  const obj = useToggleButtonProps;
  const toggleButtonProps = obj.useToggleButtonProps({ on: merged, off: merged }, pressed);
  const obj2 = { ref, variant: str };
  const BaseTextButton = BaseTextButton2.BaseTextButton;
  const merged1 = Object.assign(toggleButtonProps);
  str = "toggle-off";
  const tmp3 = jsx;
  if (pressed) {
    str = "toggle-on";
  }
  return tmp3(BaseTextButton, obj2);
});
let obj2 = assign(tmp3, obj);
const result = size.fileFinishedImporting("design/components/Button/native/ToggleButton.native.tsx");

export const ToggleButton = obj2;
