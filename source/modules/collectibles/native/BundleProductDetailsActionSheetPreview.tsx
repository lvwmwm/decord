// Module ID: 8739
// Function ID: 69120
// Name: BundleThumbnail
// Dependencies: []
// Exports: default

// Module 8739 (BundleThumbnail)
function BundleThumbnail(index) {
  let isSelected;
  let item;
  let label;
  let setSelected;
  index = index.index;
  const arg1 = index;
  ({ isSelected, setSelected } = index);
  const importDefault = setSelected;
  const trackedSkuId = index.trackedSkuId;
  const dependencyMap = trackedSkuId;
  const onTrackPress = index.onTrackPress;
  let closure_3 = onTrackPress;
  const items = [setSelected, index, onTrackPress, trackedSkuId];
  ({ item, label } = index);
  const tmp2 = callback7();
  let obj = {
    role: "radio",
    aria-checked: isSelected,
    onPress: callback2(() => {
      if (null != onTrackPress) {
        onTrackPress(constants.BUNDLE_VIEW_PRODUCT, trackedSkuId);
      }
      setSelected(index);
    }, items),
    aria-label: label
  };
  obj = { style: tmp2.bundleThumbnail, children: callback5(importDefault(dependencyMap[7]), { item, size: 56 }) };
  const items1 = [callback5(closure_10, obj), ];
  if (isSelected) {
    obj = { style: tmp2.selectedRing, pointerEvents: "none" };
    isSelected = callback5(closure_10, obj);
  }
  items1[1] = isSelected;
  obj.children = items1;
  return closure_13(closure_8, obj);
}
let closure_3 = importDefault(dependencyMap[0]);
({ useCallback: closure_4, useLayoutEffect: closure_5, useMemo: closure_6, useState: closure_7 } = arg1(dependencyMap[1]));
const tmp2 = arg1(dependencyMap[1]);
({ Pressable: closure_8, ScrollView: closure_9, View: closure_10 } = arg1(dependencyMap[2]));
const ShopCtaEnum = arg1(dependencyMap[3]).ShopCtaEnum;
const tmp3 = arg1(dependencyMap[2]);
({ jsx: closure_12, jsxs: closure_13 } = arg1(dependencyMap[4]));
let obj = arg1(dependencyMap[5]);
obj = {};
obj = { paddingTop: importDefault(dependencyMap[6]).space.PX_16, paddingBottom: importDefault(dependencyMap[6]).space.PX_16, gap: importDefault(dependencyMap[6]).space.PX_16 };
obj.previewContainer = obj;
const tmp4 = arg1(dependencyMap[4]);
obj.bundleThumbnail = { borderRadius: importDefault(dependencyMap[6]).radii.sm, backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_MOD_SUBTLE };
const obj2 = { GRADIENT_EASING_CONFIG: null, Globe: "heading-lg/bold", baseVertical: "mobile-text-heading-primary", canSort: "header", ebAnWE: "flex", flexGrow: "center", -77266183: "row", borderRadius: importDefault(dependencyMap[6]).radii.sm + 2, borderColor: importDefault(dependencyMap[6]).colors.BORDER_STRONG };
obj.selectedRing = obj2;
const obj1 = { borderRadius: importDefault(dependencyMap[6]).radii.sm, backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_MOD_SUBTLE };
obj.bundleThumbnailRow = { flexDirection: "row", gap: importDefault(dependencyMap[6]).space.PX_12, paddingVertical: importDefault(dependencyMap[6]).space.PX_4, paddingHorizontal: 2 };
const obj3 = { flexDirection: "row", gap: importDefault(dependencyMap[6]).space.PX_12, paddingVertical: importDefault(dependencyMap[6]).space.PX_4, paddingHorizontal: 2 };
obj.bundleContainer = { paddingHorizontal: importDefault(dependencyMap[6]).space.PX_16, gap: importDefault(dependencyMap[6]).space.PX_16 };
const obj4 = { paddingHorizontal: importDefault(dependencyMap[6]).space.PX_16, gap: importDefault(dependencyMap[6]).space.PX_16 };
obj.bundleInfoContainer = { gap: importDefault(dependencyMap[6]).space.PX_8 };
let closure_14 = obj.createStyles(obj);
const obj5 = { gap: importDefault(dependencyMap[6]).space.PX_8 };
const result = arg1(dependencyMap[13]).fileFinishedImporting("modules/collectibles/native/BundleProductDetailsActionSheetPreview.tsx");

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
  const arg1 = onTrackPress;
  onActiveItemChange = onActiveItemChange.onActiveItemChange;
  const importDefault = onActiveItemChange;
  let tmp10;
  ({ width, handlePreviewPress } = onActiveItemChange);
  const tmp = callback7();
  const tmp2 = callback(callback4(0), 2);
  let num = tmp2[0];
  const dependencyMap = tmp3;
  [tmp5, tmp6] = callback(callback4(product.skuId), 2);
  ({ items, bundledProducts } = product);
  const callback = bundledProducts;
  let closure_4 = num;
  const tmp4 = callback(callback4(product.skuId), 2);
  if (product.skuId !== tmp5) {
    tmp6(product.skuId);
    tmp3(0);
    closure_4 = 0;
    num = 0;
  }
  tmp10 = items[num];
  items = [tmp10, onActiveItemChange];
  tmp10(() => {
    if (null != onActiveItemChange) {
      onActiveItemChange(tmp10);
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
  let obj = arg1(dependencyMap[9]);
  const collectibleTypeLabel = obj.getCollectibleTypeLabel(tmp10.type);
  obj = { skuId: tmp10.skuId, type: tmp10.type, items: items1 };
  const items1 = [tmp10];
  obj = { style: tmp.previewContainer };
  const items2 = [callback5(arg1(dependencyMap[10]).IndividualProductPreview, { product: obj, width, handlePreviewPress, onTrackPress }), ];
  const obj1 = { style: tmp.bundleContainer };
  const obj2 = { style: tmp.bundleInfoContainer };
  const items3 = [callback5(arg1(dependencyMap[11]).Text, { variant: "heading-xl/bold", children: product.name }), ];
  const obj4 = {};
  const intl = arg1(dependencyMap[12]).intl;
  obj4.children = intl.formatToPlainString(arg1(dependencyMap[12]).t./0Yndu, { num: items.length });
  items3[1] = callback5(arg1(dependencyMap[11]).Text, obj4);
  obj2.children = items3;
  const items4 = [callback6(closure_10, obj2), ];
  const obj6 = { style: tmp.bundleInfoContainer };
  const obj7 = {
    gesture: callback3(() => {
      const Gesture = onTrackPress(tmp3[8]).Gesture;
      return Gesture.Native().disallowInterruption(true);
    }, [])
  };
  const obj8 = { contentContainerStyle: tmp.bundleThumbnailRow };
  const intl2 = arg1(dependencyMap[12]).intl;
  obj8.aria-label = intl2.string(arg1(dependencyMap[12]).t.cTbdgu);
  obj8.children = items.map((item, index) => {
    const obj = { item, index, isSelected: index === closure_4, setSelected: tmp3 };
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
    return closure_12(closure_15, obj, item.skuId);
  });
  obj7.children = callback5(closure_9, obj8);
  const items5 = [callback5(arg1(dependencyMap[8]).GestureDetector, obj7), ];
  const obj9 = {};
  const items6 = [name, ];
  let tmp22 = null != collectibleTypeLabel;
  if (tmp22) {
    const obj10 = { hasMaxConnections: "<string:3086024708>", isBoostOnlySubscription: "<string:625475588>" };
    const _HermesInternal = HermesInternal;
    obj10.children = " - " + collectibleTypeLabel;
    tmp22 = callback5(arg1(dependencyMap[11]).Text, obj10);
  }
  items6[1] = tmp22;
  obj9.children = items6;
  items5[1] = callback6(arg1(dependencyMap[11]).Text, obj9);
  obj6.children = items5;
  items4[1] = callback6(closure_10, obj6);
  obj1.children = items4;
  items2[1] = callback6(closure_10, obj1);
  obj.children = items2;
  return callback6(closure_10, obj);
};
