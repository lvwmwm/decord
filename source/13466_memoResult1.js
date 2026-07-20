// Module ID: 13466
// Function ID: 102244
// Name: memoResult1
// Dependencies: []

// Module 13466 (memoResult1)
const importAllResult = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const isProfileEffectRecord = arg1(dependencyMap[2]).isProfileEffectRecord;
({ jsx: closure_6, Fragment: closure_7, jsxs: closure_8 } = arg1(dependencyMap[4]));
let obj1 = arg1(dependencyMap[5]);
let obj = {};
obj = { "Bool(true)": null, "Bool(true)": null, "Bool(true)": null, paddingHorizontal: arg1(dependencyMap[6]).GUTTER_SIZE };
obj.row = obj;
obj1 = { height: arg1(dependencyMap[6]).GUTTER_SIZE };
obj.rowSpacer = obj1;
obj.profileEffect = {};
obj.sampleProfile = { aspectRatio: arg1(dependencyMap[3]).SAMPLE_PROFILE_ASPECT_RATIO, width: "100%" };
let closure_9 = obj1.createStyles(obj);
const memoResult = importAllResult.memo((size) => {
  let isTryItOut;
  let items;
  let setSelectedProfileEffect;
  ({ items, selectedSkuId: closure_0, setSelectedProfileEffect } = size);
  const importDefault = setSelectedProfileEffect;
  ({ guildId: closure_2, isTryItOut } = size);
  if (isTryItOut === undefined) {
    isTryItOut = false;
  }
  const View = size.size;
  let closure_5;
  const tmp = callback3();
  items = [setSelectedProfileEffect];
  closure_5 = isTryItOut.useCallback(() => {
    setSelectedProfileEffect(null);
  }, items);
  let obj = {};
  obj = { style: tmp.row };
  const items1 = [...items, null, null];
  const substr = items1.slice(0, arg1(dependencyMap[6]).ROW_SIZE);
  obj.children = substr.map((item) => {
    if (item === callback(closure_2[7]).NONE_ITEM) {
      let obj = { size, onPress: callback2, isSelected: null == callback, asDefault: null != closure_2 };
      return callback3(callback(closure_2[8]).EditCollectiblesListItemNone, obj, "none");
    } else if (item === callback(closure_2[7]).SHOP_ITEM) {
      obj = { size, analyticsSource: setSelectedProfileEffect(closure_2[9]).EDIT_PROFILE_EFFECT_SHEET };
      return callback3(callback(closure_2[8]).EditCollectiblesListItemShop, obj, "shop");
    } else if (callback2(item)) {
      const obj1 = { item, isSelected: callback === item.skuId, setSelectedProfileEffect, isTryItOut, size };
      return callback3(closure_10, obj1, item.skuId);
    } else {
      obj = {};
      const obj2 = { height: size, width: size };
      obj.style = obj2;
      return callback3(size, obj, arg1);
    }
  });
  const items2 = [callback(View, obj), ];
  obj = { style: tmp.rowSpacer };
  items2[1] = callback(View, obj);
  obj.children = items2;
  return callback2(closure_7, obj);
});
memoResult.displayName = "EditProfileEffectRow";
const memoResult1 = importAllResult.memo((isSelected) => {
  const item = isSelected.item;
  const arg1 = item;
  const setSelectedProfileEffect = isSelected.setSelectedProfileEffect;
  const importDefault = setSelectedProfileEffect;
  let flag = isSelected.isTryItOut;
  if (flag === undefined) {
    flag = false;
  }
  let dependencyMap;
  const tmp = callback3();
  const tmp2 = importDefault(dependencyMap[10])(item.skuId);
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
    if (null != tmp2) {
      thumbnailPreviewSrc = tmp2.thumbnailPreviewSrc;
    }
    if (null == thumbnailPreviewSrc) {
      let thumbnailPreviewSrc1;
      if (null != tmp2) {
        thumbnailPreviewSrc1 = tmp2.thumbnailPreviewSrc;
      }
      let combined = thumbnailPreviewSrc1;
    } else {
      const _HermesInternal = HermesInternal;
      combined = "" + tmp2.thumbnailPreviewSrc + "?width=100&height=195";
    }
    return combined;
  }, items1);
  let obj = { skuId: item.skuId, isSelected: isSelected.isSelected, onPress: callback, isTryItOut: flag, size: isSelected.size };
  let accessibilityLabel;
  if (null != tmp2) {
    accessibilityLabel = tmp2.accessibilityLabel;
  }
  obj.accessibilityLabel = accessibilityLabel;
  obj = { 0: "<string:1895974234>", 9223372036854775807: "y", 0: "<string:1514494546>" };
  const items2 = [tmp.profileEffect, { borderRadius: 6 }];
  obj.style = items2;
  obj = {};
  const obj1 = { uri: importDefault(dependencyMap[12]) };
  obj.source = obj1;
  obj.style = tmp.sampleProfile;
  obj.resizeMode = "cover";
  const items3 = [callback(importDefault(dependencyMap[11]), obj), callback(importDefault(dependencyMap[13]), { skuId: item.skuId, thumbnailUrlOverride: memo })];
  obj.children = items3;
  obj.children = callback2(View, obj);
  return callback(arg1(dependencyMap[8]).EditCollectiblesListItemProduct, obj);
});
memoResult1.displayName = "EditProfileEffectItem";
const tmp2 = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[14]).fileFinishedImporting("modules/collectibles/profile_effects/native/EditProfileEffectSection.tsx");

export const EditProfileEffectRow = memoResult;
