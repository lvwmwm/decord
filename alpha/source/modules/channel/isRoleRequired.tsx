// Module ID: 7204
// Function ID: 7205
// Name: isRoleRequired
// Dependencies: [4828, 1095, 4909, 1096, 2]
// Exports: default

// Module 7204 (isRoleRequired)
import Constants from "Constants" /* 1095 */;
import BigFlagUtilsAll from "BigFlagUtils" /* 1096 */;
import ChannelRecord from "ChannelRecord" /* 4828 */;
import PermissionUtilsAll from "PermissionUtils" /* 4909 */;
import size from "module_2" /* 2 */;

const set = ChannelRecord.GUILD_NON_CATEGORY_CHANNEL_TYPES;
const Permissions = Constants.Permissions;
const result = size.fileFinishedImporting("modules/channel/isRoleRequired.tsx");

export default function isRoleRequired(guild_id) {
  if (null == guild_id) {
    return false;
  } else {
    if (null != guild_id.guild_id) {
      if (set.has(tmp9)) {
        if (guild_id.isGuildVocal()) {
          const obj = PermissionUtilsAll;
          if (!obj.canEveryoneRole(Permissions.CONNECT, guild_id)) {
            return true;
          }
        }
        let hasItem = null != tmp4;
        if (hasItem) {
          const obj2 = BigFlagUtilsAll;
          hasItem = obj2.has(tmp4.deny, Permissions.VIEW_CHANNEL);
        }
        return hasItem;
      }
    }
    return false;
  }
};
