// Module ID: 15122
// Function ID: 115069
// Name: items
// Dependencies: [1391, 1838, 1849, 653, 566, 5641, 2]
// Exports: canSeeCreatorMonetizationOnboardingV2Upsell, useCanSeeCreatorMonetizationOnboardingV2Upsell

// Module 15122 (items)
import { isGuildOwner } from "isGuildOwner";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

let items = [, , , , ];
({ CREATOR_MONETIZABLE_PROVISIONAL: arr[0], CREATOR_MONETIZABLE: arr[1], CREATOR_MONETIZABLE_WHITEGLOVE: arr[2], CREATOR_MONETIZABLE_DISABLED: arr[3], CREATOR_MONETIZABLE_RESTRICTED: arr[4] } = require("ME").GuildFeatures);
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/creator_monetization_eligibility/feature_education/OnboardingV2Utils.tsx");

export const useCanSeeCreatorMonetizationOnboardingV2Upsell = function useCanSeeCreatorMonetizationOnboardingV2Upsell(id) {
  const _require = id;
  const items = [_createForOfIteratorHelperLoose];
  stateFromStores = _require(stateFromStores[4]).useStateFromStores(items, () => outer1_3.getGuild(closure_0));
  const obj = _require(stateFromStores[4]);
  const items1 = [_isNativeReflectConstruct];
  const stateFromStores1 = _require(stateFromStores[4]).useStateFromStores(items1, () => outer1_4.getCurrentUser());
  const obj2 = _require(stateFromStores[4]);
  const guildRoleSubscriptionSettingsVisibility = _require(stateFromStores[5]).useGuildRoleSubscriptionSettingsVisibility(stateFromStores);
  let tmp4 = guildRoleSubscriptionSettingsVisibility === _require(stateFromStores[5]).GuildRoleSubscriptionSettingsVisibility.VISIBLE;
  if (null == stateFromStores) {
    return false;
  } else {
    const tmp6 = isGuildOwner(stateFromStores, stateFromStores1);
    if (tmp4) {
      tmp4 = tmp6;
    }
    if (tmp4) {
      tmp4 = everyResult;
    }
    return tmp4;
  }
  const obj3 = _require(stateFromStores[5]);
};
export const canSeeCreatorMonetizationOnboardingV2Upsell = function canSeeCreatorMonetizationOnboardingV2Upsell(guildId) {
  guild = guild.getGuild(guildId);
  if (null == guild) {
    return false;
  } else {
    currentUser = currentUser.getCurrentUser();
    if (null == currentUser) {
      return false;
    } else {
      const guildRoleSubscriptionSettingsVisibility = guild(5641).getGuildRoleSubscriptionSettingsVisibility(guild);
      let tmp5 = guildRoleSubscriptionSettingsVisibility === guild(5641).GuildRoleSubscriptionSettingsVisibility.VISIBLE;
      const obj = guild(5641);
      const tmp7 = isGuildOwner(guild, currentUser);
      if (tmp5) {
        tmp5 = tmp7;
      }
      if (tmp5) {
        tmp5 = everyResult;
      }
      return tmp5;
    }
  }
};
