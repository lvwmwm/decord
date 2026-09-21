// Module ID: 5813
// Function ID: 5814
// Name: useInitialValue
// Dependencies: [19, 558, 2]
// Exports: default

// Module 5813 (useInitialValue)
import noop from "module_19" /* 19 */;

let ReactCompilerGating = fn(558);
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const size = fn(2);
const result1 = size.fileFinishedImporting("hooks/useInitialValue.tsx");

export default (arg0) => noop.useState(arg0)[0];
