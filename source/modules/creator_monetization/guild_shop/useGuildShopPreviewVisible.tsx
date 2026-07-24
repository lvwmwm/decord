// Module ID: 5644
// Function ID: 48268
// Name: useGuildShopPreviewVisible
// Dependencies: [3758, 653, 3946, 1334, 624, 5639, 2]
// Exports: useGuildShopPreviewVisible

// Module 5644 (useGuildShopPreviewVisible)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import ME from "ME";

let closure_3;
let closure_4;
const require = arg1;
({ Permissions: closure_3, GuildFeatures: closure_4 } = ME);
let result = require("UNSAFE_isDismissibleContentDismissed").fileFinishedImporting("modules/creator_monetization/guild_shop/useGuildShopPreviewVisible.tsx");

export const useGuildShopPreviewVisible = function useGuildShopPreviewVisible(features) {
  const _require = features;
  const result = _require(3946).useIsDismissibleContentDismissed_UNSAFE(_require(1334).DismissibleContent.SERVER_SHOP_PHANTOM_PREVIEW);
  const obj = _require(3946);
  const items = [_isNativeReflectConstruct];
  let hasItem;
  const stateFromStores = _require(624).useStateFromStores(items, () => {
    let canResult = null != closure_0;
    if (canResult) {
      canResult = outer1_2.can(outer1_3.ADMINISTRATOR, closure_0);
    }
    return canResult;
  });
  if (null != features) {
    features = features.features;
    hasItem = features.has(constants.PRODUCTS_AVAILABLE_FOR_PURCHASE);
  }
  const obj2 = _require(624);
  const tmp5 = null != hasItem && hasItem;
  let id;
  if (null != features) {
    id = features.id;
  }
  const items1 = [, , ];
  ({ CREATOR_MONETIZABLE: arr2[0], CREATOR_MONETIZABLE_PROVISIONAL: arr2[1], ROLE_SUBSCRIPTIONS_ENABLED: arr2[2] } = constants);
  const guildEligibleForGuildProducts = _require(5639).useGuildEligibleForGuildProducts(id);
  let tmp9 = null != features;
  const obj3 = _require(5639);
  if (tmp9) {
    tmp9 = stateFromStores;
  }
  if (tmp9) {
    tmp9 = !tmp5;
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
