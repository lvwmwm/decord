// Module ID: 6763
// Function ID: 6764
// Name: useGuildShopVisibleInGuild
// Dependencies: [1071, 6759, 6751, 6764, 6754, 2]
// Exports: isGuildShopVisibleInGuild, useGuildShopVisibleInGuild

// Module 6763 (useGuildShopVisibleInGuild)
import Constants from "Constants" /* 1071 */;
import useRoleSubscriptionsVisibleInGuild2 from "useRoleSubscriptionsVisibleInGuild" /* 6751 */;
import CreatorMonetizationRestrictionsHooks from "CreatorMonetizationRestrictionsHooks" /* 6754 */;
import GuildProductsEligibility from "GuildProductsEligibility" /* 6759 */;
import useGuildShopPreviewVisible from "useGuildShopPreviewVisible" /* 6764 */;
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
  const areRoleSubscriptionsVisibleInGuild = tmp(6751).areRoleSubscriptionsVisibleInGuild;
  useRoleSubscriptionsVisibleInGuild2;
  if (id != null) {
    id1 = id.id;
  }
  const result1 = areRoleSubscriptionsVisibleInGuild(id1, arg1);
  return false;
}
