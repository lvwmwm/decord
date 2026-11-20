// Module ID: 10937
// Function ID: 10938
// Name: useMyCurrentStageChannelRole
// Dependencies: [502, 4697, 6417, 504, 2]
// Exports: default

// Module 10937 (useMyCurrentStageChannelRole)
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import SelectedChannelStore from "SelectedChannelStore" /* 4697 */;
import StageChannelRoleStore from "StageChannelRoleStore" /* 6417 */;
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
