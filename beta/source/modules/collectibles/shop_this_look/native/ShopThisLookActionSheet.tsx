// Module ID: 13469
// Function ID: 13470
// Name: ShopThisLookActionSheet
// Dependencies: [19, 17, 8525, 7430, 7487, 21, 4790, 580, 9083, 4490, 1119, 558, 568, 9183, 504, 13470, 7832, 13472, 11369, 9148, 8521, 13436, 7441, 7461, 4757, 7820, 4786, 11441, 2]

// Module 13469 (ShopThisLookActionSheet)
import nativeDefault from "native" /* 580 */;
import util from "util" /* 1119 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4490 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4757 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7461 */;
import CollectiblesActionCreators from "CollectiblesActionCreators" /* 7820 */;
import CollectiblesProductUtils from "CollectiblesProductUtils" /* 7832 */;
import ShopThisLookUtils from "ShopThisLookUtils" /* 13470 */;
import ShopThisLookAnalyticsUtils from "ShopThisLookAnalyticsUtils" /* 13472 */;
import noop from "module_19" /* 19 */;
import StorefrontProductStore from "StorefrontProductStore" /* 8525 */;

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ ActivityIndicator: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const ACTION_SHEET_MAX_WIDTH = fn(7430).ACTION_SHEET_MAX_WIDTH;
const UserProfileThemeTypes = fn(7487).UserProfileThemeTypes;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4790);
let obj2 = { container: { paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16 }, description: null, itemsContainer: null, cardWrapper: null, wishlistButton: null };
let obj3 = { paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16 };
obj2.description = { textAlign: "center", marginTop: -nativeDefault.space.PX_8 };
let obj4 = { textAlign: "center", marginTop: -nativeDefault.space.PX_8 };
obj2.itemsContainer = { alignSelf: "center", flexDirection: "row", flexWrap: "wrap", paddingBottom: nativeDefault.space.PX_8 };
obj2.cardWrapper = { position: "relative" };
let obj6 = {};
const merged = Object.assign(fn(9083).CARD_TOP_RIGHT_OVERLAY_POSITION);
obj6.zIndex = 1;
obj2.wishlistButton = obj6;
let closure_11 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? ((skuId) => {
  const cResult = skuId(stateFromStores[12]).c(48);
  skuId = skuId.skuId;
  ({ size, onPress } = skuId);
  closure_11();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let obj2 = { needsCategory: false, shouldFetchProduct: false };
    cResult[0] = obj2;
    let first = obj2;
  } else {
    first = cResult[0];
  }
  let obj = skuId(stateFromStores[12]);
  const collectiblesShopProduct = skuId(stateFromStores[13]).useCollectiblesShopProduct(skuId, first);
  const product = collectiblesShopProduct.product;
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [StorefrontProductStore];
    cResult[1] = items;
    let tmp7 = items;
  } else {
    tmp7 = cResult[1];
  }
  if (cResult[2] !== skuId) {
    class O {
      constructor() {
        productsForSku = closure_6.getProductsForSku(skuId);
        found = undefined;
        if (productsForSku != null) {
          flatMapResult = productsForSku.flatMap(() => { ... });
          found = flatMapResult.find(() => { ... });
        }
        return found;
      }
    }
    const items1 = [skuId];
    cResult[2] = skuId;
    cResult[3] = O;
    cResult[4] = items1;
    let tmp10 = items1;
    const tmp9 = O;
  } else {
    class O {
      constructor() {
        productsForSku = closure_6.getProductsForSku(skuId);
        found = undefined;
        if (productsForSku != null) {
          flatMapResult = productsForSku.flatMap(() => { ... });
          found = flatMapResult.find(() => { ... });
        }
        return found;
      }
    }
    tmp10 = cResult[4];
  }
  const tmpResult = skuId(stateFromStores[13]);
  stateFromStores = skuId(stateFromStores[14]).useStateFromStores(tmp7, tmp9, tmp10);
  if (stateFromStores != null) {
    class O {
      constructor() {
        productsForSku = closure_6.getProductsForSku(skuId);
        found = undefined;
        if (productsForSku != null) {
          flatMapResult = productsForSku.flatMap(() => { ... });
          found = flatMapResult.find(() => { ... });
        }
        return found;
      }
    }
    if (tmp13 != null) {
      class O {
        constructor() {
          productsForSku = closure_6.getProductsForSku(skuId);
          found = undefined;
          if (productsForSku != null) {
            flatMapResult = productsForSku.flatMap(() => { ... });
            found = flatMapResult.find(() => { ... });
          }
          return found;
        }
      }
      if (tmp14 != null) {
        class O {
          constructor() {
            productsForSku = closure_6.getProductsForSku(skuId);
            found = undefined;
            if (productsForSku != null) {
              flatMapResult = productsForSku.flatMap(() => { ... });
              found = flatMapResult.find(() => { ... });
            }
            return found;
          }
        }
      }
    }
  }
  noop = tmp12;
  if (cResult[5] !== stateFromStores) {
    class O {
      constructor() {
        productsForSku = closure_6.getProductsForSku(skuId);
        found = undefined;
        if (productsForSku != null) {
          flatMapResult = productsForSku.flatMap(() => { ... });
          found = flatMapResult.find(() => { ... });
        }
        return found;
      }
    }
    let result = obj5.isShoppableCollectibleSku(stateFromStores);
    cResult[5] = stateFromStores;
    cResult[6] = result;
  } else {
    class O {
      constructor() {
        productsForSku = closure_6.getProductsForSku(skuId);
        found = undefined;
        if (productsForSku != null) {
          flatMapResult = productsForSku.flatMap(() => { ... });
          found = flatMapResult.find(() => { ... });
        }
        return found;
      }
    }
  }
  result = tmp15;
  if (null != product) {
    class O {
      constructor() {
        productsForSku = closure_6.getProductsForSku(skuId);
        found = undefined;
        if (productsForSku != null) {
          flatMapResult = productsForSku.flatMap(() => { ... });
          found = flatMapResult.find(() => { ... });
        }
        return found;
      }
    }
    if (obj6.getIsVariantProduct(product)) {
      class O {
        constructor() {
          productsForSku = closure_6.getProductsForSku(skuId);
          found = undefined;
          if (productsForSku != null) {
            flatMapResult = productsForSku.flatMap(() => { ... });
            found = flatMapResult.find(() => { ... });
          }
          return found;
        }
      }
      if (cResult[10] !== skuId) {
        class O {
          constructor() {
            productsForSku = closure_6.getProductsForSku(skuId);
            found = undefined;
            if (productsForSku != null) {
              flatMapResult = productsForSku.flatMap(() => { ... });
              found = flatMapResult.find(() => { ... });
            }
            return found;
          }
        }
        cResult[10] = skuId;
        cResult[11] = tmp19;
        const tmp18 = tmp19;
      } else {
        class O {
          constructor() {
            productsForSku = closure_6.getProductsForSku(skuId);
            found = undefined;
            if (productsForSku != null) {
              flatMapResult = productsForSku.flatMap(() => { ... });
              found = flatMapResult.find(() => { ... });
            }
            return found;
          }
        }
      }
      const variants = product.variants;
      const findIndexResult = variants.findIndex(tmp18);
      cResult[7] = product.variants;
      cResult[8] = skuId;
      cResult[9] = findIndexResult;
    }
  }
  noop.useRef(false);
  if (cResult[15] === tmp15) {
    class O {
      constructor() {
        productsForSku = closure_6.getProductsForSku(skuId);
        found = undefined;
        if (productsForSku != null) {
          flatMapResult = productsForSku.flatMap(() => { ... });
          found = flatMapResult.find(() => { ... });
        }
        return found;
      }
    }
  }
  class D {
    constructor() {
      current = null == closure_2;
      if (!current) {
        tmp = closure_5;
        current = closure_5.current;
      }
      if (!current) {
        tmp2 = closure_5;
        flag = true;
        closure_5.current = true;
        tmp3 = closure_0;
        tmp4 = closure_2;
        obj = closure_0(closure_2[17]);
        obj1 = { action: null, skuId: null, productType: null, isDisabled: null, source: null };
        obj1.action = closure_0(closure_2[17]).ShopThisLookRowAction.ROW_VIEWED;
        tmp5 = skuId;
        obj1.skuId = skuId;
        tmp6 = type;
        obj1.productType = type;
        tmp7 = closure_4;
        obj1.isDisabled = !closure_4;
        tmp8 = UserProfileThemeTypes;
        obj1.source = UserProfileThemeTypes.ACTION_SHEET;
        result = obj.trackShopThisLookRowAction(obj1);
      }
      return;
    }
  }
  const items2 = [stateFromStores, skuId, undefined, tmp15];
  cResult[15] = tmp15;
  cResult[16] = undefined;
  cResult[17] = stateFromStores;
  cResult[18] = skuId;
  cResult[19] = D;
  cResult[20] = items2;
}) : ((skuId) => {
  skuId = skuId.skuId;
  ({ size, onPress } = skuId);
  let memo;
  ref = undefined;
  let callback;
  let wishlistButton = closure_11();
  const collectiblesShopProduct = skuId(9183).useCollectiblesShopProduct(skuId, { needsCategory: false, shouldFetchProduct: false });
  const product = collectiblesShopProduct.product;
  dependencyMap = product;
  let obj = skuId(9183);
  const tmp = skuId;
  const items = [ref];
  const items1 = [skuId];
  const stateFromStores = skuId(504).useStateFromStores(items, () => {
    const productsForSku = StorefrontProductStore.getProductsForSku(skuId);
    let found;
    if (productsForSku != null) {
      found = productsForSku.flatMap((skus) => skus.skus).find((id) => id.id === skuId);
      const flatMapResult = productsForSku.flatMap((skus) => skus.skus);
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
  memo = stateFromStores.useMemo(() => ShopThisLookUtils.isShoppableCollectibleSku(stateFromStores), items2);
  const items3 = [product, skuId];
  const memo1 = stateFromStores.useMemo(() => {
    if (null == c2) {
      return null;
    } else {
      if (obj.getIsVariantProduct(tmp)) {
        const _Math = Math;
        const variants = tmp.variants;
        const bound = Math.max(0, variants.findIndex((skuId) => skuId.skuId === skuId));
        return tmp2(7832).getSelectedProduct(tmp, bound);
      } else {
        return tmp;
      }
      obj = CollectiblesProductUtils;
      tmp2 = require;
    }
  }, items3);
  ref = stateFromStores.useRef(false);
  const items4 = [stateFromStores, skuId, type, memo];
  const effect = stateFromStores.useEffect(() => {
    let current = null == stateFromStores;
    if (!current) {
      current = ref.current;
    }
    if (!current) {
      ref.current = true;
      const obj2 = { action: ShopThisLookAnalyticsUtils.ShopThisLookRowAction.ROW_VIEWED, skuId, productType: type, isDisabled: !memo, source: UserProfileThemeTypes.ACTION_SHEET };
      const result = ShopThisLookAnalyticsUtils.trackShopThisLookRowAction(obj2);
    }
  }, items4);
  const items5 = [skuId, type, memo];
  callback = stateFromStores.useCallback(() => {
    const obj = ShopThisLookAnalyticsUtils;
    const result = obj.trackShopThisLookRowAction({ action: ShopThisLookAnalyticsUtils.ShopThisLookRowAction.ROW_CLICKED, skuId, productType: type, isDisabled: !memo, source: UserProfileThemeTypes.ACTION_SHEET });
  }, items5);
  const items6 = [callback, onPress];
  let callback1 = stateFromStores.useCallback(() => {
    callback();
    onPress();
  }, items6);
  [][0] = callback;
  if ("loading" === collectiblesShopProduct.state) {
    const obj3 = {
      size,
      renderPreview() {
          return closure_1_9(type, {});
        },
      accessibilityHidden: true
    };
    let tmp23 = closure_9(onPress(9083), obj3);
  } else {
    tmp23 = null;
    if (null != stateFromStores) {
      if (memo) {
        const obj4 = { style: wishlistButton.cardWrapper, children: null };
        const obj5 = { sku: stateFromStores, size, onPress: callback1 };
        const items7 = [closure_9(onPress(11369), obj5), ];
        let tmp17Result = null != memo1;
        if (tmp17Result) {
          callback1 = { selectedProduct: memo1, style: null };
          wishlistButton = wishlistButton.wishlistButton;
          callback1.style = wishlistButton;
          tmp17Result = tmp17(tmp18(9148), callback1);
        }
        items7[1] = tmp17Result;
        obj4.children = items7;
        let tmp15Result = closure_10(memo, obj4);
        tmp17 = closure_9;
        tmp18 = onPress;
      } else {
        const obj6 = { sku: stateFromStores, size, overlay: tmp(9083).WishlistItemCardOverlay.LOCKED, onPress: tmp10 };
        tmp15Result = closure_9(onPress(11369), obj6);
        const tmp13 = onPress(11369);
      }
    }
  }
  return tmp23;
});
ReactCompilerGating = fn(558);
let obj5 = { alignSelf: "center", flexDirection: "row", flexWrap: "wrap", paddingBottom: nativeDefault.space.PX_8 };
let size = fn(2);
let result = size.fileFinishedImporting("modules/collectibles/shop_this_look/native/ShopThisLookActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = cardWidth(568).c(28);
  ({ userId, guildId } = arg0);
  const tmp4 = closure_11();
  let obj = cardWidth(568);
  const equippedCollectibleSkuIds = cardWidth(8521).useEquippedCollectibleSkuIds(userId, guildId);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { maxWidth: ACTION_SHEET_MAX_WIDTH };
    cResult[0] = obj3;
    let first = obj3;
  } else {
    first = cResult[0];
  }
  const tmp8 = analyticsLocations(13436)(first);
  cardWidth = tmp8.cardWidth;
  ({ rowWidth, gap } = tmp8);
  let obj2 = cardWidth(8521);
  analyticsLocations = analyticsLocations(7441)(analyticsLocations(7461).USER_PROFILE_OVERFLOW_MENU).analyticsLocations;
  if (cResult[1] !== analyticsLocations) {
    const fn = function y(initialProductSkuId) {
      ActionSheetActionCreatorsDefault.hideActionSheet();
      const obj2 = CollectiblesActionCreators;
      const result = obj2.openCollectiblesShopMobile({ initialProductSkuId, analyticsLocations, analyticsSource: AnalyticsLocationDefault.USER_PROFILE_OVERFLOW_MENU });
    };
    cResult[1] = analyticsLocations;
    cResult[2] = fn;
    let tmp10 = fn;
  } else {
    tmp10 = cResult[2];
  }
  dependencyMap = tmp10;
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [tmp7(7461).SHOP_THIS_LOOK_ACTION_SHEET];
    cResult[3] = items;
    let tmp11 = items;
  } else {
    tmp11 = cResult[3];
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1119).intl;
    const stringResult = intl.string(tmp(1119).t.xNdRDO);
    cResult[4] = stringResult;
    let tmp12 = stringResult;
  } else {
    tmp12 = cResult[4];
  }
  ({ container, description } = tmp4);
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = tmp(1119).intl;
    const stringResult1 = intl2.string(tmp(1119).t["ws+0Lr"]);
    cResult[5] = stringResult1;
    let tmp14 = stringResult1;
  } else {
    tmp14 = cResult[5];
  }
  if (cResult[6] !== tmp4.description) {
    const obj4 = { variant: "text-sm/medium", color: "text-subtle", style: description, children: tmp14 };
    const tmp18 = closure_9(tmp(4786).Text, obj4);
    cResult[6] = tmp4.description;
    cResult[7] = tmp18;
    let tmp16 = tmp18;
  } else {
    tmp16 = cResult[7];
  }
  if (cResult[8] === gap) {
    if (cResult[9] === rowWidth) {
      let tmp19 = cResult[10];
    }
    if (cResult[11] === tmp4.itemsContainer) {
      if (cResult[12] === tmp19) {
        let tmp20 = cResult[13];
      }
      if (cResult[14] === cardWidth) {
        if (cResult[15] === tmp10) {
          if (cResult[16] === equippedCollectibleSkuIds) {
            if (cResult[21] === tmp20) {
              if (cResult[22] === tmp21) {
                let tmp25 = cResult[23];
              }
              if (cResult[24] === tmp4.container) {
                if (cResult[25] === tmp25) {
                  if (cResult[26] === tmp16) {
                    let tmp29 = cResult[27];
                  }
                  return tmp29;
                }
              }
              const obj5 = { value: tmp11, children: null };
              const obj6 = { startExpanded: true, title: tmp12, children: null };
              const obj7 = { style: container, children: null };
              const items1 = [tmp16, tmp25];
              obj7.children = items1;
              obj6.children = closure_10(closure_5, obj7);
              obj5.children = closure_9(tmp7(11441), obj6);
              const tmp34 = closure_9(tmp(7441).AnalyticsLocationProvider, obj5);
              cResult[24] = tmp4.container;
              cResult[25] = tmp25;
              cResult[26] = tmp16;
              cResult[27] = tmp34;
              tmp29 = tmp34;
              const tmp7Result = tmp7(11441);
            }
            const obj8 = { style: tmp20, children: cResult[17] };
            const tmp28 = closure_9(closure_5, obj8);
            cResult[21] = tmp20;
            cResult[22] = cResult[17];
            cResult[23] = tmp28;
            tmp25 = tmp28;
          }
        }
      }
      if (cResult[18] === cardWidth) {
        if (cResult[19] === tmp10) {
          let tmp22 = cResult[20];
        }
        const mapped = equippedCollectibleSkuIds.map(tmp22);
        cResult[14] = cardWidth;
        cResult[15] = tmp10;
        cResult[16] = equippedCollectibleSkuIds;
        cResult[17] = mapped;
      }
      const fn2 = function x(skuId) {
        size = skuId;
        return closure_1_9(closure_1_12, {
          skuId,
          size,
          onPress() {
            return closure_2(closure_0);
          }
        }, skuId);
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
}) : ((arg0) => {
  _require = undefined;
  let analyticsLocations;
  ({ userId, guildId } = arg0);
  const tmp = closure_11();
  const equippedCollectibleSkuIds = require("useMaybeFetchEquippedCollectibleProducts").useEquippedCollectibleSkuIds(userId, guildId);
  let obj = require("useMaybeFetchEquippedCollectibleProducts");
  let obj2 = { maxWidth: ACTION_SHEET_MAX_WIDTH };
  ({ cardWidth: c0, rowWidth, gap } = analyticsLocations(13436)({ maxWidth: ACTION_SHEET_MAX_WIDTH }));
  const tmp2 = analyticsLocations(13436)({ maxWidth: ACTION_SHEET_MAX_WIDTH });
  analyticsLocations = analyticsLocations(7441)(analyticsLocations(7461).USER_PROFILE_OVERFLOW_MENU).analyticsLocations;
  const items = [analyticsLocations];
  dependencyMap = noop.useCallback((initialProductSkuId) => {
    ActionSheetActionCreatorsDefault.hideActionSheet();
    const obj2 = CollectiblesActionCreators;
    const result = obj2.openCollectiblesShopMobile({ initialProductSkuId, analyticsLocations, analyticsSource: AnalyticsLocationDefault.USER_PROFILE_OVERFLOW_MENU });
  }, items);
  const obj3 = { value: null, children: null };
  const items1 = [analyticsLocations(7461).SHOP_THIS_LOOK_ACTION_SHEET];
  obj3.value = items1;
  const obj4 = { startExpanded: true, title: null, children: null };
  const tmp3 = analyticsLocations(7441);
  const intl = require("util").intl;
  obj4.title = intl.string(require("util").t.xNdRDO);
  const obj5 = { style: tmp.container, children: null };
  const obj6 = { variant: "text-sm/medium", color: "text-subtle", style: tmp.description, children: null };
  const intl2 = require("util").intl;
  obj6.children = intl2.string(require("util").t["ws+0Lr"]);
  const items2 = [closure_9(require("Text/Text").Text, obj6), ];
  const obj7 = {
    style: null,
    children: equippedCollectibleSkuIds.map((skuId) => {
      size = skuId;
      return closure_1_9(closure_1_12, {
        skuId,
        size,
        onPress() {
          return closure_2(closure_0);
        }
      }, skuId);
    })
  };
  const items3 = [tmp.itemsContainer, { gap, width: rowWidth }];
  obj7.style = items3;
  items2[1] = closure_9(closure_5, obj7);
  obj5.children = items2;
  obj4.children = closure_10(closure_5, obj5);
  obj3.children = closure_9(analyticsLocations(11441), obj4);
  return closure_9(require("useAnalyticsLocations").AnalyticsLocationProvider, obj3);
});
