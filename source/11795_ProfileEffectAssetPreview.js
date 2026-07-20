// Module ID: 11795
// Function ID: 91543
// Name: ProfileEffectAssetPreview
// Dependencies: []
// Exports: default

// Module 11795 (ProfileEffectAssetPreview)
function ProfileEffectAssetPreview(item) {
  const tmp = callback5();
  const tmp2 = importDefault(dependencyMap[7])(item.item.skuId);
  let tmp3 = null;
  if (null != tmp2) {
    let obj = { style: tmp.profileEffectContainer };
    obj = {};
    obj = { uri: importDefault(dependencyMap[9]) };
    obj.source = obj;
    obj.alt = tmp2.accessibilityLabel;
    obj.style = tmp.profileEffect;
    obj.resizeMode = "cover";
    const items = [callback(importDefault(dependencyMap[8]), obj), ];
    const obj1 = { style: tmp.profileEffect };
    const obj2 = { uri: tmp2.thumbnailPreviewSrc };
    obj1.source = obj2;
    obj1.alt = tmp2.title;
    obj1.resizeMode = "cover";
    items[1] = callback(importDefault(dependencyMap[8]), obj1);
    obj.children = items;
    tmp3 = callback2(View, obj);
    const tmp9 = importDefault(dependencyMap[8]);
  }
  return tmp3;
}
function ProfileFrameAssetPreview(arg0) {
  let height;
  let item;
  let width;
  ({ item, width, height } = arg0);
  const tmp = importDefault(dependencyMap[10])(item.skuId, "CollectiblesShopCheckoutDetails");
  let tmp2 = null;
  if (null != tmp) {
    const obj = { profileFrame: tmp, previewWidth: width, previewHeight: height, profileBackgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_BASE_LOW };
    tmp2 = callback(importDefault(dependencyMap[11]), obj);
    const tmp6 = importDefault(dependencyMap[11]);
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
  const arg1 = width;
  height = height.height;
  const importDefault = height;
  let View;
  let EXTERNAL_PRODUCT_SKU_IDS;
  const tmp = callback3();
  const dependencyMap = tmp;
  let obj = arg1(dependencyMap[12]);
  const shopProductItems = obj.useShopProductItems(product);
  ({ firstProfileEffect, firstAvatarDecoration, firstNameplate } = shopProductItems);
  let obj1 = arg1(dependencyMap[13]);
  const bundleWidth = BUNDLE_PREVIEW_CONFIG.small.bundleWidth;
  const React = bundleWidth;
  let rounded = bundleWidth;
  if (!obj1.useCollectiblesMobileFlexibleBundlesExperiment("CollectiblesShopCheckoutDetails").enabled) {
    const _Math = Math;
    rounded = Math.round(1.1494252873563218 * bundleWidth);
  }
  View = rounded;
  const result = width / rounded;
  EXTERNAL_PRODUCT_SKU_IDS = result;
  const items = [tmp.bundlePreviewContainer, width, height];
  const items1 = [tmp.bundlePreviewScale, bundleWidth, rounded, result];
  const memo = React.useMemo(() => {
    const items = [tmp.bundlePreviewContainer, { width, height }];
    return items;
  }, items);
  obj = { style: memo };
  obj = {
    style: React.useMemo(() => {
      const items = [tmp.bundlePreviewScale, ];
      let obj = { width: bundleWidth, height: rounded, transform: items1 };
      obj = { scale: result };
      const items1 = [obj];
      items[1] = obj;
      return items;
    }, items1),
    children: callback(importDefault(dependencyMap[14]), obj1)
  };
  obj1 = { deco: firstAvatarDecoration, pfx: firstProfileEffect, nameplate: firstNameplate, previewAssets: product.previewAssets, disableStaticBackground: true, size: "small", exposureLocation: "CollectiblesShopCheckoutDetails" };
  obj.children = callback(View, obj);
  return callback(View, obj);
}
function NameplateAssetPreview(item) {
  let obj = arg1(dependencyMap[15]);
  const nameplateData = obj.getNameplateData(item.item);
  obj = { "Bool(true)": null, "Bool(true)": null, "Bool(true)": null, nameplate: nameplateData, style: callback6().nameplate };
  return callback(importDefault(dependencyMap[16]), obj);
}
function CollectibleProductPreview(arg0) {
  let product;
  let recipientUser;
  ({ product, recipientUser } = arg0);
  if (product.type === arg1(dependencyMap[17]).CollectiblesItemType.PROFILE_EFFECT) {
    let num = 42;
  } else {
    num = 55;
  }
  let avatarSource;
  if (null != recipientUser) {
    avatarSource = recipientUser.getAvatarSource(undefined, false, num);
  }
  let obj = { style: items, children: callback(CollectibleProductPreviewContent, obj) };
  const items = [callback3().productPreviewContainer, ];
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
  const tmp = callback3();
  const ALL = arg1(dependencyMap[18]).FractionalPremiumSKUsSets.ALL;
  if (ALL.has(product.skuId)) {
    let obj = {};
    obj = { uri: importDefault(dependencyMap[19]) };
    obj.source = obj;
    obj.style = tmp.externalProductImage;
    return callback(importDefault(dependencyMap[8]), obj);
  } else if (product.skuId === EXTERNAL_PRODUCT_SKU_IDS.ORB_PROFILE_BADGE) {
    const obj1 = {};
    const obj2 = { uri: importDefault(dependencyMap[20]) };
    obj1.source = obj2;
    obj1.style = tmp.externalProductImage;
    return callback(importDefault(dependencyMap[8]), obj1);
  } else {
    const type = product.type;
    if (arg1(dependencyMap[17]).CollectiblesItemType.AVATAR_DECORATION === type) {
      const obj3 = { item: product.items[0], size: width, avatarSource: userAvatarSource.userAvatarSource, animate: false };
      return callback(importDefault(dependencyMap[21]), obj3);
    } else if (arg1(dependencyMap[17]).CollectiblesItemType.PROFILE_EFFECT === type) {
      const obj4 = { item: product.items[0] };
      return callback(ProfileEffectAssetPreview, obj4);
    } else if (arg1(dependencyMap[17]).CollectiblesItemType.NAMEPLATE === type) {
      const obj5 = { item: product.items[0] };
      return callback(NameplateAssetPreview, obj5);
    } else if (arg1(dependencyMap[17]).CollectiblesItemType.PROFILE_FRAME === type) {
      const obj6 = { item: product.items[0], width, height };
      return callback(ProfileFrameAssetPreview, obj6);
    } else if (arg1(dependencyMap[17]).CollectiblesItemType.BUNDLE === type) {
      obj = { product, width, height };
      return callback(BundleAssetPreview, obj);
    } else {
      return null;
    }
  }
}
function ProductDetails(product) {
  product = product.product;
  const arg1 = product;
  const tmp = callback3();
  const items = [, ];
  ({ type: arr[0], skuId: arr[1] } = product);
  const memo = React.useMemo(() => {
    const ALL = product(closure_2[18]).FractionalPremiumSKUsSets.ALL;
    if (ALL.has(product.skuId)) {
      const intl7 = product(closure_2[22]).intl;
      return intl7.string(product(closure_2[22]).t.DFMPWS);
    } else if (product.skuId === constants.ORB_PROFILE_BADGE) {
      const intl6 = product(closure_2[22]).intl;
      return intl6.string(product(closure_2[22]).t.0+rBWT);
    } else {
      const type = product.type;
      if (product(closure_2[17]).CollectiblesItemType.AVATAR_DECORATION === type) {
        const intl5 = product(closure_2[22]).intl;
        return intl5.string(product(closure_2[22]).t.7v0T9P);
      } else if (product(closure_2[17]).CollectiblesItemType.PROFILE_EFFECT === type) {
        const intl4 = product(closure_2[22]).intl;
        return intl4.string(product(closure_2[22]).t.wR5wOo);
      } else if (product(closure_2[17]).CollectiblesItemType.NAMEPLATE === type) {
        const intl3 = product(closure_2[22]).intl;
        return intl3.string(product(closure_2[22]).t.x5CoXR);
      } else if (product(closure_2[17]).CollectiblesItemType.PROFILE_FRAME === type) {
        const intl2 = product(closure_2[22]).intl;
        return intl2.string(product(closure_2[22]).t.GWrZOd);
      } else if (product(closure_2[17]).CollectiblesItemType.BUNDLE === type) {
        const intl = product(closure_2[22]).intl;
        return intl.string(product(closure_2[22]).t.Zr5tjn);
      } else {
        return null;
      }
    }
  }, items);
  if (null == memo) {
    let obj = { style: tmp.productDetails };
    obj = { variant: "text-md/semibold", children: product.name };
    obj.children = callback(arg1(dependencyMap[23]).Text, obj);
    let tmp8 = callback(View, obj);
  } else {
    obj = { style: tmp.productDetails };
    const obj1 = { product, recipientUser: product.recipientUser };
    const items1 = [callback(CollectibleProductPreview, obj1), ];
    const obj2 = { style: tmp.productDetailsTextContainer };
    const obj3 = { variant: "text-md/semibold", children: product.name };
    const items2 = [callback(arg1(dependencyMap[23]).Text, obj3), ];
    const obj4 = { variant: "text-sm/medium", children: memo };
    items2[1] = callback(arg1(dependencyMap[23]).Text, obj4);
    obj2.children = items2;
    items1[1] = callback2(View, obj2);
    obj.children = items1;
    tmp8 = callback2(View, obj);
  }
  return tmp8;
}
function ProductPriceAmountTag(product) {
  product = product.product;
  const arg1 = product;
  const hasShopDiscount = product.hasShopDiscount;
  const importDefault = hasShopDiscount;
  const useOrbPrice = product.useOrbPrice;
  const dependencyMap = useOrbPrice;
  const items = [product, hasShopDiscount, useOrbPrice];
  const memo = React.useMemo(() => {
    if (useOrbPrice) {
      let tmpResult = tmp(tmp2[24]);
      let obj = { product, hasShopDiscount };
      const productOrbPrice = tmpResult.getProductOrbPrice(obj);
    } else {
      tmpResult = tmp(tmp2[25]);
      const formattedPriceForCollectiblesProduct = tmpResult.getFormattedPriceForCollectiblesProduct(product, hasShopDiscount, true);
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
    let tmp3Result = tmp3(importDefault(dependencyMap[26]), obj);
    const tmp9 = importDefault(dependencyMap[26]);
  } else {
    obj = { variant: "text-md/semibold", children: tmp2 };
    tmp3Result = tmp3(arg1(dependencyMap[23]).Text, obj);
  }
  return tmp3Result;
}
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const EXTERNAL_PRODUCT_SKU_IDS = arg1(dependencyMap[2]).EXTERNAL_PRODUCT_SKU_IDS;
const tmp2 = arg1(dependencyMap[3]);
const BUNDLE_PREVIEW_CONFIG = tmp2.BUNDLE_PREVIEW_CONFIG;
({ jsx: closure_7, jsxs: closure_8 } = arg1(dependencyMap[4]));
let obj = arg1(dependencyMap[5]);
obj = { externalProductImage: {} };
obj = { borderRadius: importDefault(dependencyMap[6]).radii.xs };
obj.bundlePreviewContainer = obj;
obj.bundlePreviewScale = {};
const tmp3 = arg1(dependencyMap[4]);
obj.productContainer = { borderRadius: importDefault(dependencyMap[6]).radii.lg, flexDirection: "column", backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_MOD_SUBTLE };
const obj2 = { "Bool(true)": null, "Bool(true)": null, "Bool(true)": null, paddingHorizontal: importDefault(dependencyMap[6]).space.PX_16, paddingVertical: importDefault(dependencyMap[6]).space.PX_16 };
obj.productDetailsContainer = obj2;
obj.productPreviewContainer = {};
const obj3 = { "Bool(true)": 8, "Bool(true)": null, "Bool(true)": "\u270A\u{1F3FF}", gap: importDefault(dependencyMap[6]).space.PX_12 };
obj.productDetails = obj3;
const obj1 = { borderRadius: importDefault(dependencyMap[6]).radii.lg, flexDirection: "column", backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_MOD_SUBTLE };
obj.productDetailsTextContainer = { gap: importDefault(dependencyMap[6]).space.PX_4 };
const obj5 = { "Bool(true)": -44, "Bool(true)": null, "Bool(true)": 1, backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_SURFACE_HIGH, paddingHorizontal: importDefault(dependencyMap[6]).space.PX_16, borderBottomLeftRadius: importDefault(dependencyMap[6]).radii.lg, borderBottomRightRadius: importDefault(dependencyMap[6]).radii.lg };
obj.errorContainer = obj5;
let closure_9 = obj.createStyles(obj);
let obj8 = arg1(dependencyMap[5]);
let closure_10 = obj8.createStyles((arg0) => {
  let obj = {};
  obj = { borderWidth: 2 };
  const colors = importDefault(dependencyMap[6]).colors;
  obj.borderColor = arg0 ? colors.BACKGROUND_BRAND : colors.BORDER_FEEDBACK_CRITICAL;
  obj.marginHorizontal = importDefault(dependencyMap[6]).space.PX_16;
  obj.backgroundColor = undefined;
  obj.giftProductContainer = obj;
  return obj;
});
let obj9 = arg1(dependencyMap[5]);
const obj6 = {};
const obj7 = { outboundStats: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000006919153853686053, leaveFrame: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000033995391320984753, JoinSourceType: 139264.00004577637, GiftCodeModalScreens: 69817690491473560000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, hoverGestureHandlerProps: 13343560305114734000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, borderRadius: importDefault(dependencyMap[6]).radii.xs };
obj6.profileEffectContainer = obj7;
obj6.profileEffect = { aspectRatio: tmp2.SAMPLE_PROFILE_ASPECT_RATIO };
let closure_11 = obj9.createStyles(obj6);
const obj4 = { gap: importDefault(dependencyMap[6]).space.PX_4 };
obj8 = {};
obj9 = { borderRadius: importDefault(dependencyMap[6]).radii.xs };
obj8.nameplate = obj9;
let closure_12 = arg1(dependencyMap[5]).createStyles(obj8);
const obj13 = arg1(dependencyMap[5]);
const result = arg1(dependencyMap[30]).fileFinishedImporting("modules/collectibles/native/CollectiblesShopCheckoutDetails.tsx");

export default function CollectiblesShopCheckoutDetails(recipientUser) {
  const product = recipientUser.product;
  const arg1 = product;
  let flag = recipientUser.isValidRecipient;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = recipientUser.useOrbPrice;
  if (flag2 === undefined) {
    flag2 = false;
  }
  const importDefault = flag2;
  let flag3 = recipientUser.isGift;
  if (flag3 === undefined) {
    flag3 = false;
  }
  let dependencyMap;
  const tmp = callback3();
  let obj = arg1(dependencyMap[27]);
  const currentUser = obj.useCurrentUser();
  let obj1 = importDefault(dependencyMap[28]);
  const canUseShopDiscountsResult = obj1.canUseShopDiscounts(currentUser);
  dependencyMap = canUseShopDiscountsResult;
  const items = [product, flag2, canUseShopDiscountsResult];
  obj = {};
  const items1 = [tmp.productContainer, ];
  let giftProductContainer = flag3;
  const memo = React.useMemo(() => {
    let obj = product(canUseShopDiscountsResult[29]);
    const productNameAndTypeLabel = obj.getProductNameAndTypeLabel(product);
    if (flag2) {
      const intl = tmp2(tmp3[22]).intl;
      obj = {};
      let tmp2Result = tmp2(tmp3[24]);
      obj = { product, hasShopDiscount: canUseShopDiscountsResult };
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
      const formattedPriceForCollectiblesProduct = tmp2Result.getFormattedPriceForCollectiblesProduct(product, canUseShopDiscountsResult, true);
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
    const obj3 = {};
    const intl = arg1(dependencyMap[22]).intl;
    obj3.children = intl.string(arg1(dependencyMap[22]).t.3YfczA);
    obj2.children = callback(arg1(dependencyMap[23]).Text, obj3);
    flag3 = callback(View, obj2);
  }
  items3[1] = flag3;
  obj.children = items3;
  return callback2(View, obj);
};
