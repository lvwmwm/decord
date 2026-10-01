// Module ID: 15882
// Function ID: 15883
// Name: useCanSeeNUFChannelsForGuild
// Dependencies: [2108, 2067, 1372, 1074, 4455, 504, 4678, 1385, 2]
// Exports: useCanSeeNUFChannelsForGuild

// Module 15882 (useCanSeeNUFChannelsForGuild)
import Constants from "Constants" /* 1074 */;
import FlagUtils from "FlagUtils" /* 1385 */;
import GuildMemberConstants from "GuildMemberConstants" /* 4455 */;
import UserUtils from "UserUtils" /* 4678 */;
import GuildMemberStore from "GuildMemberStore" /* 2108 */;
import GuildStore from "GuildStore" /* 2067 */;
import UserStore from "UserStore" /* 1372 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const GuildFeatures = Constants.GuildFeatures;
const GuildMemberFlags = GuildMemberConstants.GuildMemberFlags;
const result = size.fileFinishedImporting("modules/nuf_channels/native/useCanSeeNUFChannelsForGuild.tsx");

export const useCanSeeNUFChannelsForGuild = function useCanSeeNUFChannelsForGuild(id) {
  _require = id;
  let obj = require("get initialized");
  const items = [UserStore, GuildStore, GuildMemberStore];
  const items1 = [id];
  return obj.useStateFromStores(items, () => {
    const currentUser = UserStore.getCurrentUser();
    if (null != currentUser) {
      const obj = UserUtils;
      if (obj.isNewUser(currentUser)) {
        const guild = GuildStore.getGuild(id);
        const tmp3 = id;
        if (null != guild) {
          const features2 = guild.features;
          const tmp14 = GuildFeatures;
          if (!features2.has(GuildFeatures.HUB)) {
            const selfMember = GuildMemberStore.getSelfMember(tmp3);
            const features = guild.features;
            let hasFlagResult = features.has(tmp14.GUILD_ONBOARDING) && null != selfMember;
            if (hasFlagResult) {
              let num = selfMember.flags;
              const hasFlag = FlagUtils.hasFlag;
              FlagUtils;
              if (num == null) {
                num = 0;
              }
              hasFlagResult = hasFlag(num, GuildMemberFlags.STARTED_ONBOARDING);
            }
            if (hasFlagResult) {
              let num2 = selfMember.flags;
              const hasFlag2 = FlagUtils.hasFlag;
              FlagUtils;
              if (num2 == null) {
                num2 = 0;
              }
              hasFlagResult = !hasFlag2(num2, GuildMemberFlags.COMPLETED_ONBOARDING);
            }
            return !hasFlagResult;
          }
        }
        return false;
      }
    }
    return false;
  }, items1);
};
