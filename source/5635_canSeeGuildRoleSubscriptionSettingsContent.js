// Module ID: 5635
// Function ID: 48148
// Name: canSeeGuildRoleSubscriptionSettingsContent
// Dependencies: []
// Exports: canSeeGuildRoleSubscriptionSettings, getGuildRoleSubscriptionSettingsVisibility, useCanSeeGuildRoleSubscriptionSettings

// Module 5635 (canSeeGuildRoleSubscriptionSettingsContent)
function canSeeGuildRoleSubscriptionSettingsContent(canManageGuildRoleSubscriptions) {
  let guild;
  let isOwner;
  let shouldRestrictUpdatingRoleSubscriptionSettings;
  ({ guild, isOwner, shouldRestrictUpdatingRoleSubscriptionSettings } = canManageGuildRoleSubscriptions);
  let tmp3 = !tmp2;
  if (!!canManageGuildRoleSubscriptions.canManageGuildRoleSubscriptions) {
    if (shouldRestrictUpdatingRoleSubscriptionSettings) {
      shouldRestrictUpdatingRoleSubscriptionSettings = !isOwner;
    }
    let tmp4 = !shouldRestrictUpdatingRoleSubscriptionSettings;
    if (tmp4) {
      const features = guild.features;
      let tmp6 = !features.has(constants.CREATOR_MONETIZABLE);
      if (tmp6) {
        const features2 = guild.features;
        tmp6 = !features2.has(constants.CREATOR_MONETIZABLE_PROVISIONAL);
      }
      let tmp8 = !tmp6;
      if (tmp6) {
        const features3 = guild.features;
        const tmp10 = !features3.has(constants.COMMUNITY);
        let tmp11 = !tmp10;
        if (!tmp10) {
          if (isOwner) {
            isOwner = tmp;
          }
          tmp11 = isOwner;
        }
        tmp8 = tmp11;
      }
      tmp4 = tmp8;
    }
    tmp3 = tmp4;
  }
  return tmp3;
}
function computeGuildRoleSubscriptionSettingsVisibility(guild) {
  const features = guild.guild.features;
  if (features.has(constants.CREATOR_MONETIZABLE_DISABLED)) {
    let NONE = obj.NONE;
  } else {
    NONE = canSeeGuildRoleSubscriptionSettingsContent(guild) ? tmp2.VISIBLE : tmp2.NONE;
  }
  return NONE;
}
function useGuildRoleSubscriptionSettingsVisibility(stateFromStores) {
  const require = stateFromStores;
  let obj = require(dependencyMap[4]);
  const items = [closure_4];
  stateFromStores = obj.useStateFromStores(items, () => {
    let tmp2 = null != arg0;
    if (tmp2) {
      tmp2 = callback(arg0, tmp);
    }
    return tmp2;
  });
  const tmp = useCanManageGuildRoleSubscriptions(stateFromStores);
  const isUserInCreatorMonetizationEligibleCountry = require(dependencyMap[5]).useIsUserInCreatorMonetizationEligibleCountry();
  require(dependencyMap[6]);
  if (null != stateFromStores) {
    const id = stateFromStores.id;
  }
  if (null == stateFromStores) {
    let NONE = obj.NONE;
  } else {
    obj = { guild: stateFromStores, isOwner: stateFromStores, canManageGuildRoleSubscriptions: tmp, isUserInCreatorMonetizationEligibleCountry, shouldRestrictUpdatingRoleSubscriptionSettings: tmp5 };
    NONE = computeGuildRoleSubscriptionSettingsVisibility(obj);
  }
  return NONE;
}
function useCanManageGuildRoleSubscriptions(guild) {
  const require = guild;
  const items = [closure_3];
  const items1 = [guild];
  return require(dependencyMap[4]).useStateFromStores(items, () => callback(arg0), items1);
}
function canManageGuildRoleSubscriptions(stateFromStores) {
  let canResult = null != stateFromStores;
  if (canResult) {
    canResult = closure_3.can(constants2.ADMINISTRATOR, stateFromStores);
  }
  return canResult;
}
const isGuildOwner = require(dependencyMap[0]).isGuildOwner;
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
const _module = require(dependencyMap[3]);
({ GuildFeatures: closure_5, Permissions: closure_6 } = _module);
const obj = { NONE: 0, [0]: "NONE", VISIBLE: 1, [1]: "VISIBLE" };
const _module1 = require(dependencyMap[7]);
const result = _module1.fileFinishedImporting("modules/guild_role_subscriptions/feature_gating/GuildRoleSubscriptionSettingUtils.tsx");

export const GuildRoleSubscriptionSettingsVisibility = obj;
export { canSeeGuildRoleSubscriptionSettingsContent };
export { computeGuildRoleSubscriptionSettingsVisibility };
export const canSeeGuildRoleSubscriptionSettings = function canSeeGuildRoleSubscriptionSettings(guild) {
  return computeGuildRoleSubscriptionSettingsVisibility(guild) !== obj.NONE;
};
export { useGuildRoleSubscriptionSettingsVisibility };
export const getGuildRoleSubscriptionSettingsVisibility = function getGuildRoleSubscriptionSettingsVisibility(guild) {
  if (null == guild) {
    return obj.NONE;
  } else {
    const obj = { guild, isOwner: isGuildOwner(guild, currentUser.getCurrentUser()), canManageGuildRoleSubscriptions: canManageGuildRoleSubscriptions(guild), isUserInCreatorMonetizationEligibleCountry: require(dependencyMap[5]).isUserInCreatorMonetizationEligibleCountry() };
    const features = guild.features;
    obj.shouldRestrictUpdatingRoleSubscriptionSettings = features.has(constants.CREATOR_MONETIZABLE_RESTRICTED);
    return computeGuildRoleSubscriptionSettingsVisibility(obj);
  }
};
export const useCanSeeGuildRoleSubscriptionSettings = function useCanSeeGuildRoleSubscriptionSettings(guild) {
  return useGuildRoleSubscriptionSettingsVisibility(guild) !== obj.NONE;
};
export { useCanManageGuildRoleSubscriptions };
export { canManageGuildRoleSubscriptions };
