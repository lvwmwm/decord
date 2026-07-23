// Module ID: 1859
// Function ID: 20511
// Name: isUserPrimaryGuildEqual
// Dependencies: [2]
// Exports: ensureUserPrimaryGuild, isUserPrimaryGuildEqual

// Module 1859 (isUserPrimaryGuildEqual)
const result = require("set").fileFinishedImporting("modules/guild_tag/PrimaryGuildUtils.tsx");

export const isUserPrimaryGuildEqual = function isUserPrimaryGuildEqual(primaryGuild, primary_guild) {
  if (null != primaryGuild) {
    if (null != primary_guild) {
      let tmp = primaryGuild.identityGuildId === primary_guild.identityGuildId && primaryGuild.identityEnabled === primary_guild.identityEnabled && primaryGuild.tag === primary_guild.tag && primaryGuild.badge === primary_guild.badge;
    }
    return tmp;
  }
  tmp = primaryGuild === primary_guild;
};
export const ensureUserPrimaryGuild = function ensureUserPrimaryGuild(primary_guild) {
  if (null == primary_guild) {
    return null;
  } else if ("identityGuildId" in primary_guild) {
    return primary_guild;
  } else {
    const obj = {};
    ({ identity_guild_id: obj.identityGuildId, identity_enabled: obj.identityEnabled, tag: obj.tag, badge: obj.badge } = primary_guild);
    return obj;
  }
};
