// Module ID: 7391
// Function ID: 7392
// Name: OnboardingHomeUtils
// Dependencies: [4914, 4858, 4880, 7392, 1072, 4865, 7393, 7394, 563, 4883, 7395, 7268, 2]
// Exports: canSeeOnboardingHome, useCanSeeOnboardingHome

// Module 7391 (OnboardingHomeUtils)
import ChannelConstants from "ChannelConstants" /* 4865 */;
import FavoritesUtils from "FavoritesUtils" /* 4883 */;
import GuildOnboardingUtils from "GuildOnboardingUtils" /* 7268 */;
import GuildOnboardingHomeTypes from "GuildOnboardingHomeTypes" /* 7393 */;
import useIsNewMemberDefault from "useIsNewMember" /* 7394 */;
import guildHasOnboardingHomeDefault from "guildHasOnboardingHome" /* 7395 */;
import ImpersonateStore from "ImpersonateStore" /* 4914 */;
import ChannelStore from "ChannelStore" /* 4858 */;
import GuildStore from "GuildStore" /* 4880 */;
import GuildOnboardingHomeSettingsStore from "GuildOnboardingHomeSettingsStore" /* 7392 */;
import Constants from "Constants" /* 1072 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault;

let metroImportAll;
let metroImportDefault;
({ GuildFeatures: metroImportDefault, ME: metroImportAll } = Constants);
const ChannelFlags = ChannelConstants.ChannelFlags;
let result = size.fileFinishedImporting("modules/guild_onboarding_home/OnboardingHomeUtils.tsx");

export function useCanSeeOnboardingHome(guild_id) {
  let closure_1;
  _require = guild_id;
  const tmp = useIsNewMemberDefault(guild_id);
  importDefault = tmp;
  const items = [ChannelStore, GuildStore, ImpersonateStore, GuildOnboardingHomeSettingsStore];
  const items1 = [guild_id, tmp];
  const obj = require("useStateFromStores");
  return obj.useStateFromStores(items, () => {
    if (guild_id !== metroImportAll) {
      const obj2 = FavoritesUtils;
      const tmp25 = require;
      if (!obj2.isFavoritesGuildId(guild_id)) {
        const guild = GuildStore.getGuild(tmp2);
        let hasItem;
        if (guild != null) {
          const features = guild.features;
          hasItem = features.has(metroImportDefault.COMMUNITY);
        }
        let tmp8 = hasItem;
        if (tmp8) {
          let tmp11;
          if (ImpersonateStore.isFullServerPreview(guild_id)) {
            const id = guild.id;
            const tmp25Result = tmp25(7393);
            const isSettingsEmptyResult = tmp25Result.isSettingsEmpty(GuildOnboardingHomeSettingsStore.getSettings(id));
            let hasItem1 = !isSettingsEmptyResult;
            const enabled = GuildOnboardingHomeSettingsStore.getEnabled(id);
            if (!isSettingsEmptyResult) {
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
}
export function canSeeOnboardingHome(id) {
  const guild = GuildStore.getGuild(id);
  if (null == guild) {
    return false;
  } else {
    if (id !== metroImportAll) {
      const obj3 = FavoritesUtils;
      if (!obj3.isFavoritesGuildId(id)) {
        if (tmp2) {
          id = guild.id;
          const tmp16Result = GuildOnboardingHomeTypes;
          const isSettingsEmptyResult = tmp16Result.isSettingsEmpty(GuildOnboardingHomeSettingsStore.getSettings(id));
          let hasItem = !isSettingsEmptyResult;
          const enabled = GuildOnboardingHomeSettingsStore.getEnabled(id);
          if (!isSettingsEmptyResult) {
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
          const tmp16Result2 = GuildOnboardingUtils;
          let result = tmp16Result2.isGuildOnboardingSettingsAvailable(id);
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
