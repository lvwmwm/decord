// Module ID: 6643
// Function ID: 6644
// Name: OnboardingHomeUtils
// Dependencies: [2101, 2045, 2067, 5023, 1074, 2052, 6644, 563, 2070, 6527, 5025, 2]
// Exports: canSeeOnboardingHome, useCanSeeOnboardingHome

// Module 6643 (OnboardingHomeUtils)
import ChannelConstants from "ChannelConstants" /* 2052 */;
import FavoritesUtils from "FavoritesUtils" /* 2070 */;
import guildHasOnboardingHomeDefault from "guildHasOnboardingHome" /* 5025 */;
import useIsNewMemberDefault from "useIsNewMember" /* 6644 */;
import ImpersonateStore from "ImpersonateStore" /* 2101 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import GuildStore from "GuildStore" /* 2067 */;
import GuildOnboardingHomeSettingsStore from "GuildOnboardingHomeSettingsStore" /* 5023 */;
import Constants from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault;

let metroImportAll;
let metroImportDefault;
({ GuildFeatures: metroImportDefault, ME: metroImportAll } = Constants);
const ChannelFlags = ChannelConstants.ChannelFlags;
let result = size.fileFinishedImporting("modules/guild_onboarding_home/OnboardingHomeUtils.tsx");

export const useCanSeeOnboardingHome = function useCanSeeOnboardingHome(guild_id) {
  let closure_1;
  _require = guild_id;
  const tmp = useIsNewMemberDefault(guild_id);
  importDefault = tmp;
  const items = [ChannelStore, GuildStore, ImpersonateStore];
  const items1 = [guild_id, tmp];
  const obj = require("useStateFromStores");
  return obj.useStateFromStores(items, () => {
    if (guild_id !== metroImportAll) {
      const obj3 = FavoritesUtils;
      const tmp23 = require;
      if (!obj3.isFavoritesGuildId(guild_id)) {
        const guild = GuildStore.getGuild(tmp2);
        let hasItem;
        if (guild != null) {
          const features = guild.features;
          hasItem = features.has(metroImportDefault.COMMUNITY);
        }
        let tmp8 = hasItem;
        if (tmp8) {
          let result;
          if (ImpersonateStore.isFullServerPreview(guild_id)) {
            const id = guild.id;
            let newMemberActions = GuildOnboardingHomeSettingsStore.getNewMemberActions(id);
            const obj2 = GuildOnboardingHomeSettingsStore;
            if (newMemberActions == null) {
              newMemberActions = [];
            }
            let hasItem1 = newMemberActions.length > 0;
            const enabled = obj2.getEnabled(id);
            if (hasItem1) {
              const features2 = guild.features;
              hasItem1 = features2.has(metroImportDefault.COMMUNITY);
            }
            if (hasItem1) {
              const features3 = guild.features;
              hasItem1 = !(features3.has(metroImportDefault.GUILD_ONBOARDING) && !enabled);
              features3.has(metroImportDefault.GUILD_ONBOARDING) && !enabled;
            }
            result = hasItem1;
          } else {
            const tmp23Result = tmp23(6527);
            result = tmp23Result.isGuildOnboardingSettingsAvailable(tmp2) || guildHasOnboardingHomeDefault(guild);
            if (result) {
              let tmp12 = closure_1;
              if (!tmp12) {
                const mutableGuildChannelsForGuild = ChannelStore.getMutableGuildChannelsForGuild(tmp2);
                let flag = false;
                const keys = Object.keys();
                if (keys !== undefined) {
                  flag = false;
                  while (keys[tmp] !== undefined) {
                    let obj4 = mutableGuildChannelsForGuild[tmp17];
                    flag = true;
                    if (obj4.hasFlag(ChannelFlags.IS_GUILD_RESOURCE_CHANNEL)) {
                      break;
                    }
                  }
                }
                tmp12 = flag;
              }
              result = tmp12;
            }
          }
          tmp8 = result;
        }
        return tmp8;
      }
    }
    return false;
  }, items1);
};
export const canSeeOnboardingHome = function canSeeOnboardingHome(id) {
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
          const tmp14Result = tmp14(6527);
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
};
