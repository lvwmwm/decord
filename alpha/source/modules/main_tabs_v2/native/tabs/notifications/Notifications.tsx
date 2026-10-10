// Module ID: 16838
// Function ID: 16839
// Name: notifications/Notifications
// Dependencies: [19, 17, 10636, 2062, 21, 5092, 587, 4977, 558, 576, 6626, 16839, 6184, 1126, 16840, 5088, 16841, 9681, 16842, 6813, 6851, 6878, 7196, 6206, 16846, 16847, 11492, 6845, 4972, 1631, 16427, 10225, 4827, 2]

// Module 16838 (notifications/Notifications)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1631 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2062 */;
import native from "native" /* 4827 */;
import useColorThemeBackgroundDefault from "useColorThemeBackground" /* 4972 */;
import RootNavigationRef from "RootNavigationRef" /* 4977 */;
import useNavigatorBackPressHandler from "useNavigatorBackPressHandler" /* 6206 */;
import useIsWindowLargeDefault from "useIsWindowLarge" /* 6626 */;
import LayerScope2 from "LayerScope" /* 6845 */;
import useAnalyticsLocations from "useAnalyticsLocations" /* 6851 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6878 */;
import MainTabsConstants from "MainTabsConstants" /* 10636 */;
import TTIFirstContentfulPaint from "TTIFirstContentfulPaint" /* 11492 */;
import TabsPerformanceTracker from "TabsPerformanceTracker" /* 16427 */;
import useForLaterCoachmarkDefault from "useForLaterCoachmark" /* 16839 */;
import ForLaterOpenActionButtonDefault from "ForLaterOpenActionButton" /* 16841 */;
import NotificationCenterActionButtonDefault from "NotificationCenterActionButton" /* 16842 */;
import NotificationCenterForYou from "NotificationCenterForYou" /* 16847 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5092 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
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
let tmp4;
let tmp7;
const ThemedGradientDefault = tmp4(10225);
const NotificationCenterPermissionNudgeDefault = tmp7(16846);
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
let closure_9 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function HeaderInner(nestedInLaunchPad) {
  let closure_0;
  let intl;
  let intl2;
  let items;
  let items1;
  let items2;
  let tmp9;
  const obj = require("react");
  const cResult = obj.c(17);
  nestedInLaunchPad = nestedInLaunchPad.nestedInLaunchPad;
  const tmp4 = closure_9();
  const tmp6 = useIsWindowLargeDefault();
  const ref = react.useRef(null);
  const tmp8 = useForLaterCoachmarkDefault(ref);
  _require = tmp8;
  if (cResult[0] !== tmp8) {
    const fn = function s() {
      return closure_0(ContentDismissActionType.TAKE_ACTION);
    };
    cResult[0] = tmp8;
    cResult[1] = fn;
    tmp9 = fn;
  } else {
    tmp9 = cResult[1];
  }
  if (cResult[2] === nestedInLaunchPad) {
    if (cResult[3] === tmp9) {
      if (cResult[4] === tmp4.actionButtons) {
        if (cResult[5] === tmp4.headerClose) {
          if (cResult[6] === tmp4.headerText) {
            let tmp11;
            if (cResult[7] === tmp4.headerTitle) {
              tmp11 = cResult[8];
            }
            if (cResult[9] === (!nestedInLaunchPad && !tmp6)) {
              let tmp19;
              let tmp22;
              if (cResult[10] === tmp11) {
                tmp19 = cResult[11];
              }
              if (cResult[12] !== tmp4.headerBorder) {
                const obj2 = { style: tmp4.headerBorder };
                const tmp25 = closure_7(View, obj2);
                cResult[12] = tmp4.headerBorder;
                cResult[13] = tmp25;
                tmp22 = tmp25;
              } else {
                tmp22 = cResult[13];
              }
              if (cResult[14] === tmp19) {
                let tmp26;
                if (cResult[15] === tmp22) {
                  tmp26 = cResult[16];
                }
                return tmp26;
              }
              const obj3 = { children: items };
              items = [tmp19, tmp22];
              const tmp29 = closure_8(View, obj3);
              cResult[14] = tmp19;
              cResult[15] = tmp22;
              cResult[16] = tmp29;
              tmp26 = tmp29;
            }
            const obj4 = { top: !nestedInLaunchPad && !tmp6, children: tmp11 };
            const tmp21 = closure_7(require("common/SafeAreaView").SafeAreaPaddingView, obj4);
            cResult[9] = !nestedInLaunchPad && !tmp6;
            cResult[10] = tmp11;
            cResult[11] = tmp21;
            tmp19 = tmp21;
          }
        }
      }
    }
  }
  let tmp12 = null;
  if (!nestedInLaunchPad) {
    const obj5 = { style: tmp4.headerTitle, children: items1 };
    const obj6 = { style: tmp4.headerClose, accessibilityLabel: intl.string(require("intl").t["13/7kX"]), onPress: goBack, children: closure_7(require("BackIconWithBadge").LeftBackIconWithBadge, {}) };
    const PressableOpacity = tmp(6184).PressableOpacity;
    intl = tmp(1126).intl;
    items1 = [closure_7(PressableOpacity, obj6), , ];
    const obj7 = { color: "mobile-text-heading-primary", variant: "heading-lg/bold", style: tmp4.headerText, maxFontSizeMultiplier: 1.75, accessibilityRole: "header", children: intl2.string(require("intl").t.HcoRu0) };
    const Text = tmp(5088).Text;
    intl2 = tmp(1126).intl;
    items1[1] = closure_7(Text, obj7);
    const obj8 = { style: tmp4.actionButtons, children: items2 };
    const obj9 = { ref, type: require("SavedMessagesTypes").SavedMessageSortTypes.BOOKMARK, onOpen: tmp9 };
    const tmp5Result = ForLaterOpenActionButtonDefault;
    items2 = [closure_7(tmp5Result, obj9), , ];
    const obj10 = { type: require("SavedMessagesTypes").SavedMessageSortTypes.REMINDER, onOpen: tmp9 };
    const tmp5Result2 = ForLaterOpenActionButtonDefault;
    items2[1] = closure_7(tmp5Result2, obj10);
    items2[2] = closure_7(NotificationCenterActionButtonDefault, {});
    items1[2] = closure_8(View, obj8);
    tmp12 = closure_8(View, obj5);
  }
  cResult[2] = nestedInLaunchPad;
  cResult[3] = tmp9;
  cResult[4] = tmp4.actionButtons;
  cResult[5] = tmp4.headerClose;
  cResult[6] = tmp4.headerText;
  cResult[7] = tmp4.headerTitle;
  cResult[8] = tmp12;
  tmp11 = tmp12;
}) : (function HeaderInner(nestedInLaunchPad) {
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
    const PressableOpacity = tmp11(6184).PressableOpacity;
    intl = tmp11(1126).intl;
    items1 = [closure_7(PressableOpacity, obj3), , ];
    const obj4 = { color: "mobile-text-heading-primary", variant: "heading-lg/bold", style: tmp.headerText, maxFontSizeMultiplier: 1.75, accessibilityRole: "header", children: intl2.string(require("intl").t.HcoRu0) };
    const Text = tmp11(5088).Text;
    intl2 = tmp11(1126).intl;
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
}));
ReactCompilerGating = ReactCompilerGating_mod;
tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function Notifications(arg0) {
  let inNestedNavigator;
  let items1;
  let nestedInLaunchPad;
  let obj4;
  let style;
  let tmp10;
  let tmp12;
  let tmp9;
  let obj = react2;
  const cResult = obj.c(20);
  ({ style, nestedInLaunchPad, inNestedNavigator } = arg0);
  const tmp6 = closure_9();
  const tmp8 = useAnalyticsLocationsDefault;
  const analyticsLocations = tmp8(AnalyticsLocationDefault.NOTIFICATIONS).analyticsLocations;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function c() {
      const obj = require("TTIAnalyticsUtils");
      return obj.trackAppUIViewed();
    };
    const items = [];
    cResult[0] = fn;
    cResult[1] = items;
    tmp10 = items;
    tmp9 = fn;
  } else {
    [tmp9, tmp10] = cResult;
  }
  const layoutEffect = react.useLayoutEffect(tmp9, tmp10);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function f() {
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
    };
    cResult[2] = fn2;
    tmp12 = fn2;
  } else {
    tmp12 = cResult[2];
  }
  const tmpResult = useNavigatorBackPressHandler;
  tmpResult.useNavigatorBackPressHandler(tmp12);
  if (cResult[3] === style) {
    let tmp14;
    if (cResult[4] === tmp6.container) {
      tmp14 = cResult[5];
    }
    if (cResult[6] === (undefined !== inNestedNavigator && inNestedNavigator)) {
      let tmp15;
      let tmp19;
      let tmp22;
      let tmp25;
      if (cResult[7] === (undefined !== nestedInLaunchPad && nestedInLaunchPad)) {
        tmp15 = cResult[8];
      }
      const _Symbol = Symbol;
      if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp21 = metroImportDefault(NotificationCenterPermissionNudgeDefault, {});
        cResult[9] = tmp21;
        tmp19 = tmp21;
      } else {
        tmp19 = cResult[9];
      }
      if (cResult[10] !== (undefined !== nestedInLaunchPad && nestedInLaunchPad)) {
        const obj2 = { nestedInLaunchPad: undefined !== nestedInLaunchPad && nestedInLaunchPad };
        const tmp24 = metroImportDefault(NotificationCenterForYou.NotificationCenterForYou, obj2);
        cResult[10] = undefined !== nestedInLaunchPad && nestedInLaunchPad;
        cResult[11] = tmp24;
        tmp22 = tmp24;
      } else {
        tmp22 = cResult[11];
      }
      const _Symbol2 = Symbol;
      if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp27 = metroImportDefault(TTIFirstContentfulPaint.TTIFirstContentfulPaint, { label: "notifications" });
        cResult[12] = tmp27;
        tmp25 = tmp27;
      } else {
        tmp25 = cResult[12];
      }
      if (cResult[13] === tmp14) {
        if (cResult[14] === tmp15) {
          let tmp28;
          if (cResult[15] === tmp22) {
            tmp28 = cResult[16];
          }
          if (cResult[17] === analyticsLocations) {
            let tmp32;
            if (cResult[18] === tmp28) {
              tmp32 = cResult[19];
            }
            return tmp32;
          }
          const obj3 = { zIndex: 1, children: metroImportDefault(useAnalyticsLocations.AnalyticsLocationProvider, obj4) };
          const LayerScope = tmp(6845).LayerScope;
          obj4 = { value: analyticsLocations, children: tmp28 };
          const tmp34 = metroImportDefault(LayerScope, obj3);
          cResult[17] = analyticsLocations;
          cResult[18] = tmp28;
          cResult[19] = tmp34;
          tmp32 = tmp34;
        }
      }
      const obj5 = { style: tmp14, children: items1 };
      items1 = [tmp15, tmp19, tmp22, tmp25];
      const tmp31 = metroImportAll(View, obj5);
      cResult[13] = tmp14;
      cResult[14] = tmp15;
      cResult[15] = tmp22;
      cResult[16] = tmp31;
      tmp28 = tmp31;
    }
    const obj6 = { nestedInLaunchPad: undefined !== nestedInLaunchPad && nestedInLaunchPad, inNestedNavigator: undefined !== inNestedNavigator && inNestedNavigator };
    const tmp18 = metroImportDefault(closure_11, obj6);
    cResult[6] = undefined !== inNestedNavigator && inNestedNavigator;
    cResult[7] = undefined !== nestedInLaunchPad && nestedInLaunchPad;
    cResult[8] = tmp18;
    tmp15 = tmp18;
  }
  const items2 = [tmp6.container, style];
  cResult[3] = style;
  cResult[4] = tmp6.container;
  cResult[5] = items2;
  tmp14 = items2;
}) : (function Notifications(nestedInLaunchPad) {
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
});
let closure_12 = tmp4;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function ThemedNotifications(route) {
  let containerOuter;
  let items;
  const obj = react2;
  const cResult = obj.c(15);
  const tmp5 = useColorThemeBackgroundDefault();
  const top = useSafeAreaInsetsDefault().top;
  const tmp6 = useIsWindowLargeDefault();
  const tmp7 = closure_9();
  if (cResult[0] === tmp6) {
    if (cResult[1] === top) {
      if (cResult[2] === tmp7.containerOuter) {
        let tmp8;
        let tmp12;
        if (cResult[3] === tmp7.containerOuterTablet) {
          tmp8 = cResult[4];
        }
        const tmpResult = TabsPerformanceTracker;
        const trackTabPerformance = tmpResult.useTrackTabPerformance(YouBarNavigatorScreens.NOTIFICATIONS);
        const _Symbol = Symbol;
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp14 = metroImportDefault(ThemedGradientDefault, { absolute: true });
          cResult[5] = tmp14;
          tmp12 = tmp14;
        } else {
          tmp12 = cResult[5];
        }
        route = route.route;
        let inNestedNavigator;
        if (route != null) {
          const params = route.params;
          if (params != null) {
            inNestedNavigator = params.inNestedNavigator;
          }
        }
        if (cResult[6] === route) {
          let tmp18;
          if (cResult[7] === inNestedNavigator) {
            tmp18 = cResult[8];
          }
          if (cResult[9] === tmp5) {
            let tmp25;
            if (cResult[10] === tmp18) {
              tmp25 = cResult[11];
            }
            if (cResult[12] === tmp8) {
              let tmp28;
              if (cResult[13] === tmp25) {
                tmp28 = cResult[14];
              }
              return tmp28;
            }
            const obj2 = { style: tmp8, children: items };
            items = [tmp12, tmp25];
            const tmp31 = metroImportAll(View, obj2);
            cResult[12] = tmp8;
            cResult[13] = tmp25;
            cResult[14] = tmp31;
            tmp28 = tmp31;
          }
          const obj3 = { gradient: tmp5, children: tmp18 };
          const tmp27 = metroImportDefault(native.ThemeContextProvider, obj3);
          cResult[9] = tmp5;
          cResult[10] = tmp18;
          cResult[11] = tmp27;
          tmp25 = tmp27;
        }
        const obj4 = { inNestedNavigator };
        const merged = Object.assign(route);
        const tmp24 = metroImportDefault(closure_12, obj4);
        cResult[6] = route;
        cResult[7] = inNestedNavigator;
        cResult[8] = tmp24;
        tmp18 = tmp24;
      }
    }
  }
  if (tmp6) {
    const items1 = [tmp7.containerOuterTablet, ];
    const obj5 = { paddingTop: top };
    items1[1] = obj5;
    containerOuter = items1;
  } else {
    containerOuter = tmp7.containerOuter;
  }
  cResult[0] = tmp6;
  cResult[1] = top;
  cResult[2] = tmp7.containerOuter;
  cResult[3] = tmp7.containerOuterTablet;
  cResult[4] = containerOuter;
  tmp8 = containerOuter;
}) : (function ThemedNotifications(route) {
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
  tmp9 = closure_12;
  if (route != null) {
    const params = route.params;
    if (params != null) {
      inNestedNavigator = params.inNestedNavigator;
    }
  }
  items1[1] = metroImportDefault(ThemeContextProvider, obj3);
  return tmp6(tmp7, obj2);
});
let closure_13 = tmp5;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function ThemedNotificationsModal() {
  let first;
  const obj = react2;
  const cResult = obj.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp5 = metroImportDefault(closure_13, { inNestedNavigator: true });
    cResult[0] = tmp5;
    first = tmp5;
  } else {
    first = cResult[0];
  }
  return first;
}) : (function ThemedNotificationsModal() {
  return metroImportDefault(closure_13, { inNestedNavigator: true });
});
size = size_mod;
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/notifications/Notifications.tsx");

export default tmp4;
export { goBack };
export const ThemedNotifications = tmp5;
export const ThemedNotificationsModal = tmp6;
