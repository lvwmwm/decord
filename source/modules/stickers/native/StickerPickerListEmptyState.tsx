// Module ID: 9669
// Function ID: 75234
// Dependencies: [31, 27, 653, 33, 4130, 689, 5189, 1273, 1212, 9670, 2]

// Module 9669
import importAllResult from "result";
import { ScrollView } from "get ActivityIndicator";
import { EXPRESSION_FOOTER_HEIGHT } from "ME";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
let obj = { emptyStateContainer: { padding: 0, flex: 1 } };
obj = { color: require("_createForOfIteratorHelperLoose").colors.TEXT_SUBTLE };
obj.emptyStateBody = obj;
_createForOfIteratorHelperLoose = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_8, marginTop: 0 };
obj.emptyStateImage = _createForOfIteratorHelperLoose;
let closure_7 = _createForOfIteratorHelperLoose.createStyles(obj);
const memoResult = importAllResult.memo(function StickerPickerListEmptyState(insetTop) {
  insetTop = insetTop.insetTop;
  const insetBottom = insetTop.insetBottom;
  const items = [insetBottom, insetTop];
  const memo = importAllResult.useMemo(() => ({ marginBottom: insetBottom + outer1_5, marginTop: insetTop, flex: 1 }), items);
  if (insetTop.inActionSheet) {
    let BottomSheetScrollView = insetTop(5189).BottomSheetScrollView;
  } else {
    BottomSheetScrollView = ScrollView;
  }
  let obj = { contentContainerStyle: memo, keyboardShouldPersistTaps: "always" };
  obj = {};
  const intl = insetTop(1212).intl;
  obj.body = intl.string(insetTop(1212).t.jyiGfc);
  ({ emptyStateBody: obj2.bodyStyle, emptyStateContainer: obj2.containerStyle, emptyStateImage: obj2.imageStyle } = callback());
  obj.source = insetBottom(9670);
  obj.titleStyle = { marginBottom: 0 };
  obj.children = jsx(insetTop(1273).RefreshEmptyState, {});
  return <BottomSheetScrollView />;
});
const result = require("ME").fileFinishedImporting("modules/stickers/native/StickerPickerListEmptyState.tsx");

export default memoResult;
