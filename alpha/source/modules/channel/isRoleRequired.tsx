// Module ID: 7073
// Function ID: 7074
// Name: isRoleRequired
// Dependencies: [2072, 1098, 4850, 1099, 2]
// Exports: default

// Module 7073 (isRoleRequired)
import Constants from "Constants" /* 1098 */;
import BigFlagUtilsAll from "BigFlagUtils" /* 1099 */;
import ChannelRecord from "ChannelRecord" /* 2072 */;
import PermissionUtilsAll from "PermissionUtils" /* 4850 */;
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
