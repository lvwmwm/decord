// Module ID: 11730
// Function ID: 11731
// Name: usePlaceholderSize
// Dependencies: [19, 558, 2]

// Module 11730 (usePlaceholderSize)
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function usePlaceholderWidth(arg0, arg1) {
  return Math.random() * (arg1 - arg0) + arg0;
}) : (function usePlaceholderWidth(arg0, arg1) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  const items = [arg0, arg1];
  return react.useMemo(() => Math.random() * (closure_1 - closure_0) + closure_0, items);
});
const result = size.fileFinishedImporting("modules/app_launcher/native/hooks/usePlaceholderSize.tsx");

export const usePlaceholderWidth = tmp2;
