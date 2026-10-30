// Module ID: 16934
// Function ID: 16935
// Name: QuestHomeOrbShopRewardCardAssetTile
// Dependencies: [32, 19, 17, 1074, 21, 9437, 575, 5009, 9484, 38, 1988, 5712, 9485, 9486, 8734, 9471, 9518, 1075, 9519, 9473, 9496, 9498, 9438, 7724, 5006, 5591, 2]

// Module 16934 (QuestHomeOrbShopRewardCardAssetTile)
import _modDef38 from "module_38" /* 38 */;
import nativeDefault from "native" /* 575 */;
import CollectiblesShopConstants from "CollectiblesShopConstants" /* 1074 */;
import CollectiblesItemType from "CollectiblesItemType" /* 1988 */;
import ColorUtils from "ColorUtils" /* 5006 */;
import useToken from "useToken" /* 5591 */;
import FastImageDefault from "FastImage" /* 5712 */;
import CollectiblesProductUtils from "CollectiblesProductUtils" /* 7724 */;
import CollectiblesShopCardV2 from "CollectiblesShopCardV2" /* 9437 */;
import useDefaultVariantIndex from "useDefaultVariantIndex" /* 9438 */;
import AvatarDecorationSampleV2 from "AvatarDecorationSampleV2" /* 9484 */;
import AssetRegistryDefault from "AssetRegistry" /* 9485 */;
import CutoutableAvatarDecorationDefault from "CutoutableAvatarDecoration" /* 9486 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size_mod from "module_2" /* 2 */;

let dependencyMap;

