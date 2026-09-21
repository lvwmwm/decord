// Module ID: 7469
// Function ID: 7470
// Name: OnboardingHomeUtils
// Dependencies: [2102, 2045, 2067, 4945, 1078, 2052, 558, 568, 7470, 2070, 7353, 4947, 565, 2]
// Exports: canSeeOnboardingHome

// Module 7469 (OnboardingHomeUtils)
import FavoritesUtils from "FavoritesUtils" /* 2070 */;
import guildHasOnboardingHomeDefault from "guildHasOnboardingHome" /* 4947 */;
import useIsNewMemberDefault from "useIsNewMember" /* 7470 */;
import ImpersonateStore from "ImpersonateStore" /* 2102 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import GuildStore from "GuildStore" /* 2067 */;
import GuildOnboardingHomeSettingsStore from "GuildOnboardingHomeSettingsStore" /* 4945 */;

const require = globalThis.__r;

require = fn;
const Constants = fn(1078);
({ GuildFeatures: closure_7, ME: closure_8 } = Constants);
const ChannelFlags = fn(2052).ChannelFlags;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_onboarding_home/OnboardingHomeUtils.tsx");

export const useCanSeeOnboardingHome = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  _require = arg0;
  const cResult = require("c").c(5);
  const tmp4 = useIsNewMemberDefault(arg0);
  importDefault = tmp4;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore, GuildStore, ImpersonateStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === arg0) {
    if (cResult[2] === tmp4) {
      let tmp9 = cResult[3];
      let tmp10 = cResult[4];
    }
    return require("useStateFromStores").useStateFromStores(first, tmp9, tmp10);
  }
  const fn = function f() {
    if (closure_0 !== closure_2_8) {
      if (!obj3.isFavoritesGuildId(tmp2)) {
        let has = GuildStore.getGuild(tmp2);
        let hasItem;
        if (has != null) {
          const features = has.features;
          hasItem = features.has(constants.COMMUNITY);
        }
        if (!hasItem) {
          return tmp7;
        } else if (ImpersonateStore.isFullServerPreview(tmp2)) {
          const id = has.id;
          let newMemberActions = GuildOnboardingHomeSettingsStore.getNewMemberActions(id);
          if (newMemberActions == null) {
            newMemberActions = [];
          }
          let hasItem1 = newMemberActions.length > 0;
          const enabled = GuildOnboardingHomeSettingsStore.getEnabled(id);
          if (hasItem1) {
            const features2 = has.features;
            hasItem1 = features2.has(constants.COMMUNITY);
          }
          if (hasItem1) {
            const features3 = has.features;
            has = features3.has;
            hasItem1 = !(has(constants.GUILD_ONBOARDING) && !enabled);
            const tmp21 = has(constants.GUILD_ONBOARDING) && !enabled;
          }
          let result = hasItem1;
        } else {
          result = tmp23(7353).isGuildOnboardingSettingsAvailable(tmp2);
          if (!result) {
            result = guildHasOnboardingHomeDefault(has);
          }
          if (result) {
            let tmp11 = closure_1;
            if (!closure_1) {
              const mutableGuildChannelsForGuild = ChannelStore.getMutableGuildChannelsForGuild(tmp2);
              let flag = false;
              const keys = Object.keys();
              if (keys !== undefined) {
                flag = false;
                while (keys[tmp] !== undefined) {
                  let obj4 = mutableGuildChannelsForGuild[tmp16];
                  flag = true;
                  if (obj4.hasFlag(ChannelFlags.IS_GUILD_RESOURCE_CHANNEL)) {
                    break;
                  }
                }
              }
              tmp11 = flag;
            }
            result = tmp11;
          }
          const tmp23Result = tmp23(7353);
        }
      }
      obj3 = FavoritesUtils;
      tmp23 = require;
    }
    return false;
  };
  const items1 = [arg0, tmp4];
  cResult[1] = arg0;
  cResult[2] = tmp4;
  cResult[3] = fn;
  cResult[4] = items1;
  tmp10 = items1;
  tmp9 = fn;
}) : ((arg0) => {
  _require = arg0;
  const tmp = useIsNewMemberDefault(arg0);
  importDefault = tmp;
  const items = [ChannelStore, GuildStore, ImpersonateStore];
  const items1 = [arg0, tmp];
  return require("useStateFromStores").useStateFromStores(items, () => {
    if (closure_0 !== closure_2_8) {
      if (!obj3.isFavoritesGuildId(tmp2)) {
        let has = GuildStore.getGuild(tmp2);
        let hasItem;
        if (has != null) {
          const features = has.features;
          hasItem = features.has(constants.COMMUNITY);
        }
        if (!hasItem) {
          return tmp7;
        } else if (ImpersonateStore.isFullServerPreview(tmp2)) {
          const id = has.id;
          let newMemberActions = GuildOnboardingHomeSettingsStore.getNewMemberActions(id);
          if (newMemberActions == null) {
            newMemberActions = [];
          }
          let hasItem1 = newMemberActions.length > 0;
          const enabled = GuildOnboardingHomeSettingsStore.getEnabled(id);
          if (hasItem1) {
            const features2 = has.features;
            hasItem1 = features2.has(constants.COMMUNITY);
          }
          if (hasItem1) {
            const features3 = has.features;
            has = features3.has;
            hasItem1 = !(has(constants.GUILD_ONBOARDING) && !enabled);
            const tmp21 = has(constants.GUILD_ONBOARDING) && !enabled;
          }
          let result = hasItem1;
        } else {
          result = tmp23(7353).isGuildOnboardingSettingsAvailable(tmp2);
          if (!result) {
            result = guildHasOnboardingHomeDefault(has);
          }
          if (result) {
            let tmp11 = closure_1;
            if (!closure_1) {
              const mutableGuildChannelsForGuild = ChannelStore.getMutableGuildChannelsForGuild(tmp2);
              let flag = false;
              const keys = Object.keys();
              if (keys !== undefined) {
                flag = false;
                while (keys[tmp] !== undefined) {
                  let obj4 = mutableGuildChannelsForGuild[tmp16];
                  flag = true;
                  if (obj4.hasFlag(ChannelFlags.IS_GUILD_RESOURCE_CHANNEL)) {
                    break;
                  }
                }
              }
              tmp11 = flag;
            }
            result = tmp11;
          }
          const tmp23Result = tmp23(7353);
        }
      }
      obj3 = FavoritesUtils;
      tmp23 = require;
    }
    return false;
  }, items1);
});
export const canSeeOnboardingHome = function canSeeOnboardingHome(id) {
  guild = GuildStore.getGuild(id);
  if (null == guild) {
    return false;
  } else {
    if (id !== closure_1_8) {
      if (!obj3.isFavoritesGuildId(id)) {
        if (tmp2) {
          id = guild.id;
          let newMemberActions = GuildOnboardingHomeSettingsStore.getNewMemberActions(id);
          if (newMemberActions == null) {
            newMemberActions = [];
          }
          let hasItem = newMemberActions.length > 0;
          const enabled = GuildOnboardingHomeSettingsStore.getEnabled(id);
          if (hasItem) {
            const features6 = guild.features;
            hasItem = features6.has(constants.COMMUNITY);
          }
          if (hasItem) {
            const features7 = guild.features;
            hasItem = !(features7.has(constants.GUILD_ONBOARDING) && !enabled);
            const tmp12 = features7.has(constants.GUILD_ONBOARDING) && !enabled;
          }
          return hasItem;
        } else {
          let result = tmp14(7353).isGuildOnboardingSettingsAvailable(id);
          if (result) {
            const features = guild.features;
            result = features.has(constants.GUILD_ONBOARDING);
          }
          if (result) {
            const features2 = guild.features;
            result = features2.has(constants.GUILD_SERVER_GUIDE);
          }
          const features3 = guild.features;
          let hasItem1 = features3.has(constants.GUILD_ONBOARDING);
          if (hasItem1) {
            const features4 = guild.features;
            hasItem1 = features4.has(tmp6.GUILD_SERVER_GUIDE);
          }
          if (!hasItem1) {
            hasItem1 = result;
          }
          if (hasItem1) {
            const features5 = guild.features;
            hasItem1 = features5.has(tmp6.COMMUNITY);
          }
          return hasItem1;
        }
      }
      obj3 = FavoritesUtils;
      tmp14 = require;
    }
    return false;
  }
};
