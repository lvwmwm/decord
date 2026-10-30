// Module ID: 11977
// Function ID: 11978
// Name: useMyCurrentStageChannelRole
// Dependencies: [502, 4912, 6751, 504, 2]
// Exports: default

// Module 11977 (useMyCurrentStageChannelRole)
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import SelectedChannelStore from "SelectedChannelStore" /* 4912 */;
import StageChannelRoleStore from "StageChannelRoleStore" /* 6751 */;
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
