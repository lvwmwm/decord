// Module ID: 8715
// Function ID: 68972
// Name: PurchasedAssetOverlay
// Dependencies: [57, 31, 27, 655, 33, 8663, 689, 4130, 8694, 4652, 6785, 1876, 8207, 8215, 5085, 8716, 656, 8717, 8226, 8216, 8697, 8699, 3974, 3834, 8664, 2]

// Module 8715 (PurchasedAssetOverlay)
import _slicedToArray from "_slicedToArray";
import importAllResult from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import { EXTERNAL_PRODUCT_SKU_IDS } from "items";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_7;
let closure_8;
const require = arg1;
function PurchasedAssetOverlay() {
  const tmp = callback3();
  obj = { style: tmp.overlayContainer, children: callback2(require(8694) /* CheckmarkLargeBoldIcon */.CheckmarkLargeBoldIcon, obj) };
  obj = { size: "lg", style: tmp.overlayIcon };
  return callback2(View, obj);
}
function DisabledAssetOverlay() {
  const tmp = callback3();
  obj = { style: tmp.overlayContainer, children: callback2(require(4652) /* LockIcon */.LockIcon, obj) };
  obj = { size: "lg", style: tmp.overlayIcon };
  return callback2(View, obj);
}
function ProductPreview(arg0) {
  let cardWidth;
  let disableBundleStaticBackground;
  let isDisabled;
  let isPurchased;
  let muteBundleStaticBackground;
  let product;
  ({ product, isPurchased } = arg0);
  ({ isDisabled, disableBundleStaticBackground, muteBundleStaticBackground, cardWidth } = arg0);
  const tmp = callback3();
  let obj = require(6785) /* getProductOrbPrice */;
  const productType = obj.getProductType(product);
  if (productType !== require(1876) /* CollectiblesItemType */.CollectiblesItemType.PROFILE_EFFECT) {
    if (productType !== require(1876) /* CollectiblesItemType */.CollectiblesItemType.PROFILE_FRAME) {
      let str = "75%";
    }
    obj = { style: null, renderToHardwareTextureAndroid: true, needsOffscreenAlphaCompositing: true };
    const items = [tmp.overlayContainer, , ];
    if (!isPurchased) {
      isPurchased = isDisabled;
    }
    if (isPurchased) {
      isPurchased = tmp.purchasedOrDisabled;
    }
    items[1] = isPurchased;
    obj = { height: str };
    items[2] = obj;
    obj.style = items;
    const obj1 = { product, disableBundleStaticBackground, muteBundleStaticBackground, cardWidth };
    obj.children = callback2(ProductPreviewInner, obj1);
    return callback2(View, obj);
  }
  str = "100%";
}
function ProductPreviewInner(arg0) {
  let cardWidth;
  let disableBundleStaticBackground;
  let firstAvatarDecoration;
  let firstNameplate;
  let firstProfileEffect;
  let muteBundleStaticBackground;
  let product;
  ({ product, cardWidth } = arg0);
  ({ disableBundleStaticBackground, muteBundleStaticBackground } = arg0);
  const tmp = callback3();
  let obj = cardWidth(8207);
  const shopProductItems = obj.useShopProductItems(product);
  const items = [cardWidth];
  ({ firstProfileEffect, firstAvatarDecoration, firstNameplate } = shopProductItems);
  const memo = importAllResult.useMemo(() => {
    const obj = {};
    if (null != cardWidth) {
      let COLLECTIBLES_SHOP_CARD_WIDTH = cardWidth;
    } else {
      COLLECTIBLES_SHOP_CARD_WIDTH = cardWidth(outer1_2[5]).COLLECTIBLES_SHOP_CARD_WIDTH;
    }
    obj.width = COLLECTIBLES_SHOP_CARD_WIDTH;
    obj.height = cardWidth(outer1_2[5]).COLLECTIBLES_SHOP_CARD_HEIGHT;
    return obj;
  }, items);
  if (product.type === cardWidth(1876).CollectiblesItemType.BUNDLE) {
    obj = { deco: firstAvatarDecoration, pfx: firstProfileEffect, nameplate: firstNameplate, size: "small", previewAssets: product.previewAssets, disableStaticBackground: disableBundleStaticBackground, mutedStaticBackground: muteBundleStaticBackground, targetSize: memo };
    return callback2(importDefault(8215), obj);
  } else if (product.skuId === EXTERNAL_PRODUCT_SKU_IDS.ORB_PROFILE_BADGE) {
    obj = {};
    const obj1 = { uri: importDefault(8716) };
    obj.source = obj1;
    obj.style = tmp.externalProductImage;
    return callback2(importDefault(5085), obj);
  } else {
    const ALL = cardWidth(656).FractionalPremiumSKUsSets.ALL;
    if (ALL.has(product.skuId)) {
      const obj2 = { skuId: product.skuId, width: cardWidth(8717).FRACTIONAL_NITRO_COIN_SIZE.CARD, height: cardWidth(8717).FRACTIONAL_NITRO_COIN_SIZE.CARD };
      return callback2(cardWidth(8717).FractionalNitroCoinIllustration, obj2);
    } else {
      const first = callback(product.items, 1)[0];
      let type;
      if (null != first) {
        type = first.type;
      }
      if (cardWidth(1876).CollectiblesItemType.AVATAR_DECORATION === type) {
        const obj3 = { item: first, size: 100 };
        return callback2(importDefault(8226), obj3);
      } else if (cardWidth(1876).CollectiblesItemType.PROFILE_EFFECT === type) {
        const obj4 = { style: tmp.profileEffectContainer };
        const obj5 = { item: first, hideBackground: true };
        obj4.children = callback2(importDefault(8216), obj5);
        return callback2(View, obj4);
      } else if (cardWidth(1876).CollectiblesItemType.PROFILE_FRAME === type) {
        const obj6 = { style: tmp.profileFrameContainer };
        const obj7 = { profileFrame: first, previewWidth: cardWidth(8663).COLLECTIBLES_SHOP_CARD_WIDTH - importDefault(689).space.PX_32, previewHeight: closure_9, profileBackgroundColor: importDefault(689).colors.BACKGROUND_BASE_LOW };
        obj6.children = callback2(importDefault(8697), obj7);
        return callback2(View, obj6);
      } else if (cardWidth(1876).CollectiblesItemType.NAMEPLATE === type) {
        const obj8 = { item: first };
        return callback2(importDefault(8699), obj8);
      } else {
        return null;
      }
    }
  }
}
function AssetTileInternal(solidBackground) {
  let flag = solidBackground.solidBackground;
  if (flag === undefined) {
    flag = false;
  }
  let obj = require(3974) /* hexToRgb */;
  const tmp = callback3();
  const obj2 = require(3974) /* hexToRgb */;
  let num = 0.8;
  const token = require(3834) /* map */.useToken(importDefault(689).colors.BACKGROUND_BASE_LOW);
  if (flag) {
    num = 1;
  }
  obj = { style: null, importantForAccessibility: "no-hide-descendants", accessibilityElementsHidden: true };
  const items = [tmp.assetContainer, ];
  obj = {};
  obj.backgroundColor = obj.hexToRgbaString(obj2.hexWithOpacity(token, num));
  items[1] = obj;
  obj.style = items;
  obj.children = solidBackground.children;
  return callback2(View, obj);
}
const View = get_ActivityIndicator.View;
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const diff = require("CollectiblesShopCardInternalV2").COLLECTIBLES_SHOP_CARD_HEIGHT - 2 * require("_createForOfIteratorHelperLoose").space.PX_16;
let obj = {};
obj = { display: "flex", justifyContent: "center", alignItems: "center", overflow: "hidden", height: "100%", width: "100%", borderRadius: require("_createForOfIteratorHelperLoose").radii.sm };
obj.assetContainer = obj;
_createForOfIteratorHelperLoose = {};
const merged = Object.assign(get_ActivityIndicator.StyleSheet.absoluteFillObject);
_createForOfIteratorHelperLoose["justifyContent"] = "center";
_createForOfIteratorHelperLoose["alignItems"] = "center";
_createForOfIteratorHelperLoose["width"] = "100%";
_createForOfIteratorHelperLoose["height"] = "75%";
obj.overlayContainer = _createForOfIteratorHelperLoose;
let obj2 = { width: "100%", height: "100%", backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW };
obj.profileEffectContainer = obj2;
let obj3 = { width: "100%", height: diff, alignItems: "center" };
obj.profileFrameContainer = obj3;
obj.externalProductImage = { width: 80, height: 80, resizeMode: "contain" };
obj.purchasedOrDisabled = { opacity: 0.4 };
let obj4 = { position: "absolute", opacity: 1, color: require("_createForOfIteratorHelperLoose").colors.ICON_STRONG, fontWeight: "bold" };
obj.overlayIcon = obj4;
let closure_10 = _createForOfIteratorHelperLoose.createStyles(obj);
const memoResult = importAllResult.memo(function AssetTileV2(arg0) {
  let cardWidth;
  let disableBundleStaticBackground;
  let isDisabled;
  let isPurchased;
  let muteBundleStaticBackground;
  let product;
  let solidBackground;
  ({ product, isPurchased, isDisabled } = arg0);
  ({ solidBackground, disableBundleStaticBackground, muteBundleStaticBackground, cardWidth } = arg0);
  let obj = require(8664) /* useDefaultVariantIndex */;
  const defaultVariantIndex = obj.useDefaultVariantIndex(product);
  obj = { solidBackground };
  obj = { product: require(6785) /* getProductOrbPrice */.getSelectedProduct(product, defaultVariantIndex), isPurchased, isDisabled, disableBundleStaticBackground, muteBundleStaticBackground, cardWidth };
  const items = [callback2(ProductPreview, obj), , ];
  let tmp4 = isPurchased;
  if (isPurchased) {
    tmp4 = callback2(PurchasedAssetOverlay, {});
  }
  items[1] = tmp4;
  if (isDisabled) {
    isDisabled = !isPurchased;
  }
  if (isDisabled) {
    isDisabled = callback2(DisabledAssetOverlay, {});
  }
  items[2] = isDisabled;
  obj.children = items;
  return closure_8(AssetTileInternal, obj);
});
const result = require("get ActivityIndicator").fileFinishedImporting("modules/collectibles/native/CollectiblesShopCardAssetTileV2.tsx");

export default memoResult;
