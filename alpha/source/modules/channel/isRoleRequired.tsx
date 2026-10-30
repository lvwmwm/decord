// Module ID: 7269
// Function ID: 7270
// Name: isRoleRequired
// Dependencies: [4862, 1083, 4946, 1084, 2]
// Exports: default

// Module 7269 (isRoleRequired)
import Constants from "Constants" /* 1083 */;
import BigFlagUtilsAll from "BigFlagUtils" /* 1084 */;
import ChannelRecord from "ChannelRecord" /* 4862 */;
import PermissionUtilsAll from "PermissionUtils" /* 4946 */;
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
