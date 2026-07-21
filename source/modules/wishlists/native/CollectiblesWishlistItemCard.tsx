// Module ID: 9744
// Function ID: 75819
// Name: CollectiblesWishlistItemCard
// Dependencies: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
// Exports: default

// Module 9744 (CollectiblesWishlistItemCard)
import closure_3 from "result";
import { transformSKUToCollectiblesItem as closure_4 } from "result";
import closure_5 from "result";
import { jsx } from "result";
import result from "result";

result = result.fileFinishedImporting("modules/wishlists/native/CollectiblesWishlistItemCard.tsx");

export default function CollectiblesWishlistItemCard(sku) {
  sku = sku.sku;
  const arg1 = sku;
  let flag = sku.isOwned;
  if (flag === undefined) {
    flag = false;
  }
  const wishlistOwnerId = sku.wishlistOwnerId;
  const importDefault = wishlistOwnerId;
  const size = sku.size;
  const dependencyMap = size;
  let obj = { duration: null, damping: null, stiffness: null, mass: null, EARN: null };
  Object.setPrototypeOf(null);
  const merged = Object.assign(sku, obj);
  let React;
  const isProfileFrameGiftingEnabled = arg1(dependencyMap[4]).useIsProfileFrameGiftingEnabled("CollectiblesWishlistItemCard");
  const obj2 = arg1(dependencyMap[4]);
  const items = [closure_5];
  const items1 = [sku.id, wishlistOwnerId];
  const stateFromStores = arg1(dependencyMap[5]).useStateFromStores(items, () => {
    let hasSentGiftResult = null != wishlistOwnerId;
    if (hasSentGiftResult) {
      hasSentGiftResult = closure_5.hasSentGift(sku.id, wishlistOwnerId);
    }
    return hasSentGiftResult;
  }, items1);
  const obj3 = arg1(dependencyMap[5]);
  const items2 = [sku];
  const productNameAndTypeFromSku = arg1(dependencyMap[6]).getProductNameAndTypeFromSku(sku);
  const memo = React.useMemo(() => callback(sku), items2);
  React = memo;
  const items3 = [memo, size];
  let type;
  const callback = React.useCallback(() => {
    let tmp = null;
    if (null != memo) {
      const obj = { collectiblesItemData: memo, size };
      tmp = callback2(sku(size[7]).CollectiblesPreview, obj);
    }
    return tmp;
  }, items3);
  if (null != memo) {
    type = memo.type;
  }
  if ("single" === type) {
    if (memo.item.type === arg1(dependencyMap[8]).CollectiblesItemType.PROFILE_FRAME) {
      let tmp12Result = null;
    }
    return tmp12Result;
  }
  obj = { accessibilityLabel: productNameAndTypeFromSku, renderPreview: callback, source: sku.source };
  const obj4 = arg1(dependencyMap[6]);
  const tmp12 = jsx;
  if (!flag) {
    flag = stateFromStores;
  }
  obj.isOwned = flag;
  obj.size = size;
  const merged1 = Object.assign(merged);
  tmp12Result = tmp12(importDefault(dependencyMap[9]), obj);
};
