// Module ID: 11052
// Function ID: 11053
// Dependencies: [3977, 1403, 7813, 2]

// Module 11052
import { GuildMemberFlags } from "GuildMemberFlags";

const result = require("set").fileFinishedImporting("modules/guests/GuestUtils.tsx");

export default {
  canAcceptInvite(items, guild) {
    let obj;
    [obj] = items;
    guild = guild.guild;
    let tmp = null == guild;
    if (!tmp) {
      const selfMember = obj.getSelfMember(guild.id);
      let num;
      if (selfMember != null) {
        num = selfMember.flags;
      }
      if (num == null) {
        num = 0;
      }
      const hasFlagResult = require(1403) /* hasFlag */.hasFlag(num, GuildMemberFlags.IS_GUEST);
      let hasFlagResult1 = !hasFlagResult;
      if (hasFlagResult) {
        let num2 = guild.flags;
        if (num2 == null) {
          num2 = 0;
        }
        hasFlagResult1 = tmp2(1403).hasFlag(num2, tmp2(7813).GuildInviteFlags.IS_GUEST_INVITE);
        const tmp2Result = tmp2(1403);
      }
      tmp = hasFlagResult1;
      const obj2 = require(1403) /* hasFlag */;
    }
    return tmp;
  }
};
