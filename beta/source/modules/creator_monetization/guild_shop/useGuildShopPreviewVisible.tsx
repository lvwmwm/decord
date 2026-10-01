// Module ID: 6681
// Function ID: 6682
// Name: useGuildShopPreviewVisible
// Dependencies: [4469, 1074, 4654, 2029, 563, 6676, 2]
// Exports: useGuildShopPreviewVisible

// Module 6681 (useGuildShopPreviewVisible)
import PermissionStore from "PermissionStore" /* 4469 */;
import Constants from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let c3;
let closure_4;
({ Permissions: c3, GuildFeatures: closure_4 } = Constants);
let result = size.fileFinishedImporting("modules/creator_monetization/guild_shop/useGuildShopPreviewVisible.tsx");

export const useGuildShopPreviewVisible = function useGuildShopPreviewVisible(features) {
  _require = features;
  const tmp = _require;
  const obj = require("DismissibleContentUnsafeUtils");
  const result = obj.useIsDismissibleContentDismissed_UNSAFE(require("dismissible_content").DismissibleContent.SERVER_SHOP_PHANTOM_PREVIEW);
  const items = [PermissionStore];
  let flag;
  const obj2 = require("useStateFromStores");
  const stateFromStores = obj2.useStateFromStores(items, () => {
    const canResult = null != features && PermissionStore.can(constants.ADMINISTRATOR, tmp);
    return canResult;
  });
  if (features != null) {
    features = features.features;
    flag = features.has(constants2.PRODUCTS_AVAILABLE_FOR_PURCHASE);
  }
  if (flag == null) {
    flag = false;
  }
  let id;
  const useGuildEligibleForGuildProducts = tmp(6676).useGuildEligibleForGuildProducts;
  tmp(6676);
  if (features != null) {
    id = features.id;
  }
  const items1 = [, , ];
  ({ CREATOR_MONETIZABLE: arr2[0], CREATOR_MONETIZABLE_PROVISIONAL: arr2[1], ROLE_SUBSCRIPTIONS_ENABLED: arr2[2] } = constants2);
  const guildEligibleForGuildProducts = useGuildEligibleForGuildProducts(id);
  let tmp10 = null != features;
  const someResult = items1.some((item) => {
    let hasItem;
    if (closure_0 != null) {
      features = tmp.features;
      hasItem = features.has(item);
    }
    return hasItem;
  });
  if (tmp10) {
    tmp10 = stateFromStores;
  }
  if (tmp10) {
    tmp10 = !flag;
  }
  if (tmp10) {
    tmp10 = someResult;
  }
  if (tmp10) {
    tmp10 = guildEligibleForGuildProducts;
  }
  if (tmp10) {
    tmp10 = !result;
  }
  return tmp10;
};
