// Module ID: 6876
// Function ID: 6877
// Name: useGuildShopVisibleInGuild
// Dependencies: [1074, 6872, 6864, 6877, 6867, 2]
// Exports: isGuildShopVisibleInGuild, useGuildShopVisibleInGuild

// Module 6876 (useGuildShopVisibleInGuild)
import Constants from "Constants" /* 1074 */;
import useRoleSubscriptionsVisibleInGuild from "useRoleSubscriptionsVisibleInGuild" /* 6864 */;
import CreatorMonetizationRestrictionsHooks from "CreatorMonetizationRestrictionsHooks" /* 6867 */;
import GuildProductsEligibility from "GuildProductsEligibility" /* 6872 */;
import useGuildShopPreviewVisible from "useGuildShopPreviewVisible" /* 6877 */;
import size from "module_2" /* 2 */;

const GuildFeatures = Constants.GuildFeatures;
let result = size.fileFinishedImporting("modules/creator_monetization/guild_shop/useGuildShopVisibleInGuild.tsx");

export const useGuildShopVisibleInGuild = function useGuildShopVisibleInGuild(id) {
  id = undefined;
  if (id != null) {
    id = id.id;
  }
  const guildEligibleForGuildProducts = GuildProductsEligibility.useGuildEligibleForGuildProducts(id);
  let id1;
  if (id != null) {
    id1 = id.id;
  }
  const roleSubscriptionsVisibleInGuild = useRoleSubscriptionsVisibleInGuild.useRoleSubscriptionsVisibleInGuild(id1);
  const tmpResult = useRoleSubscriptionsVisibleInGuild;
  const guildShopPreviewVisible = useGuildShopPreviewVisible.useGuildShopPreviewVisible(id);
  const tmpResult3 = useGuildShopPreviewVisible;
  let id2;
  if (id != null) {
    id2 = id.id;
  }
  const shouldHideGuildPurchaseEntryPoints = CreatorMonetizationRestrictionsHooks.useShouldHideGuildPurchaseEntryPoints(id2).shouldHideGuildPurchaseEntryPoints;
  return false;
};
export const isGuildShopVisibleInGuild = function isGuildShopVisibleInGuild(id, arg1) {
  id = undefined;
  if (id != null) {
    id = id.id;
  }
  const result = GuildProductsEligibility.isGuildEligibleForGuildProducts(id);
  let id1;
  if (id != null) {
    id1 = id.id;
  }
  const result1 = useRoleSubscriptionsVisibleInGuild.areRoleSubscriptionsVisibleInGuild(id1, arg1);
  return false;
};
