// Module ID: 9539
// Function ID: 9540
// Name: CollectiblesShopCardAssetTileV2
// Dependencies: [32, 19, 17, 1074, 21, 9459, 575, 5014, 9285, 8667, 7731, 1987, 8742, 9493, 5717, 9540, 1075, 9541, 9506, 9495, 9518, 9520, 5011, 5596, 9460, 2]

// Module 9539 (CollectiblesShopCardAssetTileV2)
import nativeDefault from "native" /* 575 */;
import CollectiblesShopConstants from "CollectiblesShopConstants" /* 1074 */;
import CollectiblesItemType from "CollectiblesItemType" /* 1987 */;
import ColorUtils from "ColorUtils" /* 5011 */;
import useToken from "useToken" /* 5596 */;
import FastImageDefault from "FastImage" /* 5717 */;
import CollectiblesProductUtils from "CollectiblesProductUtils" /* 7731 */;
import LockIcon from "LockIcon" /* 8667 */;
import CheckmarkLargeBoldIcon from "CheckmarkLargeBoldIcon" /* 9285 */;
import CollectiblesShopCardV2 from "CollectiblesShopCardV2" /* 9459 */;
import useDefaultVariantIndex from "useDefaultVariantIndex" /* 9460 */;
import BundleSampleV2Default from "BundleSampleV2" /* 9493 */;
import ProfileEffectSampleV2Default from "ProfileEffectSampleV2" /* 9495 */;
import AvatarDecorationSampleV2Default from "AvatarDecorationSampleV2" /* 9506 */;
import ProfileFrameSamplePreviewDefault from "ProfileFrameSamplePreview" /* 9518 */;
import NameplateCardPreviewDefault from "NameplateCardPreview" /* 9520 */;
import _modDef9540 from "module_9540" /* 9540 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size_mod from "module_2" /* 2 */;

