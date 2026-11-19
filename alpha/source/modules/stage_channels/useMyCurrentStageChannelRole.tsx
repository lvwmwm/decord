// Module ID: 10995
// Function ID: 10996
// Name: useMyCurrentStageChannelRole
// Dependencies: [502, 4695, 6415, 504, 2]
// Exports: default

// Module 10995 (useMyCurrentStageChannelRole)
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import SelectedChannelStore from "SelectedChannelStore" /* 4695 */;
import StageChannelRoleStore from "StageChannelRoleStore" /* 6415 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const result = size.fileFinishedImporting("modules/stage_channels/useMyCurrentStageChannelRole.tsx");

export default function useMyCurrentStageChannelRole(arg0) {
  let closure_0;
  _require = arg0;
  const items = [AuthenticationStore, SelectedChannelStore, StageChannelRoleStore];
  const items1 = [arg0];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => {
    const id = AuthenticationStore.getId();
    let permissionsForUser = null;
    if (SelectedChannelStore.getVoiceChannelId() === closure_0) {
      permissionsForUser = StageChannelRoleStore.getPermissionsForUser(id, tmp2);
    }
    return permissionsForUser;
  }, items1);
};
