// Module ID: 10282
// Function ID: 10283
// Name: StickerPickerListEmptyState
// Dependencies: [19, 17, 1072, 21, 5009, 575, 10017, 5270, 1188, 1114, 10283, 2]

// Module 10282 (StickerPickerListEmptyState)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import react from "react" /* 19 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let obj2;
let obj3;
const ScrollView = react_native.ScrollView;
const EXPRESSION_FOOTER_HEIGHT = Constants.EXPRESSION_FOOTER_HEIGHT;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { emptyStateContainer: { padding: 0, flex: 1 }, emptyStateBody: obj2, emptyStateImage: obj3 };
createStyles = createStyles.createStyles;
obj2 = { color: nativeDefault.colors.TEXT_SUBTLE };
obj3 = { marginBottom: nativeDefault.space.PX_8, marginTop: 0 };
let closure_7 = createStyles(obj);
const memoResult = react.memo(function StickerPickerListEmptyState(insetBottom) {
  let inActionSheet;
  let insetTop;
  let intl;
  ({ inActionSheet, insetTop } = insetBottom);
  insetBottom = insetBottom.insetBottom;
  const items = [insetBottom, insetTop];
  const tmp = closure_7();
  const memo = react.useMemo(() => ({ marginBottom: insetBottom + EXPRESSION_FOOTER_HEIGHT, marginTop: insetTop, flex: 1 }), items);
  const obj = insetTop(10017);
  const modalDismissGuardRefreshControl = obj.useModalDismissGuardRefreshControl();
  if (inActionSheet) {
    let BottomSheetScrollView = tmp3(5270).BottomSheetScrollView;
  } else {
    BottomSheetScrollView = ScrollView;
  }
  let tmp7;
  if (inActionSheet) {
    tmp7 = modalDismissGuardRefreshControl;
  }
  ({ body: intl.string(insetTop(1114).t.jyiGfc), bodyStyle: null, containerStyle: null, imageStyle: null, source: insetBottom(10283), titleStyle: { marginBottom: 0 } });
  const RefreshEmptyState = tmp3(1188).RefreshEmptyState;
  intl = tmp3(1114).intl;
  ({ emptyStateBody: obj3.bodyStyle, emptyStateContainer: obj3.containerStyle, emptyStateImage: obj3.imageStyle } = tmp);
  return <BottomSheetScrollView contentContainerStyle={memo} keyboardShouldPersistTaps="always" refreshControl={tmp7}>{null}</BottomSheetScrollView>;
});
const result = size.fileFinishedImporting("modules/stickers/native/StickerPickerListEmptyState.tsx");

export default memoResult;
