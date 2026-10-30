// Module ID: 11813
// Function ID: 11814
// Name: useCurrentUserStageRoles
// Dependencies: [502, 6751, 504, 2]
// Exports: default

// Module 11813 (useCurrentUserStageRoles)
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import StageChannelRoleStore from "StageChannelRoleStore" /* 6751 */;
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
