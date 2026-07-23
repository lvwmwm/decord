// Module ID: 11813
// Function ID: 91640
// Name: ProfileEffectAssetPreview
// Dependencies: [31, 27, 655, 8200, 33, 4130, 689, 8225, 5085, 11814, 8241, 8697, 8207, 8233, 8215, 1873, 8229, 1876, 656, 8717, 8716, 8226, 1212, 4126, 6785, 8719, 11815, 8667, 3776, 8731, 2]
// Exports: default

// Module 11813 (ProfileEffectAssetPreview)
import result from "result";
import { View } from "useCurrentUser";
import { EXTERNAL_PRODUCT_SKU_IDS } from "items";
import SAMPLE_PROFILE_ASPECT_RATIO from "SAMPLE_PROFILE_ASPECT_RATIO";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_7;
let closure_8;
let require = arg1;
function ProfileEffectAssetPreview(item) {
  const tmp = callback4();
  const tmp2 = importDefault(8225)(item.item.skuId);
  let tmp3 = null;
  if (null != tmp2) {
    let obj = { style: tmp.profileEffectContainer };
    obj = {};
    obj = { uri: importDefault(11814) };
    obj.source = obj;
    obj.alt = tmp2.accessibilityLabel;
    obj.style = tmp.profileEffect;
    obj.resizeMode = "cover";
    const items = [callback(importDefault(5085), obj), ];
    const obj1 = { style: tmp.profileEffect };
    const obj2 = { uri: tmp2.thumbnailPreviewSrc };
    obj1.source = obj2;
    obj1.alt = tmp2.title;
    obj1.resizeMode = "cover";
    items[1] = callback(importDefault(5085), obj1);
    obj.children = items;
    tmp3 = callback2(View, obj);
    const tmp9 = importDefault(5085);
  }
  return tmp3;
}
function ProfileFrameAssetPreview(arg0) {
  let height;
  let item;
  let width;
  ({ item, width, height } = arg0);
  const tmp = importDefault(8241)(item.skuId, "CollectiblesShopCheckoutDetails");
  let tmp2 = null;
  if (null != tmp) {
    const obj = { profileFrame: tmp, previewWidth: width, previewHeight: height, profileBackgroundColor: importDefault(689).colors.BACKGROUND_BASE_LOW };
    tmp2 = callback(importDefault(8697), obj);
    const tmp6 = importDefault(8697);
  }
  return tmp2;
}
function BundleAssetPreview(height) {
  let firstAvatarDecoration;
  let firstNameplate;
  let firstProfileEffect;
  let product;
  let width;
  ({ product, width } = height);
  height = height.height;
  let rounded;
  let c5;
  const tmp = _createForOfIteratorHelperLoose();
  const dependencyMap = tmp;
  let obj = width(8207);
  const shopProductItems = obj.useShopProductItems(product);
  ({ firstProfileEffect, firstAvatarDecoration, firstNameplate } = shopProductItems);
  let obj1 = width(8233);
  const bundleWidth = BUNDLE_PREVIEW_CONFIG.small.bundleWidth;
  rounded = bundleWidth;
  if (!obj1.useCollectiblesMobileFlexibleBundlesExperiment("CollectiblesShopCheckoutDetails").enabled) {
    const _Math = Math;
    rounded = Math.round(1.1494252873563218 * bundleWidth);
  }
  const result = width / rounded;
  c5 = result;
  let items = [tmp.bundlePreviewContainer, width, height];
  let items1 = [tmp.bundlePreviewScale, bundleWidth, rounded, result];
  const memo = bundleWidth.useMemo(() => {
    const items = [tmp.bundlePreviewContainer, { width, height }];
    return items;
  }, items);
  const items2 = [width, height];
  const memo1 = bundleWidth.useMemo(() => {
    const items = [tmp.bundlePreviewScale, ];
    let obj = { width: bundleWidth, height: rounded, transform: items1 };
    obj = { scale: c5 };
    items1 = [obj];
    items[1] = obj;
    return items;
  }, items1);
  obj = { style: memo };
  obj = { style: memo1 };
  const memo2 = bundleWidth.useMemo(() => ({ width, height }), items2);
  obj1 = { deco: firstAvatarDecoration, pfx: firstProfileEffect, nameplate: firstNameplate, previewAssets: product.previewAssets, disableStaticBackground: true, size: "small", targetSize: memo2, exposureLocation: "CollectiblesShopCheckoutDetails" };
  obj.children = callback(height(8215), obj1);
  obj.children = callback(rounded, obj);
  return callback(rounded, obj);
}
function NameplateAssetPreview(item) {
  let obj = require(1873) /* getNameplateData */;
  const nameplateData = obj.getNameplateData(item.item);
  obj = { nameplate: nameplateData, fullOpacity: true, isSquarePreview: true, style: _createForOfIteratorHelperLoose().nameplate };
  return callback(importDefault(8229), obj);
}
function CollectibleProductPreview(arg0) {
  let product;
  let recipientUser;
  ({ product, recipientUser } = arg0);
  if (product.type === require(1876) /* CollectiblesItemType */.CollectiblesItemType.PROFILE_EFFECT) {
    let num = 42;
  } else {
    num = 55;
  }
  let avatarSource;
  if (null != recipientUser) {
    avatarSource = recipientUser.getAvatarSource(undefined, false, num);
  }
  obj = { style: items, children: callback(CollectibleProductPreviewContent, obj) };
  items = [_createForOfIteratorHelperLoose().productPreviewContainer, ];
  obj = { height: 55, width: num };
  items[1] = obj;
  obj = { product, width: num, height: 55, userAvatarSource: avatarSource };
  return callback(View, obj);
}
function CollectibleProductPreviewContent(userAvatarSource) {
  let height;
  let product;
  let width;
  ({ product, width, height } = userAvatarSource);
  const ALL = require(656) /* set */.FractionalPremiumSKUsSets.ALL;
  if (ALL.has(product.skuId)) {
    let obj = { skuId: product.skuId, width: require(8717) /* FRACTIONAL_NITRO_COIN_SIZE */.FRACTIONAL_NITRO_COIN_SIZE.CHECKOUT, height: require(8717) /* FRACTIONAL_NITRO_COIN_SIZE */.FRACTIONAL_NITRO_COIN_SIZE.CHECKOUT };
    return callback(require(8717) /* FRACTIONAL_NITRO_COIN_SIZE */.FractionalNitroCoinIllustration, obj);
  } else if (product.skuId === EXTERNAL_PRODUCT_SKU_IDS.ORB_PROFILE_BADGE) {
    obj = {};
    const obj1 = { uri: importDefault(8716) };
    obj.source = obj1;
    obj.style = tmp.externalProductImage;
    return callback(importDefault(5085), obj);
  } else {
    const type = product.type;
    if (require(1876) /* CollectiblesItemType */.CollectiblesItemType.AVATAR_DECORATION === type) {
      const obj2 = { item: product.items[0], size: width, avatarSource: userAvatarSource.userAvatarSource, animate: false };
      return callback(importDefault(8226), obj2);
    } else if (require(1876) /* CollectiblesItemType */.CollectiblesItemType.PROFILE_EFFECT === type) {
      const obj3 = { item: product.items[0] };
      return callback(ProfileEffectAssetPreview, obj3);
    } else if (require(1876) /* CollectiblesItemType */.CollectiblesItemType.NAMEPLATE === type) {
      const obj4 = { item: product.items[0] };
      return callback(NameplateAssetPreview, obj4);
    } else if (require(1876) /* CollectiblesItemType */.CollectiblesItemType.PROFILE_FRAME === type) {
      const obj5 = { item: product.items[0], width, height };
      return callback(ProfileFrameAssetPreview, obj5);
    } else if (require(1876) /* CollectiblesItemType */.CollectiblesItemType.BUNDLE === type) {
      obj = { product, width, height };
      return callback(BundleAssetPreview, obj);
    } else {
      return null;
    }
  }
  tmp = _createForOfIteratorHelperLoose();
}
function ProductDetails(product) {
  product = product.product;
  const require = product;
  const tmp = _createForOfIteratorHelperLoose();
  const items = [, ];
  ({ type: arr[0], skuId: arr[1] } = product);
  const memo = React.useMemo(() => {
    const ALL = product(outer1_2[18]).FractionalPremiumSKUsSets.ALL;
    if (ALL.has(product.skuId)) {
      const intl7 = product(outer1_2[22]).intl;
      return intl7.string(product(outer1_2[22]).t.DFMPWS);
    } else if (product.skuId === outer1_5.ORB_PROFILE_BADGE) {
      const intl6 = product(outer1_2[22]).intl;
      return intl6.string(product(outer1_2[22]).t["0+rBWT"]);
    } else {
      const type = product.type;
      if (product(outer1_2[17]).CollectiblesItemType.AVATAR_DECORATION === type) {
        const intl5 = product(outer1_2[22]).intl;
        return intl5.string(product(outer1_2[22]).t["7v0T9P"]);
      } else if (product(outer1_2[17]).CollectiblesItemType.PROFILE_EFFECT === type) {
        const intl4 = product(outer1_2[22]).intl;
        return intl4.string(product(outer1_2[22]).t.wR5wOo);
      } else if (product(outer1_2[17]).CollectiblesItemType.NAMEPLATE === type) {
        const intl3 = product(outer1_2[22]).intl;
        return intl3.string(product(outer1_2[22]).t.x5CoXR);
      } else if (product(outer1_2[17]).CollectiblesItemType.PROFILE_FRAME === type) {
        const intl2 = product(outer1_2[22]).intl;
        return intl2.string(product(outer1_2[22]).t.GWrZOd);
      } else if (product(outer1_2[17]).CollectiblesItemType.BUNDLE === type) {
        const intl = product(outer1_2[22]).intl;
        return intl.string(product(outer1_2[22]).t.Zr5tjn);
      } else {
        return null;
      }
    }
  }, items);
  if (null == memo) {
    let obj = { style: tmp.productDetails };
    obj = { variant: "text-md/semibold", children: product.name };
    obj.children = callback(require(4126) /* Text */.Text, obj);
    let tmp8 = callback(View, obj);
  } else {
    obj = { style: tmp.productDetails };
    const obj1 = { product, recipientUser: product.recipientUser };
    const items1 = [callback(CollectibleProductPreview, obj1), ];
    const obj2 = { style: tmp.productDetailsTextContainer };
    const obj3 = { variant: "text-md/semibold", children: product.name };
    const items2 = [callback(require(4126) /* Text */.Text, obj3), ];
    const obj4 = { variant: "text-sm/medium", children: memo };
    items2[1] = callback(require(4126) /* Text */.Text, obj4);
    obj2.children = items2;
    items1[1] = callback2(View, obj2);
    obj.children = items1;
    tmp8 = callback2(View, obj);
  }
  return tmp8;
}
function ProductPriceAmountTag(product) {
  product = product.product;
  const require = product;
  const hasShopDiscount = product.hasShopDiscount;
  const useOrbPrice = product.useOrbPrice;
  const items = [product, hasShopDiscount, useOrbPrice];
  const memo = React.useMemo(() => {
    if (useOrbPrice) {
      let tmpResult = tmp(tmp2[24]);
      let obj = { product: closure_0, hasShopDiscount };
      const productOrbPrice = tmpResult.getProductOrbPrice(obj);
    } else {
      tmpResult = tmp(tmp2[25]);
      const formattedPriceForCollectiblesProduct = tmpResult.getFormattedPriceForCollectiblesProduct(closure_0, hasShopDiscount, true);
    }
    obj = { orbPrice: productOrbPrice, priceText: formattedPriceForCollectiblesProduct };
    return obj;
  }, items);
  const orbPrice = memo.orbPrice;
  if (useOrbPrice) {
    let obj = {};
    let amount;
    if (null != orbPrice) {
      amount = orbPrice.amount;
    }
    obj.orbAmount = amount;
    let tmp3Result = tmp3(hasShopDiscount(useOrbPrice[26]), obj);
    const tmp9 = hasShopDiscount(useOrbPrice[26]);
  } else {
    obj = { variant: "text-md/semibold", children: tmp2 };
    tmp3Result = tmp3(require(useOrbPrice[23]).Text, obj);
  }
  return tmp3Result;
}
const BUNDLE_PREVIEW_CONFIG = SAMPLE_PROFILE_ASPECT_RATIO.BUNDLE_PREVIEW_CONFIG;
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
_createForOfIteratorHelperLoose = { externalProductImage: { width: 45, height: 45 } };
_createForOfIteratorHelperLoose = { alignItems: "center", justifyContent: "center", overflow: "hidden", borderRadius: require("_createForOfIteratorHelperLoose").radii.xs };
_createForOfIteratorHelperLoose.bundlePreviewContainer = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.bundlePreviewScale = { overflow: "hidden", alignItems: "center", justifyContent: "center" };
_createForOfIteratorHelperLoose.productContainer = { borderRadius: require("_createForOfIteratorHelperLoose").radii.lg, flexDirection: "column", backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_SUBTLE };
let obj2 = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, paddingVertical: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.productDetailsContainer = obj2;
_createForOfIteratorHelperLoose.productPreviewContainer = { justifyContent: "center", alignItems: "center" };
let obj3 = { display: "flex", flexDirection: "row", alignItems: "center", gap: require("_createForOfIteratorHelperLoose").space.PX_12 };
_createForOfIteratorHelperLoose.productDetails = obj3;
let obj1 = { borderRadius: require("_createForOfIteratorHelperLoose").radii.lg, flexDirection: "column", backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_SUBTLE };
_createForOfIteratorHelperLoose.productDetailsTextContainer = { gap: require("_createForOfIteratorHelperLoose").space.PX_4 };
let obj5 = { height: 36, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH, justifyContent: "center", paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, borderBottomLeftRadius: require("_createForOfIteratorHelperLoose").radii.lg, borderBottomRightRadius: require("_createForOfIteratorHelperLoose").radii.lg };
_createForOfIteratorHelperLoose.errorContainer = obj5;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let closure_10 = _createForOfIteratorHelperLoose.createStyles((arg0) => {
  let obj = {};
  obj = { borderWidth: 2 };
  const colors = importDefault(689).colors;
  obj.borderColor = arg0 ? colors.BACKGROUND_BRAND : colors.BORDER_FEEDBACK_CRITICAL;
  obj.marginHorizontal = importDefault(689).space.PX_16;
  obj.backgroundColor = undefined;
  obj.giftProductContainer = obj;
  return obj;
});
const obj6 = {};
const obj7 = { position: "relative", width: "100%", height: "100%", borderRadius: require("_createForOfIteratorHelperLoose").radii.xs, overflow: "hidden" };
obj6.profileEffectContainer = obj7;
_createForOfIteratorHelperLoose = { position: "absolute", width: "100%", aspectRatio: SAMPLE_PROFILE_ASPECT_RATIO.SAMPLE_PROFILE_ASPECT_RATIO, top: 0 };
obj6.profileEffect = _createForOfIteratorHelperLoose;
let closure_11 = _createForOfIteratorHelperLoose.createStyles(obj6);
_createForOfIteratorHelperLoose = {};
let obj4 = { gap: require("_createForOfIteratorHelperLoose").space.PX_4 };
_createForOfIteratorHelperLoose.nameplate = { borderRadius: require("_createForOfIteratorHelperLoose").radii.xs };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const obj10 = { borderRadius: require("_createForOfIteratorHelperLoose").radii.xs };
let result = require("items").fileFinishedImporting("modules/collectibles/native/CollectiblesShopCheckoutDetails.tsx");

