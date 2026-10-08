// Module ID: 12967
// Function ID: 12968
// Name: ShopThisLookActionSheet
// Dependencies: [19, 17, 8320, 6830, 6891, 21, 5090, 587, 8946, 4766, 1126, 558, 576, 9053, 504, 12968, 7263, 12970, 12735, 9011, 8317, 12971, 6841, 6865, 5054, 7251, 5086, 10505, 2]

// Module 12967 (ShopThisLookActionSheet)
import nativeDefault from "native" /* 587 */;
import intl3 from "intl" /* 1126 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4766 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5054 */;
import ActionSheetConstants from "ActionSheetConstants" /* 6830 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6865 */;
import Constants from "Constants" /* 6891 */;
import CollectiblesActionCreators from "CollectiblesActionCreators" /* 7251 */;
import CollectiblesProductUtils from "CollectiblesProductUtils" /* 7263 */;
import WishlistItemCardBase from "WishlistItemCardBase" /* 8946 */;
import ShopThisLookUtils from "ShopThisLookUtils" /* 12968 */;
import ShopThisLookAnalyticsUtils from "ShopThisLookAnalyticsUtils" /* 12970 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import StorefrontProductStore_mod from "StorefrontProductStore" /* 8320 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5090 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, ref;

let c10;
let c9;
let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
let obj4;
let obj5;
({ ActivityIndicator: closure_4, View: hasOwnProperty } = react_native);
let StorefrontProductStore = StorefrontProductStore_mod;
const ACTION_SHEET_MAX_WIDTH = ActionSheetConstants.ACTION_SHEET_MAX_WIDTH;
const UserProfileThemeTypes = Constants.UserProfileThemeTypes;
({ jsx: c9, jsxs: c10 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, description: obj3, itemsContainer: obj4, cardWrapper: { position: "relative" }, wishlistButton: obj5 };
obj2 = { paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { textAlign: "center", marginTop: -nativeDefault.space.PX_8 };
obj4 = { alignSelf: "center", flexDirection: "row", flexWrap: "wrap", paddingBottom: nativeDefault.space.PX_8 };
obj5 = { zIndex: 1 };
const merged = Object.assign(WishlistItemCardBase.CARD_TOP_RIGHT_OVERLAY_POSITION);
let closure_11 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? (function ShopThisLookCard(skuId) {
  let closure_6;
  let first;
  let onPress;
  let stateFromStores;
  let tmp10;
  let tmp13;
  let tmp7;
  let tmp9;
  const tmp2 = stateFromStores;
  let obj = skuId(stateFromStores[12]);
  const cResult = obj.c(48);
  skuId = skuId.skuId;
  ({ size, onPress } = skuId);
  closure_11();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let obj2 = { needsCategory: false, shouldFetchProduct: false };
    cResult[0] = obj2;
    first = obj2;
  } else {
    first = cResult[0];
  }
  const tmpResult = skuId(tmp2[13]);
  const collectiblesShopProduct = tmpResult.useCollectiblesShopProduct(skuId, first);
  const product = collectiblesShopProduct.product;
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [StorefrontProductStore];
    cResult[1] = items;
    tmp7 = items;
  } else {
    tmp7 = cResult[1];
  }
  if (cResult[2] !== skuId) {
    const fn = function v() {
      const productsForSku = StorefrontProductStore.getProductsForSku(skuId);
      let found;
      if (productsForSku != null) {
        const flatMapResult = productsForSku.flatMap((skus) => skus.skus);
        found = flatMapResult.find((id) => id.id === skuId);
      }
      return found;
    };
    const items1 = [skuId];
    cResult[2] = skuId;
    cResult[3] = fn;
    cResult[4] = items1;
    tmp10 = items1;
    tmp9 = fn;
  } else {
    tmp9 = cResult[3];
    tmp10 = cResult[4];
  }
  const tmpResult5 = skuId(tmp2[14]);
  stateFromStores = tmpResult5.useStateFromStores(tmp7, tmp9, tmp10);
  let type;
  if (stateFromStores != null) {
    const tenantMetadata = stateFromStores.tenantMetadata;
    if (tenantMetadata != null) {
      const collectibles = tenantMetadata.collectibles;
      if (collectibles != null) {
        type = collectibles.type;
      }
    }
  }
  if (cResult[5] !== stateFromStores) {
    const tmpResult6 = skuId(tmp2[15]);
    let result = tmpResult6.isShoppableCollectibleSku(stateFromStores);
    cResult[5] = stateFromStores;
    cResult[6] = result;
    tmp13 = result;
  } else {
    tmp13 = cResult[6];
  }
  let closure_4 = tmp13;
  if (null != product) {
    const tmpResult7 = skuId(tmp2[16]);
    if (tmpResult7.getIsVariantProduct(product)) {
      let tmp17;
      if (cResult[7] === product.variants) {
        let tmp16;
        if (cResult[8] === skuId) {
          tmp16 = cResult[9];
        }
        const _Math = Math;
        const bound = Math.max(0, tmp16);
        const tmpResult8 = skuId(tmp2[16]);
        const selectedProduct = tmpResult8.getSelectedProduct(product, bound);
        cResult[12] = product;
        cResult[13] = bound;
        cResult[14] = selectedProduct;
      }
      if (cResult[10] !== skuId) {
        const fn2 = function x(skuId) {
          return skuId.skuId === skuId;
        };
        cResult[10] = skuId;
        cResult[11] = fn2;
        tmp17 = fn2;
      } else {
        tmp17 = cResult[11];
      }
      const variants = product.variants;
      const findIndexResult = variants.findIndex(tmp17);
      cResult[7] = product.variants;
      cResult[8] = skuId;
      cResult[9] = findIndexResult;
      tmp16 = findIndexResult;
    }
  }
  ref = type.useRef(false);
  const obj8 = type;
  if (cResult[15] === tmp13) {
    if (cResult[16] === type) {
      if (cResult[17] === stateFromStores) {
        let tmp22;
        let tmp23;
        if (cResult[18] === skuId) {
          tmp22 = cResult[19];
          tmp23 = cResult[20];
        }
        const effect = obj8.useEffect(tmp22, tmp23);
        if (cResult[21] === tmp13) {
          if (cResult[22] === type) {
            let tmp25;
            if (cResult[23] === skuId) {
              tmp25 = cResult[24];
            }
            StorefrontProductStore = tmp25;
            if (cResult[25] === onPress) {
              if (cResult[28] !== tmp25) {
                class K {
                  constructor() {
                    let intl;
                    closure_6();
                    const obj = { key: "SHOP_THIS_LOOK_ITEM_UNAVAILABLE", content: intl.string(intl3.t.YymRft) };
                    const open = ToastActionCreatorsDefault.open;
                    ToastActionCreatorsDefault;
                    intl = intl3.intl;
                    open(obj);
                  }
                }
                cResult[28] = tmp25;
                class V {
                  constructor() {
                    closure_6();
                    onPress();
                  }
                }
                cResult[29] = K;
              } else {
                class K {
                  constructor() {
                    let intl;
                    closure_6();
                    const obj = { key: "SHOP_THIS_LOOK_ITEM_UNAVAILABLE", content: intl.string(intl3.t.YymRft) };
                    const open = ToastActionCreatorsDefault.open;
                    ToastActionCreatorsDefault;
                    intl = intl3.intl;
                    open(obj);
                  }
                }
              }
              class V {
                constructor() {
                  closure_6();
                  onPress();
                }
              }
              return tmp28;
            }
            class V {
              constructor() {
                closure_6();
                onPress();
              }
            }
            cResult[25] = onPress;
            cResult[26] = tmp25;
            cResult[27] = V;
          }
        }
        class N {
          constructor() {
            const obj = ShopThisLookAnalyticsUtils;
            const obj2 = { action: ShopThisLookAnalyticsUtils.ShopThisLookRowAction.ROW_CLICKED, skuId, productType: type, isDisabled: !closure_4, source: UserProfileThemeTypes.ACTION_SHEET };
            const result = obj.trackShopThisLookRowAction(obj2);
          }
        }
        cResult[21] = tmp13;
        cResult[22] = type;
        cResult[23] = skuId;
        cResult[24] = N;
        tmp25 = N;
      }
    }
  }
  class D {
    constructor() {
      const current = null == stateFromStores || ref.current;
      if (!current) {
        ref.current = true;
        const obj = { action: ShopThisLookAnalyticsUtils.ShopThisLookRowAction.ROW_VIEWED, skuId, productType: type, isDisabled: !closure_4, source: UserProfileThemeTypes.ACTION_SHEET };
        const trackShopThisLookRowAction = ShopThisLookAnalyticsUtils.trackShopThisLookRowAction;
        ShopThisLookAnalyticsUtils;
        const result = trackShopThisLookRowAction(obj);
      }
    }
  }
  const items2 = [stateFromStores, skuId, type, tmp13];
  cResult[15] = tmp13;
  cResult[16] = type;
  cResult[17] = stateFromStores;
  cResult[18] = skuId;
  cResult[19] = D;
  cResult[20] = items2;
  tmp23 = items2;
  tmp22 = D;
}) : (function ShopThisLookCard(skuId) {
  let c2;
  let items7;
  let onPress;
  let tmp22;
  skuId = skuId.skuId;
  ({ size, onPress } = skuId);
  let memo;
  ref = undefined;
  let callback;
  const tmp = closure_11();
  let tmp2 = skuId;
  let obj = skuId(9053);
  const collectiblesShopProduct = obj.useCollectiblesShopProduct(skuId, { needsCategory: false, shouldFetchProduct: false });
  const product = collectiblesShopProduct.product;
  dependencyMap = product;
  const state = collectiblesShopProduct.state;
  let obj2 = skuId(504);
  const items = [ref];
  const items1 = [skuId];
  const stateFromStores = obj2.useStateFromStores(items, () => {
    const productsForSku = StorefrontProductStore.getProductsForSku(skuId);
    let found;
    if (productsForSku != null) {
      const flatMapResult = productsForSku.flatMap((skus) => skus.skus);
      found = flatMapResult.find((id) => id.id === skuId);
    }
    return found;
  }, items1);
  let type;
  if (stateFromStores != null) {
    const tenantMetadata = stateFromStores.tenantMetadata;
    if (tenantMetadata != null) {
      const collectibles = tenantMetadata.collectibles;
      if (collectibles != null) {
        type = collectibles.type;
      }
    }
  }
  const items2 = [stateFromStores];
  memo = stateFromStores.useMemo(() => {
    const obj = ShopThisLookUtils;
    return obj.isShoppableCollectibleSku(stateFromStores);
  }, items2);
  const items3 = [product, skuId];
  const memo1 = stateFromStores.useMemo(() => {
    if (null == c2) {
      return null;
    } else {
      const obj = CollectiblesProductUtils;
      const tmp2 = require;
      if (obj.getIsVariantProduct(c2)) {
        const _Math = Math;
        const variants = tmp.variants;
        const bound = Math.max(0, variants.findIndex((skuId) => skuId.skuId === skuId));
        const tmp2Result = tmp2(7263);
        return tmp2Result.getSelectedProduct(c2, bound);
      } else {
        return c2;
      }
    }
  }, items3);
  ref = stateFromStores.useRef(false);
  const items4 = [stateFromStores, skuId, type, memo];
  const effect = stateFromStores.useEffect(() => {
    const current = null == stateFromStores || ref.current;
    if (!current) {
      ref.current = true;
      const obj = { action: ShopThisLookAnalyticsUtils.ShopThisLookRowAction.ROW_VIEWED, skuId, productType: type, isDisabled: !memo, source: UserProfileThemeTypes.ACTION_SHEET };
      const trackShopThisLookRowAction = ShopThisLookAnalyticsUtils.trackShopThisLookRowAction;
      ShopThisLookAnalyticsUtils;
      const result = trackShopThisLookRowAction(obj);
    }
  }, items4);
  const items5 = [skuId, type, memo];
  callback = stateFromStores.useCallback(() => {
    const obj = ShopThisLookAnalyticsUtils;
    const obj2 = { action: ShopThisLookAnalyticsUtils.ShopThisLookRowAction.ROW_CLICKED, skuId, productType: type, isDisabled: !memo, source: UserProfileThemeTypes.ACTION_SHEET };
    const result = obj.trackShopThisLookRowAction(obj2);
  }, items5);
  const items6 = [callback, onPress];
  [][0] = callback;
  const callback1 = stateFromStores.useCallback(() => {
    callback();
    onPress();
  }, items6);
  if ("loading" === state) {
    const obj3 = {
      size,
      renderPreview() {
          return closure_1_9(type, {});
        },
      accessibilityHidden: true
    };
    tmp22 = closure_9(onPress(8946), obj3);
  } else {
    tmp22 = null;
    if (null != stateFromStores) {
      let tmp17Result;
      if (memo) {
        const obj4 = { style: tmp.cardWrapper, children: items7 };
        const obj5 = { sku: stateFromStores, size, onPress: callback1 };
        items7 = [closure_9(onPress(12735), obj5), ];
        let tmp19Result = null != memo1;
        const tmp17 = closure_10;
        const tmp18 = memo;
        const tmp19 = closure_9;
        const tmp20 = onPress;
        if (tmp19Result) {
          const obj6 = { selectedProduct: memo1, style: tmp.wishlistButton };
          tmp19Result = tmp19(tmp20(9011), obj6);
        }
        items7[1] = tmp19Result;
        tmp17Result = tmp17(tmp18, obj4);
      } else {
        const obj7 = { sku: stateFromStores, size, overlay: tmp2(8946).WishlistItemCardOverlay.LOCKED, onPress: tmp12 };
        const tmp15 = onPress(12735);
        tmp17Result = closure_9(tmp15, obj7);
      }
      tmp22 = tmp17Result;
    }
  }
  return tmp22;
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function ShopThisLookActionSheet(arg0) {
  let analyticsLocations;
  let cardWidth;
  let closure_2;
  let container;
  let description;
  let first;
  let gap;
  let guildId;
  let items1;
  let obj6;
  let obj7;
  let rowWidth;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp14;
  let tmp16;
  let tmp7Result;
  let userId;
  let obj = cardWidth(576);
  const cResult = obj.c(28);
  ({ userId, guildId } = arg0);
  const tmp4 = closure_11();
  let obj2 = cardWidth(8317);
  const equippedCollectibleSkuIds = obj2.useEquippedCollectibleSkuIds(userId, guildId);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let obj3 = { maxWidth: ACTION_SHEET_MAX_WIDTH };
    cResult[0] = obj3;
    first = obj3;
  } else {
    first = cResult[0];
  }
  const tmp8 = analyticsLocations(12971)(first);
  cardWidth = tmp8.cardWidth;
  ({ rowWidth, gap } = tmp8);
  const tmp9 = analyticsLocations(6841);
  analyticsLocations = tmp9(analyticsLocations(6865).USER_PROFILE_OVERFLOW_MENU).analyticsLocations;
  if (cResult[1] !== analyticsLocations) {
    const fn = function k(initialProductSkuId) {
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet();
      const obj2 = CollectiblesActionCreators;
      const obj3 = { initialProductSkuId, analyticsLocations, analyticsSource: AnalyticsLocationDefault.USER_PROFILE_OVERFLOW_MENU };
      const result = obj2.openCollectiblesShopMobile(obj3);
    };
    cResult[1] = analyticsLocations;
    cResult[2] = fn;
    tmp10 = fn;
  } else {
    tmp10 = cResult[2];
  }
  dependencyMap = tmp10;
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [analyticsLocations(6865).SHOP_THIS_LOOK_ACTION_SHEET];
    cResult[3] = items;
    tmp11 = items;
  } else {
    tmp11 = cResult[3];
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(cardWidth(1126).t.xNdRDO);
    cResult[4] = stringResult;
    tmp12 = stringResult;
  } else {
    tmp12 = cResult[4];
  }
  ({ container, description } = tmp4);
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = tmp(1126).intl;
    const stringResult1 = intl2.string(cardWidth(1126).t["ws+0Lr"]);
    cResult[5] = stringResult1;
    tmp14 = stringResult1;
  } else {
    tmp14 = cResult[5];
  }
  if (cResult[6] !== tmp4.description) {
    const obj4 = { variant: "text-sm/medium", color: "text-subtle", style: description, children: tmp14 };
    const tmp18 = closure_9(cardWidth(5086).Text, obj4);
    cResult[6] = tmp4.description;
    cResult[7] = tmp18;
    tmp16 = tmp18;
  } else {
    tmp16 = cResult[7];
  }
  if (cResult[8] === gap) {
    let tmp19;
    if (cResult[9] === rowWidth) {
      tmp19 = cResult[10];
    }
    if (cResult[11] === tmp4.itemsContainer) {
      let tmp20;
      let tmp21;
      if (cResult[12] === tmp19) {
        tmp20 = cResult[13];
      }
      if (cResult[14] === cardWidth) {
        if (cResult[15] === tmp10) {
          if (cResult[16] === equippedCollectibleSkuIds) {
            tmp21 = cResult[17];
          }
          if (cResult[21] === tmp20) {
            let tmp24;
            if (cResult[22] === tmp21) {
              tmp24 = cResult[23];
            }
            if (cResult[24] === tmp4.container) {
              if (cResult[25] === tmp24) {
                let tmp28;
                if (cResult[26] === tmp16) {
                  tmp28 = cResult[27];
                }
                return tmp28;
              }
            }
            const obj5 = { value: tmp11, children: closure_9(tmp7Result, obj6) };
            const AnalyticsLocationProvider = tmp(6841).AnalyticsLocationProvider;
            obj6 = { startExpanded: true, title: tmp12, children: closure_10(closure_5, obj7) };
            obj7 = { style: container, children: items1 };
            items1 = [tmp16, tmp24];
            tmp7Result = analyticsLocations(10505);
            const tmp33 = closure_9(AnalyticsLocationProvider, obj5);
            cResult[24] = tmp4.container;
            cResult[25] = tmp24;
            cResult[26] = tmp16;
            cResult[27] = tmp33;
            tmp28 = tmp33;
          }
          const obj8 = { style: tmp20, children: tmp21 };
          const tmp27 = closure_9(closure_5, obj8);
          cResult[21] = tmp20;
          cResult[22] = tmp21;
          cResult[23] = tmp27;
          tmp24 = tmp27;
        }
      }
      if (cResult[18] === cardWidth) {
        let tmp22;
        if (cResult[19] === tmp10) {
          tmp22 = cResult[20];
        }
        const mapped = equippedCollectibleSkuIds.map(tmp22);
        cResult[14] = cardWidth;
        cResult[15] = tmp10;
        cResult[16] = equippedCollectibleSkuIds;
        cResult[17] = mapped;
        tmp21 = mapped;
      }
      const fn2 = function x(skuId) {
        size = skuId;
        const obj = {
          skuId,
          size,
          onPress() {
            return closure_2(skuId);
          }
        };
        return closure_1_9(closure_1_12, obj, skuId);
      };
      cResult[18] = cardWidth;
      cResult[19] = tmp10;
      cResult[20] = fn2;
      tmp22 = fn2;
    }
    const items2 = [tmp4.itemsContainer, tmp19];
    cResult[11] = tmp4.itemsContainer;
    cResult[12] = tmp19;
    cResult[13] = items2;
    tmp20 = items2;
  }
  const obj9 = { gap, width: rowWidth };
  cResult[8] = gap;
  cResult[9] = rowWidth;
  cResult[10] = obj9;
  tmp19 = obj9;
}) : (function ShopThisLookActionSheet(arg0) {
  let c0;
  let closure_2;
  let gap;
  let guildId;
  let intl;
  let intl2;
  let items1;
  let items2;
  let items3;
  let obj4;
  let obj5;
  let rowWidth;
  let tmp4;
  let userId;
  _require = undefined;
  let analyticsLocations;
  ({ userId, guildId } = arg0);
  const tmp = closure_11();
  let obj = require("useMaybeFetchEquippedCollectibleProducts");
  const equippedCollectibleSkuIds = obj.useEquippedCollectibleSkuIds(userId, guildId);
  let obj2 = { maxWidth: ACTION_SHEET_MAX_WIDTH };
  ({ cardWidth: c0, rowWidth, gap } = analyticsLocations(12971)(obj2));
  analyticsLocations(12971)(obj2);
  const tmp3 = analyticsLocations(6841);
  analyticsLocations = tmp3(analyticsLocations(6865).USER_PROFILE_OVERFLOW_MENU).analyticsLocations;
  const items = [analyticsLocations];
  dependencyMap = react.useCallback((initialProductSkuId) => {
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet();
    const obj2 = CollectiblesActionCreators;
    const obj3 = { initialProductSkuId, analyticsLocations, analyticsSource: AnalyticsLocationDefault.USER_PROFILE_OVERFLOW_MENU };
    const result = obj2.openCollectiblesShopMobile(obj3);
  }, items);
  let obj3 = { value: items1, children: closure_9(tmp4, obj4) };
  const AnalyticsLocationProvider = require("useAnalyticsLocations").AnalyticsLocationProvider;
  items1 = [analyticsLocations(6865).SHOP_THIS_LOOK_ACTION_SHEET];
  obj4 = { startExpanded: true, title: intl.string(require("intl").t.xNdRDO), children: closure_10(closure_5, obj5) };
  tmp4 = analyticsLocations(10505);
  intl = require("intl").intl;
  obj5 = { style: tmp.container, children: items2 };
  const obj6 = { variant: "text-sm/medium", color: "text-subtle", style: tmp.description, children: intl2.string(require("intl").t["ws+0Lr"]) };
  const Text = require("Text/Text").Text;
  intl2 = require("intl").intl;
  items2 = [closure_9(Text, obj6), ];
  const obj7 = {
    style: items3,
    children: equippedCollectibleSkuIds.map((skuId) => {
      size = skuId;
      const obj = {
        skuId,
        size,
        onPress() {
          return closure_2(skuId);
        }
      };
      return closure_1_9(closure_1_12, obj, skuId);
    })
  };
  items3 = [tmp.itemsContainer, { gap, width: rowWidth }];
  items2[1] = closure_9(closure_5, obj7);
  return closure_9(AnalyticsLocationProvider, obj3);
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/collectibles/shop_this_look/native/ShopThisLookActionSheet.tsx");

export default tmp6;
