// Module ID: 5631
// Function ID: 5632
// Name: useInitialValue
// Dependencies: [19, 558, 2]
// Exports: default

// Module 5631 (useInitialValue)
import react from "react" /* 19 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const result1 = size.fileFinishedImporting("hooks/useInitialValue.tsx");

export default function useInitialValue(arg0) {
  return react.useState(arg0)[0];
};
