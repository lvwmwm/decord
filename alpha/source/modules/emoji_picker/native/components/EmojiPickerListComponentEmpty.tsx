// Module ID: 10012
// Function ID: 10013
// Name: EmojiPickerListComponentEmpty
// Dependencies: [19, 17, 21, 5009, 575, 10013, 10017, 5270, 1188, 1114, 2]

// Module 10012 (EmojiPickerListComponentEmpty)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import intl2 from "intl" /* 1114 */;
import SearchEmpty from "SearchEmpty" /* 10013 */;
import useModalDismissGuardRefreshControl from "useModalDismissGuardRefreshControl" /* 10017 */;
import react from "react" /* 19 */;
import createStyles_mod from "createStyles" /* 5009 */;
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
    let BottomSheetScrollView = tmp3(5270).BottomSheetScrollView;
  } else {
    BottomSheetScrollView = ScrollView;
  }
  let tmp8;
  if (inActionSheet) {
    tmp8 = modalDismissGuardRefreshControl;
  }
  ({ source: searchEmptySource, body: intl.string(intl2.t.IxxiKF), bodyStyle: null, containerStyle: null, imageStyle: null });
  const RefreshEmptyState = tmp3(1188).RefreshEmptyState;
  intl = tmp3(1114).intl;
  ({ emptyStateBody: obj4.bodyStyle, emptyStateContainer: obj4.containerStyle, emptyStateImage: obj4.imageStyle } = tmp);
  return <BottomSheetScrollView contentContainerStyle={memo} keyboardShouldPersistTaps="always" refreshControl={tmp8}>{null}</BottomSheetScrollView>;
});
const result = size.fileFinishedImporting("modules/emoji_picker/native/components/EmojiPickerListComponentEmpty.tsx");

export default memoResult;
