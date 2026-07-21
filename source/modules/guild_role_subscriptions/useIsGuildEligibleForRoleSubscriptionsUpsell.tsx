// Module ID: 14952
// Function ID: 112544
// Name: useIsGuildEligibleForRoleSubscriptionsUpsell
// Dependencies: []
// Exports: default

// Module 14952 (useIsGuildEligibleForRoleSubscriptionsUpsell)
const isGuildOwner = require(dependencyMap[0]).isGuildOwner;
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
const GuildFeatures = require(dependencyMap[3]).GuildFeatures;
const _module = require(dependencyMap[6]);
const result = _module.fileFinishedImporting("modules/guild_role_subscriptions/useIsGuildEligibleForRoleSubscriptionsUpsell.tsx");

export default function useIsGuildEligibleForRoleSubscriptionsUpsell(arg0) {
  const require = arg0;
  const items = [closure_3];
  const stateFromStores = require(dependencyMap[4]).useStateFromStores(items, () => guild.getGuild(arg0));
  require(dependencyMap[4]);
  [][0] = closure_4;
  let tmp4 = null != stateFromStores;
  if (tmp4) {
    tmp4 = isGuildOwner(stateFromStores, tmp3);
  }
  const obj = require(dependencyMap[4]);
  const isUserInCreatorMonetizationEligibleCountry = require(dependencyMap[5]).useIsUserInCreatorMonetizationEligibleCountry();
  if (tmp4) {
    let hasItem;
    if (null != stateFromStores) {
      const features = stateFromStores.features;
      hasItem = features.has(GuildFeatures.COMMUNITY);
    }
    tmp4 = null != hasItem;
    const tmp7 = hasItem;
  }
  if (tmp4) {
    tmp4 = tmp7;
  }
  if (tmp4) {
    tmp4 = isUserInCreatorMonetizationEligibleCountry;
  }
  if (tmp4) {
    let hasItem1 = null != stateFromStores;
    if (hasItem1) {
      const features2 = stateFromStores.features;
      hasItem1 = features2.has(GuildFeatures.CREATOR_MONETIZABLE);
    }
    if (!hasItem1) {
      let hasItem2 = null != stateFromStores;
      if (hasItem2) {
        const features3 = stateFromStores.features;
        hasItem2 = features3.has(GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL);
      }
      hasItem1 = hasItem2;
    }
    if (!hasItem1) {
      let hasItem3 = null != stateFromStores;
      if (hasItem3) {
        const features4 = stateFromStores.features;
        hasItem3 = features4.has(GuildFeatures.CREATOR_MONETIZABLE_DISABLED);
      }
      hasItem1 = hasItem3;
    }
    tmp4 = !hasItem1;
  }
  return tmp4;
};
