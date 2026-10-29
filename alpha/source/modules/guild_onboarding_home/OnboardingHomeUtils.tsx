// Module ID: 7384
// Function ID: 7385
// Name: OnboardingHomeUtils
// Dependencies: [4910, 4857, 4879, 7385, 1084, 4864, 558, 576, 7386, 4882, 7387, 573, 7261, 2]
// Exports: canSeeOnboardingHome

// Module 7384 (OnboardingHomeUtils)
import ChannelConstants from "ChannelConstants" /* 4864 */;
import FavoritesUtils from "FavoritesUtils" /* 4882 */;
import useIsNewMemberDefault from "useIsNewMember" /* 7386 */;
import guildHasOnboardingHomeDefault from "guildHasOnboardingHome" /* 7387 */;
import ImpersonateStore from "ImpersonateStore" /* 4910 */;
import ChannelStore from "ChannelStore" /* 4857 */;
import GuildStore from "GuildStore" /* 4879 */;
import GuildOnboardingHomeSettingsStore from "GuildOnboardingHomeSettingsStore" /* 7385 */;
import Constants from "Constants" /* 1084 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault;

let metroImportAll;
let metroImportDefault;
({ GuildFeatures: metroImportDefault, ME: metroImportAll } = Constants);
const ChannelFlags = ChannelConstants.ChannelFlags;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useCanSeeOnboardingHome(arg0) {
  let closure_0;
  let closure_1;
  let first;
  _require = arg0;
  const tmp = _require;
  const tmp2 = dependencyMap;
  let obj = require("react");
  const cResult = obj.c(5);
  const tmp4 = useIsNewMemberDefault(arg0);
  importDefault = tmp4;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore, , ];
    items[1] = GuildStore;
    let tmp8 = ImpersonateStore;
    items[2] = ImpersonateStore;
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === arg0) {
    let tmp9;
    let tmp10;
    if (cResult[2] === tmp4) {
      tmp9 = cResult[3];
      tmp10 = cResult[4];
    }
    const tmpResult = tmp(573);
    return tmpResult.useStateFromStores(first, tmp9, tmp10);
  }
  const fn = function f() {
    if (closure_0 !== metroImportAll) {
      const obj2 = FavoritesUtils;
      if (!obj2.isFavoritesGuildId(closure_0)) {
        const guild = GuildStore.getGuild(tmp2);
        let hasItem;
        if (guild != null) {
          const features = guild.features;
          hasItem = features.has(metroImportDefault.COMMUNITY);
        }
        let tmp8 = hasItem;
        if (tmp8) {
          let tmp11;
          if (ImpersonateStore.isFullServerPreview(closure_0)) {
            const id = guild.id;
            let newMemberActions = GuildOnboardingHomeSettingsStore.getNewMemberActions(id);
            const obj = GuildOnboardingHomeSettingsStore;
            if (newMemberActions == null) {
              newMemberActions = [];
            }
            let hasItem1 = newMemberActions.length > 0;
            const enabled = obj.getEnabled(id);
            if (hasItem1) {
              const features2 = guild.features;
              hasItem1 = features2.has(metroImportDefault.COMMUNITY);
            }
            if (hasItem1) {
              const features3 = guild.features;
              hasItem1 = !(features3.has(metroImportDefault.GUILD_ONBOARDING) && !enabled);
              features3.has(metroImportDefault.GUILD_ONBOARDING) && !enabled;
            }
            tmp11 = hasItem1;
          } else {
            tmp11 = guildHasOnboardingHomeDefault(guild);
            if (tmp11) {
              let tmp12 = closure_1;
              if (!tmp12) {
                const mutableGuildChannelsForGuild = ChannelStore.getMutableGuildChannelsForGuild(tmp2);
                let flag = false;
                const keys = Object.keys();
                if (keys !== undefined) {
                  flag = false;
                  while (keys[tmp] !== undefined) {
                    let obj3 = mutableGuildChannelsForGuild[tmp17];
                    flag = true;
                    if (obj3.hasFlag(ChannelFlags.IS_GUILD_RESOURCE_CHANNEL)) {
                      break;
                    }
                  }
                }
                tmp12 = flag;
              }
              tmp11 = tmp12;
            }
          }
          tmp8 = tmp11;
        }
        return tmp8;
      }
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
}) : (function useCanSeeOnboardingHome(arg0) {
  let closure_0;
  let closure_1;
  _require = arg0;
  const tmp = useIsNewMemberDefault(arg0);
  importDefault = tmp;
  let obj = require("useStateFromStores");
  const items = [ChannelStore, GuildStore, ImpersonateStore];
  const items1 = [arg0, tmp];
  return obj.useStateFromStores(items, () => {
    if (closure_0 !== metroImportAll) {
      const obj2 = FavoritesUtils;
      if (!obj2.isFavoritesGuildId(closure_0)) {
        const guild = GuildStore.getGuild(tmp2);
        let hasItem;
        if (guild != null) {
          const features = guild.features;
          hasItem = features.has(metroImportDefault.COMMUNITY);
        }
        let tmp8 = hasItem;
        if (tmp8) {
          let tmp11;
          if (ImpersonateStore.isFullServerPreview(closure_0)) {
            const id = guild.id;
            let newMemberActions = GuildOnboardingHomeSettingsStore.getNewMemberActions(id);
            const obj = GuildOnboardingHomeSettingsStore;
            if (newMemberActions == null) {
              newMemberActions = [];
            }
            let hasItem1 = newMemberActions.length > 0;
            const enabled = obj.getEnabled(id);
            if (hasItem1) {
              const features2 = guild.features;
              hasItem1 = features2.has(metroImportDefault.COMMUNITY);
            }
            if (hasItem1) {
              const features3 = guild.features;
              hasItem1 = !(features3.has(metroImportDefault.GUILD_ONBOARDING) && !enabled);
              features3.has(metroImportDefault.GUILD_ONBOARDING) && !enabled;
            }
            tmp11 = hasItem1;
          } else {
            tmp11 = guildHasOnboardingHomeDefault(guild);
            if (tmp11) {
              let tmp12 = closure_1;
              if (!tmp12) {
                const mutableGuildChannelsForGuild = ChannelStore.getMutableGuildChannelsForGuild(tmp2);
                let flag = false;
                const keys = Object.keys();
                if (keys !== undefined) {
                  flag = false;
                  while (keys[tmp] !== undefined) {
                    let obj3 = mutableGuildChannelsForGuild[tmp17];
                    flag = true;
                    if (obj3.hasFlag(ChannelFlags.IS_GUILD_RESOURCE_CHANNEL)) {
                      break;
                    }
                  }
                }
                tmp12 = flag;
              }
              tmp11 = tmp12;
            }
          }
          tmp8 = tmp11;
        }
        return tmp8;
      }
    }
    return false;
  }, items1);
});
let result = size.fileFinishedImporting("modules/guild_onboarding_home/OnboardingHomeUtils.tsx");

export const useCanSeeOnboardingHome = tmp3;
export function canSeeOnboardingHome(id) {
  const guild = GuildStore.getGuild(id);
  if (null == guild) {
    return false;
  } else {
    if (id !== metroImportAll) {
      const obj3 = FavoritesUtils;
      const tmp14 = require;
      if (!obj3.isFavoritesGuildId(id)) {
        if (tmp2) {
          id = guild.id;
          let newMemberActions = GuildOnboardingHomeSettingsStore.getNewMemberActions(id);
          const obj2 = GuildOnboardingHomeSettingsStore;
          if (newMemberActions == null) {
            newMemberActions = [];
          }
          let hasItem = newMemberActions.length > 0;
          const enabled = obj2.getEnabled(id);
          if (hasItem) {
            const features6 = guild.features;
            hasItem = features6.has(metroImportDefault.COMMUNITY);
          }
          if (hasItem) {
            const features7 = guild.features;
            hasItem = !(features7.has(metroImportDefault.GUILD_ONBOARDING) && !enabled);
            features7.has(metroImportDefault.GUILD_ONBOARDING) && !enabled;
          }
          return hasItem;
        } else {
          const tmp14Result = tmp14(7261);
          let result = tmp14Result.isGuildOnboardingSettingsAvailable(id);
          if (result) {
            const features = guild.features;
            result = features.has(metroImportDefault.GUILD_ONBOARDING);
          }
          if (result) {
            const features2 = guild.features;
            result = features2.has(metroImportDefault.GUILD_SERVER_GUIDE);
          }
          const features3 = guild.features;
          let hasItem1 = features3.has(metroImportDefault.GUILD_ONBOARDING);
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
    }
    return false;
  }
}
