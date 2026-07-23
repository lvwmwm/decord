// Module ID: 5607
// Function ID: 47678
// Name: canSeeOnboardingHomeInPreview
// Dependencies: [1909, 1348, 1838, 4333, 653, 1355, 5608, 624, 5065, 4335, 2]
// Exports: canSeeOnboardingHome, useCanSeeOnboardingHome

// Module 5607 (canSeeOnboardingHomeInPreview)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_6 from "_isNativeReflectConstruct";
import ME from "ME";
import { ChannelFlags } from "set";

let closure_7;
let closure_8;
let closure_9;
const require = arg1;
function canSeeOnboardingHomeInPreview(guild) {
  const id = guild.id;
  let newMemberActions = store.getNewMemberActions(id);
  if (null == newMemberActions) {
    newMemberActions = [];
  }
  let hasItem = newMemberActions.length > 0;
  const enabled = store.getEnabled(id);
  if (hasItem) {
    const features = guild.features;
    hasItem = features.has(constants.COMMUNITY);
  }
  if (hasItem) {
    const features2 = guild.features;
    hasItem = !(features2.has(constants.GUILD_ONBOARDING) && !enabled);
    const tmp5 = features2.has(constants.GUILD_ONBOARDING) && !enabled;
  }
  return hasItem;
}
function hasResourceChannels(arg0, getMutableGuildChannelsForGuild) {
  const mutableGuildChannelsForGuild = getMutableGuildChannelsForGuild.getMutableGuildChannelsForGuild(arg0);
  for (const key10006 in mutableGuildChannelsForGuild) {
    let tmp2 = key10006;
    let obj = mutableGuildChannelsForGuild[key10006];
    let tmp3 = ChannelFlags;
    if (!obj.hasFlag(ChannelFlags.IS_GUILD_RESOURCE_CHANNEL)) {
      continue;
    } else {
      let flag = true;
      return true;
    }
  }
  return false;
}
({ FAVORITES: closure_7, GuildFeatures: closure_8, ME: closure_9 } = ME);
let result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/guild_onboarding_home/OnboardingHomeUtils.tsx");

export const useCanSeeOnboardingHome = function useCanSeeOnboardingHome(guild_id) {
  const _require = guild_id;
  const tmp = importDefault(5608)(guild_id);
  importDefault = tmp;
  const items = [closure_4, _createForOfIteratorHelperLoose, _isNativeReflectConstruct];
  const items1 = [guild_id, tmp];
  return _require(624).useStateFromStores(items, () => {
    if (guild_id !== outer1_9) {
      if (guild_id !== outer1_7) {
        const guild = outer1_5.getGuild(guild_id);
        let tmp2 = null == guild;
        if (!tmp2) {
          const features = guild.features;
          tmp2 = !features.has(outer1_8.COMMUNITY);
        }
        if (tmp2) {
          return !tmp2;
        } else if (outer1_3.isFullServerPreview(guild_id)) {
          let result = outer1_11(guild);
        } else {
          result = guild_id(outer1_2[8]).isGuildOnboardingSettingsAvailable(guild_id);
          if (!result) {
            result = tmp(outer1_2[9])(guild);
          }
          if (result) {
            let tmp11 = tmp;
            if (!tmp) {
              tmp11 = outer1_12(guild_id, outer1_4);
            }
            result = tmp11;
          }
          const obj = guild_id(outer1_2[8]);
        }
      }
    }
    return false;
  }, items1);
};
export const canSeeOnboardingHome = function canSeeOnboardingHome(guildId) {
  guild = guild.getGuild(guildId);
  if (null == guild) {
    return false;
  } else {
    if (guildId !== closure_9) {
      if (guildId !== closure_7) {
        if (tmp2) {
          return canSeeOnboardingHomeInPreview(guild);
        } else {
          let result = require(5065) /* _createForOfIteratorHelperLoose */.isGuildOnboardingSettingsAvailable(guildId);
          if (result) {
            const features = guild.features;
            result = features.has(constants.GUILD_ONBOARDING);
          }
          if (result) {
            const features2 = guild.features;
            result = features2.has(constants.GUILD_SERVER_GUIDE);
          }
          const features3 = guild.features;
          let hasItem = features3.has(constants.GUILD_ONBOARDING);
          if (hasItem) {
            const features4 = guild.features;
            hasItem = features4.has(constants.GUILD_SERVER_GUIDE);
          }
          if (!hasItem) {
            hasItem = result;
          }
          if (hasItem) {
            const features5 = guild.features;
            hasItem = features5.has(constants.COMMUNITY);
          }
          return hasItem;
        }
      }
    }
    return false;
  }
};
