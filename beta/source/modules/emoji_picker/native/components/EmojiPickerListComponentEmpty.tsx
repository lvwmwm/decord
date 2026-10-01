// Module ID: 9777
// Function ID: 9778
// Name: EmojiPickerListComponentEmpty
// Dependencies: [19, 17, 21, 4836, 576, 9778, 9782, 6045, 1177, 1115, 2]

// Module 9777 (EmojiPickerListComponentEmpty)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import intl2 from "intl" /* 1115 */;
import SearchEmpty from "SearchEmpty" /* 9778 */;
import useModalDismissGuardRefreshControl from "useModalDismissGuardRefreshControl" /* 9782 */;
import react from "react" /* 19 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let obj2;
let obj3;
const ScrollView = react_native.ScrollView;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { emptyStateContainer: { padding: 0, flex: 1 }, emptyStateBody: obj2, emptyStateImage: obj3 };
obj2 = { color: nativeDefault.colors.TEXT_SUBTLE };
createStyles = createStyles.createStyles;
obj3 = { marginBottom: nativeDefault.space.PX_8, marginTop: 0 };
let closure_5 = createStyles(obj);
const memoResult = react.memo(function EmojiPickerListComponentEmpty(insetBottom) {
  let inActionSheet;
  let insetTop;
  let intl;
  ({ inActionSheet, insetTop } = insetBottom);
  insetBottom = insetBottom.insetBottom;
  const items = [insetBottom, insetTop];
  const tmp = closure_5();
  const memo = react.useMemo(() => ({ marginBottom: insetBottom, marginTop: insetTop, flex: 1 }), items);
  const obj = SearchEmpty;
  const searchEmptySource = obj.useSearchEmptySource();
  const obj2 = useModalDismissGuardRefreshControl;
  const modalDismissGuardRefreshControl = obj2.useModalDismissGuardRefreshControl();
  if (inActionSheet) {
    let BottomSheetScrollView = tmp3(6045).BottomSheetScrollView;
  } else {
    BottomSheetScrollView = ScrollView;
  }
  let tmp8;
  if (inActionSheet) {
    tmp8 = modalDismissGuardRefreshControl;
  }
  ({ source: searchEmptySource, body: intl.string(intl2.t.IxxiKF), bodyStyle: null, containerStyle: null, imageStyle: null });
  const RefreshEmptyState = tmp3(1177).RefreshEmptyState;
  intl = tmp3(1115).intl;
  ({ emptyStateBody: obj4.bodyStyle, emptyStateContainer: obj4.containerStyle, emptyStateImage: obj4.imageStyle } = tmp);
  return <BottomSheetScrollView contentContainerStyle={memo} keyboardShouldPersistTaps="always" refreshControl={tmp8}>{null}</BottomSheetScrollView>;
});
const result = size.fileFinishedImporting("modules/emoji_picker/native/components/EmojiPickerListComponentEmpty.tsx");

export default memoResult;
