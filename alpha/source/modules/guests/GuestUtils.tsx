// Module ID: 11833
// Function ID: 11834
// Name: GuestUtils
// Dependencies: [5161, 1403, 7611, 2]

// Module 11833 (GuestUtils)
import FlagUtils from "FlagUtils" /* 1403 */;
import GuildMemberConstants from "GuildMemberConstants" /* 5161 */;
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
        hasFlag2Result = hasFlag2(num2, tmp2(7611).GuildInviteFlags.IS_GUEST_INVITE);
      }
      tmp = hasFlag2Result;
    }
    return tmp;
  }
};
const result = size.fileFinishedImporting("modules/guests/GuestUtils.tsx");

export default obj;
