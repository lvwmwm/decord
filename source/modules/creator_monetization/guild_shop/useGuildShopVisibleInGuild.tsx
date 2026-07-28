// Module ID: 12602
// Function ID: 97442
// Name: useGuildShopVisibleInGuild
// Dependencies: [653, 12598, 12592, 12603, 12594, 2]
// Exports: isGuildShopVisibleInGuild, useGuildShopVisibleInGuild

// Module 12602 (useGuildShopVisibleInGuild)
import { GuildFeatures } from "ME";

let result = require("computeCanEveryoneInGuildSeeRoleSubscriptions").fileFinishedImporting("modules/creator_monetization/guild_shop/useGuildShopVisibleInGuild.tsx");

export const useGuildShopVisibleInGuild = function useGuildShopVisibleInGuild(id) {
  id = undefined;
  if (null != id) {
    id = id.id;
  }
  const guildEligibleForGuildProducts = require(12598) /* useGuildEligibleForGuildProducts */.useGuildEligibleForGuildProducts(id);
  const obj = require(12598) /* useGuildEligibleForGuildProducts */;
  let id1;
  if (null != id) {
    id1 = id.id;
  }
  const roleSubscriptionsVisibleInGuild = require(12592) /* computeCanEveryoneInGuildSeeRoleSubscriptions */.useRoleSubscriptionsVisibleInGuild(id1);
  const obj2 = require(12592) /* computeCanEveryoneInGuildSeeRoleSubscriptions */;
  const guildShopPreviewVisible = require(12603) /* useGuildShopPreviewVisible */.useGuildShopPreviewVisible(id);
  const obj3 = require(12603) /* useGuildShopPreviewVisible */;
  let id2;
  if (null != id) {
    id2 = id.id;
  }
  const shouldHideGuildPurchaseEntryPoints = require(12594) /* useCreatorMonetizationRestrictions */.useShouldHideGuildPurchaseEntryPoints(id2).shouldHideGuildPurchaseEntryPoints;
  return false;
};
export const isGuildShopVisibleInGuild = function isGuildShopVisibleInGuild(guild, unsafeMutableRoles) {
  let id;
  if (null != guild) {
    id = guild.id;
  }
  const result = require(12598) /* useGuildEligibleForGuildProducts */.isGuildEligibleForGuildProducts(id);
  const obj = require(12598) /* useGuildEligibleForGuildProducts */;
  let id1;
  if (null != guild) {
    id1 = guild.id;
  }
  const result1 = require(12592) /* computeCanEveryoneInGuildSeeRoleSubscriptions */.areRoleSubscriptionsVisibleInGuild(id1, unsafeMutableRoles);
  return false;
};
