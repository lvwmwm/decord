// Module ID: 11536
// Function ID: 11537
// Name: react
// Dependencies: [19, 2]
// Exports: usePlaceholderWidth

// Module 11536 (react)
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/app_launcher/native/hooks/usePlaceholderSize.tsx");

export const usePlaceholderWidth = function usePlaceholderWidth(arg0, arg1) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  const items = [arg0, arg1];
  return react.useMemo(() => Math.random() * (closure_1 - closure_0) + closure_0, items);
};
