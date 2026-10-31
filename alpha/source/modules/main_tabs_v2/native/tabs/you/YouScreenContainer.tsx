// Module ID: 18853
// Function ID: 18854
// Name: YouScreenContainer
// Dependencies: [19, 17, 11513, 21, 5014, 575, 1625, 18058, 1491, 5201, 18854, 1376, 2]

// Module 18853 (YouScreenContainer)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import utils_PlatformUtils from "utils/PlatformUtils" /* 1376 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1625 */;
import useChatLayoutDefault from "useChatLayout" /* 5201 */;
import MainTabsConstants from "MainTabsConstants" /* 11513 */;
import TabsPerformanceTracker from "TabsPerformanceTracker" /* 18058 */;
import react from "react" /* 19 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let obj2;
let obj3;
const View = react_native.View;
const RootNavigatorScreen = MainTabsConstants.RootNavigatorScreen;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { container: { flex: 1, overflow: "hidden", alignItems: "center", justifyContent: "center" }, androidContainer: obj2, wrapper: obj3 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_SCRIM, borderRadius: nativeDefault.radii.none };
createStyles = createStyles.createStyles;
obj3 = { flex: 1, borderRadius: nativeDefault.radii.xl, overflow: "hidden" };
let closure_6 = createStyles(obj);
const memoResult = react.memo(function YouScreenContainer(route) {
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
  const width = tmp2(1491)().width;
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
      tmp6Result = tmp6(tmp2(18854), obj7);
    }
    tmp6Result2 = tmp6(tmp8, obj3);
  } else {
    const obj8 = { initialTab };
    tmp6Result2 = tmp6(tmp2(18854), obj8);
  }
  return tmp6Result2;
});
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/you/YouScreenContainer.tsx");

export default memoResult;
