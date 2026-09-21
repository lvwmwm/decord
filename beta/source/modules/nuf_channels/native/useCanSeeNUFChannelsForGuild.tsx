// Module ID: 16590
// Function ID: 16591
// Name: useCanSeeNUFChannelsForGuild
// Dependencies: [2109, 2067, 1376, 1078, 4386, 558, 568, 4603, 1389, 504, 2]

// Module 16590 (useCanSeeNUFChannelsForGuild)
import UserUtils from "UserUtils" /* 4603 */;
import GuildMemberStore from "GuildMemberStore" /* 2109 */;
import GuildStore from "GuildStore" /* 2067 */;
import UserStore from "UserStore" /* 1376 */;

const require = globalThis.__r;

require = fn;
const GuildFeatures = fn(1078).GuildFeatures;
const GuildMemberFlags = fn(4386).GuildMemberFlags;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/nuf_channels/native/useCanSeeNUFChannelsForGuild.tsx");

export const useCanSeeNUFChannelsForGuild = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  _require = arg0;
  const cResult = require("c").c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore, GuildStore, GuildMemberStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    class N {
      constructor() {
        currentUser = closure_4.getCurrentUser();
        if (null != currentUser) {
          tmp10 = closure_0;
          tmp11 = closure_1;
          obj3 = closure_0(closure_1[7]);
          if (obj3.isNewUser(currentUser)) {
            tmp2 = closure_3;
            tmp3 = closure_0;
            guild = closure_3.getGuild(closure_0);
            if (null != guild) {
              features2 = guild.features;
              tmp12 = GuildFeatures;
              if (!features2.has(GuildFeatures.HUB)) {
                tmp5 = closure_2;
                selfMember = closure_2.getSelfMember(tmp3);
                features = guild.features;
                hasFlagResult = features.has(tmp12.GUILD_ONBOARDING) && null != selfMember;
                if (hasFlagResult) {
                  tmp10Result = tmp10(tmp11[8]);
                  num = selfMember.flags;
                  if (num == null) {
                    num = 0;
                  }
                  tmp8 = GuildMemberFlags;
                  hasFlagResult = tmp10Result.hasFlag(num, GuildMemberFlags.STARTED_ONBOARDING);
                }
                if (hasFlagResult) {
                  tmp10Result1 = tmp10(tmp11[8]);
                  num2 = selfMember.flags;
                  if (num2 == null) {
                    num2 = 0;
                  }
                  tmp9 = GuildMemberFlags;
                  hasFlagResult = !tmp10Result1.hasFlag(num2, GuildMemberFlags.COMPLETED_ONBOARDING);
                }
                return !hasFlagResult;
              }
            }
            flag = false;
            return false;
          }
        }
        return false;
      }
    }
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = N;
    cResult[3] = items1;
    let tmp9 = items1;
    const tmp8 = N;
  } else {
    class N {
      constructor() {
        currentUser = closure_4.getCurrentUser();
        if (null != currentUser) {
          tmp10 = closure_0;
          tmp11 = closure_1;
          obj3 = closure_0(closure_1[7]);
          if (obj3.isNewUser(currentUser)) {
            tmp2 = closure_3;
            tmp3 = closure_0;
            guild = closure_3.getGuild(closure_0);
            if (null != guild) {
              features2 = guild.features;
              tmp12 = GuildFeatures;
              if (!features2.has(GuildFeatures.HUB)) {
                tmp5 = closure_2;
                selfMember = closure_2.getSelfMember(tmp3);
                features = guild.features;
                hasFlagResult = features.has(tmp12.GUILD_ONBOARDING) && null != selfMember;
                if (hasFlagResult) {
                  tmp10Result = tmp10(tmp11[8]);
                  num = selfMember.flags;
                  if (num == null) {
                    num = 0;
                  }
                  tmp8 = GuildMemberFlags;
                  hasFlagResult = tmp10Result.hasFlag(num, GuildMemberFlags.STARTED_ONBOARDING);
                }
                if (hasFlagResult) {
                  tmp10Result1 = tmp10(tmp11[8]);
                  num2 = selfMember.flags;
                  if (num2 == null) {
                    num2 = 0;
                  }
                  tmp9 = GuildMemberFlags;
                  hasFlagResult = !tmp10Result1.hasFlag(num2, GuildMemberFlags.COMPLETED_ONBOARDING);
                }
                return !hasFlagResult;
              }
            }
            flag = false;
            return false;
          }
        }
        return false;
      }
    }
    tmp9 = cResult[3];
  }
  const obj = require("c");
  return require("initialize").useStateFromStores(first, tmp8, tmp9);
}) : ((arg0) => {
  _require = arg0;
  const items = [UserStore, GuildStore, GuildMemberStore];
  const items1 = [arg0];
  return require("initialize").useStateFromStores(items, () => {
    const currentUser = UserStore.getCurrentUser();
    if (null != currentUser) {
      if (obj3.isNewUser(currentUser)) {
        guild = GuildStore.getGuild(closure_0);
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
              hasFlagResult = tmp10(1389).hasFlag(num, GuildMemberFlags.STARTED_ONBOARDING);
              const tmp10Result = tmp10(1389);
            }
            if (hasFlagResult) {
              let num2 = selfMember.flags;
              if (num2 == null) {
                num2 = 0;
              }
              hasFlagResult = !tmp10(1389).hasFlag(num2, GuildMemberFlags.COMPLETED_ONBOARDING);
              const tmp10Result2 = tmp10(1389);
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
});
