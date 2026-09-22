// Module ID: 13447
// Function ID: 13448
// Name: ProductDetailsActionSheetPreview
// Dependencies: [32, 19, 17, 21, 4757, 576, 1973, 13448, 13450, 2]
// Exports: default

// Module 13447 (ProductDetailsActionSheetPreview)
import nativeDefault from "native" /* 576 */;
import CollectiblesItemType from "CollectiblesItemType" /* 1973 */;
import BundleProductDetailsActionSheetPreviewDefault from "BundleProductDetailsActionSheetPreview" /* 13448 */;
import IndividualProductPreview from "IndividualProductPreview" /* 13450 */;
import _slicedToArray from "module_32" /* 32 */;

require = fn;
const noop = fn(19);
({ useCallback: closure_4, useState: hasOwnProperty } = noop);
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4757);
let obj2 = { previewContainer: { flex: 1 }, previewDivider: { borderBottomColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, borderBottomWidth: 1, paddingBottom: nativeDefault.space.PX_16, flex: 1 } };
let closure_8 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/native/ProductDetailsActionSheetPreview.tsx");

export default function ProductDetailsActionSheetPreview(onBundleActiveItemChange) {
  ({ product, handlePreviewPress, onTrackPress } = onBundleActiveItemChange);
  c0 = undefined;
  const tmp = closure_8();
  [tmp3, c0] = hasOwnProperty(0);
  const tmp2 = _slicedToArray(hasOwnProperty(0), 2);
  const obj = {
    style: tmp.previewContainer,
    onLayout: React4((nativeEvent) => {
      _undefined(nativeEvent.nativeEvent.layout.width);
    }, []),
    children: null
  };
  if (product.type === CollectiblesItemType.CollectiblesItemType.BUNDLE) {
    const obj2 = { product, width: tmp3, handlePreviewPress, onTrackPress, onActiveItemChange: onBundleActiveItemChange.onBundleActiveItemChange };
    let tmp7Result = tmp7(BundleProductDetailsActionSheetPreviewDefault, obj2);
  } else {
    const obj3 = { style: tmp.previewDivider, children: null };
    const obj4 = { product, width: tmp3, handlePreviewPress, onTrackPress };
    obj3.children = tmp7(IndividualProductPreview.IndividualProductPreview, obj4);
    tmp7Result = tmp7(tmp8, obj3);
  }
  obj.children = tmp7Result;
  return <View style={tmp.previewContainer} onLayout={React4((nativeEvent) => {
    _undefined(nativeEvent.nativeEvent.layout.width);
  }, [])}>{null}</View>;
};
