// Module ID: 16347
// Function ID: 16348
// Name: useCanSeeNUFChannelsForGuild
// Dependencies: [2021, 1979, 1371, 1074, 4262, 504, 4481, 1384, 2]
// Exports: useCanSeeNUFChannelsForGuild

// Module 16347 (useCanSeeNUFChannelsForGuild)
import UserUtils from "UserUtils" /* 4481 */;
import GuildMemberStore from "GuildMemberStore" /* 2021 */;
import GuildStore from "GuildStore" /* 1979 */;
import UserStore from "UserStore" /* 1371 */;

const require = globalThis.__r;

require = fn;
const GuildFeatures = fn(1074).GuildFeatures;
const GuildMemberFlags = fn(4262).GuildMemberFlags;
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
              hasFlagResult = tmp10(1384).hasFlag(num, GuildMemberFlags.STARTED_ONBOARDING);
              const tmp10Result = tmp10(1384);
            }
            if (hasFlagResult) {
              let num2 = selfMember.flags;
              if (num2 == null) {
                num2 = 0;
              }
              hasFlagResult = !tmp10(1384).hasFlag(num2, GuildMemberFlags.COMPLETED_ONBOARDING);
              const tmp10Result2 = tmp10(1384);
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
