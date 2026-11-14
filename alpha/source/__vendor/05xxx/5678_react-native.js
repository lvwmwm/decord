// Module ID: 5678
// Function ID: 5679
// Name: react-native
// Dependencies: [5627]
// Exports: getModuleId

// Module 5678 (react-native)
import react_nativeDefault from "react-native" /* 5627 */;


export function getModuleId() {
  let moduleId;
  if (moduleId == null) {
    const obj = react_nativeDefault;
    moduleId = obj.getModuleId();
  }
  return moduleId;
}
