// Module ID: 5640
// Function ID: 48215
// Name: useGuildShopPreviewVisible
// Dependencies: []
// Exports: useGuildShopPreviewVisible

// Module 5640 (useGuildShopPreviewVisible)
let closure_2 = importDefault(dependencyMap[0]);
({ Permissions: closure_3, GuildFeatures: closure_4 } = arg1(dependencyMap[1]));
const tmp2 = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/creator_monetization/guild_shop/useGuildShopPreviewVisible.tsx");

export const useGuildShopPreviewVisible = function useGuildShopPreviewVisible(features) {
  const arg1 = features;
  const result = arg1(dependencyMap[2]).useIsDismissibleContentDismissed_UNSAFE(arg1(dependencyMap[3]).DismissibleContent.SERVER_SHOP_PHANTOM_PREVIEW);
  const obj = arg1(dependencyMap[2]);
  const items = [closure_2];
  let hasItem;
  const stateFromStores = arg1(dependencyMap[4]).useStateFromStores(items, () => {
    let canResult = null != arg0;
    if (canResult) {
      canResult = closure_2.can(constants.ADMINISTRATOR, arg0);
    }
    return canResult;
  });
  if (null != features) {
    features = features.features;
    hasItem = features.has(constants.PRODUCTS_AVAILABLE_FOR_PURCHASE);
  }
  const obj2 = arg1(dependencyMap[4]);
  const tmp5 = null != hasItem && hasItem;
  let id;
  if (null != features) {
    id = features.id;
  }
  const items1 = [, , ];
  ({ CREATOR_MONETIZABLE: arr2[0], CREATOR_MONETIZABLE_PROVISIONAL: arr2[1], ROLE_SUBSCRIPTIONS_ENABLED: arr2[2] } = constants);
  const guildEligibleForGuildProducts = arg1(dependencyMap[5]).useGuildEligibleForGuildProducts(id);
  let tmp9 = null != features;
  const obj3 = arg1(dependencyMap[5]);
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
