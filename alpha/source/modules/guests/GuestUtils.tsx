// Module ID: 9582
// Function ID: 9583
// Name: GuestUtils
// Dependencies: [4695, 1403, 8494, 2]

// Module 9582 (GuestUtils)
import FlagUtils from "FlagUtils" /* 1403 */;
import GuildMemberConstants from "GuildMemberConstants" /* 4695 */;
import size from "module_2" /* 2 */;

const GuildMemberFlags = GuildMemberConstants.GuildMemberFlags;
const obj = {
  canAcceptInvite(items, guild) {
    let obj;
    [obj] = items;
    guild = guild.guild;
    let tmp = null == guild;
    if (!tmp) {
      const hasFlag = FlagUtils.hasFlag;
      FlagUtils;
      const selfMember = obj.getSelfMember(guild.id);
      let num;
      if (selfMember != null) {
        num = selfMember.flags;
      }
      if (num == null) {
        num = 0;
      }
      const hasFlagResult = hasFlag(num, GuildMemberFlags.IS_GUEST);
      let hasFlag2Result = !hasFlagResult;
      if (hasFlagResult) {
        let num2 = guild.flags;
        const hasFlag2 = FlagUtils.hasFlag;
        FlagUtils;
        if (num2 == null) {
          num2 = 0;
        }
        hasFlag2Result = hasFlag2(num2, tmp2(8494).GuildInviteFlags.IS_GUEST_INVITE);
      }
      tmp = hasFlag2Result;
    }
    return tmp;
  }
};
const result = size.fileFinishedImporting("modules/guests/GuestUtils.tsx");

export default obj;
