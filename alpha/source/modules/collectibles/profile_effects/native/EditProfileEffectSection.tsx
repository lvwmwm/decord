// Module ID: 16490
// Function ID: 16491
// Name: EditProfileEffectSection
// Dependencies: [19, 17, 7726, 9494, 21, 5014, 15070, 16489, 15071, 7351, 8799, 5717, 9519, 9497, 2]

// Module 16490 (EditProfileEffectSection)
import react_native from "react-native" /* 17 */;
import FastImageDefault from "FastImage" /* 5717 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7351 */;
import ProfileEffectRecord from "ProfileEffectRecord" /* 7726 */;
import useProfileEffectDefault from "useProfileEffect" /* 8799 */;
import CollectiblesPreviewConstants from "CollectiblesPreviewConstants" /* 9494 */;
import ProfileEffectDefault from "ProfileEffect" /* 9497 */;
import _modDef9519 from "module_9519" /* 9519 */;
import useCollectibleListLayout from "useCollectibleListLayout" /* 15070 */;
import CollectiblesEditUserProfileListItems from "CollectiblesEditUserProfileListItems" /* 15071 */;
import useProfileEffectSections from "useProfileEffectSections" /* 16489 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size_mod from "module_2" /* 2 */;

let item;

let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
const View = react_native.View;
const isProfileEffectRecord = ProfileEffectRecord.isProfileEffectRecord;
const SAMPLE_PROFILE_ASPECT_RATIO = CollectiblesPreviewConstants.SAMPLE_PROFILE_ASPECT_RATIO;
({ jsx: metroRequire, Fragment: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { row: obj2, rowSpacer: obj3, profileEffect: { overflow: "hidden", width: "100%", height: "100%" }, sampleProfile: { aspectRatio: SAMPLE_PROFILE_ASPECT_RATIO, width: "100%" } };
obj2 = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: useCollectibleListLayout.GUTTER_SIZE };
createStyles = createStyles.createStyles;
obj3 = { height: useCollectibleListLayout.GUTTER_SIZE };
let closure_9 = createStyles(obj);
const memoResult = react.memo((size) => {
  let isTryItOut;
  let items;
  let items3;
  let setSelectedProfileEffect;
  let substr;
  ({ items, selectedSkuId: require, setSelectedProfileEffect } = size);
  ({ guildId: dependencyMap, isTryItOut } = size);
  if (isTryItOut === undefined) {
    isTryItOut = false;
  }
  size = size.size;
  const tmp = closure_9();
  const items1 = [setSelectedProfileEffect];
  const onPress = isTryItOut.useCallback(() => {
    setSelectedProfileEffect(null);
  }, items1);
  let obj = { children: items3 };
  let obj2 = {
    style: tmp.row,
    children: substr.map((item, index) => {
      if (item === useProfileEffectSections.NONE_ITEM) {
        const obj2 = { size, onPress, isSelected: null == require, asDefault: null != dependencyMap };
        return metroRequire(CollectiblesEditUserProfileListItems.EditCollectiblesListItemNone, obj2, "none");
      } else if (item === useProfileEffectSections.SHOP_ITEM) {
        const obj3 = { size, analyticsSource: AnalyticsLocationDefault.EDIT_PROFILE_EFFECT_SHEET };
        const EditCollectiblesListItemShop = tmp(15071).EditCollectiblesListItemShop;
        return metroRequire(EditCollectiblesListItemShop, obj3, "shop");
      } else if (isProfileEffectRecord(item)) {
        const obj4 = { item, isSelected: require === item.skuId, setSelectedProfileEffect, isTryItOut, size };
        return metroRequire(memoResult1, obj4, item.skuId);
      } else {
        const obj = { style: size };
        size = { height: size, width: size };
        return metroRequire(View, obj, index);
      }
    })
  };
  const items2 = [...items, null, null];
  substr = items2.slice(0, useCollectibleListLayout.ROW_SIZE);
  items3 = [closure_6(size, obj2), ];
  let obj3 = { style: tmp.rowSpacer };
  items3[1] = closure_6(size, obj3);
  return closure_8(closure_7, obj);
});
memoResult.displayName = "EditProfileEffectRow";
const memoResult1 = react.memo((item) => {
  let accessibilityLabel;
  let items2;
  let items3;
  let obj2;
  let obj4;
  item = item.item;
  const setSelectedProfileEffect = item.setSelectedProfileEffect;
  let flag = item.isTryItOut;
  const isSelected = item.isSelected;
  if (flag === undefined) {
    flag = false;
  }
  size = item.size;
  const tmp = closure_9();
  const tmp4 = useProfileEffectDefault(item.skuId);
  let closure_2 = tmp4;
  const items = [setSelectedProfileEffect, item];
  let thumbnailPreviewSrc;
  const callback = react.useCallback(() => {
    setSelectedProfileEffect(item);
  }, items);
  const useMemo = react.useMemo;
  if (tmp4 != null) {
    thumbnailPreviewSrc = tmp4.thumbnailPreviewSrc;
  }
  const items1 = [thumbnailPreviewSrc];
  const memo = useMemo(() => {
    let combined;
    let thumbnailPreviewSrc;
    if (closure_2 != null) {
      thumbnailPreviewSrc = tmp.thumbnailPreviewSrc;
    }
    if (null == thumbnailPreviewSrc) {
      let thumbnailPreviewSrc1;
      if (closure_2 != null) {
        thumbnailPreviewSrc1 = tmp.thumbnailPreviewSrc;
      }
      combined = thumbnailPreviewSrc1;
    } else {
      const _HermesInternal = HermesInternal;
      combined = "" + tmp.thumbnailPreviewSrc + "?width=100&height=195";
    }
    return combined;
  }, items1);
  const obj = { skuId: item.skuId, isSelected, onPress: callback, isTryItOut: flag, size, accessibilityLabel, children: metroImportAll(View, obj2) };
  accessibilityLabel = undefined;
  const EditCollectiblesListItemProduct = CollectiblesEditUserProfileListItems.EditCollectiblesListItemProduct;
  if (tmp4 != null) {
    accessibilityLabel = tmp4.accessibilityLabel;
  }
  obj2 = { style: items2, accessible: false, importantForAccessibility: "no", children: items3 };
  items2 = [tmp.profileEffect, { borderRadius: 6 }];
  const obj3 = { source: obj4, style: tmp.sampleProfile, resizeMode: "cover" };
  obj4 = { uri: _modDef9519 };
  const tmp2Result = FastImageDefault;
  items3 = [metroRequire(tmp2Result, obj3), ];
  const obj5 = { skuId: item.skuId, bannerAdjustment: 0, useThumbnail: true, thumbnailUrlOverride: memo };
  items3[1] = metroRequire(ProfileEffectDefault, obj5);
  return metroRequire(EditCollectiblesListItemProduct, obj);
});
memoResult1.displayName = "EditProfileEffectItem";
let size = size_mod;
const result = size.fileFinishedImporting("modules/collectibles/profile_effects/native/EditProfileEffectSection.tsx");

export const EditProfileEffectRow = memoResult;
