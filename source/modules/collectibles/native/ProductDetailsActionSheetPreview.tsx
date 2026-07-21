// Module ID: 8738
// Function ID: 69108
// Name: BundleProductPreview
// Dependencies: []
// Exports: default

// Module 8738 (BundleProductPreview)
function BundleProductPreview(onActiveItemTypeChange) {
  let handlePreviewPress;
  let onActiveItemChange;
  let onTrackPress;
  let product;
  let width;
  ({ product, width, handlePreviewPress, onTrackPress, onActiveItemChange } = onActiveItemTypeChange);
  let obj = arg1(dependencyMap[8]);
  if (obj.useCollectiblesMobileFlexibleBundlesExperiment("ProductDetailsActionSheetPreview").enabled) {
    obj = { product, width, handlePreviewPress, onTrackPress, onActiveItemChange };
    let tmp2Result = tmp2(importDefault(dependencyMap[9]), obj);
  } else {
    obj = { style: tmp.previewDivider };
    const obj1 = { product, width, handlePreviewPress, onTrackPress, onActiveItemChange, onActiveItemTypeChange: onActiveItemTypeChange.onActiveItemTypeChange };
    obj.children = callback5(BundlePreview, obj1);
    tmp2Result = tmp2(View, obj);
  }
  return tmp2Result;
}
function BundlePreview(product) {
  product = product.product;
  const arg1 = product;
  const width = product.width;
  const importDefault = width;
  const handlePreviewPress = product.handlePreviewPress;
  const dependencyMap = handlePreviewPress;
  const onTrackPress = product.onTrackPress;
  const callback2 = onTrackPress;
  const onActiveItemChange = product.onActiveItemChange;
  const onActiveItemTypeChange = product.onActiveItemTypeChange;
  let obj = arg1(dependencyMap[10]);
  const shopProductItems = obj.useShopProductItems(product);
  const tmp2 = callback2(first(0), 2);
  const first = tmp2[0];
  let closure_8 = tmp2[1];
  const items = [product, width, handlePreviewPress, shopProductItems, onTrackPress, first];
  const tmp4 = shopProductItems(() => {
    let tmp = null;
    if (null != shopProductItems.firstProfileEffect) {
      let obj = {};
      const intl = product(handlePreviewPress[11]).intl;
      obj.label = intl.string(product(handlePreviewPress[11]).t.s+YSgo);
      obj.id = "profile";
      obj = { profileEffect: shopProductItems.firstProfileEffect, profileEffectRestartKey: first, width, handlePreviewPress, onTrackPress };
      obj.page = callback2(product(handlePreviewPress[12]).ProfileEffectPreview, obj);
      tmp = obj;
    }
    const items = [tmp, , ];
    let tmp10 = null;
    if (null != shopProductItems.firstAvatarDecoration) {
      obj = {};
      const intl2 = product(handlePreviewPress[11]).intl;
      obj.label = intl2.string(product(handlePreviewPress[11]).t.aVCcr8);
      obj.id = "decoration";
      const obj1 = { product, handlePreviewPress, onTrackPress };
      obj.page = callback2(product(handlePreviewPress[12]).AvatarDecorationPreview, obj1);
      tmp10 = obj;
    }
    items[1] = tmp10;
    let tmp17 = null;
    if (null != shopProductItems.firstNameplate) {
      const obj2 = {};
      const intl3 = product(handlePreviewPress[11]).intl;
      obj2.label = intl3.string(product(handlePreviewPress[11]).t.HNnSVZ);
      obj2.id = "nameplate";
      const obj3 = { product };
      obj2.page = callback2(product(handlePreviewPress[12]).NameplatePreview, obj3);
      tmp17 = obj2;
    }
    items[2] = tmp17;
    return items.filter((arg0) => null != arg0);
  }, items);
  const ShopCtaEnum = tmp4;
  const items1 = [shopProductItems];
  const callback5 = shopProductItems(() => ({ profile: shopProductItems.firstProfileEffect, decoration: shopProductItems.firstAvatarDecoration, nameplate: shopProductItems.firstNameplate }), items1);
  const items2 = [shopProductItems, onActiveItemChange];
  onActiveItemTypeChange(() => {
    let firstNameplate = shopProductItems.firstProfileEffect;
    if (null == firstNameplate) {
      firstNameplate = shopProductItems.firstAvatarDecoration;
    }
    if (null == firstNameplate) {
      firstNameplate = shopProductItems.firstNameplate;
    }
    if (null != firstNameplate) {
      if (null != onActiveItemChange) {
        onActiveItemChange(firstNameplate);
      }
    }
  }, items2);
  let obj1 = arg1(dependencyMap[13]);
  obj = {
    items: tmp4,
    pageWidth: width,
    defaultIndex: 0,
    onPageChange(arg0) {
      let id;
      if (null != tmp4[arg0]) {
        id = tmp.id;
      }
      if (null != id) {
        if (null != closure_13[id]) {
          if (null != onActiveItemTypeChange) {
            onActiveItemTypeChange(tmp4);
          }
        }
        if (null != closure_10[id]) {
          if (null != onActiveItemChange) {
            onActiveItemChange(tmp9);
          }
        }
      }
      if ("profile" === id) {
        callback((arg0) => arg0 + 1);
      }
    },
    onSetActiveIndex(arg0) {
      let id;
      if (null != tmp4[arg0]) {
        id = tmp.id;
      }
      if ("profile" === id) {
        if (null != onTrackPress) {
          onTrackPress(tmp4.BUNDLE_VIEW_PROFILE_EFFECT);
        }
      } else if ("decoration" === id) {
        if (null != onTrackPress) {
          onTrackPress(tmp4.BUNDLE_VIEW_AVATAR_DECORATION);
        }
      } else if ("nameplate" === id) {
        if (null != onTrackPress) {
          onTrackPress(onTrackPress.BUNDLE_VIEW_NAMEPLATE);
        }
      }
    }
  };
  const segmentedControlState = obj1.useSegmentedControlState(obj);
  obj = {};
  const items3 = [callback5(arg1(dependencyMap[14]).SegmentedControlPages, { state: segmentedControlState }), ];
  obj1 = { style: { paddingHorizontal: importDefault(dependencyMap[6]).space.PX_16, paddingTop: importDefault(dependencyMap[6]).space.PX_12 }, children: callback5(arg1(dependencyMap[15]).SegmentedControl, { state: segmentedControlState, variant: "default" }) };
  items3[1] = callback5(closure_8, obj1);
  obj.children = items3;
  return callback6(closure_8, obj);
}
let closure_3 = importDefault(dependencyMap[0]);
({ useCallback: closure_4, useEffect: closure_5, useMemo: closure_6, useState: closure_7 } = arg1(dependencyMap[1]));
const View = arg1(dependencyMap[2]).View;
const ShopCtaEnum = arg1(dependencyMap[3]).ShopCtaEnum;
const tmp2 = arg1(dependencyMap[1]);
({ jsx: closure_10, jsxs: closure_11 } = arg1(dependencyMap[4]));
let obj = arg1(dependencyMap[5]);
obj = { previewContainer: { flex: 1 } };
obj = { borderBottomColor: importDefault(dependencyMap[6]).colors.BACKGROUND_MOD_SUBTLE, borderBottomWidth: 1, paddingBottom: importDefault(dependencyMap[6]).space.PX_16, flex: 1 };
obj.previewDivider = obj;
let closure_12 = obj.createStyles(obj);
const obj1 = { profile: arg1(dependencyMap[7]).CollectiblesItemType.PROFILE_EFFECT, decoration: arg1(dependencyMap[7]).CollectiblesItemType.AVATAR_DECORATION, nameplate: arg1(dependencyMap[7]).CollectiblesItemType.NAMEPLATE };
const tmp3 = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[16]).fileFinishedImporting("modules/collectibles/native/ProductDetailsActionSheetPreview.tsx");

