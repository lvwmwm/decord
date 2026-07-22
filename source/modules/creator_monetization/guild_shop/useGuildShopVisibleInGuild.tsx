// Module ID: 5638
// Function ID: 48228
// Name: useGuildShopVisibleInGuild
// Dependencies: []
// Exports: isGuildShopVisibleInGuild, useGuildShopVisibleInGuild

// Module 5638 (useGuildShopVisibleInGuild)
const GuildFeatures = require(dependencyMap[0]).GuildFeatures;
const _module = require(dependencyMap[5]);
const result = _module.fileFinishedImporting("modules/creator_monetization/guild_shop/useGuildShopVisibleInGuild.tsx");

export const useGuildShopVisibleInGuild = function useGuildShopVisibleInGuild(id) {
  id = undefined;
  if (null != id) {
    id = id.id;
  }
  const guildEligibleForGuildProducts = require(dependencyMap[1]).useGuildEligibleForGuildProducts(id);
  const obj = require(dependencyMap[1]);
  let id1;
  if (null != id) {
    id1 = id.id;
  }
  const roleSubscriptionsVisibleInGuild = require(dependencyMap[2]).useRoleSubscriptionsVisibleInGuild(id1);
  const obj2 = require(dependencyMap[2]);
  const guildShopPreviewVisible = require(dependencyMap[3]).useGuildShopPreviewVisible(id);
  const obj3 = require(dependencyMap[3]);
  let id2;
  if (null != id) {
    id2 = id.id;
  }
  const shouldHideGuildPurchaseEntryPoints = require(dependencyMap[4]).useShouldHideGuildPurchaseEntryPoints(id2).shouldHideGuildPurchaseEntryPoints;
  return false;
};
export const isGuildShopVisibleInGuild = function isGuildShopVisibleInGuild(guild, unsafeMutableRoles) {
  let id;
  if (null != guild) {
    id = guild.id;
  }
  const result = require(dependencyMap[1]).isGuildEligibleForGuildProducts(id);
  const obj = require(dependencyMap[1]);
  let id1;
  if (null != guild) {
    id1 = guild.id;
  }
  const result1 = require(dependencyMap[2]).areRoleSubscriptionsVisibleInGuild(id1, unsafeMutableRoles);
  return false;
};
