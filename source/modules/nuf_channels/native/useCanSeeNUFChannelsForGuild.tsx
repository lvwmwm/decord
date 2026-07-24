// Module ID: 15121
// Function ID: 115066
// Name: useCanSeeNUFChannelsForGuild
// Dependencies: [1917, 1838, 1849, 653, 3746, 566, 3969, 1360, 2]
// Exports: useCanSeeNUFChannelsForGuild

// Module 15121 (useCanSeeNUFChannelsForGuild)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_4 from "_isNativeReflectConstruct";
import { GuildFeatures } from "ME";
import { GuildMemberFlags } from "GuildMemberFlags";

const require = arg1;
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/nuf_channels/native/useCanSeeNUFChannelsForGuild.tsx");

export const useCanSeeNUFChannelsForGuild = function useCanSeeNUFChannelsForGuild(id) {
  const _require = id;
  const items = [closure_4, _createForOfIteratorHelperLoose, _isNativeReflectConstruct];
  const items1 = [id];
  return _require(566).useStateFromStores(items, () => {
    const currentUser = outer1_4.getCurrentUser();
    if (null != currentUser) {
      if (obj3.isNewUser(currentUser)) {
        const guild = outer1_3.getGuild(id);
        if (null != guild) {
          const features2 = guild.features;
          if (!features2.has(outer1_5.HUB)) {
            const selfMember = outer1_2.getSelfMember(id);
            const features = guild.features;
            let hasFlagResult = features.has(outer1_5.GUILD_ONBOARDING) && null != selfMember;
            if (hasFlagResult) {
              const flags = selfMember.flags;
              let num2 = 0;
              if (null != flags) {
                num2 = flags;
              }
              hasFlagResult = id(outer1_1[7]).hasFlag(num2, outer1_6.STARTED_ONBOARDING);
              const obj = id(outer1_1[7]);
            }
            if (hasFlagResult) {
              const flags2 = selfMember.flags;
              let num4 = 0;
              if (null != flags2) {
                num4 = flags2;
              }
              hasFlagResult = !id(outer1_1[7]).hasFlag(num4, outer1_6.COMPLETED_ONBOARDING);
              const obj2 = id(outer1_1[7]);
            }
            return !hasFlagResult;
          }
        }
        return false;
      }
      obj3 = id(outer1_1[6]);
    }
    return false;
  }, items1);
};
