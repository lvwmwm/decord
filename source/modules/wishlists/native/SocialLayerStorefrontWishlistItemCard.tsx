// Module ID: 9789
// Function ID: 76106
// Name: SocialLayerStorefrontWishlistItemCard
// Dependencies: [31, 4167, 9787, 33, 4130, 689, 566, 8256, 5085, 8714, 2]
// Exports: default

// Module 9789 (SocialLayerStorefrontWishlistItemCard)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_6;
let closure_7;
let closure_8;
const require = arg1;
({ jsx: closure_6, Fragment: closure_7, jsxs: closure_8 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { position: "absolute", top: require("_createForOfIteratorHelperLoose").space.PX_8, left: require("_createForOfIteratorHelperLoose").space.PX_8, width: 24, height: 24, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, zIndex: 1 };
_createForOfIteratorHelperLoose.applicationIcon = _createForOfIteratorHelperLoose;
const obj1 = { shadowColor: undefined, shadowOffset: { width: 0, height: 0 }, shadowOpacity: 0, shadowRadius: 0, elevation: 0, overflow: "visible", borderRadius: require("_createForOfIteratorHelperLoose").radii.none };
_createForOfIteratorHelperLoose.nestedCard = obj1;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/wishlists/native/SocialLayerStorefrontWishlistItemCard.tsx");

export default function SocialLayerStorefrontWishlistItemCard(sku) {
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
  let applicationId;
  let stateFromStores1;
  let memo;
  let c6;
  let items = [memo];
  const items1 = [sku.id, wishlistOwnerId];
  applicationId = sku.applicationId;
  const stateFromStores = sku(size[6]).useStateFromStores(items, () => {
    let hasSentGiftResult = null != wishlistOwnerId;
    if (hasSentGiftResult) {
      hasSentGiftResult = memo.hasSentGift(sku.id, wishlistOwnerId);
    }
    return hasSentGiftResult;
  }, items1);
  const obj2 = sku(size[6]);
  const items2 = [stateFromStores1];
  const items3 = [applicationId];
  stateFromStores1 = sku(size[6]).useStateFromStores(items2, () => {
    let application = null;
    if (null != applicationId) {
      application = stateFromStores1.getApplication(applicationId);
    }
    return application;
  }, items3);
  const items4 = [stateFromStores1];
  memo = applicationId.useMemo(() => {
    let iconSource;
    if (null != stateFromStores1) {
      iconSource = stateFromStores1.getIconSource(24);
    }
    return iconSource;
  }, items4);
  const tmp6 = _createForOfIteratorHelperLoose();
  c6 = tmp6;
  const items5 = [sku, size, memo, , ];
  ({ applicationIcon: arr6[3], nestedCard: arr6[4] } = tmp6);
  const callback = applicationId.useCallback(() => {
    let obj = {};
    obj = { sku, size, containerStyle: _undefined.nestedCard };
    const items = [_undefined(wishlistOwnerId(size[7]), obj), ];
    let tmp3 = null != memo;
    if (tmp3) {
      obj = { source: memo, style: _undefined.applicationIcon };
      tmp3 = _undefined(wishlistOwnerId(size[8]), obj);
    }
    items[1] = tmp3;
    obj.children = items;
    return outer1_8(outer1_7, obj);
  }, items5);
  obj = { accessibilityLabel: sku.name, renderPreview: callback, source: sku.source };
  const obj3 = sku(size[6]);
  const tmp8 = c6;
  if (!flag) {
    flag = stateFromStores;
  }
  obj.isOwned = flag;
  obj.size = size;
  const merged1 = Object.assign(merged);
  return tmp8(wishlistOwnerId(size[9]), obj);
};
