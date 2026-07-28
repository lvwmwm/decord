// Module ID: 8718
// Function ID: 69017
// Name: memo
// Dependencies: [57, 31, 27, 655, 33, 4165, 689, 8719, 5251, 1212, 5792, 8720, 4161, 2]
// Exports: default

// Module 8718 (memo)
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
let memo;
const require = arg1;
({ memo, useCallback: closure_4, useLayoutEffect: closure_5, useMemo: closure_6, useState: closure_7 } = result);
({ Pressable: closure_8, ScrollView: closure_9, View: closure_10 } = get_ActivityIndicator);
({ jsx: closure_12, jsxs: closure_13 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { paddingTop: require("_createForOfIteratorHelperLoose").space.PX_16, paddingBottom: require("_createForOfIteratorHelperLoose").space.PX_16, gap: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.previewContainer = _createForOfIteratorHelperLoose;
let obj1 = { width: 56, height: 56, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_SUBTLE, overflow: "hidden" };
_createForOfIteratorHelperLoose.bundleThumbnail = obj1;
const obj2 = { position: "absolute", top: -2, left: -2, right: -2, bottom: -2, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm + 2, borderWidth: 2, borderColor: require("_createForOfIteratorHelperLoose").colors.BORDER_STRONG };
_createForOfIteratorHelperLoose.selectedRing = obj2;
_createForOfIteratorHelperLoose.bundleThumbnailRow = { flexDirection: "row", gap: require("_createForOfIteratorHelperLoose").space.PX_12, paddingVertical: require("_createForOfIteratorHelperLoose").space.PX_4, paddingHorizontal: 2 };
let obj3 = { flexDirection: "row", gap: require("_createForOfIteratorHelperLoose").space.PX_12, paddingVertical: require("_createForOfIteratorHelperLoose").space.PX_4, paddingHorizontal: 2 };
_createForOfIteratorHelperLoose.bundleContainer = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, gap: require("_createForOfIteratorHelperLoose").space.PX_16 };
const obj4 = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, gap: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.bundleInfoContainer = { gap: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let closure_15 = memo((index) => {
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
    onPress: callback2(() => {
      if (null != onTrackPress) {
        onTrackPress(outer1_11.BUNDLE_VIEW_PRODUCT, trackedSkuId);
      }
      setSelected(index);
    }, items),
    "aria-label": label
  };
  obj = { style: tmp2.bundleThumbnail, children: callback6(setSelected(trackedSkuId[7]), { item, size: 56 }) };
  const items1 = [callback6(closure_10, obj), ];
  if (isSelected) {
    obj = { style: tmp2.selectedRing, pointerEvents: "none" };
    isSelected = callback6(closure_10, obj);
  }
  items1[1] = isSelected;
  obj.children = items1;
  return closure_13(closure_8, obj);
});
let closure_16 = memo((arg0) => {
  let _slicedToArray;
  let dependencyMap;
  let importDefault;
  let items;
  let require;
  ({ items, bundledProducts: require, activeIndex: importDefault, onSelect: dependencyMap, onTrackPress: _slicedToArray } = arg0);
  const tmp = _createForOfIteratorHelperLoose();
  let obj = {
    gesture: callback4(() => {
      const Gesture = outer1_0(outer1_2[8]).Gesture;
      return Gesture.Native().disallowInterruption(true);
    }, [])
  };
  obj = { horizontal: true, showsHorizontalScrollIndicator: false, contentContainerStyle: tmp.bundleThumbnailRow, role: "radiogroup" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj["aria-label"] = intl.string(require(1212) /* getSystemLocale */.t.cTbdgu);
  obj.children = items.map((item, index) => {
    const obj = { item, index, isSelected: index === closure_1, setSelected: closure_2 };
    let name;
    if (null != dependencyMap) {
      if (null != dependencyMap[index]) {
        name = tmp5.name;
      }
    }
    if (null == name) {
      name = item.skuId;
    }
    obj.label = name;
    let skuId;
    if (null != dependencyMap) {
      if (null != dependencyMap[index]) {
        skuId = tmp8.skuId;
      }
    }
    if (null == skuId) {
      skuId = item.skuId;
    }
    obj.trackedSkuId = skuId;
    obj.onTrackPress = _slicedToArray;
    return outer1_12(outer1_15, obj, item.skuId);
  });
  obj.children = callback6(closure_9, obj);
  return callback6(require(5251) /* Directions */.GestureDetector, obj);
});
let obj5 = { gap: require("_createForOfIteratorHelperLoose").space.PX_8 };
result = require("get ActivityIndicator").fileFinishedImporting("modules/collectibles/native/BundleProductDetailsActionSheetPreview.tsx");

export default function BundleProductDetailsActionSheetPreview(arg0) {
  let bundledProducts;
  let handlePreviewPress;
  let items;
  let onActiveItemChange;
  let onTrackPress;
  let product;
  let width;
  ({ product, onTrackPress, onActiveItemChange } = arg0);
  let c1;
  ({ width, handlePreviewPress } = arg0);
  const tmp = _createForOfIteratorHelperLoose();
  const tmp2 = callback(callback5(0), 2);
  let num = tmp2[0];
  ({ items, bundledProducts } = product);
  if (product.skuId !== tmp4[0]) {
    tmp5(product.skuId);
    tmp3(0);
    num = 0;
  }
  c1 = tmp8;
  items = [, ];
  items[0] = items[num];
  items[1] = onActiveItemChange;
  callback3(() => {
    if (null != onActiveItemChange) {
      onActiveItemChange(c1);
    }
  }, items);
  let tmp10;
  if (null != bundledProducts) {
    tmp10 = bundledProducts[num];
  }
  let name;
  if (null != tmp10) {
    name = tmp10.name;
  }
  if (null == name) {
    name = tmp8.skuId;
  }
  let obj = onActiveItemChange(5792);
  const collectibleTypeLabel = obj.getCollectibleTypeLabel(tmp8.type);
  const items1 = [items[num]];
  obj = { style: tmp.previewContainer };
  tmp4 = callback(callback5(product.skuId), 2);
  const items2 = [
    callback6(onActiveItemChange(8720).IndividualProductPreview, {
      product: callback4(() => {
        const items = [_undefined];
        return { skuId: _undefined.skuId, type: _undefined.type, items };
      }, items1),
      width,
      handlePreviewPress,
      onTrackPress
    }),

  ];
  obj = { style: tmp.bundleContainer };
  const obj1 = { style: tmp.bundleInfoContainer };
  const items3 = [callback6(onActiveItemChange(4161).Text, { variant: "heading-xl/bold", children: product.name }), ];
  const obj3 = { variant: "text-sm/medium", color: "text-default" };
  const intl = onActiveItemChange(1212).intl;
  obj3.children = intl.formatToPlainString(onActiveItemChange(1212).t["/0Yndu"], { num: items.length });
  items3[1] = callback6(onActiveItemChange(4161).Text, obj3);
  obj1.children = items3;
  const items4 = [callback7(closure_10, obj1), ];
  const obj5 = { style: tmp.bundleInfoContainer };
  const obj6 = { items, bundledProducts, activeIndex: num, onSelect: tmp2[1], onTrackPress };
  const items5 = [callback6(closure_16, obj6), ];
  const obj7 = { variant: "text-sm/medium", color: "text-default" };
  const items6 = [name, ];
  let tmp16 = null != collectibleTypeLabel;
  if (tmp16) {
    const obj8 = { variant: "text-sm/medium", color: "text-muted" };
    const _HermesInternal = HermesInternal;
    obj8.children = " - " + collectibleTypeLabel;
    tmp16 = callback6(onActiveItemChange(4161).Text, obj8);
  }
  items6[1] = tmp16;
  obj7.children = items6;
  items5[1] = callback7(onActiveItemChange(4161).Text, obj7);
  obj5.children = items5;
  items4[1] = callback7(closure_10, obj5);
  obj.children = items4;
  items2[1] = callback7(closure_10, obj);
  obj.children = items2;
  return callback7(closure_10, obj);
};
