// Module ID: 8785
// Function ID: 69376
// Name: BundleProductPreview
// Dependencies: [57, 31, 27, 655, 33, 4130, 689, 1876, 8277, 8786, 8251, 1212, 8788, 8404, 8797, 8799, 2]
// Exports: default

// Module 8785 (BundleProductPreview)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { View } from "get ActivityIndicator";
import { ShopCtaEnum } from "items";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_4;
let closure_5;
let closure_6;
let closure_7;
let require = arg1;
function BundleProductPreview(onActiveItemTypeChange) {
  let handlePreviewPress;
  let onActiveItemChange;
  let onTrackPress;
  let product;
  let width;
  ({ product, width, handlePreviewPress, onTrackPress, onActiveItemChange } = onActiveItemTypeChange);
  let obj = require(8277) /* useCollectiblesMobileFlexibleBundlesExperiment */;
  if (obj.useCollectiblesMobileFlexibleBundlesExperiment("ProductDetailsActionSheetPreview").enabled) {
    obj = { product, width, handlePreviewPress, onTrackPress, onActiveItemChange };
    let tmp2Result = tmp2(importDefault(8786), obj);
  } else {
    obj = { style: tmp.previewDivider };
    const obj1 = { product, width, handlePreviewPress, onTrackPress, onActiveItemChange, onActiveItemTypeChange: onActiveItemTypeChange.onActiveItemTypeChange };
    obj.children = callback4(BundlePreview, obj1);
    tmp2Result = tmp2(View, obj);
  }
  return tmp2Result;
}
function BundlePreview(product) {
  product = product.product;
  const require = product;
  const width = product.width;
  const handlePreviewPress = product.handlePreviewPress;
  const onTrackPress = product.onTrackPress;
  const onActiveItemChange = product.onActiveItemChange;
  const onActiveItemTypeChange = product.onActiveItemTypeChange;
  let obj = require(handlePreviewPress[10]);
  const shopProductItems = obj.useShopProductItems(product);
  const tmp2 = onTrackPress(first(0), 2);
  first = tmp2[0];
  let closure_8 = tmp2[1];
  let items = [product, width, handlePreviewPress, shopProductItems, onTrackPress, first];
  const tmp4 = shopProductItems(() => {
    let tmp = null;
    if (null != shopProductItems.firstProfileEffect) {
      let obj = {};
      const intl = product(handlePreviewPress[11]).intl;
      obj.label = intl.string(product(handlePreviewPress[11]).t["s+YSgo"]);
      obj.id = "profile";
      obj = { profileEffect: shopProductItems.firstProfileEffect, profileEffectRestartKey: first, width, handlePreviewPress, onTrackPress };
      obj.page = dependencyMap(product(handlePreviewPress[12]).ProfileEffectPreview, obj);
      tmp = obj;
    }
    const items = [tmp, , ];
    let tmp10 = null;
    if (null != shopProductItems.firstAvatarDecoration) {
      obj = {};
      const intl2 = product(handlePreviewPress[11]).intl;
      obj.label = intl2.string(product(handlePreviewPress[11]).t.aVCcr8);
      obj.id = "decoration";
      const obj1 = { product: closure_0, handlePreviewPress, onTrackPress };
      obj.page = dependencyMap(product(handlePreviewPress[12]).AvatarDecorationPreview, obj1);
      tmp10 = obj;
    }
    items[1] = tmp10;
    let tmp17 = null;
    if (null != shopProductItems.firstNameplate) {
      const obj2 = {};
      const intl3 = product(handlePreviewPress[11]).intl;
      obj2.label = intl3.string(product(handlePreviewPress[11]).t.HNnSVZ);
      obj2.id = "nameplate";
      const obj3 = { product: closure_0 };
      obj2.page = dependencyMap(product(handlePreviewPress[12]).NameplatePreview, obj3);
      tmp17 = obj2;
    }
    items[2] = tmp17;
    return items.filter((arg0) => null != arg0);
  }, items);
  const ShopCtaEnum = tmp4;
  const items1 = [shopProductItems];
  const callback4 = shopProductItems(() => ({ profile: shopProductItems.firstProfileEffect, decoration: shopProductItems.firstAvatarDecoration, nameplate: shopProductItems.firstNameplate }), items1);
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
  let obj1 = require(handlePreviewPress[13]);
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
        if (null != outer1_13[id]) {
          if (null != onActiveItemTypeChange) {
            onActiveItemTypeChange(tmp4);
          }
        }
        if (null != dependencyMap[id]) {
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
  const items3 = [callback4(require(handlePreviewPress[14]).SegmentedControlPages, { state: segmentedControlState }), ];
  obj1 = { style: { paddingHorizontal: width(handlePreviewPress[6]).space.PX_16, paddingTop: width(handlePreviewPress[6]).space.PX_12 }, children: callback4(require(handlePreviewPress[15]).SegmentedControl, { state: segmentedControlState, variant: "default" }) };
  items3[1] = callback4(closure_8, obj1);
  obj.children = items3;
  return callback5(closure_8, obj);
}
({ useCallback: closure_4, useEffect: closure_5, useMemo: closure_6, useState: closure_7 } = result);
({ jsx: closure_10, jsxs: closure_11 } = jsxProd);
_createForOfIteratorHelperLoose = { previewContainer: { flex: 1 } };
_createForOfIteratorHelperLoose = { borderBottomColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_SUBTLE, borderBottomWidth: 1, paddingBottom: require("_createForOfIteratorHelperLoose").space.PX_16, flex: 1 };
_createForOfIteratorHelperLoose.previewDivider = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj1 = { profile: require("CollectiblesItemType").CollectiblesItemType.PROFILE_EFFECT, decoration: require("CollectiblesItemType").CollectiblesItemType.AVATAR_DECORATION, nameplate: require("CollectiblesItemType").CollectiblesItemType.NAMEPLATE };
result = require("get ActivityIndicator").fileFinishedImporting("modules/collectibles/native/ProductDetailsActionSheetPreview.tsx");

export default function ProductDetailsActionSheetPreview(arg0) {
  let handlePreviewPress;
  let onBundleActiveItemChange;
  let onBundleActiveItemTypeChange;
  let onTrackPress;
  let product;
  ({ product, handlePreviewPress, onTrackPress } = arg0);
  ({ onBundleActiveItemTypeChange, onBundleActiveItemChange } = arg0);
  const tmp = _createForOfIteratorHelperLoose();
  const tmp2 = callback(callback3(0), 2);
  const first = tmp2[0];
  const _require = tmp2[1];
  let obj = {
    style: tmp.previewContainer,
    onLayout: callback2((nativeEvent) => {
      callback(nativeEvent.nativeEvent.layout.width);
    }, [])
  };
  if (product.type === _require(1876).CollectiblesItemType.BUNDLE) {
    obj = { product, width: first, handlePreviewPress, onTrackPress, onActiveItemChange: onBundleActiveItemChange, onActiveItemTypeChange: onBundleActiveItemTypeChange };
    let tmp12 = callback4(BundleProductPreview, obj);
  } else {
    obj = { style: tmp.previewDivider };
    const obj1 = { product, width: first, handlePreviewPress, onTrackPress };
    obj.children = callback4(_require(8788).IndividualProductPreview, obj1);
    tmp12 = callback4(View, obj);
  }
  obj.children = tmp12;
  return callback4(View, obj);
};
