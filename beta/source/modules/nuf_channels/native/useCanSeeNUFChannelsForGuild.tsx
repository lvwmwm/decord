// Module ID: 16589
// Function ID: 16590
// Name: useCanSeeNUFChannelsForGuild
// Dependencies: [2105, 2063, 1372, 1074, 4382, 504, 4600, 1385, 2]
// Exports: useCanSeeNUFChannelsForGuild

// Module 16589 (useCanSeeNUFChannelsForGuild)
import UserUtils from "UserUtils" /* 4600 */;
import GuildMemberStore from "GuildMemberStore" /* 2105 */;
import GuildStore from "GuildStore" /* 2063 */;
import UserStore from "UserStore" /* 1372 */;

const require = globalThis.__r;

require = fn;
const GuildFeatures = fn(1074).GuildFeatures;
const GuildMemberFlags = fn(4382).GuildMemberFlags;
const size = fn(2);
const result = size.fileFinishedImporting("modules/nuf_channels/native/useCanSeeNUFChannelsForGuild.tsx");

export const useCanSeeNUFChannelsForGuild = function useCanSeeNUFChannelsForGuild(id) {
  _require = id;
  const items = [UserStore, GuildStore, GuildMemberStore];
  const items1 = [id];
  return require("initialize").useStateFromStores(items, () => {
    const currentUser = UserStore.getCurrentUser();
    if (null != currentUser) {
      if (obj3.isNewUser(currentUser)) {
        const guild = GuildStore.getGuild(closure_0);
        if (null != guild) {
          const features2 = guild.features;
          if (!features2.has(GuildFeatures.HUB)) {
            const selfMember = GuildMemberStore.getSelfMember(closure_0);
            const features = guild.features;
            let hasFlagResult = features.has(tmp12.GUILD_ONBOARDING) && null != selfMember;
            if (hasFlagResult) {
              let num = selfMember.flags;
              if (num == null) {
                num = 0;
              }
              hasFlagResult = tmp10(1385).hasFlag(num, GuildMemberFlags.STARTED_ONBOARDING);
              const tmp10Result = tmp10(1385);
            }
            if (hasFlagResult) {
              let num2 = selfMember.flags;
              if (num2 == null) {
                num2 = 0;
              }
              hasFlagResult = !tmp10(1385).hasFlag(num2, GuildMemberFlags.COMPLETED_ONBOARDING);
              const tmp10Result2 = tmp10(1385);
            }
            return !hasFlagResult;
          }
          tmp12 = GuildFeatures;
        }
        return false;
      }
      obj3 = UserUtils;
    }
    return false;
  }, items1);
};
