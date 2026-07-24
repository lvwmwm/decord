// Module ID: 9384
// Function ID: 73242
// Name: isNSFWInvite
// Dependencies: [1838, 3758, 1849, 653, 477, 4337, 9385, 1934, 8013, 2]
// Exports: handleNSFWGuildInvite, shouldNSFWGateGuild

// Module 9384 (isNSFWInvite)
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import ME from "ME";
import set from "_isNativeReflectConstruct";

const require = arg1;
function isNSFWInvite(guild) {
  let nsfw_level;
  if (null != guild) {
    guild = guild.guild;
    if (null != guild) {
      nsfw_level = guild.nsfw_level;
    }
  }
  if (null == nsfw_level) {
    nsfw_level = GuildNSFWContentLevel.DEFAULT;
  }
  return set.has(nsfw_level);
}
const GuildNSFWContentLevel = ME.GuildNSFWContentLevel;
const Permissions = ME.Permissions;
const items = [, ];
({ EXPLICIT: arr[0], AGE_RESTRICTED: arr[1] } = GuildNSFWContentLevel);
let set = new Set(items);
const result = set.fileFinishedImporting("modules/age_gate/native/AgeGateUtils.tsx");

export { isNSFWInvite };
export const handleNSFWGuildInvite = function handleNSFWGuildInvite(invite) {
  let obj = require(477) /* set */;
  if (obj.isIOS()) {
    let id;
    if (null != invite) {
      const guild = invite.guild;
      if (null != guild) {
        id = guild.id;
      }
    }
    const tmp6 = !isNSFWInvite(invite) || null != store.getGuild(id);
    let flag2 = !tmp6;
    if (!tmp6) {
      obj = {};
      let id1;
      const obj2 = importDefault(4337);
      if (null != invite) {
        const guild2 = invite.guild;
        if (null != guild2) {
          id1 = guild2.id;
        }
      }
      obj.guildId = id1;
      obj2.pushLazy(require(1934) /* maybeLoadBundle */(9385, dependencyMap.paths), obj);
      flag2 = true;
      const tmp10 = require(1934) /* maybeLoadBundle */(9385, dependencyMap.paths);
    }
    return flag2;
  } else {
    return false;
  }
};
export const shouldNSFWGateGuild = function shouldNSFWGateGuild(guildId) {
  if (obj.isIOS()) {
    const guild = store.getGuild(guildId);
    currentUser = currentUser.getCurrentUser();
    if (null != guild) {
      if (null != currentUser) {
        let canResult = _isNativeReflectConstruct.can(Permissions.ADMINISTRATOR, guild);
        if (!canResult) {
          canResult = _isNativeReflectConstruct.can(Permissions.MANAGE_GUILD, guild);
        }
        if (!canResult) {
          canResult = _isNativeReflectConstruct.can(Permissions.KICK_MEMBERS, guild);
        }
        if (!canResult) {
          canResult = _isNativeReflectConstruct.can(Permissions.BAN_MEMBERS, guild);
        }
        let tmp15 = guild.nsfwLevel === GuildNSFWContentLevel.AGE_RESTRICTED;
        let nsfwAllowed = currentUser.nsfwAllowed;
        if (nsfwAllowed) {
          nsfwAllowed = require(8013) /* resolveNsfwTogglesWithDefaults */.getViewNsfwGuildsOrDefault();
          const obj2 = require(8013) /* resolveNsfwTogglesWithDefaults */;
        }
        let tmp20 = !canResult;
        if (tmp20) {
          let tmp21 = tmp17;
          if (!tmp17) {
            if (tmp15) {
              tmp15 = !nsfwAllowed;
            }
            tmp21 = tmp15;
          }
          tmp20 = tmp21;
        }
        return tmp20;
      }
    }
    return false;
  } else {
    return false;
  }
  obj = require(477) /* set */;
};
