// Module ID: 3751
// Function ID: 28603
// Name: isRestrictedFromShowingGuildPurchaseEntryPoints
// Dependencies: [3752, 1838, 3753, 653, 2]
// Exports: isRestrictedFromMonetizationReapplication, shouldHideGuildPurchaseEntryPoints, shouldRestrictUpdatingCreatorMonetizationSettings

// Module 3751 (isRestrictedFromShowingGuildPurchaseEntryPoints)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { FetchState } from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import { CreatorMonetizationRestrictions as closure_3 } from "CreatorMonetizationRestrictions";
import { GuildFeatures } from "ME";

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
const result = require("CreatorMonetizationRestrictions").fileFinishedImporting("modules/creator_monetization_review/CreatorMonetizationRestrictionsUtils.tsx");

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
