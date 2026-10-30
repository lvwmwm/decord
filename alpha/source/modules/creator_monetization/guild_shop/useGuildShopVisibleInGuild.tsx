// Module ID: 7430
// Function ID: 7431
// Name: useGuildShopVisibleInGuild
// Dependencies: [1072, 7426, 7418, 7431, 7421, 2]
// Exports: isGuildShopVisibleInGuild, useGuildShopVisibleInGuild

// Module 7430 (useGuildShopVisibleInGuild)
import Constants from "Constants" /* 1072 */;
import useRoleSubscriptionsVisibleInGuild2 from "useRoleSubscriptionsVisibleInGuild" /* 7418 */;
import CreatorMonetizationRestrictionsHooks from "CreatorMonetizationRestrictionsHooks" /* 7421 */;
import GuildProductsEligibility from "GuildProductsEligibility" /* 7426 */;
import useGuildShopPreviewVisible from "useGuildShopPreviewVisible" /* 7431 */;
import size from "module_2" /* 2 */;

const GuildFeatures = Constants.GuildFeatures;
let result = size.fileFinishedImporting("modules/creator_monetization/guild_shop/useGuildShopVisibleInGuild.tsx");

export function useGuildShopVisibleInGuild(id) {
  id = undefined;
  const useGuildEligibleForGuildProducts = GuildProductsEligibility.useGuildEligibleForGuildProducts;
  GuildProductsEligibility;
  if (id != null) {
    id = id.id;
  }
  const guildEligibleForGuildProducts = useGuildEligibleForGuildProducts(id);
  let id1;
  const useRoleSubscriptionsVisibleInGuild = useRoleSubscriptionsVisibleInGuild2.useRoleSubscriptionsVisibleInGuild;
  useRoleSubscriptionsVisibleInGuild2;
  if (id != null) {
    id1 = id.id;
  }
  const roleSubscriptionsVisibleInGuild = useRoleSubscriptionsVisibleInGuild(id1);
  const tmpResult3 = useGuildShopPreviewVisible;
  const guildShopPreviewVisible = tmpResult3.useGuildShopPreviewVisible(id);
  let id2;
  const useShouldHideGuildPurchaseEntryPoints = CreatorMonetizationRestrictionsHooks.useShouldHideGuildPurchaseEntryPoints;
  CreatorMonetizationRestrictionsHooks;
  if (id != null) {
    id2 = id.id;
  }
  const shouldHideGuildPurchaseEntryPoints = useShouldHideGuildPurchaseEntryPoints(id2).shouldHideGuildPurchaseEntryPoints;
  return false;
}
export function isGuildShopVisibleInGuild(id, arg1) {
  id = undefined;
  const isGuildEligibleForGuildProducts = GuildProductsEligibility.isGuildEligibleForGuildProducts;
  GuildProductsEligibility;
  if (id != null) {
    id = id.id;
  }
  const result = isGuildEligibleForGuildProducts(id);
  let id1;
  const areRoleSubscriptionsVisibleInGuild = tmp(7418).areRoleSubscriptionsVisibleInGuild;
  useRoleSubscriptionsVisibleInGuild2;
  if (id != null) {
    id1 = id.id;
  }
  const result1 = areRoleSubscriptionsVisibleInGuild(id1, arg1);
  return false;
}
