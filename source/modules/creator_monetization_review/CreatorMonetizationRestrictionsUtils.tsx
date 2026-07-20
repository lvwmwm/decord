// Module ID: 3749
// Function ID: 28593
// Name: isRestrictedFromShowingGuildPurchaseEntryPoints
// Dependencies: []
// Exports: isRestrictedFromMonetizationReapplication, shouldHideGuildPurchaseEntryPoints, shouldRestrictUpdatingCreatorMonetizationSettings

// Module 3749 (isRestrictedFromShowingGuildPurchaseEntryPoints)
function isRestrictedFromShowingGuildPurchaseEntryPoints(restrictions) {
  let hasItem = null != restrictions;
  if (hasItem) {
    hasItem = restrictions.includes(constants.NEW_PURCHASES_DISABLED);
  }
  return hasItem;
}
function isRestrictedFromUpdatingCreatorMonetizationSettings(monetizationRestrictions) {
  let hasItem = null != monetizationRestrictions;
  if (hasItem) {
    hasItem = monetizationRestrictions.includes(constants.SETTINGS_READ_ONLY);
  }
  return hasItem;
}
let closure_0 = importDefault(dependencyMap[0]);
const FetchState = arg1(dependencyMap[0]).FetchState;
let closure_2 = importDefault(dependencyMap[1]);
let closure_3 = arg1(dependencyMap[2]).CreatorMonetizationRestrictions;
const GuildFeatures = arg1(dependencyMap[3]).GuildFeatures;
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/creator_monetization_review/CreatorMonetizationRestrictionsUtils.tsx");

export { isRestrictedFromShowingGuildPurchaseEntryPoints };
export const shouldHideGuildPurchaseEntryPoints = function shouldHideGuildPurchaseEntryPoints(guildId) {
  if (null == guildId) {
    return false;
  } else {
    const monetizationRestrictionsFetchState = store.getMonetizationRestrictionsFetchState(guildId);
    const monetizationRestrictions = store.getMonetizationRestrictions(guildId);
    const guild = store2.getGuild(guildId);
    if (monetizationRestrictionsFetchState === FetchState.FETCHED) {
      let tmp9 = isRestrictedFromShowingGuildPurchaseEntryPoints(monetizationRestrictions);
    } else {
      let hasItem;
      if (null != guild) {
        const features = guild.features;
        hasItem = features.has(GuildFeatures.CREATOR_MONETIZABLE_RESTRICTED);
      }
      tmp9 = null == hasItem || hasItem;
    }
    return tmp9;
  }
};
export { isRestrictedFromUpdatingCreatorMonetizationSettings };
export const shouldRestrictUpdatingCreatorMonetizationSettings = function shouldRestrictUpdatingCreatorMonetizationSettings(id) {
  if (null == id) {
    return false;
  } else {
    const monetizationRestrictionsFetchState = store.getMonetizationRestrictionsFetchState(id);
    const monetizationRestrictions = store.getMonetizationRestrictions(id);
    const guild = store2.getGuild(id);
    if (monetizationRestrictionsFetchState === FetchState.FETCHED) {
      let tmp9 = isRestrictedFromUpdatingCreatorMonetizationSettings(monetizationRestrictions);
    } else {
      let hasItem;
      if (null != guild) {
        const features = guild.features;
        hasItem = features.has(GuildFeatures.CREATOR_MONETIZABLE_RESTRICTED);
      }
      tmp9 = null == hasItem || hasItem;
    }
    return tmp9;
  }
};
export const isRestrictedFromMonetizationReapplication = function isRestrictedFromMonetizationReapplication(restrictions) {
  let hasItem = null != restrictions;
  if (hasItem) {
    hasItem = restrictions.includes(constants.REAPPLICATION_DISABLED);
  }
  return hasItem;
};
