// Module ID: 10575
// Function ID: 10576
// Name: EmojiPickerListComponentEmpty
// Dependencies: [19, 17, 21, 4756, 576, 10576, 10580, 6869, 1177, 1115, 2]

// Module 10575 (EmojiPickerListComponentEmpty)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import native from "native" /* 1177 */;
import SearchEmpty from "SearchEmpty" /* 10576 */;
import useModalDismissGuardRefreshControl from "useModalDismissGuardRefreshControl" /* 10580 */;
import noop from "module_19" /* 19 */;

require = fn;
const ScrollView = fn(17).ScrollView;
const jsx = fn(21).jsx;
const createStyles = fn(4756);
let obj = { emptyStateContainer: { padding: 0, flex: 1 }, emptyStateBody: { color: nativeDefault.colors.TEXT_SUBTLE }, emptyStateImage: null };
let obj3 = { color: nativeDefault.colors.TEXT_SUBTLE };
obj.emptyStateImage = { marginBottom: nativeDefault.space.PX_8, marginTop: 0 };
let closure_5 = createStyles.createStyles(obj);
const obj4 = { marginBottom: nativeDefault.space.PX_8, marginTop: 0 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/emoji_picker/native/components/EmojiPickerListComponentEmpty.tsx");

export default noop.memo(function EmojiPickerListComponentEmpty(insetBottom) {
  ({ inActionSheet, insetTop } = insetBottom);
  insetBottom = insetBottom.insetBottom;
  const items = [insetBottom, insetTop];
  const memo = noop.useMemo(() => ({ marginBottom: insetBottom, marginTop: insetTop, flex: 1 }), items);
  const tmp = closure_5();
  const searchEmptySource = SearchEmpty.useSearchEmptySource();
  const modalDismissGuardRefreshControl = useModalDismissGuardRefreshControl.useModalDismissGuardRefreshControl();
  if (inActionSheet) {
    let BottomSheetScrollView = tmp3(6869).BottomSheetScrollView;
  } else {
    BottomSheetScrollView = ScrollView;
  }
  const obj3 = { contentContainerStyle: memo, keyboardShouldPersistTaps: "always", refreshControl: null, children: null };
  let tmp8;
  if (inActionSheet) {
    tmp8 = modalDismissGuardRefreshControl;
  }
  obj3.refreshControl = tmp8;
  const obj6 = { source: searchEmptySource, body: null, bodyStyle: null, containerStyle: null, imageStyle: null };
  const intl = tmp3(1115).intl;
  obj6.body = intl.string(util.t.IxxiKF);
  ({ emptyStateBody: obj4.bodyStyle, emptyStateContainer: obj4.containerStyle, emptyStateImage: obj4.imageStyle } = tmp);
  obj3.children = jsx(native.RefreshEmptyState, { source: searchEmptySource, body: null, bodyStyle: null, containerStyle: null, imageStyle: null });
  return <BottomSheetScrollView contentContainerStyle={memo} keyboardShouldPersistTaps="always" refreshControl={null}>{null}</BottomSheetScrollView>;
});
