// Module ID: 16038
// Function ID: 16039
// Name: Notifications
// Dependencies: [19, 17, 10549, 2042, 21, 4836, 576, 4693, 6364, 7275, 16039, 6544, 5435, 1115, 16040, 4832, 16041, 7285, 16043, 6583, 6603, 6895, 5942, 6577, 16047, 16048, 11375, 4688, 1613, 15647, 5437, 4540, 2]
// Exports: ThemedNotificationsModal

// Module 16038 (Notifications)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1613 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2042 */;
import native from "native" /* 4540 */;
import useColorThemeBackgroundDefault from "useColorThemeBackground" /* 4688 */;
import RootNavigationRef from "RootNavigationRef" /* 4693 */;
import ThemedGradientDefault from "ThemedGradient" /* 5437 */;
import useNavigatorBackPressHandler from "useNavigatorBackPressHandler" /* 5942 */;
import useIsWindowLargeDefault from "useIsWindowLarge" /* 6364 */;
import LayerScope2 from "LayerScope" /* 6577 */;
import useAnalyticsLocations from "useAnalyticsLocations" /* 6583 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6603 */;
import MainTabsConstants from "MainTabsConstants" /* 10549 */;
import TTIFirstContentfulPaint from "TTIFirstContentfulPaint" /* 11375 */;
import TabsPerformanceTracker from "TabsPerformanceTracker" /* 15647 */;
import useForLaterCoachmarkDefault from "useForLaterCoachmark" /* 16039 */;
import ForLaterOpenActionButtonDefault from "ForLaterOpenActionButton" /* 16041 */;
import NotificationCenterActionButtonDefault from "NotificationCenterActionButton" /* 16043 */;
import NotificationCenterPermissionNudgeDefault from "NotificationCenterPermissionNudge" /* 16047 */;
import NotificationCenterForYou from "NotificationCenterForYou" /* 16048 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
const useAnalyticsLocationsDefault = useAnalyticsLocations;
let _require, navigation;

let c9;
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
    const tmp = closure_10();
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
    obj3 = { value: analyticsLocations, children: React4(View, obj4) };
    obj4 = { style: items, children: items1 };
    items = [tmp.container, style];
    AnalyticsLocationProvider = useAnalyticsLocations.AnalyticsLocationProvider;
    items1 = [metroImportDefault(closure_12, { nestedInLaunchPad: flag, inNestedNavigator: flag2 }), metroImportDefault(NotificationCenterPermissionNudgeDefault, {}), metroImportDefault(NotificationCenterForYou.NotificationCenterForYou, { nestedInLaunchPad: flag }), metroImportDefault(TTIFirstContentfulPaint.TTIFirstContentfulPaint, { label: "notifications" })];
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
    const tmp3 = closure_10();
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
    const tmp6 = React4;
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
({ jsx: metroImportDefault, Fragment: metroImportAll, jsxs: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = { containerOuter: { flex: 1 }, containerOuterTablet: obj2, container: obj3, headerTitle: { height: 56, marginHorizontal: 16, flexDirection: "row", alignItems: "center" }, actionButtons: { flexDirection: "row", gap: 12 }, headerClose: size, headerText: { flex: 1, marginTop: 2 }, headerBorder: size1 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, paddingHorizontal: nativeDefault.space.PX_8, flex: 1 };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderTopLeftRadius: nativeDefault.radii.sm, borderTopRightRadius: nativeDefault.radii.sm, flexGrow: 1 };
size = { marginRight: nativeDefault.space.PX_16, height: nativeDefault.space.PX_32, width: nativeDefault.space.PX_32, alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.radii.lg };
size1 = { left: 0, bottom: 0, height: 1, width: "100%", position: "absolute", backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
const authStore = createStyles(obj);
let closure_12 = react.memo(function HeaderInner(nestedInLaunchPad) {
  let closure_0;
  let intl;
  let intl2;
  let items1;
  let items2;
  let items3;
  let items4;
  let items5;
  let tmp10Result2;
  nestedInLaunchPad = nestedInLaunchPad.nestedInLaunchPad;
  _require = undefined;
  const tmp = closure_10();
  const tmp4 = useIsWindowLargeDefault();
  const obj = require("ForLaterExperiment");
  const isForLaterExperimentOn = obj.useIsForLaterExperimentOn("NativeNotifications");
  const ref = react.useRef(null);
  const tmp8 = useForLaterCoachmarkDefault(ref);
  _require = tmp8;
  const items = [tmp8];
  const callback = react.useCallback(() => closure_0(ContentDismissActionType.TAKE_ACTION), items);
  let tmp13 = !nestedInLaunchPad;
  const SafeAreaPaddingView = require("common/SafeAreaView").SafeAreaPaddingView;
  if (!nestedInLaunchPad) {
    tmp13 = !tmp4;
  }
  const obj2 = { top: tmp13, children: tmp10Result2 };
  tmp10Result2 = null;
  if (!nestedInLaunchPad) {
    const obj3 = { style: tmp.headerTitle, children: items1 };
    const obj4 = { style: tmp.headerClose, accessibilityLabel: intl.string(require("intl").t["13/7kX"]), onPress: goBack, children: closure_7(require("BackIconWithBadge").LeftBackIconWithBadge, {}) };
    const PressableOpacity = tmp5(5435).PressableOpacity;
    intl = tmp5(1115).intl;
    items1 = [closure_7(PressableOpacity, obj4), , ];
    const obj5 = { color: "mobile-text-heading-primary", variant: "heading-lg/bold", style: tmp.headerText, maxFontSizeMultiplier: 1.75, accessibilityRole: "header", children: intl2.string(require("intl").t.HcoRu0) };
    const Text = tmp5(4832).Text;
    intl2 = tmp5(1115).intl;
    items1[1] = closure_7(Text, obj5);
    let tmp10Result = null;
    const obj6 = { style: tmp.actionButtons, children: items3 };
    if (isForLaterExperimentOn) {
      const obj7 = { children: items2 };
      const obj8 = { ref, type: require("SavedMessagesTypes").SavedMessageSortTypes.BOOKMARK, onOpen: callback };
      const tmp2Result = ForLaterOpenActionButtonDefault;
      items2 = [closure_7(tmp2Result, obj8), ];
      const obj9 = { type: require("SavedMessagesTypes").SavedMessageSortTypes.REMINDER, onOpen: callback };
      const tmp2Result2 = ForLaterOpenActionButtonDefault;
      items2[1] = closure_7(tmp2Result2, obj9);
      tmp10Result = tmp10(closure_8, obj7);
    }
    items3 = [tmp10Result, closure_7(NotificationCenterActionButtonDefault, {})];
    items1[2] = closure_9(View, obj6);
    tmp10Result2 = tmp10(tmp11, obj3);
  }
  const obj10 = { children: items4 };
  items4 = [closure_7(SafeAreaPaddingView, obj2), ];
  const obj11 = { style: items5 };
  items5 = [tmp.headerBorder];
  items4[1] = closure_7(View, obj11);
  return closure_9(View, obj10);
});
size = size_mod;
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/notifications/Notifications.tsx");

export default Notifications;
export { goBack };
export { ThemedNotifications };
export const ThemedNotificationsModal = function ThemedNotificationsModal() {
  return metroImportDefault(ThemedNotifications, { inNestedNavigator: true });
};
