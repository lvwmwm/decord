// Module ID: 13975
// Function ID: 13976
// Name: ToggleButton
// Dependencies: [19, 21, 13976, 5282, 2]

// Module 13975 (ToggleButton)
import Fragment from "Fragment" /* 21 */;
import BaseTextButton2 from "BaseTextButton" /* 5282 */;
import useToggleButtonProps from "useToggleButtonProps" /* 13976 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let pressed;

const jsx = Fragment.jsx;
let obj = { Icon: BaseTextButton2.BaseTextButton.Icon };
const forwardRefResult = react.forwardRef((pressed, ref) => {
  let str;
  pressed = pressed.pressed;
  const merged = Object.assign(pressed, Object.assign({ pressed: 0 }));
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
let obj2 = assign(forwardRefResult, obj);
const result = size.fileFinishedImporting("design/components/Button/native/ToggleButton.native.tsx");

export const ToggleButton = obj2;
