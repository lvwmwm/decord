// Module ID: 12049
// Function ID: 12050
// Name: useCurrentUserStageRoles
// Dependencies: [502, 6892, 504, 2]
// Exports: default

// Module 12049 (useCurrentUserStageRoles)
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import StageChannelRoleStore from "StageChannelRoleStore" /* 6892 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const result = size.fileFinishedImporting("modules/stage_channels/useCurrentUserStageRoles.tsx");

export default function useCurrentUserStageRoles(arg0) {
  let closure_0;
  _require = arg0;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  const items = [StageChannelRoleStore, AuthenticationStore];
  const items1 = [arg0, flag];
  const obj = require("get initialized");
  return obj.useStateFromStoresObject(items, () => StageChannelRoleStore.getPermissionsForUser(AuthenticationStore.getId(), closure_0, flag), items1);
};
