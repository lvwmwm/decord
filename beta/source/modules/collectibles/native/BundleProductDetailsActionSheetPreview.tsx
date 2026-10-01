// Module ID: 12707
// Function ID: 12708
// Name: BundleProductDetailsActionSheetPreview
// Dependencies: [32, 19, 17, 1076, 21, 4836, 576, 12708, 6073, 1115, 7616, 6974, 12709, 4832, 2]
// Exports: default

// Module 12707 (BundleProductDetailsActionSheetPreview)
import nativeDefault from "native" /* 576 */;
import CollectiblesShopConstants from "CollectiblesShopConstants" /* 1076 */;
import intl2 from "intl" /* 1115 */;
import Text_Text from "Text/Text" /* 4832 */;
import LegacyBaseButton from "LegacyBaseButton" /* 6073 */;
import CollectiblesUtils from "CollectiblesUtils" /* 6974 */;
import useShopProductItems from "useShopProductItems" /* 7616 */;
import IndividualProductPreview from "IndividualProductPreview" /* 12709 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let c10;
let c9;
let closure_12;
let closure_4;
let hasOwnProperty;
let map1;
let memo;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let rect;
let size;
({ memo, useCallback: closure_4, useLayoutEffect: hasOwnProperty, useMemo: metroRequire, useState: metroImportDefault } = react);
({ Pressable: metroImportAll, ScrollView: c9, View: c10 } = react_native);
const ShopCtaEnum = CollectiblesShopConstants.ShopCtaEnum;
({ jsx: closure_12, jsxs: map1 } = Fragment);
let createStyles = createStyles_mod;
let obj = { previewContainer: obj2, bundleThumbnail: size, selectedRing: rect, bundleThumbnailRow: obj3, bundleContainer: obj4, bundleInfoContainer: obj5 };
obj2 = { paddingTop: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
size = { width: 56, height: 56, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, overflow: "hidden" };
rect = { position: "absolute", top: -2, left: -2, right: -2, bottom: -2, borderRadius: nativeDefault.radii.sm + 2, borderWidth: 2, borderColor: nativeDefault.colors.BORDER_STRONG };
obj3 = { flexDirection: "row", gap: nativeDefault.space.PX_12, paddingVertical: nativeDefault.space.PX_4, paddingHorizontal: 2 };
obj4 = { paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16 };
obj5 = { gap: nativeDefault.space.PX_8 };
let closure_14 = createStyles(obj);
let closure_15 = memo((index) => {
  let isSelected;
  let item;
  let items1;
  let label;
  let setSelected;
  index = index.index;
  ({ isSelected, setSelected } = index);
  const trackedSkuId = index.trackedSkuId;
  const onTrackPress = index.onTrackPress;
  const items = [setSelected, index, onTrackPress, trackedSkuId];
  ({ item, label } = index);
  const tmp = closure_4(() => {
    if (onTrackPress != null) {
      tmp(ShopCtaEnum.BUNDLE_VIEW_PRODUCT, trackedSkuId);
    }
    setSelected(index);
  }, items);
  const tmp2 = closure_14();
  const obj = { role: "radio", "aria-checked": isSelected, onPress: tmp, "aria-label": label, children: items1 };
  items1 = [, ];
  const obj2 = { style: tmp2.bundleThumbnail, children: closure_12(setSelected(trackedSkuId[7]), { item, size: 56 }) };
  items1[0] = closure_12(closure_10, obj2);
  const tmp3 = closure_13;
  const tmp4 = closure_8;
  const tmp5 = closure_12;
  const tmp6 = closure_10;
  if (isSelected) {
    const obj3 = { style: tmp2.selectedRing, pointerEvents: "none" };
    isSelected = tmp5(tmp6, obj3);
  }
  items1[1] = isSelected;
  return tmp3(tmp4, obj);
});
let closure_16 = memo((arg0) => {
  let intl;
  let items;
  let obj3;
  let onTrackPress;
  let setSelected;
  ({ items, bundledProducts: require, activeIndex: importDefault, onSelect: dependencyMap, onTrackPress: _slicedToArray } = arg0);
  let tmp = closure_14();
  let obj = LegacyBaseButton;
  const nativeGesture = obj.useNativeGesture({ disallowInterruption: true });
  const obj2 = { gesture: nativeGesture, children: closure_12(closure_9, obj3) };
  obj3 = {
    horizontal: true,
    showsHorizontalScrollIndicator: false,
    contentContainerStyle: tmp.bundleThumbnailRow,
    role: "radiogroup",
    "aria-label": intl.string(intl2.t.cTbdgu),
    children: items.map((item, index) => {
      let name;
      let skuId;
      const obj = { item, index, isSelected: index === importDefault, setSelected: dependencyMap, label: name, trackedSkuId: skuId, onTrackPress: _slicedToArray };
      name = undefined;
      const tmp = closure_12;
      const tmp2 = closure_15;
      if (require != null) {
        if (require[index] != null) {
          name = tmp5.name;
        }
      }
      if (name == null) {
        name = item.skuId;
      }
      skuId = undefined;
      if (require != null) {
        if (require[index] != null) {
          skuId = tmp7.skuId;
        }
      }
      if (skuId == null) {
        skuId = item.skuId;
      }
      return tmp(tmp2, obj, item.skuId);
    })
  };
  const GestureDetector = LegacyBaseButton.GestureDetector;
  intl = intl2.intl;
  return closure_12(GestureDetector, obj2);
});
size = size_mod;
const result = size.fileFinishedImporting("modules/collectibles/native/BundleProductDetailsActionSheetPreview.tsx");

export default function BundleProductDetailsActionSheetPreview(arg0) {
  let bundledProducts;
  let firstAvatarDecoration;
  let firstProfileEffect;
  let firstProfileFrame;
  let handlePreviewPress;
  let intl;
  let items;
  let items3;
  let items4;
  let items5;
  let items6;
  let num;
  let obj7;
  let onActiveItemChange;
  let onTrackPress;
  let product;
  let tmp3;
  let tmp5;
  let tmp6;
  let width;
  ({ product, onTrackPress, onActiveItemChange } = arg0);
  let closure_1;
  ({ width, handlePreviewPress } = arg0);
  const tmp = closure_14();
  [num, tmp3] = _slicedToArray(metroImportDefault(0), 2);
  ({ items, bundledProducts } = product);
  const tmp2 = _slicedToArray(metroImportDefault(0), 2);
  [tmp5, tmp6] = metroImportDefault(product.skuId);
  _slicedToArray(metroImportDefault(product.skuId), 2);
  let obj = useShopProductItems;
  const shopProductItems = obj.useShopProductItems(product);
  ({ firstAvatarDecoration, firstProfileFrame, firstProfileEffect } = shopProductItems);
  if (product.skuId !== tmp5) {
    tmp6(product.skuId);
    tmp3(0);
  }
  closure_1 = tmp12;
  const items1 = [items[num], onActiveItemChange];
  hasOwnProperty(() => {
    if (onActiveItemChange != null) {
      tmp(closure_1);
    }
  }, items1);
  let tmp14;
  if (bundledProducts != null) {
    tmp14 = bundledProducts[num];
  }
  let name;
  if (tmp14 != null) {
    name = tmp14.name;
  }
  if (name == null) {
    name = tmp12.skuId;
  }
  const tmp7Result = CollectiblesUtils;
  const collectibleTypeLabel = tmp7Result.getCollectibleTypeLabel(tmp12.type);
  const items2 = [items[num]];
  const obj2 = { style: tmp.previewContainer, children: items3 };
  items3 = [, ];
  const tmp17 = metroRequire(() => {
    let items;
    const obj = { skuId: closure_1.skuId, type: closure_1.type, items };
    items = [closure_1];
    return obj;
  }, items2);
  items3[0] = closure_12(IndividualProductPreview.IndividualProductPreview, { product: tmp17, width, avatarDecorationOverride: firstAvatarDecoration, profileFrameOverride: firstProfileFrame, profileEffectOverride: firstProfileEffect, handlePreviewPress, onTrackPress });
  const obj4 = { style: tmp.bundleInfoContainer, children: items4 };
  items4 = [, ];
  const obj3 = { style: tmp.bundleContainer, children: items5 };
  const obj5 = { variant: "heading-xl/bold", children: product.name };
  items4[0] = closure_12(Text_Text.Text, obj5);
  const obj6 = { variant: "text-sm/medium", color: "text-default", children: intl.formatToPlainString(intl2.t["/0Yndu"], obj7) };
  const Text = tmp7(4832).Text;
  intl = tmp7(1115).intl;
  obj7 = { num: items.length };
  items4[1] = closure_12(Text, obj6);
  items5 = [map1(authStore, obj4), ];
  const obj8 = { style: tmp.bundleInfoContainer, children: items6 };
  items6 = [closure_12(closure_16, { items, bundledProducts, activeIndex: num, onSelect: tmp3, onTrackPress }), ];
  const items7 = [name, ];
  let tmp20Result = null != collectibleTypeLabel;
  const Text2 = tmp7(4832).Text;
  const tmp20 = closure_12;
  if (tmp20Result) {
    const _HermesInternal = HermesInternal;
    const obj9 = { variant: "text-sm/medium", color: "text-muted", children: " - " + collectibleTypeLabel };
    const Text3 = tmp7(4832).Text;
    tmp20Result = tmp20(Text3, obj9);
  }
  items7[1] = tmp20Result;
  items6[1] = map1(Text2, { variant: "text-sm/medium", color: "text-default", children: items7 });
  items5[1] = map1(authStore, obj8);
  items3[1] = map1(authStore, obj3);
  return map1(authStore, obj2);
};
