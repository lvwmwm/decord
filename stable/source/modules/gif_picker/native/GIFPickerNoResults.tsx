// Module ID: 10506
// Function ID: 10507
// Name: GIFPickerNoResults
// Dependencies: [19, 17, 1074, 21, 4636, 576, 10412, 10446, 1114, 10450, 6728, 1176, 2]

// Module 10506 (GIFPickerNoResults)
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1176 */;
import useExpressionPickerInsetsDefault from "useExpressionPickerInsets" /* 10412 */;
import SearchEmpty from "SearchEmpty" /* 10446 */;
import useModalDismissGuardRefreshControl from "useModalDismissGuardRefreshControl" /* 10450 */;
import noop from "module_19" /* 19 */;

require = fn;
const ScrollView = fn(17).ScrollView;
fn(1074).GIFPickerResultTypes;
const jsx = fn(21).jsx;
const createStyles = fn(4636);
let obj = { emptyStateContainer: { padding: 0, flex: 1 }, emptyStateBody: { color: nativeDefault.colors.TEXT_SUBTLE }, emptyStateImage: null };
const obj3 = { color: nativeDefault.colors.TEXT_SUBTLE };
obj.emptyStateImage = { marginBottom: nativeDefault.space.PX_8, marginTop: 0 };
let closure_7 = createStyles.createStyles(obj);
const obj4 = { marginBottom: nativeDefault.space.PX_8, marginTop: 0 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/gif_picker/native/GIFPickerNoResults.tsx");

export default noop.memo(function GIFPickerNoResults(inActionSheet) {
  inActionSheet = inActionSheet.inActionSheet;
  const tmp = closure_7();
  const safeAreaBottomKeyboardAware = useExpressionPickerInsetsDefault({ hasCategories: false }).safeAreaBottomKeyboardAware;
  const items = [safeAreaBottomKeyboardAware];
  const memo = noop.useMemo(() => ({ paddingBottom: safeAreaBottomKeyboardAware, flex: 1 }), items);
  const searchEmptySource = SearchEmpty.useSearchEmptySource();
  if (inActionSheet.categoryType === GIFPickerResultTypes.FAVORITES) {
    const intl2 = tmp4(1114).intl;
    let stringResult = intl2.string(tmp4(1114).t.ZH4o6l);
  } else {
    const intl = tmp4(1114).intl;
    stringResult = intl.string(tmp4(1114).t["5dX4UM"]);
  }
  const modalDismissGuardRefreshControl = useModalDismissGuardRefreshControl.useModalDismissGuardRefreshControl();
  if (inActionSheet) {
    let BottomSheetScrollView = tmp4(6728).BottomSheetScrollView;
  } else {
    BottomSheetScrollView = ScrollView;
  }
  const obj2 = { contentContainerStyle: memo, keyboardShouldPersistTaps: "always", refreshControl: null, children: null };
  let tmp9;
  if (inActionSheet) {
    tmp9 = modalDismissGuardRefreshControl;
  }
  obj2.refreshControl = tmp9;
  obj2.children = jsx(native.RefreshEmptyState, { source: searchEmptySource, body: stringResult, bodyStyle: tmp.emptyStateBody, containerStyle: tmp.emptyStateContainer, imageStyle: tmp.emptyStateImage });
  return <BottomSheetScrollView contentContainerStyle={memo} keyboardShouldPersistTaps="always" refreshControl={null}>{null}</BottomSheetScrollView>;
});