export default function CollectiblesShopCheckoutDetails(recipientUser) {
  const product = recipientUser.product;
  const require = product;
  let flag = recipientUser.isValidRecipient;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = recipientUser.useOrbPrice;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let flag3 = recipientUser.isGift;
  if (flag3 === undefined) {
    flag3 = false;
  }
  let dependencyMap;
  const tmp = _createForOfIteratorHelperLoose();
  let obj = require(8667) /* useCurrentUser */;
  const currentUser = obj.useCurrentUser();
  let obj1 = flag2(3776);
  const canUseShopDiscountsResult = obj1.canUseShopDiscounts(currentUser);
  dependencyMap = canUseShopDiscountsResult;
  const items = [product, flag2, canUseShopDiscountsResult];
  obj = {};
  const items1 = [tmp.productContainer, ];
  let giftProductContainer = flag3;
  const memo = React.useMemo(() => {
    let obj = product(_undefined[29]);
    const productNameAndTypeLabel = obj.getProductNameAndTypeLabel(closure_0);
    if (flag2) {
      const intl = tmp2(tmp3[22]).intl;
      obj = {};
      let tmp2Result = tmp2(tmp3[24]);
      obj = { product: closure_0, hasShopDiscount: _undefined };
      const productOrbPrice = tmp2Result.getProductOrbPrice(obj);
      let amount;
      if (null != productOrbPrice) {
        amount = productOrbPrice.amount;
      }
      let str2 = "";
      if (null != amount) {
        str2 = amount;
      }
      obj.orbAmount = str2;
      let str = intl.formatToPlainString(tmp2(tmp3[22]).t.W4DfeF, obj);
    } else {
      tmp2Result = tmp2(tmp3[25]);
      const formattedPriceForCollectiblesProduct = tmp2Result.getFormattedPriceForCollectiblesProduct(closure_0, _undefined, true);
      str = "";
      if (null != formattedPriceForCollectiblesProduct) {
        str = formattedPriceForCollectiblesProduct;
      }
    }
    return "" + productNameAndTypeLabel + ", " + str;
  }, items);
  if (flag3) {
    giftProductContainer = tmp2.giftProductContainer;
  }
  items1[1] = giftProductContainer;
  obj.style = items1;
  obj = { style: tmp.productDetailsContainer, accessibilityLabel: memo, accessible: true };
  const items2 = [callback(ProductDetails, { product, recipientUser: recipientUser.recipientUser }), ];
  obj1 = { product, hasShopDiscount: canUseShopDiscountsResult, useOrbPrice: flag2 };
  items2[1] = callback(ProductPriceAmountTag, obj1);
  obj.children = items2;
  const items3 = [callback2(View, obj), ];
  if (flag3) {
    flag3 = !flag;
  }
  if (flag3) {
    const obj2 = { style: tmp.errorContainer };
    const obj3 = { variant: "text-xs/semibold", color: "text-feedback-critical" };
    let intl = require(1212) /* getSystemLocale */.intl;
    obj3.children = intl.string(require(1212) /* getSystemLocale */.t["3YfczA"]);
    obj2.children = callback(require(4126) /* Text */.Text, obj3);
    flag3 = callback(View, obj2);
  }
  items3[1] = flag3;
  obj.children = items3;
  return callback2(View, obj);
};
