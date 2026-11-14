// Module ID: 1715
// Function ID: 1716
// Name: WorkletsTurboModule
// Dependencies: [1710, 1716]

// Module 1715 (WorkletsTurboModule)
import RuntimeKind from "RuntimeKind" /* 1710 */;
import react_nativeDefault from "react-native" /* 1716 */;

let importDefaultResult = null;
if (globalThis.__RUNTIME_KIND === RuntimeKind.RuntimeKind.ReactNative) {
  importDefaultResult = react_nativeDefault;
}

export const WorkletsTurboModule = importDefaultResult;
