// Module ID: 6754
// Function ID: 52613
// Name: toPermissionKey
// Dependencies: [57, 1881, 6755, 2]
// Exports: commandName, commandPermissionChannels, commandPermissionMembersRoles, keyPermissions

// Module 6754 (toPermissionKey)
import _slicedToArray from "_slicedToArray";

const require = arg1;
function toPermissionKey(value, ROLE) {
  return "" + value + ":" + ROLE;
}
function commandPermissions(arg0, items) {
  let tmp3;
  let tmp4;
  const obj = {};
  const entries = Object.entries(arg0);
  for (let num = 0; num < entries.length; num = num + 1) {
    let tmp = callback;
    let tmp2 = callback(entries[num], 2);
    [tmp3, tmp4] = tmp2;
    if (items.includes(tmp4.type)) {
      obj[tmp3] = tmp4;
    }
  }
  return obj;
}
const result = require("ApplicationCommandSectionType").fileFinishedImporting("modules/guild_settings/integrations/permission/IntegrationPermissionUtils.tsx");

export const commandName = function commandName(arg0, arg1) {
  let text = arg1;
  if (arg0 === require(1881) /* PermissionOverwriteType */.ApplicationCommandType.CHAT) {
    text = `/${arg1}`;
  }
  return text;
};
export const commandPermissionChannels = function commandPermissionChannels(arg0) {
  const items = [require(6755) /* ApplicationCommandSectionType */.ApplicationCommandPermissionType.CHANNEL];
  return commandPermissions(arg0, items);
};
export const commandPermissionMembersRoles = function commandPermissionMembersRoles(arg0) {
  const items = [require(6755) /* ApplicationCommandSectionType */.ApplicationCommandPermissionType.ROLE, require(6755) /* ApplicationCommandSectionType */.ApplicationCommandPermissionType.USER];
  return commandPermissions(arg0, items);
};
export { toPermissionKey };
export const keyPermissions = function keyPermissions(permissions) {
  return Object.fromEntries(permissions.map((id) => {
    const items = [outer1_3(id.id, id.type), id];
    return items;
  }));
};
