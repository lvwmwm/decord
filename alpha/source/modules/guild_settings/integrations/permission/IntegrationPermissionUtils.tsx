// Module ID: 8185
// Function ID: 8186
// Name: IntegrationPermissionUtils
// Dependencies: [32, 2118, 5695, 7741, 1083, 2]
// Exports: commandName, commandPermissionChannels, commandPermissionMembersRoles, getRequiredPermissions, keyPermissions, toPermissionKey

// Module 8185 (IntegrationPermissionUtils)
import BigFlagUtilsAll from "BigFlagUtils" /* 1083 */;
import Server from "Server" /* 2118 */;
import ApplicationCommandTypes from "ApplicationCommandTypes" /* 5695 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

function commandPermissions(arg0, items) {
  let tmp6;
  let tmp7;
  const obj = {};
  const entries = Object.entries(arg0);
  const tmp2 = entries[Symbol.iterator]();
  while (tmp2 !== undefined) {
    let tmp5 = _slicedToArray(tmp3, 2);
    [tmp6, tmp7] = tmp5;
    let tmp8 = tmp7;
    if (items.includes(tmp7.type)) {
      obj[tmp6] = tmp8;
    }
    continue;
  }
  return obj;
}
const result = size.fileFinishedImporting("modules/guild_settings/integrations/permission/IntegrationPermissionUtils.tsx");

export function commandName(type, displayName) {
  let text = displayName;
  if (type === Server.ApplicationCommandType.CHAT) {
    text = `/${displayName}`;
  }
  return text;
}
export function commandPermissionChannels(arg0) {
  const items = [ApplicationCommandTypes.ApplicationCommandPermissionType.CHANNEL];
  return commandPermissions(arg0, items);
}
export function commandPermissionMembersRoles(arg0) {
  const items = [ApplicationCommandTypes.ApplicationCommandPermissionType.ROLE, ApplicationCommandTypes.ApplicationCommandPermissionType.USER];
  return commandPermissions(arg0, items);
}
export function toPermissionKey(id, CHANNEL) {
  return "" + id + ":" + CHANNEL;
}
export function keyPermissions(permissions) {
  return Object.fromEntries(permissions.map((id) => {
    const items = ["" + id.id + ":" + id.type, id];
    return items;
  }));
}
export function getRequiredPermissions(defaultMemberPermissions) {
  _require = defaultMemberPermissions;
  const OrderedPermissions = require("permissions").OrderedPermissions;
  return OrderedPermissions.filter((item) => {
    const obj = BigFlagUtilsAll;
    return obj.has(defaultMemberPermissions, item);
  });
}
