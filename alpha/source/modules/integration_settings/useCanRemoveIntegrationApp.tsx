// Module ID: 20066
// Function ID: 20067
// Name: useCanRemoveIntegrationApp
// Dependencies: [4975, 1071, 504, 2]
// Exports: default

// Module 20066 (useCanRemoveIntegrationApp)
import Constants from "Constants" /* 1071 */;
import PermissionStore from "PermissionStore" /* 4975 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

const Permissions = Constants.Permissions;
const result = size.fileFinishedImporting("modules/integration_settings/useCanRemoveIntegrationApp.tsx");

export default function useCanRemoveIntegrationApp(arg0, arg1) {
  let bot;
  let closure_0;
  _require = arg0;
  dependencyMap = arg1;
  const items = [PermissionStore];
  const items1 = [arg1, arg0];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => {
    let tmp2 = null != closure_0;
    const tmp = closure_0;
    if (tmp2) {
      tmp2 = null != bot;
    }
    if (tmp2) {
      tmp2 = null == bot.bot || PermissionStore.canManageUser(Permissions.MANAGE_GUILD, tmp4.bot.id, tmp);
      const canManageUserResult = null == bot.bot || PermissionStore.canManageUser(Permissions.MANAGE_GUILD, tmp4.bot.id, tmp);
    }
    return tmp2;
  }, items1);
};
