// Module ID: 12963
// Function ID: 98626
// Name: useToggleButtonProps
// Dependencies: []
// Exports: useToggleButtonProps, useToggleIconButtonProps

// Module 12963 (useToggleButtonProps)
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("design/components/Button/native/useToggleButtonProps.native.tsx");

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