export default function ProductDetailsActionSheetPreview(arg0) {
  let handlePreviewPress;
  let onBundleActiveItemChange;
  let onBundleActiveItemTypeChange;
  let onTrackPress;
  let product;
  ({ product, handlePreviewPress, onTrackPress } = arg0);
  ({ onBundleActiveItemTypeChange, onBundleActiveItemChange } = arg0);
  const tmp = callback7();
  const tmp2 = callback2(callback4(0), 2);
  const first = tmp2[0];
  const callback = tmp2[1];
  let obj = {
    style: tmp.previewContainer,
    onLayout: callback3((nativeEvent) => {
      callback(nativeEvent.nativeEvent.layout.width);
    }, [])
  };
  if (product.type === callback(dependencyMap[7]).CollectiblesItemType.BUNDLE) {
    obj = { product, width: first, handlePreviewPress, onTrackPress, onActiveItemChange: onBundleActiveItemChange, onActiveItemTypeChange: onBundleActiveItemTypeChange };
    let tmp12 = callback5(BundleProductPreview, obj);
  } else {
    obj = { style: tmp.previewDivider };
    const obj1 = { product, width: first, handlePreviewPress, onTrackPress };
    obj.children = callback5(callback(dependencyMap[12]).IndividualProductPreview, obj1);
    tmp12 = callback5(View, obj);
  }
  obj.children = tmp12;
  return callback5(View, obj);
};
