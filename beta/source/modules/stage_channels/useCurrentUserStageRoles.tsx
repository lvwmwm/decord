// Module ID: 9758
// Function ID: 9759
// Name: useCurrentUserStageRoles
// Dependencies: [502, 5638, 504, 2]
// Exports: default

// Module 9758 (useCurrentUserStageRoles)
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import StageChannelRoleStore from "StageChannelRoleStore" /* 5638 */;

const require = globalThis.__r;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/stage_channels/useCurrentUserStageRoles.tsx");

export default function useCurrentUserStageRoles(arg0) {
  _require = arg0;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  const items = [StageChannelRoleStore, AuthenticationStore];
  const items1 = [arg0, flag];
  return require("initialize").useStateFromStoresObject(items, () => StageChannelRoleStore.getPermissionsForUser(AuthenticationStore.getId(), closure_0, flag), items1);
};
