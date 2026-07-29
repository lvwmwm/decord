// Module ID: 12624
// Function ID: 12625
// Name: useGuildShopVisibleInGuild
// Dependencies: [676, 12620, 12614, 12625, 12616, 2]
// Exports: isGuildShopVisibleInGuild, useGuildShopVisibleInGuild

// Module 12624 (useGuildShopVisibleInGuild)
import { GuildFeatures } from "ME";

let result = require("computeCanEveryoneInGuildSeeRoleSubscriptions").fileFinishedImporting("modules/creator_monetization/guild_shop/useGuildShopVisibleInGuild.tsx");

export const useGuildShopVisibleInGuild = function useGuildShopVisibleInGuild(id) {
  id = undefined;
  if (id != null) {
    id = id.id;
  }
  const guildEligibleForGuildProducts = require(12620) /* useGuildEligibleForGuildProducts */.useGuildEligibleForGuildProducts(id);
  let tmpResult = tmp(12614);
  let id1;
  if (id != null) {
    id1 = id.id;
  }
  const roleSubscriptionsVisibleInGuild = tmpResult.useRoleSubscriptionsVisibleInGuild(id1);
  tmpResult = tmp(12625);
  const guildShopPreviewVisible = tmpResult.useGuildShopPreviewVisible(id);
  const obj = require(12620) /* useGuildEligibleForGuildProducts */;
  let id2;
  if (id != null) {
    id2 = id.id;
  }
  const shouldHideGuildPurchaseEntryPoints = require(12616) /* useShouldHideGuildPurchaseEntryPoints */.useShouldHideGuildPurchaseEntryPoints(id2).shouldHideGuildPurchaseEntryPoints;
  return false;
};
export const isGuildShopVisibleInGuild = function isGuildShopVisibleInGuild(closure_2, closure_3) {
  let id;
  if (closure_2 != null) {
    id = closure_2.id;
  }
  const result = require(12620) /* useGuildEligibleForGuildProducts */.isGuildEligibleForGuildProducts(id);
  const obj = require(12620) /* useGuildEligibleForGuildProducts */;
  const tmp = require;
  let id1;
  if (closure_2 != null) {
    id1 = closure_2.id;
  }
  const result1 = require(12614) /* computeCanEveryoneInGuildSeeRoleSubscriptions */.areRoleSubscriptionsVisibleInGuild(id1, closure_3);
  return false;
};
