// Module ID: 5500
// Function ID: 5501
// Name: react-native
// Dependencies: [5449]
// Exports: getModuleId

// Module 5500 (react-native)
import react_nativeDefault from "react-native" /* 5449 */;


export function getModuleId() {
  let moduleId;
  if (moduleId == null) {
    const obj = react_nativeDefault;
    moduleId = obj.getModuleId();
  }
  return moduleId;
}
