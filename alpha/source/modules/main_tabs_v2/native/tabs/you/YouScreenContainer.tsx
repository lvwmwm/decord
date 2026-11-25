// Module ID: 19044
// Function ID: 19045
// Name: YouScreenContainer
// Dependencies: [19, 17, 9387, 21, 5012, 575, 1628, 17684, 1494, 5191, 4969, 19043, 19045, 1358, 2]

// Module 19044 (YouScreenContainer)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import utils_PlatformUtils from "utils/PlatformUtils" /* 1358 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1628 */;
import DeviceUtils from "DeviceUtils" /* 4969 */;
import MainTabsConstants from "MainTabsConstants" /* 9387 */;
import TabsPerformanceTracker from "TabsPerformanceTracker" /* 17684 */;
import AppFrameContainerDefault from "AppFrameContainer" /* 19043 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5012 */;
import size from "module_2" /* 2 */;

let obj2;
const View = react_native.View;
const RootNavigatorScreen = MainTabsConstants.RootNavigatorScreen;
const jsx = Fragment.jsx;
let obj = { container: { flex: 1, overflow: "hidden", alignItems: "center", justifyContent: "center" }, androidContainer: obj2, wrapper: { flex: 1 } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_SCRIM, borderRadius: nativeDefault.radii.none };
let closure_6 = createStyles.createStyles(obj);
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
  const width = tmp2(1494)().width;
  const isChatBesideChannelList = tmp2(5191)().isChatBesideChannelList;
  const tmp4Result = DeviceUtils;
  if (tmp4Result.isDuo()) {
    const obj2 = { children: null };
    const tmp2Result = AppFrameContainerDefault;
    tmp6Result = tmp6(tmp2Result, obj2);
  } else if (isChatBesideChannelList) {
    const items = [tmp.container, ];
    let tmp9;
    const tmp4Result3 = utils_PlatformUtils;
    if (tmp4Result3.isAndroid()) {
      const obj4 = { paddingTop: top };
      const merged = Object.assign(tmp.androidContainer);
      tmp9 = obj4;
    }
    const obj5 = { style: items, children: tmp6Result2 };
    items[1] = tmp9;
    const tmp4Result4 = utils_PlatformUtils;
    if (tmp4Result4.isAndroid()) {
      const obj6 = { style: items1, children: null };
      items1 = [tmp.wrapper, ];
      const obj7 = { maxWidth: 0.6 * width };
      items1[1] = obj7;
      tmp6Result2 = tmp6(tmp8, obj6);
    } else {
      const obj9 = { initialTab };
      tmp6Result2 = tmp6(tmp2(19045), obj9);
    }
    tmp6Result = tmp6(tmp8, obj5);
  } else {
    const obj10 = { initialTab };
    tmp6Result = tmp6(tmp2(19045), obj10);
  }
  return tmp6Result;
});
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/you/YouScreenContainer.tsx");

export default memoResult;
