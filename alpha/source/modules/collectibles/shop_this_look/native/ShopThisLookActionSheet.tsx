// Module ID: 14781
// Function ID: 14782
// Name: ShopThisLookActionSheet
// Dependencies: [19, 17, 8783, 5268, 7371, 21, 5009, 575, 9445, 5707, 1114, 9558, 504, 14782, 7724, 14784, 14400, 9512, 8780, 14785, 7320, 7345, 5253, 7712, 11375, 5619, 2]
// Exports: default

// Module 14781 (ShopThisLookActionSheet)
import nativeDefault from "native" /* 575 */;
import intl3 from "intl" /* 1114 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5253 */;
import ActionSheetConstants from "ActionSheetConstants" /* 5268 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5707 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7345 */;
import Constants from "Constants" /* 7371 */;
import CollectiblesActionCreators from "CollectiblesActionCreators" /* 7712 */;
import CollectiblesProductUtils from "CollectiblesProductUtils" /* 7724 */;
import WishlistItemCardBase from "WishlistItemCardBase" /* 9445 */;
import ShopThisLookUtils from "ShopThisLookUtils" /* 14782 */;
import ShopThisLookAnalyticsUtils from "ShopThisLookAnalyticsUtils" /* 14784 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import StorefrontProductStore from "StorefrontProductStore" /* 8783 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

let c10;
let c9;
let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
let obj4;
let obj5;
function ShopThisLookCard(skuId) {
  let c2;
  let items7;
  let onPress;
  let tmp22;
  skuId = skuId.skuId;
  ({ size, onPress } = skuId);
  let memo;
  let ref;
  let callback;
  const tmp = closure_11();
  let tmp2 = skuId;
  let obj = skuId(9558);
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
        const tmp2Result = tmp2(7724);
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
    tmp22 = closure_9(onPress(9445), obj3);
  } else {
    tmp22 = null;
    if (null != stateFromStores) {
      let tmp17Result;
      if (memo) {
        const obj4 = { style: tmp.cardWrapper, children: items7 };
        const obj5 = { sku: stateFromStores, size, onPress: callback1 };
        items7 = [closure_9(onPress(14400), obj5), ];
        let tmp19Result = null != memo1;
        const tmp17 = closure_10;
        const tmp18 = memo;
        const tmp19 = closure_9;
        const tmp20 = onPress;
        if (tmp19Result) {
          const obj6 = { selectedProduct: memo1, style: tmp.wishlistButton };
          tmp19Result = tmp19(tmp20(9512), obj6);
        }
        items7[1] = tmp19Result;
        tmp17Result = tmp17(tmp18, obj4);
      } else {
        const obj7 = { sku: stateFromStores, size, overlay: tmp2(9445).WishlistItemCardOverlay.LOCKED, onPress: tmp12 };
        const tmp15 = onPress(14400);
        tmp17Result = closure_9(tmp15, obj7);
      }
      tmp22 = tmp17Result;
    }
  }
  return tmp22;
}
({ ActivityIndicator: closure_4, View: hasOwnProperty } = react_native);
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
let size = size_mod;
let result = size.fileFinishedImporting("modules/collectibles/shop_this_look/native/ShopThisLookActionSheet.tsx");

export default function ShopThisLookActionSheet(arg0) {
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
  ({ cardWidth: c0, rowWidth, gap } = analyticsLocations(14785)(obj2));
  analyticsLocations(14785)(obj2);
  const tmp3 = analyticsLocations(7320);
  analyticsLocations = tmp3(analyticsLocations(7345).USER_PROFILE_OVERFLOW_MENU).analyticsLocations;
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
  items1 = [analyticsLocations(7345).SHOP_THIS_LOOK_ACTION_SHEET];
  obj4 = { startExpanded: true, title: intl.string(require("intl").t.xNdRDO), children: closure_10(closure_5, obj5) };
  tmp4 = analyticsLocations(11375);
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
      return closure_1_9(ShopThisLookCard, obj, skuId);
    })
  };
  items3 = [tmp.itemsContainer, { gap, width: rowWidth }];
  items2[1] = closure_9(closure_5, obj7);
  return closure_9(AnalyticsLocationProvider, obj3);
};
