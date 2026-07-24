// Module ID: 10654
// Function ID: 83070
// Name: useCurrentUserStageRoles
// Dependencies: [1194, 4954, 566, 2]
// Exports: default

// Module 10654 (useCurrentUserStageRoles)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_3 from "_isNativeReflectConstruct";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/stage_channels/useCurrentUserStageRoles.tsx");

export default function useCurrentUserStageRoles(arg0) {
  let flag = arg1;
  const _require = arg0;
  if (arg1 === undefined) {
    flag = false;
  }
  const items = [closure_3, _isNativeReflectConstruct];
  const items1 = [arg0, flag];
  return _require(flag[2]).useStateFromStoresObject(items, () => outer1_3.getPermissionsForUser(outer1_2.getId(), closure_0, flag), items1);
};
