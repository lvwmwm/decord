// Module ID: 12558
// Function ID: 97267
// Name: useGuildShopVisibleInGuild
// Dependencies: [653, 12554, 12548, 12559, 12550, 2]
// Exports: isGuildShopVisibleInGuild, useGuildShopVisibleInGuild

// Module 12558 (useGuildShopVisibleInGuild)
import { GuildFeatures } from "ME";

let result = require("computeCanEveryoneInGuildSeeRoleSubscriptions").fileFinishedImporting("modules/creator_monetization/guild_shop/useGuildShopVisibleInGuild.tsx");

export const useGuildShopVisibleInGuild = function useGuildShopVisibleInGuild(id) {
  id = undefined;
  if (null != id) {
    id = id.id;
  }
  const guildEligibleForGuildProducts = require(12554) /* useGuildEligibleForGuildProducts */.useGuildEligibleForGuildProducts(id);
  const obj = require(12554) /* useGuildEligibleForGuildProducts */;
  let id1;
  if (null != id) {
    id1 = id.id;
  }
  const roleSubscriptionsVisibleInGuild = require(12548) /* computeCanEveryoneInGuildSeeRoleSubscriptions */.useRoleSubscriptionsVisibleInGuild(id1);
  const obj2 = require(12548) /* computeCanEveryoneInGuildSeeRoleSubscriptions */;
  const guildShopPreviewVisible = require(12559) /* useGuildShopPreviewVisible */.useGuildShopPreviewVisible(id);
  const obj3 = require(12559) /* useGuildShopPreviewVisible */;
  let id2;
  if (null != id) {
    id2 = id.id;
  }
  const shouldHideGuildPurchaseEntryPoints = require(12550) /* useCreatorMonetizationRestrictions */.useShouldHideGuildPurchaseEntryPoints(id2).shouldHideGuildPurchaseEntryPoints;
  return false;
};
export const isGuildShopVisibleInGuild = function isGuildShopVisibleInGuild(guild, unsafeMutableRoles) {
  let id;
  if (null != guild) {
    id = guild.id;
  }
  const result = require(12554) /* useGuildEligibleForGuildProducts */.isGuildEligibleForGuildProducts(id);
  const obj = require(12554) /* useGuildEligibleForGuildProducts */;
  let id1;
  if (null != guild) {
    id1 = guild.id;
  }
  const result1 = require(12548) /* computeCanEveryoneInGuildSeeRoleSubscriptions */.areRoleSubscriptionsVisibleInGuild(id1, unsafeMutableRoles);
  return false;
};
