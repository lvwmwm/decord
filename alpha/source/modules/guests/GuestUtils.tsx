// Module ID: 10840
// Function ID: 10841
// Name: GuestUtils
// Dependencies: [4452, 1385, 7832, 2]

// Module 10840 (GuestUtils)
import FlagUtils from "FlagUtils" /* 1385 */;
import GuildMemberConstants from "GuildMemberConstants" /* 4452 */;
import size from "module_2" /* 2 */;

const GuildMemberFlags = GuildMemberConstants.GuildMemberFlags;
const result = size.fileFinishedImporting("modules/guests/GuestUtils.tsx");

export default {
  canAcceptInvite(items, guild) {
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
      const hasFlagResult = FlagUtils.hasFlag(num, GuildMemberFlags.IS_GUEST);
      let hasFlagResult1 = !hasFlagResult;
      if (hasFlagResult) {
        let num2 = guild.flags;
        if (num2 == null) {
          num2 = 0;
        }
        hasFlagResult1 = tmp2(1385).hasFlag(num2, tmp2(7832).GuildInviteFlags.IS_GUEST_INVITE);
        const tmp2Result = tmp2(1385);
      }
      tmp = hasFlagResult1;
    }
    return tmp;
  }
};
