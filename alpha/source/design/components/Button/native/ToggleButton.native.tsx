// Module ID: 15811
// Function ID: 15812
// Name: ToggleButton
// Dependencies: [19, 21, 12745, 5630, 2]

// Module 15811 (ToggleButton)
import Fragment from "Fragment" /* 21 */;
import BaseTextButton2 from "BaseTextButton" /* 5630 */;
import useToggleButtonProps from "useToggleButtonProps" /* 12745 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let obj = { Icon: BaseTextButton2.BaseTextButton.Icon };
let merged = Object.assign(function ToggleButton(pressed) {
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
}, obj);
const result = size.fileFinishedImporting("design/components/Button/native/ToggleButton.native.tsx");

export const ToggleButton = merged;
