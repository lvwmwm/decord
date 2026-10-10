// Module ID: 11851
// Function ID: 11852
// Name: AppLauncherList
// Dependencies: [109, 19, 17, 21, 5092, 558, 576, 1631, 11788, 4823, 1126, 1200, 11852, 6738, 2]

// Module 11851 (AppLauncherList)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import intl3 from "intl" /* 1126 */;
import native from "native" /* 1200 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1631 */;
import mergeProps from "mergeProps" /* 4823 */;
import AppLauncherFlashList from "AppLauncherFlashList" /* 11788 */;
import AssetRegistryDefault from "AssetRegistry" /* 11852 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5092 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let tmp;
let tmp9;
const SearchField2 = tmp(6738);
const AppLauncherFlashListDefault = tmp9(11788);
let closure_3 = ["ref"];
const View = react_native.View;
const jsx = Fragment.jsx;
let closure_8 = createStyles.createStyles({ searchBarContainer: { marginBottom: 16 }, emptyState: { backgroundColor: "transparent", justifyContent: "flex-start" }, emptyStateImage: { flex: 0 } });
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function AppLauncherList(ref) {
  let tmp4;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(21);
  if (cResult[0] !== ref) {
    const tmp8 = _objectWithoutProperties(ref, closure_3);
    cResult[0] = ref;
    cResult[1] = tmp8;
    cResult[2] = ref.ref;
    tmp5 = ref;
    tmp4 = tmp8;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
  }
  const bottom = useSafeAreaInsetsDefault().bottom;
  const tmpResult = AppLauncherFlashList;
  const appLauncherFlashListProps = tmpResult.useAppLauncherFlashListProps();
  if (cResult[3] === appLauncherFlashListProps.scrollerRef) {
    let tmp11;
    let tmp13;
    if (cResult[4] === tmp5) {
      tmp11 = cResult[5];
    }
    if (cResult[6] !== bottom) {
      const obj2 = { paddingBottom: bottom };
      cResult[6] = bottom;
      cResult[7] = obj2;
      tmp13 = obj2;
    } else {
      tmp13 = cResult[7];
    }
    if (cResult[8] === tmp4.contentContainerStyle) {
      let tmp14;
      let tmp15;
      if (cResult[9] === tmp13) {
        tmp14 = cResult[10];
      }
      if (cResult[11] !== bottom) {
        const obj3 = { bottom };
        cResult[11] = bottom;
        cResult[12] = obj3;
        tmp15 = obj3;
      } else {
        tmp15 = cResult[12];
      }
      if (cResult[13] === appLauncherFlashListProps.animatedProps) {
        if (cResult[14] === appLauncherFlashListProps.gestureRef) {
          if (cResult[15] === appLauncherFlashListProps.onScroll) {
            if (cResult[16] === tmp11) {
              if (cResult[17] === tmp4) {
                if (cResult[18] === tmp14) {
                  let tmp16;
                  if (cResult[19] === tmp15) {
                    tmp16 = cResult[20];
                  }
                  return tmp16;
                }
              }
            }
          }
        }
      }
      AppLauncherFlashListDefault;
      const merged = Object.assign(tmp4);
      ({ onScroll: obj6.animatedOnScroll, gestureRef: obj6.simultaneousHandlers, animatedProps: obj6.animatedProps } = appLauncherFlashListProps);
      const tmp22 = <tmp9Result contentContainerStyle={tmp14} scrollIndicatorInsets={tmp15} ref={tmp11} />;
      cResult[13] = appLauncherFlashListProps.animatedProps;
      cResult[14] = appLauncherFlashListProps.gestureRef;
      cResult[15] = appLauncherFlashListProps.onScroll;
      cResult[16] = tmp11;
      cResult[17] = tmp4;
      cResult[18] = tmp14;
      cResult[19] = tmp15;
      cResult[20] = tmp22;
      tmp16 = tmp22;
    }
    const items = [tmp13, tmp4.contentContainerStyle];
    cResult[8] = tmp4.contentContainerStyle;
    cResult[9] = tmp13;
    cResult[10] = items;
    tmp14 = items;
  }
  const tmpResult2 = mergeProps;
  const mergeRefsResult = tmpResult2.mergeRefs(appLauncherFlashListProps.scrollerRef, tmp5);
  cResult[3] = appLauncherFlashListProps.scrollerRef;
  cResult[4] = tmp5;
  cResult[5] = mergeRefsResult;
  tmp11 = mergeRefsResult;
}) : (function AppLauncherList(ref) {
  ref = ref.ref;
  const merged = Object.assign(ref, Object.assign({ ref: 0 }));
  let appLauncherFlashListProps;
  const bottom = appLauncherFlashListProps(1631)().bottom;
  let obj = ref(11788);
  appLauncherFlashListProps = obj.useAppLauncherFlashListProps();
  const items = [appLauncherFlashListProps.scrollerRef, ref];
  const memo = react.useMemo(() => {
    const obj = mergeProps;
    return obj.mergeRefs(appLauncherFlashListProps.scrollerRef, ref);
  }, items);
  const items1 = [{ paddingBottom: bottom }, merged.contentContainerStyle];
  appLauncherFlashListProps(11788);
  const merged1 = Object.assign(merged);
  ({ onScroll: obj2.animatedOnScroll, gestureRef: obj2.simultaneousHandlers, animatedProps: obj2.animatedProps } = appLauncherFlashListProps);
  return <tmp4 contentContainerStyle={items1} scrollIndicatorInsets={{ bottom }} ref={memo} />;
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function AppLauncherListEmptyState() {
  let emptyState;
  let emptyStateImage;
  let tmp5;
  let tmp6;
  const obj = react2;
  const cResult = obj.c(5);
  const tmp4 = closure_8();
  ({ emptyState, emptyStateImage } = tmp4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(intl3.t.vYocDz);
    const intl2 = tmp(1126).intl;
    const stringResult1 = intl2.string(intl3.t.V6nAfF);
    cResult[0] = stringResult;
    cResult[1] = stringResult1;
    tmp5 = stringResult;
    tmp6 = stringResult1;
  } else {
    [tmp5, tmp6] = cResult;
  }
  if (cResult[2] === tmp4.emptyState) {
    let tmp9;
    if (cResult[3] === tmp4.emptyStateImage) {
      tmp9 = cResult[4];
    }
    return tmp9;
  }
  const EmptyState = tmp(1200).EmptyState;
  const tmp10 = <EmptyState style={emptyState} imageStyle={emptyStateImage} lightSource={AssetRegistryDefault} darkSource={AssetRegistryDefault} title={tmp5} body={tmp6} />;
  cResult[2] = tmp4.emptyState;
  cResult[3] = tmp4.emptyStateImage;
  cResult[4] = tmp10;
  tmp9 = tmp10;
}) : (function AppLauncherListEmptyState() {
  const tmp = closure_8();
  const EmptyState = native.EmptyState;
  const intl = intl3.intl;
  const intl2 = intl3.intl;
  return <EmptyState style={tmp.emptyState} imageStyle={tmp.emptyStateImage} lightSource={AssetRegistryDefault} darkSource={AssetRegistryDefault} title={intl.string(intl3.t.vYocDz)} body={intl2.string(intl3.t.V6nAfF)} />;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function AppLauncherListSearchBar(arg0) {
  let tmp5;
  const obj = react2;
  const cResult = obj.c(5);
  const tmp4 = closure_8();
  if (cResult[0] !== arg0) {
    const SearchField = SearchField2.SearchField;
    const merged = Object.assign(arg0);
    const tmp10 = <SearchField size="md" />;
    cResult[0] = arg0;
    cResult[1] = tmp10;
    tmp5 = tmp10;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === tmp4.searchBarContainer) {
    let tmp11;
    if (cResult[3] === tmp5) {
      tmp11 = cResult[4];
    }
    return tmp11;
  }
  const tmp12 = <View style={tmp4.searchBarContainer}>{tmp5}</View>;
  cResult[2] = tmp4.searchBarContainer;
  cResult[3] = tmp5;
  cResult[4] = tmp12;
  tmp11 = tmp12;
}) : (function AppLauncherListSearchBar(arg0) {
  const SearchField = SearchField2.SearchField;
  const merged = Object.assign(arg0);
  return <View style={closure_8().searchBarContainer}>{null}</View>;
});
const result = size.fileFinishedImporting("modules/app_launcher/native/base_components/AppLauncherList.tsx");

export const AppLauncherList = tmp2;
export const AppLauncherListEmptyState = tmp3;
export const AppLauncherListSearchBar = tmp4;
