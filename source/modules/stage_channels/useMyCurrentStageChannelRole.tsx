// Module ID: 10761
// Function ID: 83582
// Name: useMyCurrentStageChannelRole
// Dependencies: [1194, 1906, 4954, 566, 2]
// Exports: default

// Module 10761 (useMyCurrentStageChannelRole)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_3 from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";

const require = arg1;
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/stage_channels/useMyCurrentStageChannelRole.tsx");

export default function useMyCurrentStageChannelRole(arg0) {
  const _require = arg0;
  const items = [_isNativeReflectConstruct, closure_3, closure_4];
  const items1 = [arg0];
  return _require(566).useStateFromStores(items, () => {
    const id = outer1_2.getId();
    let permissionsForUser = null;
    if (outer1_3.getVoiceChannelId() === closure_0) {
      permissionsForUser = outer1_4.getPermissionsForUser(id, closure_0);
    }
    return permissionsForUser;
  }, items1);
};
