// Module ID: 16978
// Function ID: 16979
// Name: YouScreenContainer
// Dependencies: [19, 17, 10833, 21, 4896, 587, 558, 576, 1618, 15981, 1484, 4745, 16979, 1370, 2]

// Module 16978 (YouScreenContainer)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import utils_PlatformUtils from "utils/PlatformUtils" /* 1370 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1618 */;
import useChatLayoutDefault from "useChatLayout" /* 4745 */;
import MainTabsConstants from "MainTabsConstants" /* 10833 */;
import TabsPerformanceTracker from "TabsPerformanceTracker" /* 15981 */;
import YouScreenDefault from "YouScreen" /* 16979 */;
import react from "react" /* 19 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let route;

let obj2;
let obj3;
let obj4;
const View = react_native.View;
const RootNavigatorScreen = MainTabsConstants.RootNavigatorScreen;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { container: obj2, androidContainer: obj3, wrapper: obj4 };
obj2 = { flex: 1, overflow: "hidden", alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.radii.xl };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_SCRIM, borderRadius: nativeDefault.radii.none };
obj4 = { flex: 1, borderRadius: nativeDefault.radii.xl, overflow: "hidden" };
let closure_6 = createStyles(obj);
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((route) => {
  let initialTab;
  let items;
  let tmp7;
  const obj = react2;
  const cResult = obj.c(15);
  route = route.route;
  const tmp4 = closure_6();
  const top = useSafeAreaInsetsDefault().top;
  const obj2 = TabsPerformanceTracker;
  const trackTabPerformance = obj2.useTrackTabPerformance(RootNavigatorScreen.YOU);
  if (route != null) {
    const params = route.params;
    if (params != null) {
      initialTab = params.initialTab;
    }
  }
  const width = tmp5(1484)().width;
  if (useChatLayoutDefault().isChatBesideChannelList) {
    if (cResult[2] === top) {
      let tmp10;
      if (cResult[3] === tmp4.androidContainer) {
        tmp10 = cResult[4];
      }
      if (cResult[5] === tmp4.container) {
        let tmp14;
        let tmp16Result;
        if (cResult[6] === tmp10) {
          tmp14 = cResult[7];
        }
        if (cResult[8] === initialTab) {
          if (cResult[9] === tmp4.wrapper) {
            let tmp15;
            if (cResult[10] === width) {
              tmp15 = cResult[11];
            }
            if (cResult[12] === tmp14) {
              let tmp19;
              if (cResult[13] === tmp15) {
                tmp19 = cResult[14];
              }
              tmp7 = tmp19;
            }
            const tmp22 = <View style={tmp14}>{tmp15}</View>;
            cResult[12] = tmp14;
            cResult[13] = tmp15;
            cResult[14] = tmp22;
            tmp19 = tmp22;
          }
        }
        const tmpResult = utils_PlatformUtils;
        if (tmpResult.isAndroid()) {
          const obj4 = { style: items, children: null };
          items = [tmp4.wrapper, ];
          const obj5 = { maxWidth: 0.6 * width };
          items[1] = obj5;
          tmp16Result = tmp16(View, obj4);
        } else {
          const obj7 = { initialTab };
          tmp16Result = tmp16(tmp5(16979), obj7);
        }
        cResult[8] = initialTab;
        cResult[9] = tmp4.wrapper;
        cResult[10] = width;
        cResult[11] = tmp16Result;
        tmp15 = tmp16Result;
      }
      const items1 = [tmp4.container, tmp10];
      cResult[5] = tmp4.container;
      cResult[6] = tmp10;
      cResult[7] = items1;
      tmp14 = items1;
    }
    let tmp11;
    const tmpResult2 = utils_PlatformUtils;
    if (tmpResult2.isAndroid()) {
      const obj8 = { paddingTop: top };
      const merged = Object.assign(tmp4.androidContainer);
      tmp11 = obj8;
    }
    cResult[2] = top;
    cResult[3] = tmp4.androidContainer;
    cResult[4] = tmp11;
    tmp10 = tmp11;
  } else if (cResult[0] !== initialTab) {
    const tmp9 = jsx(YouScreenDefault, { initialTab });
    cResult[0] = initialTab;
    cResult[1] = tmp9;
    tmp7 = tmp9;
  } else {
    tmp7 = cResult[1];
  }
  return tmp7;
}) : ((route) => {
  let initialTab;
  let items1;
  let tmp6Result;
  let tmp6Result2;
  route = route.route;
  const tmp = closure_6();
  const top = useSafeAreaInsetsDefault().top;
  const obj = TabsPerformanceTracker;
  const trackTabPerformance = obj.useTrackTabPerformance(RootNavigatorScreen.YOU);
  if (route != null) {
    const params = route.params;
    if (params != null) {
      initialTab = params.initialTab;
    }
  }
  const width = tmp2(1484)().width;
  if (useChatLayoutDefault().isChatBesideChannelList) {
    const items = [tmp.container, ];
    let tmp9;
    const tmp4Result = utils_PlatformUtils;
    if (tmp4Result.isAndroid()) {
      const obj2 = { paddingTop: top };
      const merged = Object.assign(tmp.androidContainer);
      tmp9 = obj2;
    }
    const obj3 = { style: items, children: tmp6Result };
    items[1] = tmp9;
    const tmp4Result2 = utils_PlatformUtils;
    if (tmp4Result2.isAndroid()) {
      const obj4 = { style: items1, children: null };
      items1 = [tmp.wrapper, ];
      const obj5 = { maxWidth: 0.6 * width };
      items1[1] = obj5;
      tmp6Result = tmp6(tmp8, obj4);
    } else {
      const obj7 = { initialTab };
      tmp6Result = tmp6(tmp2(16979), obj7);
    }
    tmp6Result2 = tmp6(tmp8, obj3);
  } else {
    const obj8 = { initialTab };
    tmp6Result2 = tmp6(tmp2(16979), obj8);
  }
  return tmp6Result2;
}));
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/you/YouScreenContainer.tsx");

export default memoResult;
