// Module ID: 9917
// Function ID: 9918
// Name: StickerPickerListEmptyState
// Dependencies: [19, 17, 1086, 21, 4837, 588, 558, 576, 9698, 6038, 1127, 1189, 9918, 2]

// Module 9917 (StickerPickerListEmptyState)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 588 */;
import Constants from "Constants" /* 1086 */;
import intl2 from "intl" /* 1127 */;
import useModalDismissGuardRefreshControl from "useModalDismissGuardRefreshControl" /* 9698 */;
import AssetRegistryDefault from "AssetRegistry" /* 9918 */;
import react from "react" /* 19 */;
import createStyles_mod from "createStyles" /* 4837 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let insetBottom;

let obj2;
let obj3;
const ScrollView = react_native.ScrollView;
const EXPRESSION_FOOTER_HEIGHT = Constants.EXPRESSION_FOOTER_HEIGHT;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { emptyStateContainer: { padding: 0, flex: 1 }, emptyStateBody: obj2, emptyStateImage: obj3 };
obj2 = { color: nativeDefault.colors.TEXT_SUBTLE };
createStyles = createStyles.createStyles;
obj3 = { marginBottom: nativeDefault.space.PX_8, marginTop: 0 };
let closure_7 = createStyles(obj);
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((insetBottom) => {
  let inActionSheet;
  let insetTop;
  const obj = react2;
  const cResult = obj.c(14);
  ({ inActionSheet, insetTop } = insetBottom);
  insetBottom = insetBottom.insetBottom;
  const tmp4 = closure_7();
  const sum = insetBottom + EXPRESSION_FOOTER_HEIGHT;
  if (cResult[0] === insetTop) {
    let tmp6;
    let BottomSheetScrollView;
    let tmp10;
    let tmp12;
    if (cResult[1] === sum) {
      tmp6 = cResult[2];
    }
    const tmpResult = useModalDismissGuardRefreshControl;
    const modalDismissGuardRefreshControl = tmpResult.useModalDismissGuardRefreshControl();
    if (inActionSheet) {
      BottomSheetScrollView = tmp(6038).BottomSheetScrollView;
    } else {
      BottomSheetScrollView = ScrollView;
    }
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = tmp(1127).intl;
      const stringResult = intl.string(intl2.t.jyiGfc);
      cResult[3] = stringResult;
      tmp10 = stringResult;
    } else {
      tmp10 = cResult[3];
    }
    const _Symbol2 = Symbol;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      const obj2 = { marginBottom: 0 };
      cResult[4] = obj2;
      tmp12 = obj2;
    } else {
      tmp12 = cResult[4];
    }
    if (cResult[5] === tmp4.emptyStateBody) {
      if (cResult[6] === tmp4.emptyStateContainer) {
        let tmp13;
        if (cResult[7] === tmp4.emptyStateImage) {
          tmp13 = cResult[8];
        }
        if (cResult[9] === BottomSheetScrollView) {
          if (cResult[10] === tmp6) {
            if (cResult[11] === tmp8) {
              let tmp17;
              if (cResult[12] === tmp13) {
                tmp17 = cResult[13];
              }
              return tmp17;
            }
          }
        }
        const tmp19 = <BottomSheetScrollView contentContainerStyle={tmp6} keyboardShouldPersistTaps="always" refreshControl={tmp8}>{tmp13}</BottomSheetScrollView>;
        cResult[9] = BottomSheetScrollView;
        cResult[10] = tmp6;
        cResult[11] = tmp8;
        cResult[12] = tmp13;
        cResult[13] = tmp19;
        tmp17 = tmp19;
      }
    }
    ({ emptyStateBody: obj5.bodyStyle, emptyStateContainer: obj5.containerStyle, emptyStateImage: obj5.imageStyle } = tmp4);
    const RefreshEmptyState = tmp(1189).RefreshEmptyState;
    const tmp16 = <RefreshEmptyState body={tmp10} bodyStyle={null} containerStyle={null} imageStyle={null} source={AssetRegistryDefault} titleStyle={tmp12} />;
    cResult[5] = tmp4.emptyStateBody;
    cResult[6] = tmp4.emptyStateContainer;
    cResult[7] = tmp4.emptyStateImage;
    cResult[8] = tmp16;
    tmp13 = tmp16;
  }
  const obj6 = { marginBottom: sum, marginTop: insetTop, flex: 1 };
  cResult[0] = insetTop;
  cResult[1] = sum;
  cResult[2] = obj6;
  tmp6 = obj6;
}) : ((insetBottom) => {
  let inActionSheet;
  let insetTop;
  let intl;
  ({ inActionSheet, insetTop } = insetBottom);
  insetBottom = insetBottom.insetBottom;
  const items = [insetBottom, insetTop];
  const tmp = closure_7();
  const memo = react.useMemo(() => ({ marginBottom: insetBottom + EXPRESSION_FOOTER_HEIGHT, marginTop: insetTop, flex: 1 }), items);
  const obj = insetTop(9698);
  const modalDismissGuardRefreshControl = obj.useModalDismissGuardRefreshControl();
  if (inActionSheet) {
    let BottomSheetScrollView = tmp3(6038).BottomSheetScrollView;
  } else {
    BottomSheetScrollView = ScrollView;
  }
  let tmp7;
  if (inActionSheet) {
    tmp7 = modalDismissGuardRefreshControl;
  }
  ({ body: intl.string(insetTop(1127).t.jyiGfc), bodyStyle: null, containerStyle: null, imageStyle: null, source: insetBottom(9918), titleStyle: { marginBottom: 0 } });
  const RefreshEmptyState = tmp3(1189).RefreshEmptyState;
  intl = tmp3(1127).intl;
  ({ emptyStateBody: obj3.bodyStyle, emptyStateContainer: obj3.containerStyle, emptyStateImage: obj3.imageStyle } = tmp);
  return <BottomSheetScrollView contentContainerStyle={memo} keyboardShouldPersistTaps="always" refreshControl={tmp7}>{null}</BottomSheetScrollView>;
}));
const result = size.fileFinishedImporting("modules/stickers/native/StickerPickerListEmptyState.tsx");

export default memoResult;
