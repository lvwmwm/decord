// Module ID: 9406
// Function ID: 73314
// Dependencies: [31, 27, 33, 4130, 689, 9407, 5189, 1273, 1212, 2]

// Module 9406
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
const memoResult = importAllResult.memo(function EmojiPickerListComponentEmpty(insetTop) {
  insetTop = insetTop.insetTop;
  const insetBottom = insetTop.insetBottom;
  const items = [insetBottom, insetTop];
  const memo = importAllResult.useMemo(() => ({ marginBottom: insetBottom, marginTop: insetTop, flex: 1 }), items);
  let obj = insetTop(insetBottom[5]);
  const searchEmptySource = obj.useSearchEmptySource();
  if (insetTop.inActionSheet) {
    let BottomSheetScrollView = insetTop(insetBottom[6]).BottomSheetScrollView;
  } else {
    BottomSheetScrollView = ScrollView;
  }
  obj = { contentContainerStyle: memo, keyboardShouldPersistTaps: "always" };
  obj = { source: searchEmptySource };
  const intl = insetTop(insetBottom[8]).intl;
  obj.body = intl.string(insetTop(insetBottom[8]).t.IxxiKF);
  ({ emptyStateBody: obj3.bodyStyle, emptyStateContainer: obj3.containerStyle, emptyStateImage: obj3.imageStyle } = callback());
  obj.children = jsx(insetTop(insetBottom[7]).RefreshEmptyState, { source: searchEmptySource });
  return <BottomSheetScrollView source={searchEmptySource} />;
});
const result = require("jsxProd").fileFinishedImporting("modules/emoji_picker/native/components/EmojiPickerListComponentEmpty.tsx");

export default memoResult;
