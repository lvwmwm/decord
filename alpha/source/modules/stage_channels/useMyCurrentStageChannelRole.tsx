// Module ID: 12213
// Function ID: 12214
// Name: useMyCurrentStageChannelRole
// Dependencies: [502, 5044, 6892, 504, 2]
// Exports: default

// Module 12213 (useMyCurrentStageChannelRole)
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import SelectedChannelStore from "SelectedChannelStore" /* 5044 */;
import StageChannelRoleStore from "StageChannelRoleStore" /* 6892 */;
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
