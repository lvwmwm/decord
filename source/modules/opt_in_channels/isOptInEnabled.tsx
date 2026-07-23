// Module ID: 6767
// Function ID: 53021
// Name: useOptInEnabledForGuild
// Dependencies: [1838, 3758, 4325, 1849, 653, 566, 2]
// Exports: isOptInEnabledForGuild, useOptInEnabledForGuild, useShouldShowOnboardingAdminUpsellForGuild

// Module 6767 (useOptInEnabledForGuild)
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import ME from "ME";

let closure_6;
let closure_7;
const require = arg1;
({ GuildFeatures: closure_6, Permissions: closure_7 } = ME);
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/opt_in_channels/isOptInEnabled.tsx");

export const useOptInEnabledForGuild = function useOptInEnabledForGuild(guild_id) {
  const _require = guild_id;
  const items = [closure_4, _createForOfIteratorHelperLoose, closure_5];
  return _require(566).useStateFromStores(items, () => {
    let isOptInEnabledResult = outer1_4.isOptInEnabled(closure_0);
    const guild = outer1_2.getGuild(closure_0);
    let hasItem;
    if (null != guild) {
      const features = guild.features;
      hasItem = features.has(outer1_6.COMMUNITY);
    }
    let tmp5 = null != hasItem && hasItem;
    const currentUser = outer1_5.getCurrentUser();
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
  guild = guild.getGuild(_guildId);
  currentUser = currentUser.getCurrentUser();
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
  const _require = arg0;
  const items = [_createForOfIteratorHelperLoose, _isNativeReflectConstruct];
  return _require(566).useStateFromStores(items, () => {
    const guild = outer1_2.getGuild(closure_0);
    let hasItem;
    const canResult = outer1_3.can(outer1_7.MANAGE_GUILD, guild);
    if (null != guild) {
      const features = guild.features;
      hasItem = features.has(outer1_6.GUILD_ONBOARDING_EVER_ENABLED);
    }
    const canResult1 = outer1_3.can(outer1_7.MANAGE_ROLES, guild);
    const tmp6 = null != hasItem && hasItem;
    return null != guild && canResult && outer1_3.can(outer1_7.MANAGE_ROLES, guild) && !(null != hasItem && hasItem);
  });
};
