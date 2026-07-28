// Module ID: 9368
// Function ID: 73046
// Dependencies: [31, 27, 33, 4165, 689, 9369, 9373, 5223, 1273, 1212, 2]

// Module 9368
import importAllResult from "result";
import { ScrollView } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
let obj = { emptyStateContainer: { padding: 0, flex: 1 } };
obj = { color: require("_createForOfIteratorHelperLoose").colors.TEXT_SUBTLE };
obj.emptyStateBody = obj;
_createForOfIteratorHelperLoose = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_8, marginTop: 0 };
obj.emptyStateImage = _createForOfIteratorHelperLoose;
let closure_5 = _createForOfIteratorHelperLoose.createStyles(obj);
const memoResult = importAllResult.memo(function EmojiPickerListComponentEmpty(insetBottom) {
  let inActionSheet;
  let insetTop;
  ({ inActionSheet, insetTop } = insetBottom);
  insetBottom = insetBottom.insetBottom;
  const items = [insetBottom, insetTop];
  const memo = importAllResult.useMemo(() => ({ marginBottom: insetBottom, marginTop: insetTop, flex: 1 }), items);
  let obj = insetTop(insetBottom[5]);
  const searchEmptySource = obj.useSearchEmptySource();
  const tmp = callback();
  const modalDismissGuardRefreshControl = insetTop(insetBottom[6]).useModalDismissGuardRefreshControl();
  if (inActionSheet) {
    let BottomSheetScrollView = insetTop(insetBottom[7]).BottomSheetScrollView;
  } else {
    BottomSheetScrollView = ScrollView;
  }
  obj = { contentContainerStyle: memo, keyboardShouldPersistTaps: "always" };
  let tmp8;
  if (inActionSheet) {
    tmp8 = modalDismissGuardRefreshControl;
  }
  obj.refreshControl = tmp8;
  obj = { source: searchEmptySource };
  const intl = insetTop(insetBottom[9]).intl;
  obj.body = intl.string(insetTop(insetBottom[9]).t.IxxiKF);
  ({ emptyStateBody: obj4.bodyStyle, emptyStateContainer: obj4.containerStyle, emptyStateImage: obj4.imageStyle } = tmp);
  obj.children = jsx(insetTop(insetBottom[8]).RefreshEmptyState, { source: searchEmptySource });
  return <BottomSheetScrollView source={searchEmptySource} />;
});
const result = require("jsxProd").fileFinishedImporting("modules/emoji_picker/native/components/EmojiPickerListComponentEmpty.tsx");

export default memoResult;
