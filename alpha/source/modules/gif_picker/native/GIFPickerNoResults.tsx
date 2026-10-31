// Module ID: 10256
// Function ID: 10257
// Name: GIFPickerNoResults
// Dependencies: [19, 17, 1072, 21, 5014, 575, 10240, 10034, 1113, 10038, 5275, 1187, 2]

// Module 10256 (GIFPickerNoResults)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import SearchEmpty from "SearchEmpty" /* 10034 */;
import useModalDismissGuardRefreshControl from "useModalDismissGuardRefreshControl" /* 10038 */;
import useExpressionPickerInsetsDefault from "useExpressionPickerInsets" /* 10240 */;
import react from "react" /* 19 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let obj2;
let obj3;
const ScrollView = react_native.ScrollView;
const GIFPickerResultTypes = Constants.GIFPickerResultTypes;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { emptyStateContainer: { padding: 0, flex: 1 }, emptyStateBody: obj2, emptyStateImage: obj3 };
createStyles = createStyles.createStyles;
obj2 = { color: nativeDefault.colors.TEXT_SUBTLE };
obj3 = { marginBottom: nativeDefault.space.PX_8, marginTop: 0 };
let closure_7 = createStyles(obj);
const memoResult = react.memo(function GIFPickerNoResults(inActionSheet) {
  inActionSheet = inActionSheet.inActionSheet;
  const categoryType = inActionSheet.categoryType;
  const tmp = closure_7();
  const safeAreaBottomKeyboardAware = useExpressionPickerInsetsDefault({ hasCategories: false }).safeAreaBottomKeyboardAware;
  const items = [safeAreaBottomKeyboardAware];
  const memo = react.useMemo(() => ({ paddingBottom: safeAreaBottomKeyboardAware, flex: 1 }), items);
  const obj = SearchEmpty;
  const searchEmptySource = obj.useSearchEmptySource();
  if (categoryType === GIFPickerResultTypes.FAVORITES) {
    const intl2 = tmp4(1113).intl;
    let stringResult = intl2.string(tmp4(1113).t.ZH4o6l);
  } else {
    const intl = tmp4(1113).intl;
    stringResult = intl.string(tmp4(1113).t["5dX4UM"]);
  }
  const tmp4Result = useModalDismissGuardRefreshControl;
  const modalDismissGuardRefreshControl = tmp4Result.useModalDismissGuardRefreshControl();
  if (inActionSheet) {
    let BottomSheetScrollView = tmp4(5275).BottomSheetScrollView;
  } else {
    BottomSheetScrollView = ScrollView;
  }
  let tmp9;
  if (inActionSheet) {
    tmp9 = modalDismissGuardRefreshControl;
  }
  return <BottomSheetScrollView contentContainerStyle={memo} keyboardShouldPersistTaps="always" refreshControl={tmp9}>{null}</BottomSheetScrollView>;
});
const result = size.fileFinishedImporting("modules/gif_picker/native/GIFPickerNoResults.tsx");

export default memoResult;
