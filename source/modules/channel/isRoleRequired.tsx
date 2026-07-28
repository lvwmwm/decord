// Module ID: 4658
// Function ID: 40429
// Name: isRoleRequired
// Dependencies: [1352, 482, 3798, 483, 2]
// Exports: default

// Module 4658 (isRoleRequired)
import { GUILD_NON_CATEGORY_CHANNEL_TYPES as closure_2 } from "_callSuper";
import { Permissions } from "sum";

const result = require("calculateElevatedPermissions").fileFinishedImporting("modules/channel/isRoleRequired.tsx");

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
          obj = importAll(3798);
        }
        let hasItem = null != tmp4;
        if (hasItem) {
          hasItem = importAll(483).has(tmp4.deny, Permissions.VIEW_CHANNEL);
          const obj2 = importAll(483);
        }
        return hasItem;
      }
    }
    return false;
  }
};
