// Module ID: 11756
// Function ID: 11757
// Name: CollectiblesWishlistItemCard
// Dependencies: [19, 8423, 11757, 21, 504, 9453, 9393, 9394, 2]
// Exports: default

// Module 11756 (CollectiblesWishlistItemCard)
import Fragment from "Fragment" /* 21 */;
import CollectiblesItemRecord from "CollectiblesItemRecord" /* 8423 */;
import SKUPreview from "SKUPreview" /* 9393 */;
import react from "react" /* 19 */;
import SentGiftsStore from "SentGiftsStore" /* 11757 */;
import size_mod from "module_2" /* 2 */;

let closure_4 = CollectiblesItemRecord.transformSKUToCollectiblesItem;
const jsx = Fragment.jsx;
let size = size_mod;
const result = size.fileFinishedImporting("modules/wishlists/native/CollectiblesWishlistItemCard.tsx");

export default function CollectiblesWishlistItemCard(sku) {
  sku = sku.sku;
  let flag = sku.isOwned;
  if (flag === undefined) {
    flag = false;
  }
  const wishlistOwnerId = sku.wishlistOwnerId;
  size = sku.size;
  const source = sku.source;
  const merged = Object.assign(sku, Object.assign({ sku: 0, isOwned: 0, source: 0, wishlistOwnerId: 0, size: 0 }));
  let memo;
  let tmp2 = sku;
  const items = [SentGiftsStore];
  const items1 = [sku.id, wishlistOwnerId];
  const obj = sku(size[4]);
  const stateFromStores = obj.useStateFromStores(items, () => {
    const hasSentGiftResult = null != wishlistOwnerId && SentGiftsStore.hasSentGift(sku.id, tmp);
    return hasSentGiftResult;
  }, items1);
  const items2 = [sku];
  const obj2 = sku(size[5]);
  const productNameAndTypeFromSku = obj2.getProductNameAndTypeFromSku(sku);
  memo = memo.useMemo(() => closure_4(sku), items2);
  const items3 = [memo, size];
  const callback = memo.useCallback(() => {
    let tmp2 = null;
    if (null != memo) {
      tmp2 = jsx(SKUPreview.CollectiblesPreview, { collectiblesItemData: tmp, size });
    }
    return tmp2;
  }, items3);
  const obj3 = { accessibilityLabel: productNameAndTypeFromSku, renderPreview: callback, source, size };
  const tmp9 = wishlistOwnerId(size[7]);
  const merged1 = Object.assign(merged);
  const tmp3 = size;
  const tmp8 = jsx;
  if (!flag) {
    let OWNED;
    if (!stateFromStores) {
      OWNED = merged.overlay;
    }
    obj3.overlay = OWNED;
    return tmp8(tmp9, obj3);
  }
  OWNED = tmp2(tmp3[7]).WishlistItemCardOverlay.OWNED;
};
