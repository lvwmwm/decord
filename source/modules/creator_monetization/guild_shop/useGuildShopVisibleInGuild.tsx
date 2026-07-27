// Module ID: 12559
// Function ID: 97272
// Name: useGuildShopVisibleInGuild
// Dependencies: [653, 12555, 12549, 12560, 12551, 2]
// Exports: isGuildShopVisibleInGuild, useGuildShopVisibleInGuild

// Module 12559 (useGuildShopVisibleInGuild)
import { GuildFeatures } from "ME";

let result = require("computeCanEveryoneInGuildSeeRoleSubscriptions").fileFinishedImporting("modules/creator_monetization/guild_shop/useGuildShopVisibleInGuild.tsx");

export const useGuildShopVisibleInGuild = function useGuildShopVisibleInGuild(id) {
  id = undefined;
  if (null != id) {
    id = id.id;
  }
  const guildEligibleForGuildProducts = require(12555) /* useGuildEligibleForGuildProducts */.useGuildEligibleForGuildProducts(id);
  const obj = require(12555) /* useGuildEligibleForGuildProducts */;
  let id1;
  if (null != id) {
    id1 = id.id;
  }
  const roleSubscriptionsVisibleInGuild = require(12549) /* computeCanEveryoneInGuildSeeRoleSubscriptions */.useRoleSubscriptionsVisibleInGuild(id1);
  const obj2 = require(12549) /* computeCanEveryoneInGuildSeeRoleSubscriptions */;
  const guildShopPreviewVisible = require(12560) /* useGuildShopPreviewVisible */.useGuildShopPreviewVisible(id);
  const obj3 = require(12560) /* useGuildShopPreviewVisible */;
  let id2;
  if (null != id) {
    id2 = id.id;
  }
  const shouldHideGuildPurchaseEntryPoints = require(12551) /* useCreatorMonetizationRestrictions */.useShouldHideGuildPurchaseEntryPoints(id2).shouldHideGuildPurchaseEntryPoints;
  return false;
};
export const isGuildShopVisibleInGuild = function isGuildShopVisibleInGuild(guild, unsafeMutableRoles) {
  let id;
  if (null != guild) {
    id = guild.id;
  }
  const result = require(12555) /* useGuildEligibleForGuildProducts */.isGuildEligibleForGuildProducts(id);
  const obj = require(12555) /* useGuildEligibleForGuildProducts */;
  let id1;
  if (null != guild) {
    id1 = guild.id;
  }
  const result1 = require(12549) /* computeCanEveryoneInGuildSeeRoleSubscriptions */.areRoleSubscriptionsVisibleInGuild(id1, unsafeMutableRoles);
  return false;
};
