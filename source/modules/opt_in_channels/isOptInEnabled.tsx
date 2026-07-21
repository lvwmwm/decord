// Module ID: 6762
// Function ID: 52978
// Name: useOptInEnabledForGuild
// Dependencies: []
// Exports: isOptInEnabledForGuild, useOptInEnabledForGuild, useShouldShowOnboardingAdminUpsellForGuild

// Module 6762 (useOptInEnabledForGuild)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
({ GuildFeatures: closure_6, Permissions: closure_7 } = arg1(dependencyMap[4]));
const tmp2 = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/opt_in_channels/isOptInEnabled.tsx");

export const useOptInEnabledForGuild = function useOptInEnabledForGuild(guild_id) {
  const arg1 = guild_id;
  const items = [closure_4, closure_2, closure_5];
  return arg1(dependencyMap[5]).useStateFromStores(items, () => {
    let isOptInEnabledResult = optInEnabled.isOptInEnabled(arg0);
    const guild = guild.getGuild(arg0);
    let hasItem;
    if (null != guild) {
      const features = guild.features;
      hasItem = features.has(constants.COMMUNITY);
    }
    let tmp5 = null != hasItem && hasItem;
    const currentUser = currentUser.getCurrentUser();
    let isStaffResult;
    if (null != currentUser) {
      isStaffResult = currentUser.isStaff();
    }
    if (isOptInEnabledResult) {
      if (!tmp5) {
        tmp5 = tmp7;
      }
      isOptInEnabledResult = tmp5;
    }
    return isOptInEnabledResult;
  });
};
export const isOptInEnabledForGuild = function isOptInEnabledForGuild(_guildId) {
  const guild = guild.getGuild(_guildId);
  const currentUser = currentUser.getCurrentUser();
  let tmp2 = null != _guildId && null != guild && null != currentUser;
  if (tmp2) {
    const features = guild.features;
    let isOptInEnabledResult = features.has(constants.COMMUNITY) || currentUser.isStaff();
    if (isOptInEnabledResult) {
      isOptInEnabledResult = optInEnabled.isOptInEnabled(_guildId);
    }
    tmp2 = isOptInEnabledResult;
  }
  return tmp2;
};
export const useShouldShowOnboardingAdminUpsellForGuild = function useShouldShowOnboardingAdminUpsellForGuild(arg0) {
  const arg1 = arg0;
  const items = [closure_2, closure_3];
  return arg1(dependencyMap[5]).useStateFromStores(items, () => {
    const guild = guild.getGuild(arg0);
    let hasItem;
    const canResult = closure_3.can(constants2.MANAGE_GUILD, guild);
    if (null != guild) {
      const features = guild.features;
      hasItem = features.has(constants.GUILD_ONBOARDING_EVER_ENABLED);
    }
    const canResult1 = closure_3.can(constants2.MANAGE_ROLES, guild);
    const tmp6 = null != hasItem && hasItem;
    return null != guild && canResult && closure_3.can(constants2.MANAGE_ROLES, guild) && !(null != hasItem && hasItem);
  });
};
