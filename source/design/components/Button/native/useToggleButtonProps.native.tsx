// Module ID: 13141
// Function ID: 101237
// Name: useToggleButtonProps
// Dependencies: [2]
// Exports: useToggleButtonProps, useToggleIconButtonProps

// Module 13141 (useToggleButtonProps)
const result = require("set").fileFinishedImporting("design/components/Button/native/useToggleButtonProps.native.tsx");

export const useToggleButtonProps = function useToggleButtonProps(on, first) {
  let obj = {};
  const merged = Object.assign(first ? on.on : on.off);
  obj["accessibilityRole"] = "togglebutton";
  obj = { checked: first };
  obj["accessibilityState"] = obj;
  return obj;
};
export const useToggleIconButtonProps = function useToggleIconButtonProps(on, first) {
  let obj = {};
  const merged = Object.assign(first ? on.on : on.off);
  obj["accessibilityRole"] = "togglebutton";
  obj = { checked: first };
  obj["accessibilityState"] = obj;
  return obj;
};
