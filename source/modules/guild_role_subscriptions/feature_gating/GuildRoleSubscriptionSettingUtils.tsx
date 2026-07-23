// Module ID: 5641
// Function ID: 48233
// Name: canSeeGuildRoleSubscriptionSettingsContent
// Dependencies: [1391, 3758, 1849, 653, 566, 5642, 5634, 2]
// Exports: canSeeGuildRoleSubscriptionSettings, getGuildRoleSubscriptionSettingsVisibility, useCanSeeGuildRoleSubscriptionSettings

// Module 5641 (canSeeGuildRoleSubscriptionSettingsContent)
import { isGuildOwner } from "isGuildOwner";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import ME from "ME";

let closure_5;
let closure_6;
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
  const _require = stateFromStores;
  let obj = _require(566);
  const items = [closure_4];
  stateFromStores = obj.useStateFromStores(items, () => {
    let tmp2 = null != closure_0;
    if (tmp2) {
      tmp2 = outer1_2(closure_0, tmp);
    }
    return tmp2;
  });
  const tmp = useCanManageGuildRoleSubscriptions(stateFromStores);
  const isUserInCreatorMonetizationEligibleCountry = _require(5642).useIsUserInCreatorMonetizationEligibleCountry();
  _require(5634);
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
  const _require = guild;
  const items = [_isNativeReflectConstruct];
  const items1 = [guild];
  return _require(566).useStateFromStores(items, () => outer1_12(closure_0), items1);
}
function canManageGuildRoleSubscriptions(stateFromStores) {
  let canResult = null != stateFromStores;
  if (canResult) {
    canResult = _isNativeReflectConstruct.can(constants2.ADMINISTRATOR, stateFromStores);
  }
  return canResult;
}
({ GuildFeatures: closure_5, Permissions: closure_6 } = ME);
let obj = { NONE: 0, [0]: "NONE", VISIBLE: 1, [1]: "VISIBLE" };
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/guild_role_subscriptions/feature_gating/GuildRoleSubscriptionSettingUtils.tsx");

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
    obj = { guild, isOwner: isGuildOwner(guild, currentUser.getCurrentUser()), canManageGuildRoleSubscriptions: canManageGuildRoleSubscriptions(guild), isUserInCreatorMonetizationEligibleCountry: require(5642) /* getCreatorMonetizationEligibleCountry */.isUserInCreatorMonetizationEligibleCountry() };
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
