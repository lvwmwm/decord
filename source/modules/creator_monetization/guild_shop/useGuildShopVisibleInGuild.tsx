// Module ID: 5803
// Function ID: 5804
// Name: useGuildShopVisibleInGuild
// Dependencies: [676, 5799, 5791, 5804, 5794, 2]
// Exports: isGuildShopVisibleInGuild, useGuildShopVisibleInGuild

// Module 5803 (useGuildShopVisibleInGuild)
import { GuildFeatures } from "ME";

let result = require("computeCanEveryoneInGuildSeeRoleSubscriptions").fileFinishedImporting("modules/creator_monetization/guild_shop/useGuildShopVisibleInGuild.tsx");

export const useGuildShopVisibleInGuild = function useGuildShopVisibleInGuild(id) {
  id = undefined;
  if (id != null) {
    id = id.id;
  }
  const guildEligibleForGuildProducts = require(5799) /* useGuildEligibleForGuildProducts */.useGuildEligibleForGuildProducts(id);
  let tmpResult = tmp(5791);
  let id1;
  if (id != null) {
    id1 = id.id;
  }
  const roleSubscriptionsVisibleInGuild = tmpResult.useRoleSubscriptionsVisibleInGuild(id1);
  tmpResult = tmp(5804);
  const guildShopPreviewVisible = tmpResult.useGuildShopPreviewVisible(id);
  const obj = require(5799) /* useGuildEligibleForGuildProducts */;
  let id2;
  if (id != null) {
    id2 = id.id;
  }
  const shouldHideGuildPurchaseEntryPoints = require(5794) /* useShouldHideGuildPurchaseEntryPoints */.useShouldHideGuildPurchaseEntryPoints(id2).shouldHideGuildPurchaseEntryPoints;
  return false;
};
export const isGuildShopVisibleInGuild = function isGuildShopVisibleInGuild(closure_2, closure_3) {
  let id;
  if (closure_2 != null) {
    id = closure_2.id;
  }
  const result = require(5799) /* useGuildEligibleForGuildProducts */.isGuildEligibleForGuildProducts(id);
  const obj = require(5799) /* useGuildEligibleForGuildProducts */;
  const tmp = require;
  let id1;
  if (closure_2 != null) {
    id1 = closure_2.id;
  }
  const result1 = require(5791) /* computeCanEveryoneInGuildSeeRoleSubscriptions */.areRoleSubscriptionsVisibleInGuild(id1, closure_3);
  return false;
};
