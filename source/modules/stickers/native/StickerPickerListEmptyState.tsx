// Module ID: 9591
// Function ID: 74824
// Dependencies: [31, 27, 653, 33, 4131, 689, 9329, 5189, 1273, 1212, 9592, 2]

// Module 9591
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
const memoResult = importAllResult.memo(function StickerPickerListEmptyState(insetBottom) {
  let inActionSheet;
  let insetTop;
  ({ inActionSheet, insetTop } = insetBottom);
  insetBottom = insetBottom.insetBottom;
  const items = [insetBottom, insetTop];
  const memo = importAllResult.useMemo(() => ({ marginBottom: insetBottom + outer1_5, marginTop: insetTop, flex: 1 }), items);
  let obj = insetTop(9329);
  const modalDismissGuardRefreshControl = obj.useModalDismissGuardRefreshControl();
  if (inActionSheet) {
    let BottomSheetScrollView = insetTop(5189).BottomSheetScrollView;
  } else {
    BottomSheetScrollView = ScrollView;
  }
  obj = { contentContainerStyle: memo, keyboardShouldPersistTaps: "always" };
  let tmp7;
  if (inActionSheet) {
    tmp7 = modalDismissGuardRefreshControl;
  }
  obj.refreshControl = tmp7;
  obj = {};
  const intl = insetTop(1212).intl;
  obj.body = intl.string(insetTop(1212).t.jyiGfc);
  ({ emptyStateBody: obj3.bodyStyle, emptyStateContainer: obj3.containerStyle, emptyStateImage: obj3.imageStyle } = callback());
  obj.source = insetBottom(9592);
  obj.titleStyle = { marginBottom: 0 };
  obj.children = jsx(insetTop(1273).RefreshEmptyState, {});
  return <BottomSheetScrollView />;
});
const result = require("ME").fileFinishedImporting("modules/stickers/native/StickerPickerListEmptyState.tsx");

export default memoResult;
