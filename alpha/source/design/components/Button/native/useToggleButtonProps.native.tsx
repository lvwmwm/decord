// Module ID: 12595
// Function ID: 12596
// Name: useToggleButtonProps
// Dependencies: [2]
// Exports: useToggleButtonProps, useToggleIconButtonProps

// Module 12595 (useToggleButtonProps)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("design/components/Button/native/useToggleButtonProps.native.tsx");

export function useToggleButtonProps(cResult, cResult2) {
  const obj = { accessibilityRole: "togglebutton", accessibilityState: { checked: cResult2 } };
  const tmp = cResult2 ? cResult.on : cResult.off;
  const merged = Object.assign(tmp);
  return obj;
}
export function useToggleIconButtonProps(first1, flag) {
  const obj = { accessibilityRole: "togglebutton", accessibilityState: { checked: flag } };
  const tmp = flag ? first1.on : first1.off;
  const merged = Object.assign(tmp);
  return obj;
}
