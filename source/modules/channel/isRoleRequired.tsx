// Module ID: 4619
// Function ID: 40257
// Name: isRoleRequired
// Dependencies: []
// Exports: default

// Module 4619 (isRoleRequired)
let closure_2 = require(dependencyMap[0]).GUILD_NON_CATEGORY_CHANNEL_TYPES;
const Permissions = require(dependencyMap[1]).Permissions;
const _module = require(dependencyMap[4]);
const result = _module.fileFinishedImporting("modules/channel/isRoleRequired.tsx");

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
          const obj = importAll(dependencyMap[2]);
        }
        let hasItem = null != tmp4;
        if (hasItem) {
          hasItem = importAll(dependencyMap[3]).has(tmp4.deny, Permissions.VIEW_CHANNEL);
          const obj2 = importAll(dependencyMap[3]);
        }
        return hasItem;
      }
    }
    return false;
  }
};
