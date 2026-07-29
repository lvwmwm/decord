// Module ID: 12625
// Function ID: 12626
// Name: useGuildShopPreviewVisible
// Dependencies: [3817, 676, 4005, 1358, 647, 12620, 2]
// Exports: useGuildShopPreviewVisible

// Module 12625 (useGuildShopPreviewVisible)
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import ME from "ME";

let c3;
let c4;
const require = arg1;
({ Permissions: c3, GuildFeatures: c4 } = ME);
let result = require("UNSAFE_isDismissibleContentDismissed").fileFinishedImporting("modules/creator_monetization/guild_shop/useGuildShopPreviewVisible.tsx");

export const useGuildShopPreviewVisible = function useGuildShopPreviewVisible(features) {
  const _require = features;
  const result = _require(4005).useIsDismissibleContentDismissed_UNSAFE(_require(1358).DismissibleContent.SERVER_SHOP_PHANTOM_PREVIEW);
  const obj = _require(4005);
  const tmp = _require;
  const items = [getUncachedChannelPermissions];
  let flag;
  const stateFromStores = _require(647).useStateFromStores(items, () => {
    let canResult = null != closure_0;
    if (canResult) {
      canResult = outer1_2.can(outer1_3.ADMINISTRATOR, tmp);
    }
    return canResult;
  });
  if (features != null) {
    features = features.features;
    flag = features.has(constants.PRODUCTS_AVAILABLE_FOR_PURCHASE);
  }
  if (flag == null) {
    flag = false;
  }
  const obj2 = _require(647);
  let id;
  if (features != null) {
    id = features.id;
  }
  const items1 = [, , ];
  ({ CREATOR_MONETIZABLE: arr2[0], CREATOR_MONETIZABLE_PROVISIONAL: arr2[1], ROLE_SUBSCRIPTIONS_ENABLED: arr2[2] } = constants);
  const guildEligibleForGuildProducts = tmp(12620).useGuildEligibleForGuildProducts(id);
  let tmp9 = null != features;
  const tmpResult = tmp(12620);
  if (tmp9) {
    tmp9 = stateFromStores;
  }
  if (tmp9) {
    tmp9 = !flag;
  }
  if (tmp9) {
    tmp9 = someResult;
  }
  if (tmp9) {
    tmp9 = guildEligibleForGuildProducts;
  }
  if (tmp9) {
    tmp9 = !result;
  }
  return tmp9;
};
