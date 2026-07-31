// Module ID: 13227
// Function ID: 13228
// Name: useToggleButtonProps
// Dependencies: [2]
// Exports: useToggleButtonProps, useToggleIconButtonProps

// Module 13227 (useToggleButtonProps)
const result = require("set").fileFinishedImporting("design/components/Button/native/useToggleButtonProps.native.tsx");

export const useToggleButtonProps = function useToggleButtonProps(on, first) {
  const obj = {};
  const merged = Object.assign(first ? on.on : on.off);
  obj.accessibilityRole = "togglebutton";
  obj.accessibilityState = { checked: first };
  return obj;
};
export const useToggleIconButtonProps = function useToggleIconButtonProps(on, first) {
  const obj = {};
  const merged = Object.assign(first ? on.on : on.off);
  obj.accessibilityRole = "togglebutton";
  obj.accessibilityState = { checked: first };
  return obj;
};
