// Module ID: 7538
// Function ID: 7539
// Name: useGuildShopVisibleInGuild
// Dependencies: [1078, 558, 568, 7534, 7526, 7539, 7529, 2]
// Exports: isGuildShopVisibleInGuild

// Module 7538 (useGuildShopVisibleInGuild)
import c from "c" /* 568 */;
import Constants from "Constants" /* 1078 */;
import useRoleSubscriptionsVisibleInGuild from "useRoleSubscriptionsVisibleInGuild" /* 7526 */;
import CreatorMonetizationRestrictionsHooks from "CreatorMonetizationRestrictionsHooks" /* 7529 */;
import GuildProductsEligibility from "GuildProductsEligibility" /* 7534 */;
import useGuildShopPreviewVisible from "useGuildShopPreviewVisible" /* 7539 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const GuildFeatures = Constants.GuildFeatures;
let result = size.fileFinishedImporting("modules/creator_monetization/guild_shop/useGuildShopVisibleInGuild.tsx");

export const useGuildShopVisibleInGuild = ReactCompilerGating.isReactCompilerEnabled() ? ((id) => {
  c.c(5);
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
}) : ((id) => {
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
});
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
