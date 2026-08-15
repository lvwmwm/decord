// Module ID: 10512
// Function ID: 10513
// Dependencies: [4009, 1403, 8056, 2]

// Module 10512
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
        hasFlagResult1 = tmp2(1403).hasFlag(num2, tmp2(8056).GuildInviteFlags.IS_GUEST_INVITE);
        const tmp2Result = tmp2(1403);
      }
      tmp = hasFlagResult1;
      const obj2 = require(1403) /* hasFlag */;
    }
    return tmp;
  }
};
