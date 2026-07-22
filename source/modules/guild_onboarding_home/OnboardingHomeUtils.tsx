// Module ID: 5604
// Function ID: 47655
// Name: canSeeOnboardingHomeInPreview
// Dependencies: []
// Exports: canSeeOnboardingHome, useCanSeeOnboardingHome

// Module 5604 (canSeeOnboardingHomeInPreview)
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
    let tmp3 = closure_10;
    if (!obj.hasFlag(closure_10.IS_GUILD_RESOURCE_CHANNEL)) {
      continue;
    } else {
      let flag = true;
      return true;
    }
  }
  return false;
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
({ FAVORITES: closure_7, GuildFeatures: closure_8, ME: closure_9 } = arg1(dependencyMap[4]));
const ChannelFlags = arg1(dependencyMap[5]).ChannelFlags;
const tmp2 = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/guild_onboarding_home/OnboardingHomeUtils.tsx");

export const useCanSeeOnboardingHome = function useCanSeeOnboardingHome(guild_id) {
  const arg1 = guild_id;
  const tmp = importDefault(dependencyMap[6])(guild_id);
  const importDefault = tmp;
  const items = [closure_4, closure_5, closure_3];
  const items1 = [guild_id, tmp];
  return arg1(dependencyMap[7]).useStateFromStores(items, () => {
    if (arg0 !== closure_9) {
      if (arg0 !== closure_7) {
        const guild = guild.getGuild(arg0);
        let tmp2 = null == guild;
        if (!tmp2) {
          const features = guild.features;
          tmp2 = !features.has(constants.COMMUNITY);
        }
        if (tmp2) {
          return !tmp2;
        } else if (fullServerPreview.isFullServerPreview(arg0)) {
          let result = callback(guild);
        } else {
          result = arg0(closure_2[8]).isGuildOnboardingSettingsAvailable(arg0);
          if (!result) {
            result = tmp(closure_2[9])(guild);
          }
          if (result) {
            let tmp11 = tmp;
            if (!tmp) {
              tmp11 = callback2(arg0, closure_4);
            }
            result = tmp11;
          }
          const obj = arg0(closure_2[8]);
        }
      }
    }
    return false;
  }, items1);
};
export const canSeeOnboardingHome = function canSeeOnboardingHome(guildId) {
  const guild = guild.getGuild(guildId);
  if (null == guild) {
    return false;
  } else {
    if (guildId !== closure_9) {
      if (guildId !== closure_7) {
        if (tmp2) {
          return canSeeOnboardingHomeInPreview(guild);
        } else {
          let result = arg1(dependencyMap[8]).isGuildOnboardingSettingsAvailable(guildId);
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