let StyleSheet;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let size;
let size1;
function PurchasedAssetOverlay() {
  let obj2;
  const tmp = closure_10();
  const obj = { style: tmp.overlayContainer, children: metroImportDefault(CheckmarkLargeBoldIcon.CheckmarkLargeBoldIcon, obj2) };
  obj2 = { size: "lg", style: tmp.overlayIcon };
  return metroImportDefault(hasOwnProperty, obj);
}
function DisabledAssetOverlay() {
  let obj2;
  const tmp = closure_10();
  const obj = { style: tmp.overlayContainer, children: metroImportDefault(LockIcon.LockIcon, obj2) };
  obj2 = { size: "lg", style: tmp.overlayIcon };
  return metroImportDefault(hasOwnProperty, obj);
}
function ProductPreview(arg0) {
  let cardWidth;
  let disableBundleStaticBackground;
  let isDisabled;
  let isPurchased;
  let muteBundleStaticBackground;
  let obj4;
  let product;
  ({ product, isPurchased } = arg0);
  ({ isDisabled, disableBundleStaticBackground, muteBundleStaticBackground, cardWidth } = arg0);
  const tmp = closure_10();
  const obj = CollectiblesProductUtils;
  const productType = obj.getProductType(product);
  if (productType !== CollectiblesItemType.CollectiblesItemType.PROFILE_EFFECT) {
    let str;
    if (productType !== CollectiblesItemType.CollectiblesItemType.PROFILE_FRAME) {
      str = "75%";
    }
    const items = [tmp.overlayContainer, , ];
    const tmp6 = hasOwnProperty;
    if (!isPurchased) {
      isPurchased = isDisabled;
    }
    if (isPurchased) {
      isPurchased = tmp.purchasedOrDisabled;
    }
    items[1] = isPurchased;
    const obj3 = { height: str };
    items[2] = obj3;
    const obj2 = { style: items, renderToHardwareTextureAndroid: true, needsOffscreenAlphaCompositing: true, children: metroImportDefault(ProductPreviewInner, obj4) };
    obj4 = { product, disableBundleStaticBackground, muteBundleStaticBackground, cardWidth };
    return metroImportDefault(tmp6, obj2);
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
  let obj4;
  let obj7;
  let obj9;
  let product;
  let tmp15;
  ({ product, cardWidth } = arg0);
  ({ disableBundleStaticBackground, muteBundleStaticBackground } = arg0);
  const tmp = closure_10();
  const obj = cardWidth(8742);
  const shopProductItems = obj.useShopProductItems(product);
  const items = [cardWidth];
  ({ firstProfileEffect, firstAvatarDecoration, firstNameplate } = shopProductItems);
  const memo = react.useMemo(() => {
    let COLLECTIBLES_SHOP_CARD_WIDTH = cardWidth;
    if (cardWidth == null) {
      COLLECTIBLES_SHOP_CARD_WIDTH = CollectiblesShopCardV2.COLLECTIBLES_SHOP_CARD_WIDTH;
    }
    size = { width: COLLECTIBLES_SHOP_CARD_WIDTH, height: CollectiblesShopCardV2.COLLECTIBLES_SHOP_CARD_HEIGHT };
    return size;
  }, items);
  if (product.type === cardWidth(1987).CollectiblesItemType.BUNDLE) {
    const obj2 = { deco: firstAvatarDecoration, pfx: firstProfileEffect, nameplate: firstNameplate, size: "small", previewAssets: product.previewAssets, disableStaticBackground: disableBundleStaticBackground, mutedStaticBackground: muteBundleStaticBackground, targetSize: memo };
    return closure_7(BundleSampleV2Default, obj2);
  } else if (product.skuId === EXTERNAL_PRODUCT_SKU_IDS.ORB_PROFILE_BADGE) {
    const obj3 = { source: obj4, style: tmp.externalProductImage };
    obj4 = { uri: _modDef9540 };
    const tmp25 = FastImageDefault;
    return closure_7(tmp25, obj3);
  } else {
    const ALL = tmp2(1075).FractionalPremiumSKUsSets.ALL;
    if (ALL.has(product.skuId)) {
      size = { skuId: product.skuId, width: tmp2(9541).FRACTIONAL_NITRO_COIN_SIZE.CARD, height: tmp2(9541).FRACTIONAL_NITRO_COIN_SIZE.CARD };
      const FractionalNitroCoinIllustration = tmp2(9541).FractionalNitroCoinIllustration;
      return closure_7(FractionalNitroCoinIllustration, size);
    } else {
      const first = _slicedToArray(product.items, 1)[0];
      let type;
      if (first != null) {
        type = first.type;
      }
      if (cardWidth(1987).CollectiblesItemType.AVATAR_DECORATION === type) {
        const obj5 = { item: first, size: 100 };
        return closure_7(AvatarDecorationSampleV2Default, obj5);
      } else if (cardWidth(1987).CollectiblesItemType.PROFILE_EFFECT === type) {
        const obj6 = { style: tmp.profileEffectContainer, children: closure_7(ProfileEffectSampleV2Default, obj7) };
        obj7 = { item: first, hideBackground: true };
        return closure_7(closure_5, obj6);
      } else if (cardWidth(1987).CollectiblesItemType.PROFILE_FRAME === type) {
        const obj8 = { style: tmp.profileFrameContainer, children: closure_7(tmp15, obj9) };
        obj9 = { profileFrame: first, previewWidth: cardWidth(9459).COLLECTIBLES_SHOP_CARD_WIDTH - nativeDefault.space.PX_32, previewHeight, profileBackgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
        tmp15 = ProfileFrameSamplePreviewDefault;
        return closure_7(closure_5, obj8);
      } else if (cardWidth(1987).CollectiblesItemType.NAMEPLATE === type) {
        const obj10 = { item: first };
        return closure_7(NameplateCardPreviewDefault, obj10);
      } else {
        return null;
      }
    }
  }
}
function AssetTileInternal(solidBackground) {
  let items;
  let flag = solidBackground.solidBackground;
  const children = solidBackground.children;
  if (flag === undefined) {
    flag = false;
  }
  const tmp = closure_10();
  const hexToRgbaString = ColorUtils.hexToRgbaString;
  ColorUtils;
  const hexWithOpacity = ColorUtils.hexWithOpacity;
  ColorUtils;
  let num = 0.8;
  const obj = useToken;
  const token = obj.useToken(nativeDefault.colors.BACKGROUND_BASE_LOW);
  if (flag) {
    num = 1;
  }
  const obj2 = { style: items, importantForAccessibility: "no-hide-descendants", accessibilityElementsHidden: true, children };
  items = [tmp.assetContainer, { backgroundColor: hexToRgbaString(hexWithOpacity(token, num)) }];
  ({ backgroundColor: hexToRgbaString(hexWithOpacity(token, num)) });
  return metroImportDefault(hasOwnProperty, obj2);
}
({ View: hasOwnProperty, StyleSheet } = react_native);
const EXTERNAL_PRODUCT_SKU_IDS = CollectiblesShopConstants.EXTERNAL_PRODUCT_SKU_IDS;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
const diff = CollectiblesShopCardV2.COLLECTIBLES_SHOP_CARD_HEIGHT - 2 * nativeDefault.space.PX_16;
let c9 = diff;
let createStyles = createStyles_mod;
let obj = { assetContainer: size, overlayContainer: obj2, profileEffectContainer: size1, profileFrameContainer: { width: "100%", height: diff, alignItems: "center" }, externalProductImage: { width: 80, height: 80, resizeMode: "contain" }, purchasedOrDisabled: { opacity: 0.4 }, overlayIcon: obj3 };
size = { display: "flex", justifyContent: "center", alignItems: "center", overflow: "hidden", height: "100%", width: "100%", borderRadius: nativeDefault.radii.sm };
createStyles = createStyles.createStyles;
obj2 = { justifyContent: "center", alignItems: "center", width: "100%", height: "75%" };
const merged = Object.assign(StyleSheet.absoluteFillObject);
size1 = { width: "100%", height: "100%", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj3 = { position: "absolute", opacity: 1, color: nativeDefault.colors.ICON_STRONG, fontWeight: "bold" };
let closure_10 = createStyles(obj);
const memoResult = react.memo(function AssetTileV2(arg0) {
  let cardWidth;
  let disableBundleStaticBackground;
  let isDisabled;
  let isPurchased;
  let items;
  let muteBundleStaticBackground;
  let product;
  let solidBackground;
  ({ product, isPurchased, isDisabled } = arg0);
  ({ solidBackground, disableBundleStaticBackground, muteBundleStaticBackground, cardWidth } = arg0);
  const obj = useDefaultVariantIndex;
  const defaultVariantIndex = obj.useDefaultVariantIndex(product);
  const obj3 = { solidBackground, children: items };
  items = [, , ];
  const obj2 = CollectiblesProductUtils;
  const obj4 = { product: obj2.getSelectedProduct(product, defaultVariantIndex), isPurchased, isDisabled, disableBundleStaticBackground, muteBundleStaticBackground, cardWidth };
  items[0] = metroImportDefault(ProductPreview, obj4);
  let tmp4Result = isPurchased;
  const tmp2 = metroImportAll;
  const tmp3 = AssetTileInternal;
  if (tmp4Result) {
    tmp4Result = tmp4(PurchasedAssetOverlay, {});
  }
  items[1] = tmp4Result;
  if (isDisabled) {
    isDisabled = !isPurchased;
  }
  if (isDisabled) {
    isDisabled = tmp4(DisabledAssetOverlay, {});
  }
  items[2] = isDisabled;
  return tmp2(tmp3, obj3);
});
size = size_mod;
const result = size.fileFinishedImporting("modules/collectibles/native/CollectiblesShopCardAssetTileV2.tsx");

export default memoResult;
