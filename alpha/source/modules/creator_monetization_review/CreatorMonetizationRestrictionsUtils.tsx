// Module ID: 4933
// Function ID: 4934
// Name: CreatorMonetizationRestrictionsUtils
// Dependencies: [4934, 4880, 4935, 1072, 2]
// Exports: isRestrictedFromMonetizationReapplication, isRestrictedFromShowingGuildPurchaseEntryPoints, isRestrictedFromUpdatingCreatorMonetizationSettings, shouldHideGuildPurchaseEntryPoints, shouldRestrictUpdatingCreatorMonetizationSettings

// Module 4933 (CreatorMonetizationRestrictionsUtils)
import Constants from "Constants" /* 1072 */;
import GuildRoleSubscriptionsStore2 from "GuildRoleSubscriptionsStore" /* 4934 */;
import CreatorMonetizationReviewConstants from "CreatorMonetizationReviewConstants" /* 4935 */;
import GuildStore from "GuildStore" /* 4880 */;
import size from "module_2" /* 2 */;

const GuildRoleSubscriptionsStore = GuildRoleSubscriptionsStore2;

const FetchState = GuildRoleSubscriptionsStore2.FetchState;
const constants = CreatorMonetizationReviewConstants.CreatorMonetizationRestrictions;
const GuildFeatures = Constants.GuildFeatures;
const result = size.fileFinishedImporting("modules/creator_monetization_review/CreatorMonetizationRestrictionsUtils.tsx");

export function isRestrictedFromShowingGuildPurchaseEntryPoints(restrictions) {
  const hasItem = null != restrictions && restrictions.includes(constants.NEW_PURCHASES_DISABLED);
  return hasItem;
}
export function shouldHideGuildPurchaseEntryPoints(guildId) {
  if (null == guildId) {
    return false;
  } else {
    let flag;
    const monetizationRestrictionsFetchState = GuildRoleSubscriptionsStore.getMonetizationRestrictionsFetchState(guildId);
    const monetizationRestrictions = GuildRoleSubscriptionsStore.getMonetizationRestrictions(guildId);
    const guild = GuildStore.getGuild(guildId);
    if (monetizationRestrictionsFetchState === FetchState.FETCHED) {
      const hasItem = null != monetizationRestrictions && monetizationRestrictions.includes(constants.NEW_PURCHASES_DISABLED);
      flag = hasItem;
    } else {
      flag = undefined;
      if (guild != null) {
        const features = guild.features;
        flag = features.has(GuildFeatures.CREATOR_MONETIZABLE_RESTRICTED);
      }
      if (flag == null) {
        flag = true;
      }
    }
    return flag;
  }
}
export function isRestrictedFromUpdatingCreatorMonetizationSettings(stateFromStoresArray) {
  const hasItem = null != stateFromStoresArray && stateFromStoresArray.includes(constants.SETTINGS_READ_ONLY);
  return hasItem;
}
export function shouldRestrictUpdatingCreatorMonetizationSettings(id) {
  if (null == id) {
    return false;
  } else {
    let flag;
    const monetizationRestrictionsFetchState = GuildRoleSubscriptionsStore.getMonetizationRestrictionsFetchState(id);
    const monetizationRestrictions = GuildRoleSubscriptionsStore.getMonetizationRestrictions(id);
    const guild = GuildStore.getGuild(id);
    if (monetizationRestrictionsFetchState === FetchState.FETCHED) {
      const hasItem = null != monetizationRestrictions && monetizationRestrictions.includes(constants.SETTINGS_READ_ONLY);
      flag = hasItem;
    } else {
      flag = undefined;
      if (guild != null) {
        const features = guild.features;
        flag = features.has(GuildFeatures.CREATOR_MONETIZABLE_RESTRICTED);
      }
      if (flag == null) {
        flag = true;
      }
    }
    return flag;
  }
}
export function isRestrictedFromMonetizationReapplication(stateFromStoresArray) {
  const hasItem = null != stateFromStoresArray && stateFromStoresArray.includes(constants.REAPPLICATION_DISABLED);
  return hasItem;
}
