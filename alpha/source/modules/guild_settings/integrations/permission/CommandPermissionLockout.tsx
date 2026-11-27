// Module ID: 20079
// Function ID: 20080
// Name: CommandPermissionLockout
// Dependencies: [4949, 8527, 5695, 1112, 2]
// Exports: getCommandPermissionLockout, getCommandPermissionLockoutMessage

// Module 20079 (CommandPermissionLockout)
import intl4 from "intl" /* 1112 */;
import ApplicationCommandTypes from "ApplicationCommandTypes" /* 5695 */;
import ChannelPermissionsUtils from "ChannelPermissionsUtils" /* 8527 */;
import GuildRoleStore from "GuildRoleStore" /* 4949 */;
import size from "module_2" /* 2 */;

const InvalidAction = { REMOVE_SELF: 0, [0]: "REMOVE_SELF", REMOVE_ROLE: 1, [1]: "REMOVE_ROLE", DENY_ROLE: 2, [2]: "DENY_ROLE" };
const result = size.fileFinishedImporting("modules/guild_settings/integrations/permission/CommandPermissionLockout.tsx");

export { InvalidAction };
export function getCommandPermissionLockout(guildId, editedTargetPermissions, arg2, arg3) {
  let obj;
  let str2;
  let str3;
  if (0 !== arg3.length) {
    const tmp6 = require;
    if (editedTargetPermissions[arg3[0]].type === ApplicationCommandTypes.ApplicationCommandPermissionType.USER) {
      const obj2 = { action: obj.REMOVE_SELF, name: null };
      obj = obj2;
    } else {
      obj = { action: obj.REMOVE_ROLE, name: str3 };
      const id = tmp5.id;
      str3 = "@everyone";
      const tmp6Result = tmp6(8527);
      if (!tmp6Result.isEveryoneRoleId(guildId, id)) {
        const role = GuildRoleStore.getRole(guildId, id);
        let str4;
        if (role != null) {
          str4 = role.name;
        }
        if (str4 == null) {
          str4 = "role";
        }
        str3 = str4;
      }
    }
    return obj;
  } else {
    const _Object = Object;
    const obj3 = { action: obj.DENY_ROLE, name: str2 };
    const id2 = Object.values(arg2)[0].id;
    str2 = "@everyone";
    const obj5 = ChannelPermissionsUtils;
    if (!obj5.isEveryoneRoleId(guildId, id2)) {
      const role1 = GuildRoleStore.getRole(guildId, id2);
      let str;
      if (role1 != null) {
        str = role1.name;
      }
      if (str == null) {
        str = "role";
      }
      str2 = str;
    }
    return obj3;
  }
}
export function getCommandPermissionLockoutMessage(arg0, name) {
  let obj;
  if (obj.REMOVE_SELF === arg0) {
    const intl3 = intl4.intl;
    return intl3.format(intl4.t["/S6f5y"], {});
  } else if (obj.REMOVE_ROLE === arg0) {
    const intl2 = intl4.intl;
    const obj2 = { name };
    return intl2.format(intl4.t.EBhv4R, obj2);
  } else if (obj.DENY_ROLE === arg0) {
    const intl = intl4.intl;
    obj = { name };
    return intl.format(intl4.t["59Dbw0"], obj);
  }
}