let StyleSheet;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let obj2;
let size;
let size1;
function CompactAvatarDecorationPreview(arg0) {
  let item;
  let items;
  ({ item, size } = arg0);
  const tmp = closure_13(size);
  const tmp2 = _modDef38;
  tmp2(item.type === CollectiblesItemType.CollectiblesItemType.AVATAR_DECORATION, "Item must be Avatar Decoration");
  const obj = { style: tmp.container, children: items };
  const obj2 = { style: tmp.avatar, resizeMode: "contain", source: AssetRegistryDefault, accessible: false };
  const tmp4 = FastImageDefault;
  items = [metroImportDefault(tmp4, obj2), ];
  const obj3 = { style: tmp.avatarDecoration, accessibilityLabel: item.label, children: metroImportDefault(CutoutableAvatarDecorationDefault, { avatarDecoration: item, size }) };
  items[1] = metroImportDefault(hasOwnProperty, obj3);
  return metroImportAll(hasOwnProperty, obj);
}
function ProductPreviewInner(cardHeight) {
  let avatarDecorationSize;
  let cardWidth;
  let closure_2;
  let firstAvatarDecoration;
  let firstNameplate;
  let firstProfileEffect;
  let obj10;
  let obj4;
  let obj8;
  let product;
  let prop;
  let prop1;
  let tmp16;
  let tmp17;
  ({ product, cardWidth } = cardHeight);
  cardHeight = cardHeight.cardHeight;
  let flag = cardHeight.hideCardDetails;
  if (flag === undefined) {
    flag = false;
  }
  let tmp = closure_15();
  const obj = cardWidth(8734);
  const shopProductItems = obj.useShopProductItems(product);
  ({ firstProfileEffect, firstAvatarDecoration, firstNameplate } = shopProductItems);
  const tmp5 = cardWidth < cardWidth(9437).COLLECTIBLES_SHOP_CARD_WIDTH || cardHeight < cardWidth(9437).COLLECTIBLES_SHOP_CARD_HEIGHT;
  dependencyMap = tmp5;
  const items = [cardHeight, cardWidth, tmp5];
  const memo = react.useMemo(() => {
    let tmp = null;
    if (closure_2) {
      size = { width: cardWidth, height: cardHeight, profileFramePreviewWidth: cardWidth - PX_32, profileFramePreviewHeight: cardHeight - closure_12, avatarDecorationSize: Math.round(Math.min(c9, cardWidth * (c9 / CollectiblesShopCardV2.COLLECTIBLES_SHOP_CARD_WIDTH))) };
      const _Math = Math;
      const _Math2 = Math;
      tmp = size;
    }
    return tmp;
  }, items);
  const items1 = [cardHeight, cardWidth, memo];
  const memo1 = react.useMemo(() => {
    let size1;
    const tmp = memo;
    if (null != memo) {
      size = { width: null, height: null };
      ({ width: obj2.width, height: obj2.height } = tmp);
      size1 = size;
    } else {
      size1 = { width: cardWidth, height: cardHeight };
    }
    return size1;
  }, items1);
  if (product.type === cardWidth(1988).CollectiblesItemType.BUNDLE) {
    const obj2 = { deco: firstAvatarDecoration, pfx: firstProfileEffect, nameplate: firstNameplate, size: "small", previewAssets: product.previewAssets, disableStaticBackground: true, targetSize: memo1 };
    return closure_7(cardHeight(9471), obj2);
  } else if (product.skuId === EXTERNAL_PRODUCT_SKU_IDS.ORB_PROFILE_BADGE) {
    const obj3 = { source: obj4, style: tmp.externalProductImage };
    obj4 = { uri: cardHeight(9518) };
    const tmp33 = cardHeight(5712);
    return closure_7(tmp33, obj3);
  } else {
    const ALL = tmp2(1075).FractionalPremiumSKUsSets.ALL;
    if (ALL.has(product.skuId)) {
      size = { skuId: product.skuId, width: tmp2(9519).FRACTIONAL_NITRO_COIN_SIZE.CARD, height: tmp2(9519).FRACTIONAL_NITRO_COIN_SIZE.CARD };
      const FractionalNitroCoinIllustration = tmp2(9519).FractionalNitroCoinIllustration;
      return closure_7(FractionalNitroCoinIllustration, size);
    } else {
      const first = memo(product.items, 1)[0];
      let type;
      if (first != null) {
        type = first.type;
      }
      if (cardWidth(1988).CollectiblesItemType.AVATAR_DECORATION === type) {
        let tmp24Result;
        if (flag) {
          const obj5 = { item: first, size: avatarDecorationSize };
          avatarDecorationSize = undefined;
          const tmp28 = CompactAvatarDecorationPreview;
          if (memo != null) {
            avatarDecorationSize = memo.avatarDecorationSize;
          }
          if (avatarDecorationSize == null) {
            avatarDecorationSize = size;
          }
          tmp24Result = tmp24(tmp28, obj5);
        } else {
          const obj6 = { item: first, size };
          tmp24Result = tmp24(cardHeight(9484), obj6);
        }
        return tmp24Result;
      } else if (cardWidth(1988).CollectiblesItemType.PROFILE_EFFECT === type) {
        const obj7 = { style: tmp.profileEffectContainer, children: closure_7(cardHeight(9473), obj8) };
        obj8 = { item: first, hideBackground: true };
        return closure_7(closure_5, obj7);
      } else if (cardWidth(1988).CollectiblesItemType.PROFILE_FRAME === type) {
        if (flag) {
          let profileFrameContainer;
          if (null != memo) {
            const items2 = [, ];
            ({ profileFrameContainer: arr3[0], compactProfileFrameContainer: arr3[1] } = tmp);
            profileFrameContainer = items2;
          }
          const obj9 = { style: profileFrameContainer, children: closure_7(tmp17, obj10) };
          obj10 = { profileFrame: first, previewWidth: prop, previewHeight: prop1, profileBackgroundColor: tmp16(575).colors.BACKGROUND_BASE_LOW };
          prop = undefined;
          tmp16 = cardHeight;
          tmp17 = cardHeight(9496);
          if (memo != null) {
            prop = memo.profileFramePreviewWidth;
          }
          if (prop == null) {
            prop = tmp2(9437).COLLECTIBLES_SHOP_CARD_WIDTH - PX_32;
          }
          prop1 = undefined;
          if (memo != null) {
            prop1 = memo.profileFramePreviewHeight;
          }
          if (prop1 == null) {
            prop1 = closure_10;
          }
          return closure_7(tmp15, obj9);
        }
        profileFrameContainer = tmp.profileFrameContainer;
      } else if (cardWidth(1988).CollectiblesItemType.NAMEPLATE === type) {
        const obj11 = { item: first };
        return closure_7(cardHeight(9498), obj11);
      } else {
        return null;
      }
    }
  }
}
({ View: hasOwnProperty, StyleSheet } = react_native);
const EXTERNAL_PRODUCT_SKU_IDS = CollectiblesShopConstants.EXTERNAL_PRODUCT_SKU_IDS;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let c9 = 100;
const diff = CollectiblesShopCardV2.COLLECTIBLES_SHOP_CARD_HEIGHT - 2 * nativeDefault.space.PX_16;
let c10 = diff;
const PX_32 = nativeDefault.space.PX_32;
let closure_12 = 2 * nativeDefault.space.PX_16;
let createStyles = createStyles_mod;
let closure_13 = createStyles.createStyles((width) => {
  const obj = { container: { width, height: width, justifyContent: "center", alignItems: "center" }, avatar: size, avatarDecoration: { position: "absolute", width, height: width, justifyContent: "center", alignItems: "center" } };
  size = { height: width * AvatarDecorationSampleV2.avatarPlaceholderSizeRatio, width: width * AvatarDecorationSampleV2.avatarPlaceholderSizeRatio, borderRadius: width * AvatarDecorationSampleV2.avatarPlaceholderSizeRatio / 2, opacity: 0.8, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
  return obj;
});
createStyles = createStyles_mod;
let obj = { assetContainer: size, overlayContainer: obj2, profileEffectContainer: size1, profileFrameContainer: { width: "100%", height: diff, alignItems: "center" }, compactProfileFrameContainer: { height: "100%", justifyContent: "center" }, externalProductImage: { width: 80, height: 80, resizeMode: "contain" } };
size = { display: "flex", justifyContent: "center", alignItems: "center", overflow: "hidden", height: "100%", width: "100%", borderRadius: nativeDefault.radii.sm };
createStyles = createStyles.createStyles;
obj2 = { justifyContent: "center", alignItems: "center", width: "100%", height: "100%" };
const merged = Object.assign(StyleSheet.absoluteFillObject);
size1 = { width: "100%", height: "100%", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
let closure_15 = createStyles(obj);
const memoResult = react.memo(function QuestHomeOrbShopRewardCardAssetTile(arg0) {
  let cardHeight;
  let cardWidth;
  let hideCardDetails;
  let items;
  let items1;
  let obj6;
  let obj8;
  let product;
  ({ product, hideCardDetails } = arg0);
  ({ cardWidth, cardHeight } = arg0);
  if (hideCardDetails === undefined) {
    hideCardDetails = false;
  }
  const tmp = closure_15();
  const obj = useDefaultVariantIndex;
  const defaultVariantIndex = obj.useDefaultVariantIndex(product);
  const obj2 = CollectiblesProductUtils;
  const selectedProduct = obj2.getSelectedProduct(product, defaultVariantIndex);
  const obj3 = CollectiblesProductUtils;
  const productType = obj3.getProductType(selectedProduct);
  ColorUtils;
  ColorUtils;
  useToken;
  if (!hideCardDetails) {
    if (productType !== CollectiblesItemType.CollectiblesItemType.PROFILE_EFFECT) {
      let str;
      if (productType !== CollectiblesItemType.CollectiblesItemType.PROFILE_FRAME) {
        str = "75%";
      }
      const obj4 = { style: items, importantForAccessibility: "no-hide-descendants", accessibilityElementsHidden: true, children: metroImportDefault(hasOwnProperty, obj6) };
      items = [tmp.assetContainer, ];
      const obj5 = { backgroundColor: tmp10 };
      items[1] = obj5;
      obj6 = { style: items1, renderToHardwareTextureAndroid: true, needsOffscreenAlphaCompositing: true, children: metroImportDefault(ProductPreviewInner, obj8) };
      items1 = [tmp.overlayContainer, ];
      const obj7 = { height: str };
      items1[1] = obj7;
      obj8 = { product: selectedProduct, cardWidth, cardHeight, hideCardDetails };
      return metroImportDefault(hasOwnProperty, obj4);
    }
  }
  str = "100%";
});
size = size_mod;
const result = size.fileFinishedImporting("modules/quests/native/QuestHomeOrbShopRewardCardAssetTile.tsx");

export default memoResult;
