// Module ID: 13977
// Function ID: 13978
// Name: ToggleIconButton
// Dependencies: [19, 21, 13976, 7364, 2]

// Module 13977 (ToggleIconButton)
import Fragment from "Fragment" /* 21 */;
import useToggleButtonProps from "useToggleButtonProps" /* 13976 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let tmp2;
const BaseIconButton2 = tmp2(7364);
const jsx = Fragment.jsx;
let closure_3 = { default: { off: "toggle-icon-default-off", on: "toggle-icon-default-on" }, critical: { off: "toggle-icon-critical-off", on: "toggle-icon-critical-on" }, "icon-only": { off: "toggle-icon-only-off", on: "toggle-icon-only-on" } };
const forwardRefResult = react.forwardRef((pressed, ref) => {
  let obj3;
  let selectedIcon;
  let variant;
  let flag = pressed.pressed;
  if (flag === undefined) {
    flag = false;
  }
  ({ selectedIcon, variant } = pressed);
  if (variant === undefined) {
    variant = "default";
  }
  const icon = pressed.icon;
  const merged = Object.assign(pressed, Object.assign({ pressed: 0, selectedIcon: 0, variant: 0, icon: 0 }));
  const obj = { icon: selectedIcon };
  const useToggleIconButtonProps = useToggleButtonProps.useToggleIconButtonProps;
  useToggleButtonProps;
  const merged1 = Object.assign(merged);
  if (selectedIcon == null) {
    selectedIcon = icon;
  }
  const obj2 = { on: obj, off: obj3 };
  obj3 = { icon };
  const merged2 = Object.assign(merged);
  const toggleIconButtonProps = useToggleIconButtonProps(obj2, flag);
  const BaseIconButton = BaseIconButton2.BaseIconButton;
  const merged3 = Object.assign(toggleIconButtonProps);
  return <BaseIconButton ref={arg1} variant={flag ? closure_3[variant].on : closure_3[variant].off} />;
});
const result = size.fileFinishedImporting("design/components/Button/native/ToggleIconButton.native.tsx");

export const ToggleIconButton = forwardRefResult;
