// Module ID: 5502
// Function ID: 5503
// Name: react-native
// Dependencies: [5451]
// Exports: getModuleId

// Module 5502 (react-native)
import react_nativeDefault from "react-native" /* 5451 */;


export function getModuleId() {
  let moduleId;
  if (moduleId == null) {
    const obj = react_nativeDefault;
    moduleId = obj.getModuleId();
  }
  return moduleId;
}
