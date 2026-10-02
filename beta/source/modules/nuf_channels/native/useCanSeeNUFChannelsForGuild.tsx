// Module ID: 15882
// Function ID: 15883
// Name: useCanSeeNUFChannelsForGuild
// Dependencies: [2111, 2073, 1378, 1086, 4458, 558, 576, 4680, 1391, 504, 2]

// Module 15882 (useCanSeeNUFChannelsForGuild)
import Constants from "Constants" /* 1086 */;
import FlagUtils from "FlagUtils" /* 1391 */;
import GuildMemberConstants from "GuildMemberConstants" /* 4458 */;
import UserUtils from "UserUtils" /* 4680 */;
import GuildMemberStore from "GuildMemberStore" /* 2111 */;
import GuildStore from "GuildStore" /* 2073 */;
import UserStore from "UserStore" /* 1378 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, flag, tmp11, tmp12, tmp12Result, tmp12Result1, tmp13, tmp5;

const GuildFeatures = Constants.GuildFeatures;
const GuildMemberFlags = GuildMemberConstants.GuildMemberFlags;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let first;
  let tmp8;
  let tmp9;
  _require = arg0;
  let obj = require("react");
  const cResult = obj.c(4);
  const tmp = _require;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore, GuildStore, GuildMemberStore];
    let num = 0;
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    class N {
      constructor() {
        currentUser = closure_4.getCurrentUser();
        if (null != currentUser) {
          tmp12 = closure_0;
          tmp13 = closure_1;
          obj = closure_0(closure_1[7]);
          if (obj.isNewUser(currentUser)) {
            tmp2 = closure_3;
            tmp3 = closure_0;
            guild = closure_3.getGuild(closure_0);
            if (null != guild) {
              features2 = guild.features;
              tmp14 = GuildFeatures;
              if (!features2.has(GuildFeatures.HUB)) {
                tmp5 = closure_2;
                selfMember = closure_2.getSelfMember(tmp3);
                features = guild.features;
                hasFlagResult = features.has(tmp14.GUILD_ONBOARDING) && null != selfMember;
                if (hasFlagResult) {
                  tmp12Result = tmp12(tmp13[8]);
                  num = selfMember.flags;
                  hasFlag = tmp12Result.hasFlag;
                  if (num == null) {
                    num = 0;
                  }
                  tmp9 = GuildMemberFlags;
                  hasFlagResult = hasFlag(num, GuildMemberFlags.STARTED_ONBOARDING);
                }
                if (hasFlagResult) {
                  tmp12Result1 = tmp12(tmp13[8]);
                  num2 = selfMember.flags;
                  hasFlag2 = tmp12Result1.hasFlag;
                  if (num2 == null) {
                    num2 = 0;
                  }
                  tmp11 = GuildMemberFlags;
                  hasFlagResult = !hasFlag2(num2, GuildMemberFlags.COMPLETED_ONBOARDING);
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
    let num2 = 1;
    cResult[1] = arg0;
    cResult[2] = N;
    cResult[3] = items1;
    tmp9 = items1;
    tmp8 = N;
  } else {
    class N {
      constructor() {
        currentUser = closure_4.getCurrentUser();
        if (null != currentUser) {
          tmp12 = closure_0;
          tmp13 = closure_1;
          obj = closure_0(closure_1[7]);
          if (obj.isNewUser(currentUser)) {
            tmp2 = closure_3;
            tmp3 = closure_0;
            guild = closure_3.getGuild(closure_0);
            if (null != guild) {
              features2 = guild.features;
              tmp14 = GuildFeatures;
              if (!features2.has(GuildFeatures.HUB)) {
                tmp5 = closure_2;
                selfMember = closure_2.getSelfMember(tmp3);
                features = guild.features;
                hasFlagResult = features.has(tmp14.GUILD_ONBOARDING) && null != selfMember;
                if (hasFlagResult) {
                  tmp12Result = tmp12(tmp13[8]);
                  num = selfMember.flags;
                  hasFlag = tmp12Result.hasFlag;
                  if (num == null) {
                    num = 0;
                  }
                  tmp9 = GuildMemberFlags;
                  hasFlagResult = hasFlag(num, GuildMemberFlags.STARTED_ONBOARDING);
                }
                if (hasFlagResult) {
                  tmp12Result1 = tmp12(tmp13[8]);
                  num2 = selfMember.flags;
                  hasFlag2 = tmp12Result1.hasFlag;
                  if (num2 == null) {
                    num2 = 0;
                  }
                  tmp11 = GuildMemberFlags;
                  hasFlagResult = !hasFlag2(num2, GuildMemberFlags.COMPLETED_ONBOARDING);
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
  const tmpResult = tmp(504);
  return tmpResult.useStateFromStores(first, tmp8, tmp9);
}) : ((arg0) => {
  let closure_0;
  _require = arg0;
  let obj = require("get initialized");
  const items = [UserStore, GuildStore, GuildMemberStore];
  const items1 = [arg0];
  return obj.useStateFromStores(items, () => {
    const currentUser = UserStore.getCurrentUser();
    if (null != currentUser) {
      const obj = UserUtils;
      if (obj.isNewUser(currentUser)) {
        const guild = GuildStore.getGuild(closure_0);
        const tmp3 = closure_0;
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
});
const result = size.fileFinishedImporting("modules/nuf_channels/native/useCanSeeNUFChannelsForGuild.tsx");

export const useCanSeeNUFChannelsForGuild = tmp2;
