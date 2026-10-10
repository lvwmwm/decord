// Module ID: 12731
// Function ID: 12732
// Name: SocialLayerStorefrontWishlistItemCard
// Dependencies: [109, 19, 5440, 12729, 21, 5092, 587, 558, 576, 504, 9028, 6156, 8976, 2]

// Module 12731 (SocialLayerStorefrontWishlistItemCard)
import nativeDefault from "native" /* 587 */;
import WishlistItemCardBaseDefault from "WishlistItemCardBase" /* 8976 */;
import SlayerStorefrontItemCardDefault from "SlayerStorefrontItemCard" /* 9028 */;
import _objectWithoutProperties_mod from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import ApplicationStore from "ApplicationStore" /* 5440 */;
import SentGiftsStore from "SentGiftsStore" /* 12729 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5092 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, importDefault;

let c10;
let c9;
let metroImportAll;
let obj2;
let size;
let tmp4;
const FastImageDefault = tmp4(6156);
let closure_3 = ["sku", "isOwned", "source", "wishlistOwnerId", "size"];
let _objectWithoutProperties = _objectWithoutProperties_mod;
({ jsx: metroImportAll, Fragment: c9, jsxs: c10 } = Fragment);
let createStyles = createStyles_mod;
let obj = { applicationIcon: size, nestedCard: obj2 };
size = { position: "absolute", top: nativeDefault.space.PX_8, left: nativeDefault.space.PX_8, width: 24, height: 24, borderRadius: nativeDefault.radii.sm, zIndex: 1 };
createStyles = createStyles.createStyles;
obj2 = { shadowColor: "Array", shadowOffset: { width: 0, height: 0 }, shadowOpacity: 0, shadowRadius: 0, elevation: "visible", overflow: null, borderRadius: nativeDefault.radii.none };
let closure_11 = createStyles(obj);
tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function SocialLayerStorefrontWishlistItemCard(sku) {
  let applicationId;
  let closure_2;
  let closure_4;
  let isOwned;
  let nestedCard;
  let source;
  let tmp14;
  let tmp4;
  let tmp6;
  let tmp7;
  let tmp8;
  let wishlistOwnerId;
  let tmp = _require;
  let tmp2 = dependencyMap;
  let obj = require("react");
  const cResult = obj.c(31);
  if (cResult[0] !== sku) {
    sku = sku.sku;
    importDefault = sku;
    ({ isOwned, source, wishlistOwnerId } = sku);
    dependencyMap = wishlistOwnerId;
    size = sku.size;
    _require = size;
    const tmp12 = _objectWithoutProperties(sku, applicationId);
    cResult[0] = sku;
    cResult[1] = tmp12;
    class O {
      constructor() {
        const hasSentGiftResult = null != closure_2 && SentGiftsStore.hasSentGift(sku.id, tmp);
        return hasSentGiftResult;
      }
    }
    cResult[2] = size;
    cResult[3] = sku;
    cResult[4] = source;
    cResult[5] = isOwned;
    cResult[6] = wishlistOwnerId;
    tmp8 = isOwned;
    tmp7 = source;
    tmp6 = sku;
    tmp4 = tmp12;
  } else {
    tmp4 = cResult[1];
    _require = cResult[2];
    importDefault = cResult[3];
    tmp7 = cResult[4];
    tmp8 = cResult[5];
    dependencyMap = cResult[6];
  }
  const tmp13 = undefined !== tmp8 && tmp8;
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [SentGiftsStore];
    cResult[7] = items;
    tmp14 = items;
  } else {
    tmp14 = cResult[7];
  }
  if (cResult[8] === tmp6.id) {
    let tmp16;
    let tmp17;
    let tmp19;
    let tmp22;
    let tmp21;
    let tmp23;
    if (cResult[9] === tmp9) {
      tmp16 = cResult[10];
      tmp17 = cResult[11];
    }
    applicationId = tmp6.applicationId;
    const _Symbol = Symbol;
    const tmpResult = tmp(504);
    const stateFromStores = tmpResult.useStateFromStores(tmp14, tmp16, tmp17);
    if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
      const items1 = [ApplicationStore];
      cResult[12] = items1;
      tmp19 = items1;
    } else {
      tmp19 = cResult[12];
    }
    if (cResult[13] !== applicationId) {
      const fn = function k() {
        let application = null;
        if (null != applicationId) {
          application = ApplicationStore.getApplication(tmp);
        }
        return application;
      };
      const items2 = [applicationId];
      cResult[13] = applicationId;
      cResult[14] = fn;
      cResult[15] = items2;
      tmp22 = items2;
      tmp21 = fn;
    } else {
      tmp21 = cResult[14];
      tmp22 = cResult[15];
    }
    const tmpResult2 = tmp(504);
    const stateFromStores1 = tmpResult2.useStateFromStores(tmp19, tmp21, tmp22);
    if (cResult[16] !== stateFromStores1) {
      let iconSource;
      if (stateFromStores1 != null) {
        iconSource = stateFromStores1.getIconSource(24);
      }
      cResult[16] = stateFromStores1;
      cResult[17] = iconSource;
      tmp23 = iconSource;
    } else {
      tmp23 = cResult[17];
    }
    _objectWithoutProperties = tmp23;
    const tmp27 = closure_11();
    class O {
      constructor() {
        const hasSentGiftResult = null != closure_2 && SentGiftsStore.hasSentGift(sku.id, tmp);
        return hasSentGiftResult;
      }
    }
    if (cResult[18] === tmp23) {
      if (cResult[19] === tmp5) {
        if (cResult[20] === tmp6) {
          if (cResult[21] === tmp27.applicationIcon) {
            let tmp28;
            if (cResult[22] === tmp27.nestedCard) {
              tmp28 = cResult[23];
            }
            if (!tmp13) {
              let OWNED;
              if (!stateFromStores) {
                OWNED = tmp4.overlay;
              }
              if (cResult[24] === tmp4) {
                if (cResult[25] === tmp28) {
                  if (cResult[26] === tmp5) {
                    if (cResult[27] === tmp6.name) {
                      if (cResult[28] === tmp7) {
                        let tmp29;
                        if (cResult[29] === OWNED) {
                          tmp29 = cResult[30];
                        }
                        return tmp29;
                      }
                    }
                  }
                }
              }
              let obj2 = { accessibilityLabel: tmp6.name, renderPreview: tmp28, source: tmp7, size: tmp5, overlay: OWNED };
              const tmp32 = WishlistItemCardBaseDefault;
              const merged = Object.assign(tmp4);
              const tmp36 = closure_8(tmp32, obj2);
              class O {
                constructor() {
                  const hasSentGiftResult = null != closure_2 && SentGiftsStore.hasSentGift(sku.id, tmp);
                  return hasSentGiftResult;
                }
              }
              cResult[24] = tmp4;
              cResult[25] = tmp28;
              cResult[26] = tmp5;
              cResult[27] = tmp6.name;
              cResult[28] = tmp7;
              cResult[29] = OWNED;
              cResult[30] = tmp36;
              tmp29 = tmp36;
            }
            OWNED = tmp(8976).WishlistItemCardOverlay.OWNED;
          }
        }
      }
    }
    const fn2 = function j() {
      const children = [, ];
      const obj = { sku, size, containerStyle: nestedCard.nestedCard };
      children[0] = metroImportAll(SlayerStorefrontItemCardDefault, obj);
      let tmp3Result = null != closure_4;
      const tmp = authStore;
      const tmp2 = React4;
      const tmp3 = metroImportAll;
      const tmp6 = nestedCard;
      if (tmp3Result) {
        const obj2 = { source: tmp7, style: tmp6.applicationIcon };
        tmp3Result = tmp3(FastImageDefault, obj2);
      }
      children[1] = tmp3Result;
      return tmp(tmp2, { children });
    };
    cResult[18] = tmp23;
    cResult[19] = tmp5;
    cResult[20] = tmp6;
    cResult[21] = tmp27.applicationIcon;
    cResult[22] = tmp27.nestedCard;
    cResult[23] = fn2;
    tmp28 = fn2;
  }
  class O {
    constructor() {
      const hasSentGiftResult = null != closure_2 && SentGiftsStore.hasSentGift(sku.id, tmp);
      return hasSentGiftResult;
    }
  }
  const items3 = [tmp6.id, tmp9];
  cResult[8] = tmp6.id;
  cResult[9] = tmp9;
  cResult[10] = O;
  cResult[11] = items3;
  tmp17 = items3;
  tmp16 = O;
}) : (function SocialLayerStorefrontWishlistItemCard(sku) {
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
  let nestedCard;
  let tmp2 = sku;
  let tmp3 = size;
  let obj = sku(size[9]);
  const items = [SentGiftsStore];
  const items1 = [sku.id, wishlistOwnerId];
  const applicationId = sku.applicationId;
  const stateFromStores = obj.useStateFromStores(items, () => {
    const hasSentGiftResult = null != wishlistOwnerId && SentGiftsStore.hasSentGift(sku.id, tmp);
    return hasSentGiftResult;
  }, items1);
  let obj2 = sku(size[9]);
  const items2 = [nestedCard];
  const items3 = [applicationId];
  const stateFromStores1 = obj2.useStateFromStores(items2, () => {
    let application = null;
    if (null != applicationId) {
      application = ApplicationStore.getApplication(tmp);
    }
    return application;
  }, items3);
  const items4 = [stateFromStores1];
  memo = memo.useMemo(() => {
    let iconSource;
    const obj = stateFromStores1;
    if (stateFromStores1 != null) {
      iconSource = obj.getIconSource(24);
    }
    return iconSource;
  }, items4);
  const tmp7 = closure_11();
  nestedCard = tmp7;
  const items5 = [sku, size, memo, , ];
  ({ applicationIcon: arr6[3], nestedCard: arr6[4] } = tmp7);
  const callback = memo.useCallback(() => {
    const children = [, ];
    const obj = { sku, size, containerStyle: nestedCard.nestedCard };
    children[0] = metroImportAll(SlayerStorefrontItemCardDefault, obj);
    let tmp3Result = null != memo;
    const tmp = authStore;
    const tmp2 = React4;
    const tmp3 = metroImportAll;
    const tmp6 = nestedCard;
    if (tmp3Result) {
      const obj2 = { source: tmp7, style: tmp6.applicationIcon };
      tmp3Result = tmp3(FastImageDefault, obj2);
    }
    children[1] = tmp3Result;
    return tmp(tmp2, { children });
  }, items5);
  const obj3 = { accessibilityLabel: sku.name, renderPreview: callback, source, size };
  const tmp10 = wishlistOwnerId(size[12]);
  const merged1 = Object.assign(merged);
  const tmp9 = closure_8;
  if (!flag) {
    let OWNED;
    if (!stateFromStores) {
      OWNED = merged.overlay;
    }
    obj3.overlay = OWNED;
    return tmp9(tmp10, obj3);
  }
  OWNED = tmp2(tmp3[12]).WishlistItemCardOverlay.OWNED;
});
size = size_mod;
const result = size.fileFinishedImporting("modules/wishlists/native/SocialLayerStorefrontWishlistItemCard.tsx");

export default tmp4;
