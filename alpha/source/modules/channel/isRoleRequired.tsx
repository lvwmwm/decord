// Module ID: 5277
// Function ID: 5278
// Name: isRoleRequired
// Dependencies: [2045, 1085, 4400, 1086, 2]
// Exports: default

// Module 5277 (isRoleRequired)
import Constants from "Constants" /* 1085 */;
import BigFlagUtilsAll from "BigFlagUtils" /* 1086 */;
import ChannelRecord from "ChannelRecord" /* 2045 */;
import PermissionUtilsAll from "PermissionUtils" /* 4400 */;
import size from "module_2" /* 2 */;

ChannelRecord.GUILD_NON_CATEGORY_CHANNEL_TYPES;
const Permissions = Constants.Permissions;
const result = size.fileFinishedImporting("modules/channel/isRoleRequired.tsx");

export default function isRoleRequired(guild_id) {
  if (null == guild_id) {
    return false;
  } else {
    if (null != guild_id.guild_id) {
      if (set.has(tmp9)) {
        if (guild_id.isGuildVocal()) {
          if (!obj.canEveryoneRole(Permissions.CONNECT, guild_id)) {
            return true;
          }
          obj = PermissionUtilsAll;
        }
        let hasItem = null != tmp4;
        if (hasItem) {
          hasItem = BigFlagUtilsAll.has(tmp4.deny, Permissions.VIEW_CHANNEL);
        }
        return hasItem;
      }
    }
    return false;
  }
};
