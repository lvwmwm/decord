// Module ID: 9340
// Function ID: 72968
// Name: isNSFWInvite
// Dependencies: []
// Exports: handleNSFWGuildInvite, shouldNSFWGateGuild

// Module 9340 (isNSFWInvite)
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
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
const tmp2 = arg1(dependencyMap[3]);
const GuildNSFWContentLevel = tmp2.GuildNSFWContentLevel;
const Permissions = tmp2.Permissions;
const items = [, ];
({ EXPLICIT: arr[0], AGE_RESTRICTED: arr[1] } = GuildNSFWContentLevel);
const set = new Set(items);
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/age_gate/native/AgeGateUtils.tsx");

export { isNSFWInvite };
export const handleNSFWGuildInvite = function handleNSFWGuildInvite(invite) {
  let obj = arg1(dependencyMap[4]);
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
      const obj2 = importDefault(dependencyMap[5]);
      if (null != invite) {
        const guild2 = invite.guild;
        if (null != guild2) {
          id1 = guild2.id;
        }
      }
      obj.guildId = id1;
      obj2.pushLazy(arg1(dependencyMap[7])(dependencyMap[6], dependencyMap.paths), obj);
      flag2 = true;
      const tmp10 = arg1(dependencyMap[7])(dependencyMap[6], dependencyMap.paths);
    }
    return flag2;
  } else {
    return false;
  }
};
export const shouldNSFWGateGuild = function shouldNSFWGateGuild(guildId) {
  if (obj.isIOS()) {
    const guild = store.getGuild(guildId);
    const currentUser = currentUser.getCurrentUser();
    if (null != guild) {
      if (null != currentUser) {
        let canResult = closure_4.can(Permissions.ADMINISTRATOR, guild);
        if (!canResult) {
          canResult = closure_4.can(Permissions.MANAGE_GUILD, guild);
        }
        if (!canResult) {
          canResult = closure_4.can(Permissions.KICK_MEMBERS, guild);
        }
        if (!canResult) {
          canResult = closure_4.can(Permissions.BAN_MEMBERS, guild);
        }
        let tmp15 = guild.nsfwLevel === GuildNSFWContentLevel.AGE_RESTRICTED;
        let nsfwAllowed = currentUser.nsfwAllowed;
        if (nsfwAllowed) {
          nsfwAllowed = arg1(dependencyMap[8]).getViewNsfwGuildsOrDefault();
          const obj2 = arg1(dependencyMap[8]);
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
  const obj = arg1(dependencyMap[4]);
};
