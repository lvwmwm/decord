// Module ID: 14988
// Function ID: 14989
// Name: ProductDetailsActionSheetPreview
// Dependencies: [32, 19, 17, 21, 5009, 575, 1988, 14989, 14991, 2]
// Exports: default

// Module 14988 (ProductDetailsActionSheetPreview)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import CollectiblesItemType from "CollectiblesItemType" /* 1988 */;
import BundleProductDetailsActionSheetPreviewDefault from "BundleProductDetailsActionSheetPreview" /* 14989 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
({ useCallback: closure_4, useState: hasOwnProperty } = react);
const View = react_native.View;
const jsx = Fragment.jsx;
const obj = { previewContainer: { flex: 1 }, previewDivider: obj2 };
obj2 = { borderBottomColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, borderBottomWidth: 1, paddingBottom: nativeDefault.space.PX_16, flex: 1 };
let closure_8 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/collectibles/native/ProductDetailsActionSheetPreview.tsx");

export default function ProductDetailsActionSheetPreview(onBundleActiveItemChange) {
  let c0;
  let handlePreviewPress;
  let onTrackPress;
  let product;
  let tmp3;
  let tmp7Result;
  ({ product, handlePreviewPress, onTrackPress } = onBundleActiveItemChange);
  c0 = undefined;
  onBundleActiveItemChange = onBundleActiveItemChange.onBundleActiveItemChange;
  const tmp = closure_8();
  [tmp3, c0] = hasOwnProperty(0);
  _slicedToArray(hasOwnProperty(0), 2);
  if (product.type === CollectiblesItemType.CollectiblesItemType.BUNDLE) {
    const obj2 = { product, width: tmp3, handlePreviewPress, onTrackPress, onActiveItemChange: onBundleActiveItemChange };
    tmp7Result = tmp7(BundleProductDetailsActionSheetPreviewDefault, obj2);
  } else {
    const obj3 = { style: tmp.previewDivider, children: null };
    tmp7Result = tmp7(tmp8, obj3);
  }
  return <View style={tmp.previewContainer} onLayout={React3((nativeEvent) => {
    _undefined(nativeEvent.nativeEvent.layout.width);
  }, [])}>{tmp7Result}</View>;
};
