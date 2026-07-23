// Module ID: 9752
// Function ID: 75873
// Name: CollectiblesWishlistItemCard
// Dependencies: [31, 6778, 9753, 33, 8669, 566, 8668, 8672, 1876, 8673, 2]
// Exports: default

// Module 9752 (CollectiblesWishlistItemCard)
import result from "result";
import { transformSKUToCollectiblesItem as closure_4 } from "_createForOfIteratorHelperLoose";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/wishlists/native/CollectiblesWishlistItemCard.tsx");

export default function CollectiblesWishlistItemCard(sku) {
  sku = sku.sku;
  let flag = sku.isOwned;
  if (flag === undefined) {
    flag = false;
  }
  const wishlistOwnerId = sku.wishlistOwnerId;
  const size = sku.size;
  let obj = { sku: 0, isOwned: 0, source: 0, wishlistOwnerId: 0, size: 0 };
  Object.setPrototypeOf(null);
  const merged = Object.assign(sku, obj);
  let memo;
  const isProfileFrameGiftingEnabled = sku(size[4]).useIsProfileFrameGiftingEnabled("CollectiblesWishlistItemCard");
  const obj2 = sku(size[4]);
  const items = [_isNativeReflectConstruct];
  const items1 = [sku.id, wishlistOwnerId];
  const stateFromStores = sku(size[5]).useStateFromStores(items, () => {
    let hasSentGiftResult = null != wishlistOwnerId;
    if (hasSentGiftResult) {
      hasSentGiftResult = outer1_5.hasSentGift(sku.id, wishlistOwnerId);
    }
    return hasSentGiftResult;
  }, items1);
  const obj3 = sku(size[5]);
  const items2 = [sku];
  const productNameAndTypeFromSku = sku(size[6]).getProductNameAndTypeFromSku(sku);
  memo = memo.useMemo(() => outer1_4(sku), items2);
  const items3 = [memo, size];
  let type;
  const callback = memo.useCallback(() => {
    let tmp = null;
    if (null != memo) {
      const obj = { collectiblesItemData: memo, size };
      tmp = outer1_6(sku(size[7]).CollectiblesPreview, obj);
    }
    return tmp;
  }, items3);
  if (null != memo) {
    type = memo.type;
  }
  if ("single" === type) {
    if (memo.item.type === sku(size[8]).CollectiblesItemType.PROFILE_FRAME) {
      let tmp12Result = null;
    }
    return tmp12Result;
  }
  obj = { accessibilityLabel: productNameAndTypeFromSku, renderPreview: callback, source: sku.source };
  const obj4 = sku(size[6]);
  const tmp12 = jsx;
  if (!flag) {
    flag = stateFromStores;
  }
  obj.isOwned = flag;
  obj.size = size;
  const merged1 = Object.assign(merged);
  tmp12Result = tmp12(wishlistOwnerId(size[9]), obj);
};
