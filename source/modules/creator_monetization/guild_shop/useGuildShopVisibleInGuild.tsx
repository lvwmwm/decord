// Module ID: 5643
// Function ID: 48255
// Name: useGuildShopVisibleInGuild
// Dependencies: [653, 5639, 5631, 5644, 5634, 2]
// Exports: isGuildShopVisibleInGuild, useGuildShopVisibleInGuild

// Module 5643 (useGuildShopVisibleInGuild)
import { GuildFeatures } from "ME";

let result = require("computeCanEveryoneInGuildSeeRoleSubscriptions").fileFinishedImporting("modules/creator_monetization/guild_shop/useGuildShopVisibleInGuild.tsx");

export const useGuildShopVisibleInGuild = function useGuildShopVisibleInGuild(id) {
  id = undefined;
  if (null != id) {
    id = id.id;
  }
  const guildEligibleForGuildProducts = require(5639) /* useGuildEligibleForGuildProducts */.useGuildEligibleForGuildProducts(id);
  const obj = require(5639) /* useGuildEligibleForGuildProducts */;
  let id1;
  if (null != id) {
    id1 = id.id;
  }
  const roleSubscriptionsVisibleInGuild = require(5631) /* computeCanEveryoneInGuildSeeRoleSubscriptions */.useRoleSubscriptionsVisibleInGuild(id1);
  const obj2 = require(5631) /* computeCanEveryoneInGuildSeeRoleSubscriptions */;
  const guildShopPreviewVisible = require(5644) /* useGuildShopPreviewVisible */.useGuildShopPreviewVisible(id);
  const obj3 = require(5644) /* useGuildShopPreviewVisible */;
  let id2;
  if (null != id) {
    id2 = id.id;
  }
  const shouldHideGuildPurchaseEntryPoints = require(5634) /* useCreatorMonetizationRestrictions */.useShouldHideGuildPurchaseEntryPoints(id2).shouldHideGuildPurchaseEntryPoints;
  return false;
};
export const isGuildShopVisibleInGuild = function isGuildShopVisibleInGuild(guild, unsafeMutableRoles) {
  let id;
  if (null != guild) {
    id = guild.id;
  }
  const result = require(5639) /* useGuildEligibleForGuildProducts */.isGuildEligibleForGuildProducts(id);
  const obj = require(5639) /* useGuildEligibleForGuildProducts */;
  let id1;
  if (null != guild) {
    id1 = guild.id;
  }
  const result1 = require(5631) /* computeCanEveryoneInGuildSeeRoleSubscriptions */.areRoleSubscriptionsVisibleInGuild(id1, unsafeMutableRoles);
  return false;
};
