// Module ID: 16726
// Function ID: 16727
// Name: SettingsNavigator
// Dependencies: [32, 19, 17, 2112, 14249, 1074, 21, 7339, 4836, 576, 14955, 1177, 4832, 1486, 12997, 16727, 6416, 563, 6583, 6603, 14251, 6895, 14252, 6421, 13990, 4531, 5435, 1115, 16040, 16728, 14140, 16729, 38, 2]

// Module 16726 (SettingsNavigator)
import react_native from "react-native" /* 17 */;
import _modDef38 from "module_38" /* 38 */;
import nativeDefault from "native" /* 576 */;
import intl2 from "intl" /* 1115 */;
import native from "native" /* 1177 */;
import Text_Text from "Text/Text" /* 4832 */;
import Pressables from "Pressables" /* 5435 */;
import UserSettingsUtils from "UserSettingsUtils" /* 6416 */;
import SettingRendererUtils from "SettingRendererUtils" /* 14251 */;
import SettingRendererTypes from "SettingRendererTypes" /* 14955 */;
import BackIconWithBadge from "BackIconWithBadge" /* 16040 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import LocaleStore from "LocaleStore" /* 2112 */;
import UserSettingSearchStore from "UserSettingSearchStore" /* 14249 */;
import Constants from "Constants" /* 1074 */;
import Fragment from "Fragment" /* 21 */;
import NativeStackView from "NativeStackView" /* 7339 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, component, state;

let c10;
let c9;
let metroImportAll;
let obj2;
let obj3;
let obj4;
let obj5;
let unpackModuleId;
function SettingHeaderBadge(badge) {
  if (badge.badge.badgeType === SettingRendererTypes.SettingsBadgeType.BETA) {
    const obj = { size: native.BetaSizes.SMALL };
    const BetaTag = tmp(1177).BetaTag;
    return authStore(BetaTag, obj);
  }
}
function LeftAlignedHeaderTitle(usePersistentBadge) {
  let items;
  usePersistentBadge = usePersistentBadge.usePersistentBadge;
  const title = usePersistentBadge.title;
  const tmp = closure_13();
  let persistentBadge;
  if (usePersistentBadge != null) {
    persistentBadge = usePersistentBadge();
  }
  const tmp3 = null != persistentBadge ? tmp.headerTitleWithBadge : tmp.headerContainer;
  const tmp5 = authStore(Text_Text.Heading, { lineClamp: 1, variant: "redesign/heading-18/bold", color: "mobile-text-heading-primary", maxFontSizeMultiplier: 2, style: tmp3, children: title });
  let tmp6 = tmp5;
  const tmp4 = authStore;
  if (null != persistentBadge) {
    const obj = { style: tmp.headerContainerRow, children: items };
    items = [tmp5, ];
    const obj2 = { badge: persistentBadge };
    items[1] = tmp4(SettingHeaderBadge, obj2);
    tmp6 = unpackModuleId(View, obj);
  }
  return tmp6;
}
let react = react_mod;
const View = react_native.View;
({ AnalyticsPages: metroImportAll, UserSettingsSections: c9 } = Constants);
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
let closure_12 = NativeStackView.createNativeStackNavigator();
let createStyles = createStyles_mod;
let obj = { statusBarSpacer: obj2, headerContainer: obj3, headerContainerRow: obj4, headerTitleWithBadge: { flexShrink: 1 }, backIcon: obj5 };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
createStyles = createStyles.createStyles;
obj3 = { width: "100%", paddingHorizontal: nativeDefault.space.PX_8, marginTop: nativeDefault.space.PX_8 };
obj4 = { flexDirection: "row", alignItems: "center", paddingHorizontal: nativeDefault.space.PX_8, marginTop: nativeDefault.space.PX_8, width: "100%" };
obj5 = { borderRadius: nativeDefault.radii.round, marginTop: nativeDefault.space.PX_8 };
let closure_13 = createStyles(obj);
const memoResult = react.memo(() => {
  let Navigator;
  let Screen;
  let beforeRemove;
  let closure_0;
  let closure_4;
  let items5;
  let items6;
  let obj2;
  let obj5;
  let obj6;
  let params1;
  let tmp2Result12;
  let tmp2Result13;
  let transitionStart;
  let tmp = closure_13();
  _require = tmp;
  let tmp2 = _require;
  let tmp3 = params1;
  let obj = require("Link");
  const route = obj.useRoute();
  const params = route.params;
  let screen;
  if (params != null) {
    screen = params.screen;
  }
  if (screen == null) {
    screen = constants2.OVERVIEW;
  }
  const params2 = route.params;
  params1 = undefined;
  if (params2 != null) {
    params1 = params2.params;
  }
  const params3 = route.params;
  let onClose;
  if (params3 != null) {
    onClose = params3.onClose;
  }
  const tmp2Result = tmp2(tmp3[13]);
  react = tmp2Result.useNavigation();
  const tmp2Result8 = tmp2(tmp3[14]);
  const commonTriggerPoint = tmp2Result8.useCommonTriggerPoint(tmp2(tmp3[15]).OpenUserSettingsTriggerPoint);
  const items = [screen];
  const effect = react.useEffect(() => {
    let obj3;
    obj2 = { destinationPane: screen, source: obj3 };
    obj3 = { page: metroImportAll.USER_SETTINGS };
    const obj = UserSettingsUtils;
    const result = obj.trackUserSettingsPaneViewed(obj2);
  }, items);
  const items1 = [onClose];
  const effect1 = react.useEffect(() => () => {
    if (onClose != null) {
      tmp();
    }
  }, items1);
  const items2 = [obj2];
  const tmp2Result9 = tmp2(tmp3[17]);
  const stateFromStores = tmp2Result9.useStateFromStores(items2, () => obj2.locale);
  let closure_5 = onClose(react.useState(false), 2)[1];
  const items3 = [stateFromStores];
  const layoutEffect = react.useLayoutEffect(() => {
    closure_5((arg0) => !arg0);
  }, items3);
  const tmp14 = screen(tmp3[18]);
  const analyticsLocations = tmp14(screen(tmp3[19]).USER_SETTINGS).analyticsLocations;
  const memo = react.useMemo(() => {
    const obj = closure_0(params1[20]);
    return obj.getSettingScreens();
  }, []);
  const layoutEffect1 = react.useLayoutEffect(() => {
    const obj = closure_0(params1[21]);
    return obj.trackAppUIViewed();
  }, []);
  const effect2 = react.useEffect(() => {
    const obj = screen(params1[22]);
    return obj.validate();
  }, []);
  const tmp2Result10 = tmp2(tmp3[23]);
  const accessibilityNativeStackOptions = tmp2Result10.useAccessibilityNativeStackOptions();
  const tmp2Result11 = tmp2(tmp3[24]);
  const accessibilityNativeStackFocusTracking = tmp2Result11.useAccessibilityNativeStackFocusTracking();
  obj2 = { backgroundColor: tmp2Result12.useToken(screen(tmp3[9]).colors.MOBILE_ACTIONSHEET_BACKGROUND), borderTopWidth: 1, borderTopColor: tmp2Result13.useToken(screen(tmp3[9]).colors.BORDER_SUBTLE) };
  ({ beforeRemove, transitionStart } = accessibilityNativeStackFocusTracking);
  tmp2Result12 = tmp2(tmp3[25]);
  const items4 = [tmp.backIcon];
  tmp2Result13 = tmp2(tmp3[25]);
  let closure_7 = react.useCallback((navigation) => () => {
    let PressableOpacity;
    let intl;
    let obj3;
    let obj4;
    const obj = { collapsable: false, children: authStore(PressableOpacity, obj2) };
    obj2 = {
      onPress() {
        return navigation.goBack();
      },
      accessible: true,
      accessibilityRole: "button",
      accessibilityLabel: intl.string(intl2.t["13/7kX"]),
      hitSlop: BackIconWithBadge.BACK_ICON_WITH_BADGE_HIT_SLOP,
      children: authStore(View, obj3)
    };
    PressableOpacity = Pressables.PressableOpacity;
    intl = intl2.intl;
    obj3 = { style: navigation.backIcon, importantForAccessibility: "no-hide-descendants", accessibilityElementsHidden: true, children: authStore(BackIconWithBadge.SettingsLeftIconWithBadge, obj4) };
    obj4 = { navigation };
    return authStore(View, obj);
  }, items4);
  const memo1 = react.useMemo(() => {
    let obj = {
      transitionEnd(data) {
        let isActive = data.data.closing;
        const obj = state;
        state = state.getState();
        const query = state.query;
        if (isActive) {
          isActive = state.isActive;
        }
        if (isActive) {
          isActive = "" === query;
        }
        if (isActive) {
          obj.setState({ isActive: false });
        }
      }
    };
    return obj;
  }, []);
  const listeners = react.useMemo(() => ({
    transitionEnd(data) {
      const closing = data.data.closing && null != closure_1_7.getField("selected");
      if (closing) {
        closure_1_7.setState({ selected: null });
      }
    }
  }), []);
  const tmp2Result14 = tmp2(tmp3[29]);
  const autoSettingsSearchSessionAnalytics = tmp2Result14.useAutoSettingsSearchSessionAnalytics();
  let obj3 = { value: analyticsLocations, children: items5 };
  const AnalyticsLocationProvider = tmp2(tmp3[18]).AnalyticsLocationProvider;
  items5 = [closure_10(screen(tmp3[30]), {}), ];
  let obj4 = {
    style: tmp.statusBarSpacer,
    accessible: false,
    onAccessibilityEscape() {
      const obj = closure_4;
      if (closure_4.canGoBack()) {
        obj.goBack();
      }
    },
    children: closure_11(Navigator, obj5)
  };
  Navigator = Screen.Navigator;
  obj5 = { id: "settings-navigator", screenOptions: obj6, screenListeners: { beforeRemove, transitionStart }, initialRouteName: screen, children: items6 };
  obj6 = {
    fullScreenGestureEnabled: true,
    headerTitle(children) {
      const obj = { title: children.children };
      return closure_1_10(LeftAlignedHeaderTitle, obj);
    },
    headerTitleAlign: "center",
    unstable_headerInsets: { left: false, right: false }
  };
  let merged = Object.assign(accessibilityNativeStackOptions);
  items6 = [, ];
  const obj7 = {
    name: constants2.OVERVIEW,
    options(navigation) {
      let intl;
      const obj = { title: intl.string(intl2.t["3D5yo/"]), headerLeft: closure_7(navigation), headerBackVisible: false, headerShadowVisible: false, contentStyle: obj2 };
      navigation = navigation.navigation;
      intl = intl2.intl;
      return obj;
    },
    listeners: memo1,
    getComponent() {
      return closure_0(params1[31]).default;
    }
  };
  items6[0] = closure_10(Screen.Screen, obj7);
  items6[1] = memo.map((item) => {
    let tmp;
    let tmp2;
    let tmp4;
    [tmp, tmp2] = item;
    let obj = {
      name: tmp2.route,
      options(navigation) {
        let flag;
        let obj4;
        let usePersistentBadge;
        function headerTitle(children) {
          const obj = { title: children.children, usePersistentBadge: usePersistentBadge.usePersistentBadge };
          return closure_3_10(LeftAlignedHeaderTitle, obj);
        }
        let obj = { title: obj2.getSettingTitle(closure_1_0), headerLeft: closure_7(navigation), headerBackVisible: false, contentStyle: obj2, headerShadowVisible: flag };
        navigation = navigation.navigation;
        obj2 = SettingRendererUtils;
        const navigationOptions = component.navigationOptions;
        flag = undefined;
        const tmp = component;
        if (navigationOptions != null) {
          flag = navigationOptions.headerShadowVisible;
        }
        if (flag == null) {
          flag = true;
        }
        if (null != tmp.usePersistentBadge) {
          obj4 = { headerTitle };
          const obj3 = { headerTitle };
        } else {
          obj4 = {};
        }
        const merged = Object.assign(obj4);
        return obj;
      },
      getComponent() {
        component = component.getComponent();
        const tmp2 = _modDef38;
        const tmp3 = null != component;
        tmp2(tmp3, "[Settings Navigator] Invalid component for setting: " + closure_1_0);
        return component;
      },
      initialParams: tmp4,
      listeners
    };
    tmp4 = undefined;
    let tmp3 = closure_1_10;
    Screen = Screen.Screen;
    if (screen === tmp2.route) {
      tmp4 = params1;
    }
    return tmp3(Screen, obj, tmp);
  });
  items5[1] = closure_10(closure_5, obj4);
  return closure_11(AnalyticsLocationProvider, obj3);
});
let result = size.fileFinishedImporting("modules/user_settings/core/native/SettingsNavigator.tsx");

export default memoResult;
