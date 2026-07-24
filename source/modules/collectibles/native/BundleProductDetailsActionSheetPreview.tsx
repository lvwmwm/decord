// Module ID: 8786
// Function ID: 69388
// Name: BundleThumbnail
// Dependencies: [57, 31, 27, 655, 33, 4130, 689, 8787, 5217, 6786, 8788, 4126, 1212, 2]
// Exports: default

// Module 8786 (BundleThumbnail)
import _slicedToArray from "_slicedToArray";
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import { ShopCtaEnum } from "items";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_12;
let closure_13;
let closure_4;
let closure_5;
let closure_6;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
function BundleThumbnail(index) {
  let isSelected;
  let item;
  let label;
  let setSelected;
  index = index.index;
  ({ isSelected, setSelected } = index);
  const trackedSkuId = index.trackedSkuId;
  const onTrackPress = index.onTrackPress;
  const items = [setSelected, index, onTrackPress, trackedSkuId];
  ({ item, label } = index);
  const tmp2 = _createForOfIteratorHelperLoose();
  let obj = {
    role: "radio",
    "aria-checked": isSelected,
    onPress: callback(() => {
      if (null != onTrackPress) {
        onTrackPress(outer1_11.BUNDLE_VIEW_PRODUCT, trackedSkuId);
      }
      setSelected(index);
    }, items),
    "aria-label": label
  };
  obj = { style: tmp2.bundleThumbnail, children: callback5(setSelected(trackedSkuId[7]), { item, size: 56 }) };
  const items1 = [callback5(closure_10, obj), ];
  if (isSelected) {
    obj = { style: tmp2.selectedRing, pointerEvents: "none" };
    isSelected = callback5(closure_10, obj);
  }
  items1[1] = isSelected;
  obj.children = items1;
  return closure_13(closure_8, obj);
}
({ useCallback: closure_4, useLayoutEffect: closure_5, useMemo: closure_6, useState: closure_7 } = result);
({ Pressable: closure_8, ScrollView: closure_9, View: closure_10 } = get_ActivityIndicator);
({ jsx: closure_12, jsxs: closure_13 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { paddingTop: require("_createForOfIteratorHelperLoose").space.PX_16, paddingBottom: require("_createForOfIteratorHelperLoose").space.PX_16, gap: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.previewContainer = _createForOfIteratorHelperLoose;
let obj1 = { width: 56, height: 56, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_SUBTLE, overflow: "hidden" };
_createForOfIteratorHelperLoose.bundleThumbnail = obj1;
let obj2 = { position: "absolute", top: -2, left: -2, right: -2, bottom: -2, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm + 2, borderWidth: 2, borderColor: require("_createForOfIteratorHelperLoose").colors.BORDER_STRONG };
_createForOfIteratorHelperLoose.selectedRing = obj2;
_createForOfIteratorHelperLoose.bundleThumbnailRow = { flexDirection: "row", gap: require("_createForOfIteratorHelperLoose").space.PX_12, paddingVertical: require("_createForOfIteratorHelperLoose").space.PX_4, paddingHorizontal: 2 };
const obj3 = { flexDirection: "row", gap: require("_createForOfIteratorHelperLoose").space.PX_12, paddingVertical: require("_createForOfIteratorHelperLoose").space.PX_4, paddingHorizontal: 2 };
_createForOfIteratorHelperLoose.bundleContainer = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, gap: require("_createForOfIteratorHelperLoose").space.PX_16 };
let obj4 = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, gap: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.bundleInfoContainer = { gap: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const obj5 = { gap: require("_createForOfIteratorHelperLoose").space.PX_8 };
result = require("get ActivityIndicator").fileFinishedImporting("modules/collectibles/native/BundleProductDetailsActionSheetPreview.tsx");

export default function BundleProductDetailsActionSheetPreview(onActiveItemChange) {
  let bundledProducts;
  let handlePreviewPress;
  let items;
  let onTrackPress;
  let product;
  let tmp5;
  let tmp6;
  let width;
  ({ product, onTrackPress } = onActiveItemChange);
  onActiveItemChange = onActiveItemChange.onActiveItemChange;
  let callback2;
  ({ width, handlePreviewPress } = onActiveItemChange);
  const tmp = _createForOfIteratorHelperLoose();
  const tmp2 = bundledProducts(callback4(0), 2);
  let num = tmp2[0];
  const dependencyMap = tmp3;
  [tmp5, tmp6] = bundledProducts(callback4(product.skuId), 2);
  ({ items, bundledProducts } = product);
  let c4 = num;
  const tmp4 = bundledProducts(callback4(product.skuId), 2);
  if (product.skuId !== tmp5) {
    tmp6(product.skuId);
    tmp3(0);
    c4 = 0;
    num = 0;
  }
  callback2 = tmp10;
  items = [, ];
  items[0] = items[num];
  items[1] = onActiveItemChange;
  callback2(() => {
    if (null != onActiveItemChange) {
      onActiveItemChange(c5);
    }
  }, items);
  let tmp12;
  if (null != bundledProducts) {
    tmp12 = bundledProducts[num];
  }
  let name;
  if (null != tmp12) {
    name = tmp12.name;
  }
  if (null == name) {
    name = tmp10.skuId;
  }
  let obj = onTrackPress(6786);
  const collectibleTypeLabel = obj.getCollectibleTypeLabel(tmp10.type);
  obj = { skuId: tmp10.skuId, type: tmp10.type, items: items1 };
  items1 = [items[num]];
  obj = { style: tmp.previewContainer };
  const items2 = [callback5(onTrackPress(8788).IndividualProductPreview, { product: obj, width, handlePreviewPress, onTrackPress }), ];
  const obj1 = { style: tmp.bundleContainer };
  const obj2 = { style: tmp.bundleInfoContainer };
  const items3 = [callback5(onTrackPress(4126).Text, { variant: "heading-xl/bold", children: product.name }), ];
  const obj4 = { variant: "text-sm/medium", color: "text-default" };
  const intl = onTrackPress(1212).intl;
  obj4.children = intl.formatToPlainString(onTrackPress(1212).t["/0Yndu"], { num: items.length });
  items3[1] = callback5(onTrackPress(4126).Text, obj4);
  obj2.children = items3;
  const items4 = [callback6(closure_10, obj2), ];
  const obj6 = { style: tmp.bundleInfoContainer };
  const obj7 = {
    gesture: callback3(() => {
      const Gesture = onTrackPress(tmp3[8]).Gesture;
      return Gesture.Native().disallowInterruption(true);
    }, [])
  };
  const obj8 = { horizontal: true, showsHorizontalScrollIndicator: false, contentContainerStyle: tmp.bundleThumbnailRow, role: "radiogroup" };
  const intl2 = onTrackPress(1212).intl;
  obj8["aria-label"] = intl2.string(onTrackPress(1212).t.cTbdgu);
  obj8.children = items.map((item, index) => {
    const obj = { item, index, isSelected: index === c4, setSelected: closure_2 };
    let name;
    if (null != bundledProducts) {
      if (null != bundledProducts[index]) {
        name = tmp5.name;
      }
    }
    if (null == name) {
      name = item.skuId;
    }
    obj.label = name;
    let skuId;
    if (null != bundledProducts) {
      if (null != bundledProducts[index]) {
        skuId = tmp8.skuId;
      }
    }
    if (null == skuId) {
      skuId = item.skuId;
    }
    obj.trackedSkuId = skuId;
    obj.onTrackPress = onTrackPress;
    return outer1_12(outer1_15, obj, item.skuId);
  });
  obj7.children = callback5(closure_9, obj8);
  const items5 = [callback5(onTrackPress(5217).GestureDetector, obj7), ];
  const obj9 = { variant: "text-sm/medium", color: "text-default" };
  const items6 = [name, ];
  let tmp22 = null != collectibleTypeLabel;
  if (tmp22) {
    const obj10 = { variant: "text-sm/medium", color: "text-muted" };
    const _HermesInternal = HermesInternal;
    obj10.children = " - " + collectibleTypeLabel;
    tmp22 = callback5(onTrackPress(4126).Text, obj10);
  }
  items6[1] = tmp22;
  obj9.children = items6;
  items5[1] = callback6(onTrackPress(4126).Text, obj9);
  obj6.children = items5;
  items4[1] = callback6(closure_10, obj6);
  obj1.children = items4;
  items2[1] = callback6(closure_10, obj1);
  obj.children = items2;
  return callback6(closure_10, obj);
};
