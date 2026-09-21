// Module ID: 10596
// Function ID: 10597
// Name: GuestUtils
// Dependencies: [4386, 1389, 8668, 2]

// Module 10596 (GuestUtils)
import FlagUtils from "FlagUtils" /* 1389 */;
import GuildMemberConstants from "GuildMemberConstants" /* 4386 */;
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
        hasFlagResult1 = tmp2(1389).hasFlag(num2, tmp2(8668).GuildInviteFlags.IS_GUEST_INVITE);
        const tmp2Result = tmp2(1389);
      }
      tmp = hasFlagResult1;
    }
    return tmp;
  }
};
