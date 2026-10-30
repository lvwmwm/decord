// Module ID: 12744
// Function ID: 12745
// Name: ToggleIconButton
// Dependencies: [19, 21, 12745, 8021, 2]
// Exports: ToggleIconButton

// Module 12744 (ToggleIconButton)
import Fragment from "Fragment" /* 21 */;
import useToggleButtonProps from "useToggleButtonProps" /* 12745 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let tmp2;
const BaseIconButton2 = tmp2(8021);
const jsx = Fragment.jsx;
let closure_3 = { default: { off: "toggle-icon-default-off", on: "toggle-icon-default-on" }, critical: { off: "toggle-icon-critical-off", on: "toggle-icon-critical-on" }, "icon-only": { off: "toggle-icon-only-off", on: "toggle-icon-only-on" } };
const result = size.fileFinishedImporting("design/components/Button/native/ToggleIconButton.native.tsx");

export function ToggleIconButton(pressed) {
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
  const ref = pressed.ref;
  const merged = Object.assign(pressed, Object.assign({ pressed: 0, selectedIcon: 0, variant: 0, icon: 0, ref: 0 }));
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
  return <BaseIconButton ref={ref} variant={flag ? closure_3[variant].on : closure_3[variant].off} />;
}
