// Module ID: 9474
// Function ID: 73818
// Dependencies: []

// Module 9474
const GuildMemberFlags = require(dependencyMap[0]).GuildMemberFlags;
const _module = require(dependencyMap[3]);
const result = _module.fileFinishedImporting("modules/guests/GuestUtils.tsx");

export default {
  canAcceptInvite(items, guild) {
    let obj;
    [obj] = items;
    guild = guild.guild;
    let tmp = null == guild;
    if (!tmp) {
      const selfMember = obj.getSelfMember(guild.id);
      let flags;
      if (null != selfMember) {
        flags = selfMember.flags;
      }
      let num2 = 0;
      if (null != flags) {
        num2 = flags;
      }
      let hasFlagResult = !require(dependencyMap[1]).hasFlag(num2, GuildMemberFlags.IS_GUEST);
      if (!hasFlagResult) {
        flags = guild.flags;
        let num3 = 0;
        if (null != flags) {
          num3 = flags;
        }
        hasFlagResult = require(dependencyMap[1]).hasFlag(num3, require(dependencyMap[2]).GuildInviteFlags.IS_GUEST_INVITE);
        const obj3 = require(dependencyMap[1]);
      }
      tmp = hasFlagResult;
      const obj2 = require(dependencyMap[1]);
    }
    return tmp;
  }
};
