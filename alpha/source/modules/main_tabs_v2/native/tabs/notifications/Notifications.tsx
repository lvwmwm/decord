// Module ID: 18745
// Function ID: 18746
// Name: Notifications
// Dependencies: [19, 17, 11703, 4987, 21, 5141, 575, 5323, 7258, 18746, 7428, 7121, 1113, 18747, 5761, 18748, 10370, 18749, 7462, 7487, 7794, 7145, 5748, 18753, 18754, 13556, 5318, 1627, 18326, 10914, 5207, 2]
// Exports: ThemedNotificationsModal

// Module 18745 (Notifications)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1627 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 4987 */;
import native from "native" /* 5207 */;
import useColorThemeBackgroundDefault from "useColorThemeBackground" /* 5318 */;
import RootNavigationRef from "RootNavigationRef" /* 5323 */;
import LayerScope2 from "LayerScope" /* 5748 */;
import useNavigatorBackPressHandler from "useNavigatorBackPressHandler" /* 7145 */;
import useIsWindowLargeDefault from "useIsWindowLarge" /* 7258 */;
import useAnalyticsLocations from "useAnalyticsLocations" /* 7462 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7487 */;
import ThemedGradientDefault from "ThemedGradient" /* 10914 */;
import MainTabsConstants from "MainTabsConstants" /* 11703 */;
import TTIFirstContentfulPaint from "TTIFirstContentfulPaint" /* 13556 */;
import TabsPerformanceTracker from "TabsPerformanceTracker" /* 18326 */;
import useForLaterCoachmarkDefault from "useForLaterCoachmark" /* 18746 */;
import ForLaterOpenActionButtonDefault from "ForLaterOpenActionButton" /* 18748 */;
import NotificationCenterActionButtonDefault from "NotificationCenterActionButton" /* 18749 */;
import NotificationCenterPermissionNudgeDefault from "NotificationCenterPermissionNudge" /* 18753 */;
import NotificationCenterForYou from "NotificationCenterForYou" /* 18754 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5141 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
const useAnalyticsLocationsDefault = useAnalyticsLocations;
let _require, navigation;

let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let size;
let size1;
function goBack() {
  const obj = RootNavigationRef;
  navigation = obj.getRootNavigationRef();
  if (null != navigation) {
    if (navigation.canGoBack()) {
      navigation.goBack();
    } else {
      navigation.navigate("guilds");
    }
  }
}
class Notifications {
  constructor(nestedInLaunchPad) {
    let AnalyticsLocationProvider;
    let items;
    let items1;
    let obj3;
    let obj4;
    let flag = nestedInLaunchPad.nestedInLaunchPad;
    const style = nestedInLaunchPad.style;
    if (flag === undefined) {
      flag = false;
    }
    let flag2 = nestedInLaunchPad.inNestedNavigator;
    if (flag2 === undefined) {
      flag2 = false;
    }
    const tmp = closure_9();
    const tmp2 = useAnalyticsLocationsDefault;
    const analyticsLocations = tmp2(AnalyticsLocationDefault.NOTIFICATIONS).analyticsLocations;
    const layoutEffect = react.useLayoutEffect(() => {
      const obj = require("TTIAnalyticsUtils");
      return obj.trackAppUIViewed();
    }, []);
    const callback = react.useCallback(() => {
      const obj = require("RootNavigationRef");
      navigation = obj.getRootNavigationRef();
      if (null != navigation) {
        if (navigation.canGoBack()) {
          navigation.goBack();
        } else {
          navigation.navigate("guilds");
        }
      }
      return true;
    }, []);
    let obj = useNavigatorBackPressHandler;
    obj.useNavigatorBackPressHandler(callback);
    const obj2 = { zIndex: 1, children: metroImportDefault(AnalyticsLocationProvider, obj3) };
    const LayerScope = LayerScope2.LayerScope;
    obj3 = { value: analyticsLocations, children: metroImportAll(View, obj4) };
    obj4 = { style: items, children: items1 };
    items = [tmp.container, style];
    AnalyticsLocationProvider = useAnalyticsLocations.AnalyticsLocationProvider;
    items1 = [metroImportDefault(closure_11, { nestedInLaunchPad: flag, inNestedNavigator: flag2 }), metroImportDefault(NotificationCenterPermissionNudgeDefault, {}), metroImportDefault(NotificationCenterForYou.NotificationCenterForYou, { nestedInLaunchPad: flag }), metroImportDefault(TTIFirstContentfulPaint.TTIFirstContentfulPaint, { label: "notifications" })];
    return metroImportDefault(LayerScope, obj2);
  }
}
class ThemedNotifications {
  constructor(route) {
    let inNestedNavigator;
    let items1;
    let obj4;
    let tmp9;
    const tmp = useColorThemeBackgroundDefault();
    const top = useSafeAreaInsetsDefault().top;
    const tmp2 = useIsWindowLargeDefault();
    let closure_1 = tmp2;
    const tmp3 = closure_9();
    let closure_2 = tmp3;
    let items = [tmp3, tmp2, top];
    const memo = react.useMemo(() => {
      let containerOuter;
      if (closure_1) {
        const items = [containerOuterTablet.containerOuterTablet, ];
        const obj = { paddingTop: top };
        items[1] = obj;
        containerOuter = items;
      } else {
        containerOuter = tmp.containerOuter;
      }
      return containerOuter;
    }, items);
    let obj = TabsPerformanceTracker;
    const trackTabPerformance = obj.useTrackTabPerformance(YouBarNavigatorScreens.NOTIFICATIONS);
    const obj2 = { style: memo, children: items1 };
    items1 = [metroImportDefault(ThemedGradientDefault, { absolute: true }), ];
    const obj3 = { gradient: tmp, children: metroImportDefault(tmp9, obj4) };
    obj4 = { inNestedNavigator };
    const ThemeContextProvider = native.ThemeContextProvider;
    const merged = Object.assign(route);
    route = route.route;
    inNestedNavigator = undefined;
    const tmp6 = metroImportAll;
    const tmp7 = View;
    tmp9 = Notifications;
    if (route != null) {
      const params = route.params;
      if (params != null) {
        inNestedNavigator = params.inNestedNavigator;
      }
    }
    items1[1] = metroImportDefault(ThemeContextProvider, obj3);
    return tmp6(tmp7, obj2);
  }
}
const View = react_native.View;
const YouBarNavigatorScreens = MainTabsConstants.YouBarNavigatorScreens;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { containerOuter: { flex: 1 }, containerOuterTablet: obj2, container: obj3, headerTitle: { height: 56, marginHorizontal: 16, flexDirection: "row", alignItems: "center" }, actionButtons: { flexDirection: "row", gap: 12 }, headerClose: size, headerText: { flex: 1, marginTop: 2 }, headerBorder: size1 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, paddingHorizontal: nativeDefault.space.PX_8, flex: 1 };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderTopLeftRadius: nativeDefault.radii.sm, borderTopRightRadius: nativeDefault.radii.sm, flexGrow: 1 };
size = { marginRight: nativeDefault.space.PX_16, height: nativeDefault.space.PX_32, width: nativeDefault.space.PX_32, alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.radii.lg };
size1 = { left: 0, bottom: 0, height: 1, width: "100%", position: "absolute", backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
const React4 = createStyles(obj);
let closure_11 = react.memo(function HeaderInner(nestedInLaunchPad) {
  let closure_0;
  let intl;
  let intl2;
  let items1;
  let items2;
  let items3;
  let tmp8Result;
  nestedInLaunchPad = nestedInLaunchPad.nestedInLaunchPad;
  const tmp = closure_9();
  const tmp4 = useIsWindowLargeDefault();
  const ref = react.useRef(null);
  const tmp6 = useForLaterCoachmarkDefault(ref);
  _require = tmp6;
  const items = [tmp6];
  const callback = react.useCallback(() => closure_0(ContentDismissActionType.TAKE_ACTION), items);
  let tmp12 = !nestedInLaunchPad;
  const SafeAreaPaddingView = require("common/SafeAreaView").SafeAreaPaddingView;
  if (!nestedInLaunchPad) {
    tmp12 = !tmp4;
  }
  const obj = { top: tmp12, children: tmp8Result };
  tmp8Result = null;
  if (!nestedInLaunchPad) {
    const obj2 = { style: tmp.headerTitle, children: items1 };
    const obj3 = { style: tmp.headerClose, accessibilityLabel: intl.string(require("intl").t["13/7kX"]), onPress: goBack, children: closure_7(require("BackIconWithBadge").LeftBackIconWithBadge, {}) };
    const PressableOpacity = tmp11(7121).PressableOpacity;
    intl = tmp11(1113).intl;
    items1 = [closure_7(PressableOpacity, obj3), , ];
    const obj4 = { color: "mobile-text-heading-primary", variant: "heading-lg/semibold", style: tmp.headerText, maxFontSizeMultiplier: 1.75, accessibilityRole: "header", children: intl2.string(require("intl").t.HcoRu0) };
    const Text = tmp11(5761).Text;
    intl2 = tmp11(1113).intl;
    items1[1] = closure_7(Text, obj4);
    const obj5 = { style: tmp.actionButtons, children: items2 };
    const obj6 = { ref, type: require("SavedMessagesTypes").SavedMessageSortTypes.BOOKMARK, onOpen: callback };
    const tmp2Result = ForLaterOpenActionButtonDefault;
    items2 = [closure_7(tmp2Result, obj6), , ];
    const obj7 = { type: require("SavedMessagesTypes").SavedMessageSortTypes.REMINDER, onOpen: callback };
    const tmp2Result2 = ForLaterOpenActionButtonDefault;
    items2[1] = closure_7(tmp2Result2, obj7);
    items2[2] = closure_7(NotificationCenterActionButtonDefault, {});
    items1[2] = closure_8(View, obj5);
    tmp8Result = tmp8(tmp9, obj2);
  }
  const obj8 = { children: items3 };
  items3 = [closure_7(SafeAreaPaddingView, obj), ];
  const obj9 = { style: tmp.headerBorder };
  items3[1] = closure_7(View, obj9);
  return closure_8(View, obj8);
});
size = size_mod;
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/notifications/Notifications.tsx");

export default Notifications;
export { goBack };
export { ThemedNotifications };
export function ThemedNotificationsModal() {
  return metroImportDefault(ThemedNotifications, { inNestedNavigator: true });
}
