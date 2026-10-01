// Module ID: 10503
// Function ID: 10504
// Name: SocialLayerStorefrontWishlistItemCard
// Dependencies: [19, 5063, 10501, 21, 4836, 576, 504, 8288, 5899, 8235, 2]
// Exports: default

// Module 10503 (SocialLayerStorefrontWishlistItemCard)
import nativeDefault from "native" /* 576 */;
import SlayerStorefrontItemCardDefault from "SlayerStorefrontItemCard" /* 8288 */;
import react from "react" /* 19 */;
import ApplicationStore from "ApplicationStore" /* 5063 */;
import SentGiftsStore from "SentGiftsStore" /* 10501 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let size;
let tmp4;
const FastImageDefault = tmp4(5899);
({ jsx: metroRequire, Fragment: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { applicationIcon: size, nestedCard: obj2 };
size = { position: "absolute", top: nativeDefault.space.PX_8, left: nativeDefault.space.PX_8, width: 24, height: 24, borderRadius: nativeDefault.radii.sm, zIndex: 1 };
createStyles = createStyles.createStyles;
obj2 = { shadowColor: "Array", shadowOffset: { width: 0, height: 0 }, shadowOpacity: 0, shadowRadius: 0, elevation: "visible", overflow: null, borderRadius: nativeDefault.radii.none };
let closure_9 = createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/wishlists/native/SocialLayerStorefrontWishlistItemCard.tsx");

export default function SocialLayerStorefrontWishlistItemCard(sku) {
  sku = sku.sku;
  let flag = sku.isOwned;
  if (flag === undefined) {
    flag = false;
  }
  const wishlistOwnerId = sku.wishlistOwnerId;
  size = sku.size;
  const source = sku.source;
  const merged = Object.assign(sku, Object.assign({ sku: 0, isOwned: 0, source: 0, wishlistOwnerId: 0, size: 0 }));
  let stateFromStores1;
  let memo;
  let tmp2 = sku;
  let tmp3 = size;
  let obj = sku(size[6]);
  const items = [memo];
  const items1 = [sku.id, wishlistOwnerId];
  const applicationId = sku.applicationId;
  const stateFromStores = obj.useStateFromStores(items, () => {
    const hasSentGiftResult = null != wishlistOwnerId && SentGiftsStore.hasSentGift(sku.id, tmp);
    return hasSentGiftResult;
  }, items1);
  let obj2 = sku(size[6]);
  const items2 = [stateFromStores1];
  const items3 = [applicationId];
  stateFromStores1 = obj2.useStateFromStores(items2, () => {
    let application = null;
    if (null != applicationId) {
      application = ApplicationStore.getApplication(tmp);
    }
    return application;
  }, items3);
  const items4 = [stateFromStores1];
  memo = applicationId.useMemo(() => {
    let iconSource;
    const obj = stateFromStores1;
    if (stateFromStores1 != null) {
      iconSource = obj.getIconSource(24);
    }
    return iconSource;
  }, items4);
  const tmp7 = closure_9();
  const nestedCard = tmp7;
  const items5 = [sku, size, memo, , ];
  ({ applicationIcon: arr6[3], nestedCard: arr6[4] } = tmp7);
  const callback = applicationId.useCallback(() => {
    const children = [, ];
    const obj = { sku, size, containerStyle: nestedCard.nestedCard };
    children[0] = metroRequire(SlayerStorefrontItemCardDefault, obj);
    let tmp3Result = null != memo;
    const tmp = metroImportAll;
    const tmp2 = metroImportDefault;
    const tmp3 = metroRequire;
    const tmp6 = nestedCard;
    if (tmp3Result) {
      const obj2 = { source: tmp7, style: tmp6.applicationIcon };
      tmp3Result = tmp3(FastImageDefault, obj2);
    }
    children[1] = tmp3Result;
    return tmp(tmp2, { children });
  }, items5);
  const obj3 = { accessibilityLabel: sku.name, renderPreview: callback, source, size };
  const tmp10 = wishlistOwnerId(size[9]);
  const merged1 = Object.assign(merged);
  const tmp9 = nestedCard;
  if (!flag) {
    let OWNED;
    if (!stateFromStores) {
      OWNED = merged.overlay;
    }
    obj3.overlay = OWNED;
    return tmp9(tmp10, obj3);
  }
  OWNED = tmp2(tmp3[9]).WishlistItemCardOverlay.OWNED;
};
