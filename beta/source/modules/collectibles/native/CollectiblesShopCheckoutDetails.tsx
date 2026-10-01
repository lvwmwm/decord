// Module ID: 10476
// Function ID: 10477
// Name: CollectiblesShopCheckoutDetails
// Dependencies: [19, 17, 1076, 8261, 21, 4836, 576, 7672, 5899, 10477, 7646, 8285, 7616, 8260, 1971, 8281, 1974, 1077, 8307, 8306, 8273, 1115, 4832, 6973, 8313, 10478, 7623, 4488, 8329, 2]
// Exports: default

// Module 10476 (CollectiblesShopCheckoutDetails)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import CollectiblesShopConstants from "CollectiblesShopConstants" /* 1076 */;
import FractionalPremiumSKUs from "FractionalPremiumSKUs" /* 1077 */;
import utils from "utils" /* 1971 */;
import CollectiblesItemType from "CollectiblesItemType" /* 1974 */;
import Text_Text from "Text/Text" /* 4832 */;
import FastImageDefault from "FastImage" /* 5899 */;
import CollectiblesProductUtils from "CollectiblesProductUtils" /* 6973 */;
import useShopProductItems from "useShopProductItems" /* 7616 */;
import useCurrentUser from "useCurrentUser" /* 7623 */;
import useMaybeFetchProfileFrameDefault from "useMaybeFetchProfileFrame" /* 7646 */;
import useProfileEffectDefault from "useProfileEffect" /* 7672 */;
import BundleSampleV2Default from "BundleSampleV2" /* 8260 */;
import AvatarDecorationSampleV2Default from "AvatarDecorationSampleV2" /* 8273 */;
import NameplateDefault from "Nameplate" /* 8281 */;
import ProfileFrameSamplePreviewDefault from "ProfileFrameSamplePreview" /* 8285 */;
import _modDef8306 from "module_8306" /* 8306 */;
import FractionalNitroCoinIllustration2 from "FractionalNitroCoinIllustration" /* 8307 */;
import collectibles_CollectiblesUtils from "collectibles/CollectiblesUtils" /* 8313 */;
import getProductName from "getProductName" /* 8329 */;
import _modDef10477 from "module_10477" /* 10477 */;
import react from "react" /* 19 */;
import CollectiblesPreviewConstants from "CollectiblesPreviewConstants" /* 8261 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let dependencyMap;

let SAMPLE_PROFILE_ASPECT_RATIO;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let size;
let tmp3;
const intl8 = tmp3(1115);
function ProfileEffectAssetPreview(item) {
  let items;
  let obj3;
  let obj5;
  item = item.item;
  const tmp = closure_11();
  const tmp4 = useProfileEffectDefault(item.skuId);
  let tmp5 = null;
  if (null != tmp4) {
    const obj = { style: tmp.profileEffectContainer, children: items };
    const obj2 = { source: obj3, alt: tmp4.accessibilityLabel, style: tmp.profileEffect, resizeMode: "cover" };
    obj3 = { uri: _modDef10477 };
    const tmp2Result = FastImageDefault;
    items = [metroImportDefault(tmp2Result, obj2), ];
    const obj4 = { style: tmp.profileEffect, source: obj5, alt: tmp4.title, resizeMode: "cover" };
    obj5 = { uri: tmp4.thumbnailPreviewSrc };
    items[1] = metroImportDefault(FastImageDefault, obj4);
    tmp5 = metroImportAll(View, obj);
  }
  return tmp5;
}
function ProfileFrameAssetPreview(arg0) {
  let height;
  let item;
  let width;
  ({ item, width, height } = arg0);
  const tmp3 = useMaybeFetchProfileFrameDefault(item.skuId);
  let tmp4 = null;
  if (null != tmp3) {
    const obj = { profileFrame: tmp3, previewWidth: width, previewHeight: height, profileBackgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
    const tmpResult = ProfileFrameSamplePreviewDefault;
    tmp4 = metroImportDefault(tmpResult, obj);
  }
  return tmp4;
}
function BundleAssetPreview(height) {
  let firstAvatarDecoration;
  let firstNameplate;
  let firstProfileEffect;
  let obj3;
  let obj4;
  let product;
  let width;
  ({ product, width } = height);
  height = height.height;
  const tmp = closure_9();
  let closure_2 = tmp;
  let obj = useShopProductItems;
  const shopProductItems = obj.useShopProductItems(product);
  const bundleWidth = metroRequire.small.bundleWidth;
  const result = width / bundleWidth;
  let c4 = result;
  let items = [tmp.bundlePreviewContainer, width, height];
  ({ firstProfileEffect, firstAvatarDecoration, firstNameplate } = shopProductItems);
  let items1 = [tmp.bundlePreviewScale, bundleWidth, result];
  const memo = react.useMemo(() => {
    const items = [closure_2.bundlePreviewContainer, ];
    size = { width, height };
    items[1] = size;
    return items;
  }, items);
  const items2 = [width, height];
  const memo1 = react.useMemo(() => {
    let items1;
    const items = [closure_2.bundlePreviewScale, ];
    size = { width: bundleWidth, height: bundleWidth, transform: items1 };
    items1 = [];
    const obj = { scale };
    items1[0] = obj;
    items[1] = size;
    return items;
  }, items1);
  const obj2 = { style: memo, children: metroImportDefault(View, obj3) };
  obj3 = { style: memo1, children: metroImportDefault(BundleSampleV2Default, obj4) };
  const memo2 = react.useMemo(() => {
    size = { width, height };
    return size;
  }, items2);
  obj4 = { deco: firstAvatarDecoration, pfx: firstProfileEffect, nameplate: firstNameplate, previewAssets: product.previewAssets, disableStaticBackground: true, size: "small", targetSize: memo2 };
  return metroImportDefault(View, obj2);
}
function NameplateAssetPreview(item) {
  item = item.item;
  const tmp = closure_12();
  const obj = utils;
  const nameplateData = obj.getNameplateData(item);
  const obj2 = { nameplate: nameplateData, fullOpacity: true, isSquarePreview: true, style: tmp.nameplate };
  return metroImportDefault(NameplateDefault, obj2);
}
function CollectibleProductPreview(arg0) {
  let items;
  let num;
  let product;
  let recipientUser;
  ({ product, recipientUser } = arg0);
  const tmp = closure_9();
  if (product.type === CollectiblesItemType.CollectiblesItemType.PROFILE_EFFECT) {
    num = 42;
  } else {
    num = 55;
  }
  let avatarSource;
  if (recipientUser != null) {
    avatarSource = recipientUser.getAvatarSource(undefined, false, num);
  }
  const obj = { style: items, children: metroImportDefault(CollectibleProductPreviewContent, { product, width: num, height: 55, userAvatarSource: avatarSource }) };
  items = [tmp.productPreviewContainer, { height: 55, width: num }];
  return metroImportDefault(View, obj);
}
function CollectibleProductPreviewContent(userAvatarSource) {
  let height;
  let obj2;
  let product;
  let width;
  ({ product, width, height } = userAvatarSource);
  userAvatarSource = userAvatarSource.userAvatarSource;
  const tmp = closure_9();
  const ALL = FractionalPremiumSKUs.FractionalPremiumSKUsSets.ALL;
  if (ALL.has(product.skuId)) {
    size = { skuId: product.skuId, width: FractionalNitroCoinIllustration2.FRACTIONAL_NITRO_COIN_SIZE.CHECKOUT, height: FractionalNitroCoinIllustration2.FRACTIONAL_NITRO_COIN_SIZE.CHECKOUT };
    const FractionalNitroCoinIllustration = tmp2(8307).FractionalNitroCoinIllustration;
    return metroImportDefault(FractionalNitroCoinIllustration, size);
  } else if (product.skuId === EXTERNAL_PRODUCT_SKU_IDS.ORB_PROFILE_BADGE) {
    const obj = { source: obj2, style: tmp.externalProductImage };
    obj2 = { uri: _modDef8306 };
    const tmp18 = FastImageDefault;
    return metroImportDefault(tmp18, obj);
  } else {
    const type = product.type;
    if (CollectiblesItemType.CollectiblesItemType.AVATAR_DECORATION === type) {
      const obj3 = { item: product.items[0], size: width, avatarSource: userAvatarSource, animate: false };
      return metroImportDefault(AvatarDecorationSampleV2Default, obj3);
    } else if (CollectiblesItemType.CollectiblesItemType.PROFILE_EFFECT === type) {
      const obj4 = { item: product.items[0] };
      return metroImportDefault(ProfileEffectAssetPreview, obj4);
    } else if (CollectiblesItemType.CollectiblesItemType.NAMEPLATE === type) {
      const obj5 = { item: product.items[0] };
      return metroImportDefault(NameplateAssetPreview, obj5);
    } else if (CollectiblesItemType.CollectiblesItemType.PROFILE_FRAME === type) {
      const size1 = { item: product.items[0], width, height };
      return metroImportDefault(ProfileFrameAssetPreview, size1);
    } else if (CollectiblesItemType.CollectiblesItemType.BUNDLE === type) {
      const size2 = { product, width, height };
      return metroImportDefault(BundleAssetPreview, size2);
    } else {
      return null;
    }
  }
}
function ProductDetails(product) {
  let items1;
  let items2;
  let obj2;
  let tmp7;
  product = product.product;
  require = product;
  const recipientUser = product.recipientUser;
  const tmp = closure_9();
  const items = [, ];
  ({ type: arr[0], skuId: arr[1] } = product);
  const memo = react.useMemo(() => {
    const ALL = FractionalPremiumSKUs.FractionalPremiumSKUsSets.ALL;
    if (ALL.has(require.skuId)) {
      const intl7 = tmp(1115).intl;
      return intl7.string(intl8.t.DFMPWS);
    } else if (require.skuId === EXTERNAL_PRODUCT_SKU_IDS.ORB_PROFILE_BADGE) {
      const intl6 = tmp(1115).intl;
      return intl6.string(intl8.t["0+rBWT"]);
    } else {
      const type = tmp3.type;
      if (CollectiblesItemType.CollectiblesItemType.AVATAR_DECORATION === type) {
        const intl5 = tmp(1115).intl;
        return intl5.string(intl8.t["7v0T9P"]);
      } else if (CollectiblesItemType.CollectiblesItemType.PROFILE_EFFECT === type) {
        const intl4 = tmp(1115).intl;
        return intl4.string(intl8.t.wR5wOo);
      } else if (CollectiblesItemType.CollectiblesItemType.NAMEPLATE === type) {
        const intl3 = tmp(1115).intl;
        return intl3.string(intl8.t.x5CoXR);
      } else if (CollectiblesItemType.CollectiblesItemType.PROFILE_FRAME === type) {
        const intl2 = tmp(1115).intl;
        return intl2.string(intl8.t.GWrZOd);
      } else if (CollectiblesItemType.CollectiblesItemType.BUNDLE === type) {
        const intl = tmp(1115).intl;
        return intl.string(intl8.t.Zr5tjn);
      } else {
        return null;
      }
    }
  }, items);
  if (null == memo) {
    const tmp3 = closure_7;
    const obj = { style: tmp.productDetails, children: closure_7(Text_Text.Text, obj2) };
    obj2 = { variant: "text-md/semibold", children: product.name };
    tmp7 = closure_7(View, obj);
  } else {
    const obj3 = { style: tmp.productDetails, children: items1 };
    const obj4 = { product, recipientUser };
    items1 = [closure_7(CollectibleProductPreview, obj4), ];
    const obj5 = { style: tmp.productDetailsTextContainer, children: items2 };
    const obj6 = { variant: "text-md/semibold", children: product.name };
    items2 = [closure_7(Text_Text.Text, obj6), ];
    const obj7 = { variant: "text-sm/medium", children: memo };
    items2[1] = closure_7(Text_Text.Text, obj7);
    items1[1] = closure_8(View, obj5);
    tmp7 = closure_8(View, obj3);
  }
  return tmp7;
}
function ProductPriceAmountTag(product) {
  let tmp3Result;
  product = product.product;
  require = product;
  const hasShopDiscount = product.hasShopDiscount;
  const useOrbPrice = product.useOrbPrice;
  const items = [product, hasShopDiscount, useOrbPrice];
  const memo = react.useMemo(() => {
    let orbPrice;
    let priceText;
    if (useOrbPrice) {
      const obj = { product: require, hasShopDiscount };
      const tmpResult = CollectiblesProductUtils;
      orbPrice = tmpResult.getProductOrbPrice(obj);
    } else {
      const tmpResult2 = collectibles_CollectiblesUtils;
      priceText = tmpResult2.getFormattedPriceForCollectiblesProduct(require, hasShopDiscount, true);
    }
    return { orbPrice, priceText };
  }, items);
  let orbPrice = memo.orbPrice;
  if (useOrbPrice) {
    let amount;
    const tmp9 = hasShopDiscount(useOrbPrice[25]);
    if (orbPrice != null) {
      amount = orbPrice.amount;
    }
    const obj2 = { orbAmount: amount };
    tmp3Result = tmp3(tmp9, obj2);
  } else {
    let obj = { variant: "text-md/semibold", children: tmp2 };
    tmp3Result = tmp3(require("Text/Text").Text, obj);
  }
  return tmp3Result;
}
const View = react_native.View;
const EXTERNAL_PRODUCT_SKU_IDS = CollectiblesShopConstants.EXTERNAL_PRODUCT_SKU_IDS;
({ BUNDLE_PREVIEW_CONFIG: metroRequire, SAMPLE_PROFILE_ASPECT_RATIO } = CollectiblesPreviewConstants);
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { externalProductImage: { width: 45, height: 45 }, bundlePreviewContainer: obj2, bundlePreviewScale: { overflow: "hidden", alignItems: "center", justifyContent: "center" }, productContainer: obj3, productDetailsContainer: obj4, productPreviewContainer: { justifyContent: "center", alignItems: "center" }, productDetails: obj5, productDetailsTextContainer: obj6, errorContainer: obj7 };
obj2 = { alignItems: "center", justifyContent: "center", overflow: "hidden", borderRadius: nativeDefault.radii.xs };
createStyles = createStyles.createStyles;
obj3 = { borderRadius: nativeDefault.radii.lg, flexDirection: "column", backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
obj4 = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_16 };
obj5 = { display: "flex", flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12 };
obj6 = { gap: nativeDefault.space.PX_4 };
obj7 = { height: 36, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, justifyContent: "center", paddingHorizontal: nativeDefault.space.PX_16, borderBottomLeftRadius: nativeDefault.radii.lg, borderBottomRightRadius: nativeDefault.radii.lg };
let closure_9 = createStyles(obj);
createStyles = createStyles_mod;
let closure_10 = createStyles.createStyles((arg0) => {
  let BORDER_FEEDBACK_CRITICAL;
  let tmp5;
  const colors = nativeDefault.colors;
  const tmp3 = arg0;
  if (tmp3) {
    BORDER_FEEDBACK_CRITICAL = colors.BACKGROUND_BRAND;
    tmp5 = tmp;
  } else {
    BORDER_FEEDBACK_CRITICAL = colors.BORDER_FEEDBACK_CRITICAL;
    tmp5 = tmp;
  }
  const obj = { giftProductContainer: { borderWidth: 2, borderColor: BORDER_FEEDBACK_CRITICAL, marginHorizontal: tmp5(576).space.PX_16, backgroundColor: "paddingHorizontal" } };
  ({ borderWidth: 2, borderColor: BORDER_FEEDBACK_CRITICAL, marginHorizontal: tmp5(576).space.PX_16, backgroundColor: "paddingHorizontal" });
  return obj;
});
createStyles = createStyles_mod;
const obj8 = { profileEffectContainer: size, profileEffect: { position: "absolute", width: "100%", aspectRatio: SAMPLE_PROFILE_ASPECT_RATIO, top: 0 } };
size = { position: "relative", width: "100%", height: "100%", borderRadius: nativeDefault.radii.xs, overflow: "hidden" };
let closure_11 = createStyles.createStyles(obj8);
createStyles = createStyles_mod;
const obj9 = { nameplate: { borderRadius: nativeDefault.radii.xs } };
({ borderRadius: nativeDefault.radii.xs });
let closure_12 = createStyles.createStyles(obj9);
size = size_mod;
let result = size.fileFinishedImporting("modules/collectibles/native/CollectiblesShopCheckoutDetails.tsx");

export default function CollectiblesShopCheckoutDetails(product) {
  let Text;
  let hasShopDiscount;
  let intl;
  let items2;
  let items3;
  let obj6;
  product = product.product;
  require = product;
  let flag = product.isValidRecipient;
  const recipientUser = product.recipientUser;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = product.useOrbPrice;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let flag3 = product.isGift;
  if (flag3 === undefined) {
    flag3 = false;
  }
  const tmp = closure_9();
  const tmp3 = require;
  const tmp2 = closure_10(flag);
  let obj = useCurrentUser;
  const currentUser = obj.useCurrentUser();
  let obj2 = flag2(4488);
  const canUseShopDiscountsResult = obj2.canUseShopDiscounts(currentUser);
  dependencyMap = canUseShopDiscountsResult;
  const items = [product, flag2, canUseShopDiscountsResult];
  const items1 = [tmp.productContainer, ];
  let giftProductContainer = flag3;
  const memo = react.useMemo(() => {
    let str;
    const obj = getProductName;
    const productNameAndTypeLabel = obj.getProductNameAndTypeLabel(require);
    if (flag2) {
      const intl = tmp(1115).intl;
      const formatToPlainString = intl.formatToPlainString;
      const W4DfeF = tmp(1115).t.W4DfeF;
      const obj2 = { product: require, hasShopDiscount };
      const tmpResult = CollectiblesProductUtils;
      const productOrbPrice = tmpResult.getProductOrbPrice(obj2);
      let str2;
      if (productOrbPrice != null) {
        str2 = productOrbPrice.amount;
      }
      if (str2 == null) {
        str2 = "";
      }
      const obj3 = { orbAmount: str2 };
      str = formatToPlainString(W4DfeF, obj3);
    } else {
      const tmpResult2 = collectibles_CollectiblesUtils;
      str = tmpResult2.getFormattedPriceForCollectiblesProduct(tmp3, hasShopDiscount, true);
      if (str == null) {
        str = "";
      }
    }
    return "" + productNameAndTypeLabel + ", " + str;
  }, items);
  if (flag3) {
    giftProductContainer = tmp2.giftProductContainer;
  }
  let obj3 = { style: items1, children: items3 };
  items1[1] = giftProductContainer;
  const obj4 = { style: tmp.productDetailsContainer, accessibilityLabel: memo, accessible: true, children: items2 };
  items2 = [closure_7(ProductDetails, { product, recipientUser }), closure_7(ProductPriceAmountTag, { product, hasShopDiscount: canUseShopDiscountsResult, useOrbPrice: flag2 })];
  items3 = [closure_8(tmp9, obj4), ];
  if (flag3) {
    flag3 = !flag;
  }
  if (flag3) {
    const obj5 = { style: tmp.errorContainer, children: closure_7(Text, obj6) };
    obj6 = { variant: "text-xs/semibold", color: "text-feedback-critical", children: intl.string(intl8.t["3YfczA"]) };
    Text = Text_Text.Text;
    intl = intl8.intl;
    flag3 = tmp10(tmp9, obj5);
  }
  items3[1] = flag3;
  return closure_8(View, obj3);
};
