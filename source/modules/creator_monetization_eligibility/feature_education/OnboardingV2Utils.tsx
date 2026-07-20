// Module ID: 14941
// Function ID: 112479
// Name: items
// Dependencies: []
// Exports: canSeeCreatorMonetizationOnboardingV2Upsell, useCanSeeCreatorMonetizationOnboardingV2Upsell

// Module 14941 (items)
const isGuildOwner = require(dependencyMap[0]).isGuildOwner;
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
const items = [, , , , ];
({ CREATOR_MONETIZABLE_PROVISIONAL: arr[0], CREATOR_MONETIZABLE: arr[1], CREATOR_MONETIZABLE_WHITEGLOVE: arr[2], CREATOR_MONETIZABLE_DISABLED: arr[3], CREATOR_MONETIZABLE_RESTRICTED: arr[4] } = require(dependencyMap[3]).GuildFeatures);
const _module = require(dependencyMap[6]);
const result = _module.fileFinishedImporting("modules/creator_monetization_eligibility/feature_education/OnboardingV2Utils.tsx");

export const useCanSeeCreatorMonetizationOnboardingV2Upsell = function useCanSeeCreatorMonetizationOnboardingV2Upsell(id) {
  const require = id;
  const items = [closure_3];
  const stateFromStores = require(dependencyMap[4]).useStateFromStores(items, () => guild.getGuild(arg0));
  const dependencyMap = stateFromStores;
  const obj = require(dependencyMap[4]);
  const items1 = [closure_4];
  const stateFromStores1 = require(dependencyMap[4]).useStateFromStores(items1, () => currentUser.getCurrentUser());
  const obj2 = require(dependencyMap[4]);
  const guildRoleSubscriptionSettingsVisibility = require(dependencyMap[5]).useGuildRoleSubscriptionSettingsVisibility(stateFromStores);
  let tmp4 = guildRoleSubscriptionSettingsVisibility === require(dependencyMap[5]).GuildRoleSubscriptionSettingsVisibility.VISIBLE;
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
  const obj3 = require(dependencyMap[5]);
};
export const canSeeCreatorMonetizationOnboardingV2Upsell = function canSeeCreatorMonetizationOnboardingV2Upsell(guildId) {
  const guild = guild.getGuild(guildId);
  const require = guild;
  if (null == guild) {
    return false;
  } else {
    const currentUser = currentUser.getCurrentUser();
    if (null == currentUser) {
      return false;
    } else {
      const guildRoleSubscriptionSettingsVisibility = require(dependencyMap[5]).getGuildRoleSubscriptionSettingsVisibility(guild);
      let tmp5 = guildRoleSubscriptionSettingsVisibility === require(dependencyMap[5]).GuildRoleSubscriptionSettingsVisibility.VISIBLE;
      const obj = require(dependencyMap[5]);
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
