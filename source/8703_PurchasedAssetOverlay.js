// Module ID: 8703
// Function ID: 68897
// Name: PurchasedAssetOverlay
// Dependencies: []

// Module 8703 (PurchasedAssetOverlay)
function PurchasedAssetOverlay() {
  const tmp = callback3();
  let obj = { style: tmp.overlayContainer, children: callback2(arg1(dependencyMap[8]).CheckmarkLargeBoldIcon, obj) };
  obj = { size: "lg", style: tmp.overlayIcon };
  return callback2(View, obj);
}
function DisabledAssetOverlay() {
  const tmp = callback3();
  let obj = { style: tmp.overlayContainer, children: callback2(arg1(dependencyMap[9]).LockIcon, obj) };
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
  let obj = arg1(dependencyMap[10]);
  const productType = obj.getProductType(product);
  if (productType !== arg1(dependencyMap[11]).CollectiblesItemType.PROFILE_EFFECT) {
    if (productType !== arg1(dependencyMap[11]).CollectiblesItemType.PROFILE_FRAME) {
      let str = "75%";
    }
    obj = { <string:3142754913>: null, <string:1638282744>: null, <string:3863696069>: null };
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
  const arg1 = cardWidth;
  ({ disableBundleStaticBackground, muteBundleStaticBackground } = arg0);
  const tmp = callback3();
  let obj = arg1(dependencyMap[12]);
  const shopProductItems = obj.useShopProductItems(product);
  const items = [cardWidth];
  ({ firstProfileEffect, firstAvatarDecoration, firstNameplate } = shopProductItems);
  const memo = importAllResult.useMemo(() => {
    const obj = {};
    if (null != cardWidth) {
      let COLLECTIBLES_SHOP_CARD_WIDTH = cardWidth;
    } else {
      COLLECTIBLES_SHOP_CARD_WIDTH = cardWidth(closure_2[5]).COLLECTIBLES_SHOP_CARD_WIDTH;
    }
    obj.width = COLLECTIBLES_SHOP_CARD_WIDTH;
    obj.height = cardWidth(closure_2[5]).COLLECTIBLES_SHOP_CARD_HEIGHT;
    return obj;
  }, items);
  if (product.type === arg1(dependencyMap[11]).CollectiblesItemType.BUNDLE) {
    obj = { deco: firstAvatarDecoration, pfx: firstProfileEffect, nameplate: firstNameplate, size: "small", previewAssets: product.previewAssets, disableStaticBackground: disableBundleStaticBackground, mutedStaticBackground: muteBundleStaticBackground, targetSize: memo };
    return callback2(importDefault(dependencyMap[13]), obj);
  } else if (product.skuId === EXTERNAL_PRODUCT_SKU_IDS.ORB_PROFILE_BADGE) {
    obj = {};
    const obj1 = { uri: importDefault(dependencyMap[15]) };
    obj.source = obj1;
    obj.style = tmp.externalProductImage;
    return callback2(importDefault(dependencyMap[14]), obj);
  } else if (product.skuId === EXTERNAL_PRODUCT_SKU_IDS.FRACTIONAL_PREMIUM) {
    const obj2 = {};
    const obj3 = { uri: importDefault(dependencyMap[16]) };
    obj2.source = obj3;
    obj2.style = tmp.externalProductImage;
    return callback2(importDefault(dependencyMap[14]), obj2);
  } else {
    const first = callback(product.items, 1)[0];
    let type;
    if (null != first) {
      type = first.type;
    }
    if (arg1(dependencyMap[11]).CollectiblesItemType.AVATAR_DECORATION === type) {
      const obj4 = { item: first, size: 100 };
      return callback2(importDefault(dependencyMap[17]), obj4);
    } else if (arg1(dependencyMap[11]).CollectiblesItemType.PROFILE_EFFECT === type) {
      const obj5 = { style: tmp.profileEffectContainer };
      const obj6 = { item: first, hideBackground: true };
      obj5.children = callback2(importDefault(dependencyMap[18]), obj6);
      return callback2(View, obj5);
    } else if (arg1(dependencyMap[11]).CollectiblesItemType.PROFILE_FRAME === type) {
      const obj7 = { style: tmp.profileFrameContainer };
      const obj8 = { profileFrame: first, previewWidth: arg1(dependencyMap[5]).COLLECTIBLES_SHOP_CARD_WIDTH - importDefault(dependencyMap[6]).space.PX_32, previewHeight: diff, profileBackgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_BASE_LOW };
      obj7.children = callback2(importDefault(dependencyMap[19]), obj8);
      return callback2(View, obj7);
    } else if (arg1(dependencyMap[11]).CollectiblesItemType.NAMEPLATE === type) {
      const obj9 = { item: first };
      return callback2(importDefault(dependencyMap[20]), obj9);
    } else {
      return null;
    }
  }
}
function AssetTileInternal(solidBackground) {
  let flag = solidBackground.solidBackground;
  if (flag === undefined) {
    flag = false;
  }
  let obj = arg1(dependencyMap[21]);
  const tmp = callback3();
  const obj2 = arg1(dependencyMap[21]);
  let num = 0.8;
  const token = arg1(dependencyMap[22]).useToken(importDefault(dependencyMap[6]).colors.BACKGROUND_BASE_LOW);
  if (flag) {
    num = 1;
  }
  obj = { "Bool(false)": true, "Bool(false)": true, "Bool(false)": true };
  const items = [tmp.assetContainer, ];
  obj = {};
  obj.backgroundColor = obj.hexToRgbaString(obj2.hexWithOpacity(token, num));
  items[1] = obj;
  obj.style = items;
  obj.children = solidBackground.children;
  return callback2(View, obj);
}
let closure_3 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
const tmp2 = arg1(dependencyMap[2]);
const View = tmp2.View;
const EXTERNAL_PRODUCT_SKU_IDS = arg1(dependencyMap[3]).EXTERNAL_PRODUCT_SKU_IDS;
({ jsx: closure_7, jsxs: closure_8 } = arg1(dependencyMap[4]));
const diff = arg1(dependencyMap[5]).COLLECTIBLES_SHOP_CARD_HEIGHT - 2 * importDefault(dependencyMap[6]).space.PX_16;
let obj1 = arg1(dependencyMap[7]);
let obj = {};
obj = { 873027242: null, 2064390188: null, 396577459: null, -380404912: null, 791211009: null, 1359503782: null, borderRadius: importDefault(dependencyMap[6]).radii.sm };
obj.assetContainer = obj;
obj1 = {};
const merged = Object.assign(tmp2.StyleSheet.absoluteFillObject);
obj1["justifyContent"] = "center";
obj1["alignItems"] = "center";
obj1["width"] = "100%";
obj1["height"] = "75%";
obj.overlayContainer = obj1;
const obj2 = { aze: 30271555, azj: 22092032, backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_BASE_LOW };
obj.profileEffectContainer = obj2;
const obj3 = { align: "isArray", label: "body", subLabel: "message", height: diff };
obj.profileFrameContainer = obj3;
obj.externalProductImage = {};
obj.purchasedOrDisabled = { opacity: 0.4 };
const tmp3 = arg1(dependencyMap[4]);
obj.overlayIcon = { color: importDefault(dependencyMap[6]).colors.ICON_STRONG };
let closure_10 = obj1.createStyles(obj);
const obj4 = { color: importDefault(dependencyMap[6]).colors.ICON_STRONG };
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
  let obj = arg1(dependencyMap[23]);
  const defaultVariantIndex = obj.useDefaultVariantIndex(product);
  obj = { solidBackground };
  obj = { product: arg1(dependencyMap[10]).getSelectedProduct(product, defaultVariantIndex), isPurchased, isDisabled, disableBundleStaticBackground, muteBundleStaticBackground, cardWidth };
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
const result = arg1(dependencyMap[24]).fileFinishedImporting("modules/collectibles/native/CollectiblesShopCardAssetTileV2.tsx");

export default memoResult;
