// Module ID: 15283
// Function ID: 15284
// Name: useToggleButtonProps
// Dependencies: [2]
// Exports: useToggleButtonProps, useToggleIconButtonProps

// Module 15283 (useToggleButtonProps)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("design/components/Button/native/useToggleButtonProps.native.tsx");

export function useToggleButtonProps(on, pressed) {
  const obj = { accessibilityRole: "togglebutton", accessibilityState: { checked: pressed } };
  const tmp = pressed ? on.on : on.off;
  const merged = Object.assign(tmp);
  return obj;
}
export function useToggleIconButtonProps(on, flag) {
  const obj = { accessibilityRole: "togglebutton", accessibilityState: { checked: flag } };
  const tmp = flag ? on.on : on.off;
  const merged = Object.assign(tmp);
  return obj;
}
