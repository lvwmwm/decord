// Module ID: 7428
// Function ID: 7429
// Name: GuildRoleSubscriptionSettingUtils
// Dependencies: [4876, 4941, 1384, 1072, 504, 7429, 7421, 2]
// Exports: canManageGuildRoleSubscriptions, canSeeGuildRoleSubscriptionSettings, canSeeGuildRoleSubscriptionSettingsContent, getGuildRoleSubscriptionSettingsVisibility, useCanManageGuildRoleSubscriptions, useCanSeeGuildRoleSubscriptionSettings

// Module 7428 (GuildRoleSubscriptionSettingUtils)
import GuildRecord from "GuildRecord" /* 4876 */;
import CreatorMonetizationEligibilityExperimentUtils from "CreatorMonetizationEligibilityExperimentUtils" /* 7429 */;
import PermissionStore from "PermissionStore" /* 4941 */;
import UserStore from "UserStore" /* 1384 */;
import Constants from "Constants" /* 1072 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let hasOwnProperty;
let metroRequire;
const f90397 = () => {
  const canResult = null != guild && PermissionStore.can(metroRequire.ADMINISTRATOR, tmp);
  return canResult;
};
function computeGuildRoleSubscriptionSettingsVisibility(guild) {
  let NONE;
  let isOwner;
  let shouldRestrictUpdatingRoleSubscriptionSettings;
  const features = guild.guild.features;
  if (features.has(hasOwnProperty.CREATOR_MONETIZABLE_DISABLED)) {
    NONE = obj.NONE;
  } else {
    ({ guild, isOwner, shouldRestrictUpdatingRoleSubscriptionSettings } = guild);
    let prop = guild.canManageGuildRoleSubscriptions;
    if (prop) {
      if (shouldRestrictUpdatingRoleSubscriptionSettings) {
        shouldRestrictUpdatingRoleSubscriptionSettings = !isOwner;
      }
      let tmp4 = !shouldRestrictUpdatingRoleSubscriptionSettings;
      if (tmp4) {
        const features2 = guild.features;
        const hasItem = features2.has(tmp.CREATOR_MONETIZABLE);
        let tmp6 = !hasItem;
        if (tmp6) {
          const features3 = guild.features;
          tmp6 = !features3.has(tmp.CREATOR_MONETIZABLE_PROVISIONAL);
        }
        let tmp7 = !tmp6;
        if (tmp6) {
          const features4 = guild.features;
          let hasItem1 = features4.has(tmp.COMMUNITY);
          if (hasItem1) {
            if (isOwner) {
              isOwner = tmp2;
            }
            hasItem1 = isOwner;
          }
          tmp7 = hasItem1;
        }
        tmp4 = tmp7;
      }
      prop = tmp4;
    }
    NONE = prop ? tmp9.VISIBLE : tmp9.NONE;
  }
  return NONE;
}
function useGuildRoleSubscriptionSettingsVisibility(stateFromStores) {
  let NONE;
  _require = stateFromStores;
  const obj = require("get initialized");
  const items = [PermissionStore];
  const items1 = [stateFromStores];
  stateFromStores = obj.useStateFromStores(items, f90397, items1);
  const items2 = [UserStore];
  const obj2 = require("get initialized");
  const stateFromStores1 = obj2.useStateFromStores(items2, () => {
    const tmp3 = null != stateFromStores && isGuildOwner(tmp2, tmp);
    return tmp3;
  });
  const obj3 = require("CreatorMonetizationEligibilityExperimentUtils");
  const isUserInCreatorMonetizationEligibleCountry = obj3.useIsUserInCreatorMonetizationEligibleCountry();
  require("CreatorMonetizationRestrictionsHooks");
  if (stateFromStores != null) {
    const id = stateFromStores.id;
  }
  if (null == stateFromStores) {
    NONE = obj.NONE;
  } else {
    const obj4 = { guild: stateFromStores, isOwner: stateFromStores1, canManageGuildRoleSubscriptions: stateFromStores, isUserInCreatorMonetizationEligibleCountry, shouldRestrictUpdatingRoleSubscriptionSettings: tmp5 };
    NONE = computeGuildRoleSubscriptionSettingsVisibility(obj4);
  }
  return NONE;
}
const isGuildOwner = GuildRecord.isGuildOwner;
({ GuildFeatures: hasOwnProperty, Permissions: metroRequire } = Constants);
const GuildRoleSubscriptionSettingsVisibility = { NONE: 0, [0]: "NONE", VISIBLE: 1, [1]: "VISIBLE" };
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/feature_gating/GuildRoleSubscriptionSettingUtils.tsx");

export { GuildRoleSubscriptionSettingsVisibility };
export function canSeeGuildRoleSubscriptionSettingsContent(canManageGuildRoleSubscriptions) {
  let guild;
  let isOwner;
  let shouldRestrictUpdatingRoleSubscriptionSettings;
  ({ guild, isOwner, shouldRestrictUpdatingRoleSubscriptionSettings } = canManageGuildRoleSubscriptions);
  let prop = canManageGuildRoleSubscriptions.canManageGuildRoleSubscriptions;
  if (prop) {
    if (shouldRestrictUpdatingRoleSubscriptionSettings) {
      shouldRestrictUpdatingRoleSubscriptionSettings = !isOwner;
    }
    let tmp3 = !shouldRestrictUpdatingRoleSubscriptionSettings;
    if (tmp3) {
      const features = guild.features;
      const hasItem = features.has(hasOwnProperty.CREATOR_MONETIZABLE);
      let tmp6 = !hasItem;
      if (tmp6) {
        const features2 = guild.features;
        tmp6 = !features2.has(tmp4.CREATOR_MONETIZABLE_PROVISIONAL);
      }
      let tmp7 = !tmp6;
      if (tmp6) {
        const features3 = guild.features;
        let hasItem1 = features3.has(tmp4.COMMUNITY);
        if (hasItem1) {
          if (isOwner) {
            isOwner = tmp;
          }
          hasItem1 = isOwner;
        }
        tmp7 = hasItem1;
      }
      tmp3 = tmp7;
    }
    prop = tmp3;
  }
  return prop;
}
export { computeGuildRoleSubscriptionSettingsVisibility };
export function canSeeGuildRoleSubscriptionSettings(guild) {
  return computeGuildRoleSubscriptionSettingsVisibility(guild) !== obj.NONE;
}
export { useGuildRoleSubscriptionSettingsVisibility };
export function getGuildRoleSubscriptionSettingsVisibility(guild) {
  let canResult;
  let features;
  let obj;
  if (null == guild) {
    return obj.NONE;
  } else {
    const obj2 = { guild, isOwner: isGuildOwner(guild, UserStore.getCurrentUser()), canManageGuildRoleSubscriptions: canResult, isUserInCreatorMonetizationEligibleCountry: obj.isUserInCreatorMonetizationEligibleCountry(), shouldRestrictUpdatingRoleSubscriptionSettings: features.has(hasOwnProperty.CREATOR_MONETIZABLE_RESTRICTED) };
    canResult = null != guild;
    const tmp9 = computeGuildRoleSubscriptionSettingsVisibility;
    if (canResult) {
      canResult = PermissionStore.can(metroRequire.ADMINISTRATOR, guild);
    }
    obj = CreatorMonetizationEligibilityExperimentUtils;
    features = guild.features;
    return tmp9(obj2);
  }
}
export function useCanSeeGuildRoleSubscriptionSettings(guild) {
  return useGuildRoleSubscriptionSettingsVisibility(guild) !== obj.NONE;
}
export function useCanManageGuildRoleSubscriptions(guild) {
  _require = guild;
  const items = [PermissionStore];
  const items1 = [guild];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, f90397, items1);
}
export function canManageGuildRoleSubscriptions(stateFromStores) {
  const canResult = null != stateFromStores && PermissionStore.can(metroRequire.ADMINISTRATOR, stateFromStores);
  return canResult;
}
