// Module ID: 5672
// Function ID: 5673
// Name: react-native
// Dependencies: [5621]
// Exports: getModuleId

// Module 5672 (react-native)
import react_nativeDefault from "react-native" /* 5621 */;


export function getModuleId() {
  let moduleId;
  if (moduleId == null) {
    const obj = react_nativeDefault;
    moduleId = obj.getModuleId();
  }
  return moduleId;
}
