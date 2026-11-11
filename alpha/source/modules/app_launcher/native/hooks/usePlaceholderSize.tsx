// Module ID: 13287
// Function ID: 13288
// Name: react
// Dependencies: [19, 2]
// Exports: usePlaceholderWidth

// Module 13287 (react)
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/app_launcher/native/hooks/usePlaceholderSize.tsx");

export function usePlaceholderWidth(arg0, arg1) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  const items = [arg0, arg1];
  return react.useMemo(() => Math.random() * (closure_1 - closure_0) + closure_0, items);
}
