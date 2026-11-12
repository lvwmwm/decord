// Module ID: 9456
// Function ID: 9457
// Name: ProductDetailsActionSheetPreview
// Dependencies: [17, 21, 5243, 575, 7929, 2111, 9457, 9459, 2]
// Exports: default

// Module 9456 (ProductDetailsActionSheetPreview)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import CollectiblesItemType from "CollectiblesItemType" /* 2111 */;
import useMeasuredLayoutDefault from "useMeasuredLayout" /* 7929 */;
import createStyles from "createStyles" /* 5243 */;
import size from "module_2" /* 2 */;

let obj2;
let tmp2;
const BundleProductDetailsActionSheetPreviewDefault = tmp2(9457);
const View = react_native.View;
const jsx = Fragment.jsx;
const obj = { previewContainer: { flex: 1 }, previewDivider: obj2 };
obj2 = { borderBottomColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, borderBottomWidth: 1, paddingBottom: nativeDefault.space.PX_16, flex: 1 };
let closure_5 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/collectibles/native/ProductDetailsActionSheetPreview.tsx");

export default function ProductDetailsActionSheetPreview(onBundleActiveItemChange) {
  let handlePreviewPress;
  let onLayout;
  let onTrackPress;
  let product;
  let ref;
  let tmp6Result;
  ({ product, handlePreviewPress, onTrackPress } = onBundleActiveItemChange);
  onBundleActiveItemChange = onBundleActiveItemChange.onBundleActiveItemChange;
  const tmp = closure_5();
  const tmp4 = useMeasuredLayoutDefault();
  const width = tmp4.width;
  let num = 0;
  ({ ref, onLayout } = tmp4);
  if (undefined !== width) {
    num = width;
  }
  if (product.type === CollectiblesItemType.CollectiblesItemType.BUNDLE) {
    const obj2 = { product, width: num, handlePreviewPress, onTrackPress, onActiveItemChange: onBundleActiveItemChange };
    tmp6Result = tmp6(BundleProductDetailsActionSheetPreviewDefault, obj2);
  } else {
    const obj3 = { style: tmp.previewDivider, children: null };
    tmp6Result = tmp6(tmp7, obj3);
  }
  return <View style={tmp.previewContainer} ref={ref} onLayout={onLayout}>{tmp6Result}</View>;
};
