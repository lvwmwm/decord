// Module ID: 13596
// Function ID: 104478
// Name: memoResult1
// Dependencies: [31, 27, 6780, 8200, 33, 4130, 7865, 13595, 7866, 5484, 8225, 5085, 8698, 8218, 2]

// Module 13596 (memoResult1)
import importAllResult from "result";
import { View } from "get ActivityIndicator";
import { isProfileEffectRecord } from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_6;
let closure_7;
let closure_8;
const require = arg1;
({ jsx: closure_6, Fragment: closure_7, jsxs: closure_8 } = jsxProd);
let obj = {};
obj = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: require("useCollectibleListLayout").GUTTER_SIZE };
obj.row = obj;
_createForOfIteratorHelperLoose = { height: require("useCollectibleListLayout").GUTTER_SIZE };
obj.rowSpacer = _createForOfIteratorHelperLoose;
obj.profileEffect = { overflow: "hidden", width: "100%", height: "100%" };
obj.sampleProfile = { aspectRatio: require("SAMPLE_PROFILE_ASPECT_RATIO").SAMPLE_PROFILE_ASPECT_RATIO, width: "100%" };
let closure_9 = _createForOfIteratorHelperLoose.createStyles(obj);
const memoResult = importAllResult.memo((size) => {
  let dependencyMap;
  let isTryItOut;
  let items;
  let require;
  let setSelectedProfileEffect;
  ({ items, selectedSkuId: require, setSelectedProfileEffect } = size);
  ({ guildId: dependencyMap, isTryItOut } = size);
  if (isTryItOut === undefined) {
    isTryItOut = false;
  }
  size = size.size;
  let closure_5;
  const tmp = callback3();
  items = [setSelectedProfileEffect];
  closure_5 = isTryItOut.useCallback(() => {
    setSelectedProfileEffect(null);
  }, items);
  let obj = {};
  obj = { style: tmp.row };
  const items1 = [...items, null, null];
  const substr = items1.slice(0, require(7865) /* useCollectibleListLayout */.ROW_SIZE);
  obj.children = substr.map((item) => {
    if (item === outer1_0(outer1_2[7]).NONE_ITEM) {
      let obj = { size, onPress: callback, isSelected: null == closure_0, asDefault: null != closure_2 };
      return outer1_6(outer1_0(outer1_2[8]).EditCollectiblesListItemNone, obj, "none");
    } else if (item === outer1_0(outer1_2[7]).SHOP_ITEM) {
      obj = { size, analyticsSource: setSelectedProfileEffect(outer1_2[9]).EDIT_PROFILE_EFFECT_SHEET };
      return outer1_6(outer1_0(outer1_2[8]).EditCollectiblesListItemShop, obj, "shop");
    } else if (callback(item)) {
      const obj1 = { item, isSelected: closure_0 === item.skuId, setSelectedProfileEffect, isTryItOut, size };
      return outer1_6(outer1_10, obj1, item.skuId);
    } else {
      obj = {};
      const obj2 = { height: size, width: size };
      obj.style = obj2;
      return outer1_6(size, obj, arg1);
    }
  });
  const items2 = [callback(size, obj), ];
  obj = { style: tmp.rowSpacer };
  items2[1] = callback(size, obj);
  obj.children = items2;
  return callback2(closure_7, obj);
});
memoResult.displayName = "EditProfileEffectRow";
const memoResult1 = importAllResult.memo((isSelected) => {
  const item = isSelected.item;
  const setSelectedProfileEffect = isSelected.setSelectedProfileEffect;
  let flag = isSelected.isTryItOut;
  if (flag === undefined) {
    flag = false;
  }
  let dependencyMap;
  const tmp = callback3();
  const tmp2 = setSelectedProfileEffect(8225)(item.skuId);
  dependencyMap = tmp2;
  const items = [setSelectedProfileEffect, item];
  let thumbnailPreviewSrc;
  const callback = importAllResult.useCallback(() => {
    setSelectedProfileEffect(item);
  }, items);
  if (null != tmp2) {
    thumbnailPreviewSrc = tmp2.thumbnailPreviewSrc;
  }
  const items1 = [thumbnailPreviewSrc];
  const memo = importAllResult.useMemo(() => {
    let thumbnailPreviewSrc;
    if (null != _undefined) {
      thumbnailPreviewSrc = _undefined.thumbnailPreviewSrc;
    }
    if (null == thumbnailPreviewSrc) {
      let thumbnailPreviewSrc1;
      if (null != _undefined) {
        thumbnailPreviewSrc1 = _undefined.thumbnailPreviewSrc;
      }
      let combined = thumbnailPreviewSrc1;
    } else {
      const _HermesInternal = HermesInternal;
      combined = "" + _undefined.thumbnailPreviewSrc + "?width=100&height=195";
    }
    return combined;
  }, items1);
  let obj = { skuId: item.skuId, isSelected: isSelected.isSelected, onPress: callback, isTryItOut: flag, size: isSelected.size };
  let accessibilityLabel;
  if (null != tmp2) {
    accessibilityLabel = tmp2.accessibilityLabel;
  }
  obj.accessibilityLabel = accessibilityLabel;
  obj = { style: null, accessible: false, importantForAccessibility: "no" };
  const items2 = [tmp.profileEffect, { borderRadius: 6 }];
  obj.style = items2;
  obj = {};
  const obj1 = { uri: setSelectedProfileEffect(8698) };
  obj.source = obj1;
  obj.style = tmp.sampleProfile;
  obj.resizeMode = "cover";
  const items3 = [callback(setSelectedProfileEffect(5085), obj), ];
  const obj2 = { skuId: item.skuId, bannerAdjustment: 0, useThumbnail: true, thumbnailUrlOverride: memo };
  items3[1] = callback(setSelectedProfileEffect(8218), obj2);
  obj.children = items3;
  obj.children = callback2(View, obj);
  return callback(item(7866).EditCollectiblesListItemProduct, obj);
});
memoResult1.displayName = "EditProfileEffectItem";
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/collectibles/profile_effects/native/EditProfileEffectSection.tsx");

export const EditProfileEffectRow = memoResult;
