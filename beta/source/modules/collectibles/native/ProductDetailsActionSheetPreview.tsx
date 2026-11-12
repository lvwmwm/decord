// Module ID: 15332
// Function ID: 15333
// Name: ProductDetailsActionSheetPreview
// Dependencies: [17, 21, 5170, 575, 9102, 2111, 15333, 15335, 2]
// Exports: default

// Module 15332 (ProductDetailsActionSheetPreview)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import CollectiblesItemType from "CollectiblesItemType" /* 2111 */;
import useMeasuredLayoutDefault from "useMeasuredLayout" /* 9102 */;
import createStyles from "createStyles" /* 5170 */;
import size from "module_2" /* 2 */;

let obj2;
let tmp2;
const BundleProductDetailsActionSheetPreviewDefault = tmp2(15333);
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
