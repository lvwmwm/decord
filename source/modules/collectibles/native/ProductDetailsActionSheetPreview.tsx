// Module ID: 9505
// Function ID: 9506
// Name: ProductDetailsActionSheetPreview
// Dependencies: [32, 19, 17, 21, 4342, 712, 1949, 9506, 9508, 2]
// Exports: default

// Module 9505 (ProductDetailsActionSheetPreview)
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

let c4;
let c5;
const require = arg1;
({ useCallback: c4, useState: c5 } = noop);
createCacheKey = { previewContainer: { flex: 1 }, previewDivider: null };
createCacheKey = { borderBottomColor: require("Themes").colors.BACKGROUND_MOD_SUBTLE, borderBottomWidth: 1, paddingBottom: require("Themes").space.PX_16, flex: 1 };
createCacheKey[1] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("get ActivityIndicator").fileFinishedImporting("modules/collectibles/native/ProductDetailsActionSheetPreview.tsx");

export default function ProductDetailsActionSheetPreview(onBundleActiveItemChange) {
  let c0;
  let handlePreviewPress;
  let onTrackPress;
  let product;
  let tmp3;
  ({ product, handlePreviewPress, onTrackPress } = onBundleActiveItemChange);
  let _require;
  const tmp = createCacheKey();
  [tmp3, c0] = callback(callback3(0), 2);
  const tmp2 = callback(callback3(0), 2);
  let obj = {
    style: tmp.previewContainer,
    onLayout: callback2((nativeEvent) => {
      _undefined(nativeEvent.nativeEvent.layout.width);
    }, []),
    children: null
  };
  if (product.type === _require(1949).CollectiblesItemType.BUNDLE) {
    obj = { product: null, width: null, handlePreviewPress: null, onTrackPress: null, onActiveItemChange: null };
    obj[0] = product;
    obj[1] = tmp3;
    obj[2] = handlePreviewPress;
    obj[3] = onTrackPress;
    obj[4] = onBundleActiveItemChange.onBundleActiveItemChange;
    let tmp7Result = tmp7(importDefault(9506), obj);
  } else {
    obj = { style: null, children: null };
    obj[0] = tmp.previewDivider;
    const obj1 = { product: null, width: null, handlePreviewPress: null, onTrackPress: null };
    obj1[0] = product;
    obj1[1] = tmp3;
    obj1[2] = handlePreviewPress;
    obj1[3] = onTrackPress;
    obj[1] = tmp7(_require(9508).IndividualProductPreview, obj1);
    tmp7Result = tmp7(tmp8, obj);
  }
  obj[2] = tmp7Result;
  return <View style={tmp.previewContainer} onLayout={callback2((nativeEvent) => {
    _undefined(nativeEvent.nativeEvent.layout.width);
  }, [])}>{null}</View>;
};
