// Module ID: 18985
// Function ID: 18986
// Name: SettingsNavigator
// Dependencies: [19, 17, 2062, 16577, 1072, 21, 9856, 5014, 575, 18986, 1187, 5624, 1498, 15342, 18987, 7165, 563, 7326, 7351, 16579, 7654, 16580, 7169, 15866, 5596, 6980, 1113, 18465, 18988, 16424, 18989, 38, 2]

// Module 18985 (SettingsNavigator)
import react_native from "react-native" /* 17 */;
import _modDef38 from "module_38" /* 38 */;
import nativeDefault from "native" /* 575 */;
import intl2 from "intl" /* 1113 */;
import native from "native" /* 1187 */;
import Text_Text from "Text/Text" /* 5624 */;
import Pressables from "Pressables" /* 6980 */;
import UserSettingsUtils from "UserSettingsUtils" /* 7165 */;
import SettingRendererUtils from "SettingRendererUtils" /* 16579 */;
import BackIconWithBadge from "BackIconWithBadge" /* 18465 */;
import SettingRendererTypes from "SettingRendererTypes" /* 18986 */;
import react from "react" /* 19 */;
import LocaleStore from "LocaleStore" /* 2062 */;
import UserSettingSearchStore from "UserSettingSearchStore" /* 16577 */;
import Constants from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import NativeStackView from "NativeStackView" /* 9856 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, component, state;

let c10;
let c9;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
let obj5;
function SettingHeaderBadge(badge) {
  if (badge.badge.badgeType === SettingRendererTypes.SettingsBadgeType.BETA) {
    const obj = { size: native.BetaSizes.SMALL };
    const BetaTag = tmp(1187).BetaTag;
    return React4(BetaTag, obj);
  }
}
function LeftAlignedHeaderTitle(usePersistentBadge) {
  let items;
  usePersistentBadge = usePersistentBadge.usePersistentBadge;
  const title = usePersistentBadge.title;
  const tmp = closure_12();
  let persistentBadge;
  if (usePersistentBadge != null) {
    persistentBadge = usePersistentBadge();
  }
  const tmp3 = null != persistentBadge ? tmp.headerTitleWithBadge : tmp.headerContainer;
  const tmp5 = React4(Text_Text.Heading, { lineClamp: 1, variant: "redesign/heading-18/bold", color: "mobile-text-heading-primary", maxFontSizeMultiplier: 2, style: tmp3, children: title });
  let tmp6 = tmp5;
  const tmp4 = React4;
  if (null != persistentBadge) {
    const obj = { style: tmp.headerContainerRow, children: items };
    items = [tmp5, ];
    const obj2 = { badge: persistentBadge };
    items[1] = tmp4(SettingHeaderBadge, obj2);
    tmp6 = authStore(View, obj);
  }
  return tmp6;
}
const View = react_native.View;
({ AnalyticsPages: metroImportDefault, UserSettingsSections: metroImportAll } = Constants);
({ jsx: c9, jsxs: c10 } = Fragment);
let closure_11 = NativeStackView.createNativeStackNavigator();
let createStyles = createStyles_mod;
let obj = { statusBarSpacer: obj2, headerContainer: obj3, headerContainerRow: obj4, headerTitleWithBadge: { flexShrink: 1 }, backIcon: obj5 };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
createStyles = createStyles.createStyles;
obj3 = { width: "100%", paddingHorizontal: nativeDefault.space.PX_8, marginTop: nativeDefault.space.PX_8 };
obj4 = { flexDirection: "row", alignItems: "center", paddingHorizontal: nativeDefault.space.PX_8, marginTop: nativeDefault.space.PX_8, width: "100%" };
obj5 = { borderRadius: nativeDefault.radii.round, marginTop: nativeDefault.space.PX_8 };
let closure_12 = createStyles(obj);
const memoResult = react.memo(function SettingsNavigator() {
  let Navigator;
  let Screen;
  let beforeRemove;
  let closure_0;
  let items4;
  let items5;
  let obj2;
  let obj5;
  let obj6;
  let params1;
  let tmp2Result12;
  let tmp2Result13;
  let transitionStart;
  let tmp = closure_12();
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
  const tmp2Result = tmp2(tmp3[12]);
  let closure_4 = tmp2Result.useNavigation();
  const tmp2Result8 = tmp2(tmp3[13]);
  const commonTriggerPoint = tmp2Result8.useCommonTriggerPoint(tmp2(tmp3[14]).OpenUserSettingsTriggerPoint);
  const items = [screen];
  const effect = onClose.useEffect(() => {
    let obj3;
    obj2 = { destinationPane: screen, source: obj3 };
    obj3 = { page: metroImportDefault.USER_SETTINGS };
    const obj = UserSettingsUtils;
    const result = obj.trackUserSettingsPaneViewed(obj2);
  }, items);
  const items1 = [onClose];
  const effect1 = onClose.useEffect(() => () => {
    if (onClose != null) {
      tmp();
    }
  }, items1);
  const items2 = [obj2];
  const tmp2Result9 = tmp2(tmp3[16]);
  const stateFromStores = tmp2Result9.useStateFromStores(items2, () => obj2.locale);
  const tmp13 = screen(tmp3[17]);
  const analyticsLocations = tmp13(screen(tmp3[18]).USER_SETTINGS).analyticsLocations;
  const memo = onClose.useMemo(() => {
    const obj = closure_0(params1[19]);
    return obj.getSettingScreens();
  }, []);
  const layoutEffect = onClose.useLayoutEffect(() => {
    const obj = closure_0(params1[20]);
    return obj.trackAppUIViewed();
  }, []);
  const effect2 = onClose.useEffect(() => {
    const obj = screen(params1[21]);
    return obj.validate();
  }, []);
  const tmp2Result10 = tmp2(tmp3[22]);
  const accessibilityNativeStackOptions = tmp2Result10.useAccessibilityNativeStackOptions();
  const tmp2Result11 = tmp2(tmp3[23]);
  const accessibilityNativeStackFocusTracking = tmp2Result11.useAccessibilityNativeStackFocusTracking();
  obj2 = { backgroundColor: tmp2Result12.useToken(screen(tmp3[8]).colors.MOBILE_ACTIONSHEET_BACKGROUND), borderTopWidth: 1, borderTopColor: tmp2Result13.useToken(screen(tmp3[8]).colors.BORDER_SUBTLE) };
  ({ beforeRemove, transitionStart } = accessibilityNativeStackFocusTracking);
  tmp2Result12 = tmp2(tmp3[24]);
  const items3 = [tmp.backIcon];
  tmp2Result13 = tmp2(tmp3[24]);
  let closure_6 = onClose.useCallback((navigation) => () => {
    let PressableOpacity;
    let intl;
    let obj3;
    let obj4;
    const obj = { collapsable: false, children: React4(PressableOpacity, obj2) };
    obj2 = {
      onPress() {
        return navigation.goBack();
      },
      accessible: true,
      accessibilityRole: "button",
      accessibilityLabel: intl.string(intl2.t["13/7kX"]),
      hitSlop: BackIconWithBadge.BACK_ICON_WITH_BADGE_HIT_SLOP,
      children: React4(View, obj3)
    };
    PressableOpacity = Pressables.PressableOpacity;
    intl = intl2.intl;
    obj3 = { style: navigation.backIcon, importantForAccessibility: "no-hide-descendants", accessibilityElementsHidden: true, children: React4(BackIconWithBadge.SettingsLeftIconWithBadge, obj4) };
    obj4 = { navigation };
    return React4(View, obj);
  }, items3);
  const memo1 = onClose.useMemo(() => {
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
  const listeners = onClose.useMemo(() => ({
    transitionEnd(data) {
      const closing = data.data.closing && null != closure_1_6.getField("selected");
      if (closing) {
        closure_1_6.setState({ selected: null });
      }
    }
  }), []);
  const tmp2Result14 = tmp2(tmp3[28]);
  const autoSettingsSearchSessionAnalytics = tmp2Result14.useAutoSettingsSearchSessionAnalytics();
  let obj3 = { value: analyticsLocations, children: items4 };
  const AnalyticsLocationProvider = tmp2(tmp3[17]).AnalyticsLocationProvider;
  items4 = [closure_9(screen(tmp3[29]), {}), ];
  let obj4 = {
    style: tmp.statusBarSpacer,
    accessible: false,
    onAccessibilityEscape: function handleAccessibilityEscape() {
      const obj = closure_4;
      if (closure_4.canGoBack()) {
        obj.goBack();
      }
    },
    children: closure_10(Navigator, obj5)
  };
  Navigator = Screen.Navigator;
  obj5 = { id: "settings-navigator", screenOptions: obj6, screenListeners: { beforeRemove, transitionStart }, initialRouteName: screen, children: items5 };
  obj6 = {
    fullScreenGestureEnabled: true,
    headerTitle(children) {
      const obj = { title: children.children };
      return closure_1_9(LeftAlignedHeaderTitle, obj);
    },
    headerTitleAlign: "center",
    unstable_headerInsets: { left: false, right: false }
  };
  let merged = Object.assign(accessibilityNativeStackOptions);
  items5 = [, ];
  const obj7 = {
    name: constants2.OVERVIEW,
    options(navigation) {
      let intl;
      const obj = { title: intl.string(intl2.t["3D5yo/"]), headerLeft: closure_6(navigation), headerBackVisible: false, headerShadowVisible: false, contentStyle: obj2 };
      navigation = navigation.navigation;
      intl = intl2.intl;
      return obj;
    },
    listeners: memo1,
    getComponent() {
      return closure_0(params1[30]).default;
    }
  };
  items5[0] = closure_9(Screen.Screen, obj7);
  items5[1] = memo.map((item) => {
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
          return closure_3_9(LeftAlignedHeaderTitle, obj);
        }
        let obj = { title: obj2.getSettingTitle(closure_1_0), headerLeft: closure_6(navigation), headerBackVisible: false, contentStyle: obj2, headerShadowVisible: flag };
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
    let tmp3 = closure_1_9;
    Screen = Screen.Screen;
    if (screen === tmp2.route) {
      tmp4 = params1;
    }
    return tmp3(Screen, obj, tmp);
  });
  items4[1] = closure_9(closure_4, obj4);
  return closure_10(AnalyticsLocationProvider, obj3);
});
let result = size.fileFinishedImporting("modules/user_settings/core/native/SettingsNavigator.tsx");

export default memoResult;
