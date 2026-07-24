// Module ID: 9517
// Function ID: 74068
// Dependencies: [3746, 1360, 7556, 2]

// Module 9517
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
      let flags;
      if (null != selfMember) {
        flags = selfMember.flags;
      }
      let num2 = 0;
      if (null != flags) {
        num2 = flags;
      }
      let hasFlagResult = !require(1360) /* hasFlag */.hasFlag(num2, GuildMemberFlags.IS_GUEST);
      if (!hasFlagResult) {
        flags = guild.flags;
        let num3 = 0;
        if (null != flags) {
          num3 = flags;
        }
        hasFlagResult = require(1360) /* hasFlag */.hasFlag(num3, require(7556) /* set */.GuildInviteFlags.IS_GUEST_INVITE);
        const obj3 = require(1360) /* hasFlag */;
      }
      tmp = hasFlagResult;
      const obj2 = require(1360) /* hasFlag */;
    }
    return tmp;
  }
};
