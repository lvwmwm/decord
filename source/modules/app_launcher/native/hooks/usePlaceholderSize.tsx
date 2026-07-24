// Module ID: 11204
// Function ID: 87157
// Name: usePlaceholderWidth
// Dependencies: [31, 2]
// Exports: usePlaceholderWidth

// Module 11204 (usePlaceholderWidth)
import result from "result";

const result = require("set").fileFinishedImporting("modules/app_launcher/native/hooks/usePlaceholderSize.tsx");

export const usePlaceholderWidth = function usePlaceholderWidth(arg0, arg1) {
  const React = arg0;
  let closure_1 = arg1;
  const items = [arg0, arg1];
  return React.useMemo(() => Math.random() * (closure_1 - result) + result, items);
};
