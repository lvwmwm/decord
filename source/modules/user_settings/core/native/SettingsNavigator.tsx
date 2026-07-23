// Module ID: 15587
// Function ID: 120157
// Name: LeftAlignedHeaderTitle
// Dependencies: [57, 31, 27, 1921, 13552, 653, 33, 9113, 4130, 689, 4126, 1457, 12382, 15588, 5793, 624, 5464, 5484, 13555, 6707, 10631, 14575, 5519, 13084, 3834, 4660, 1212, 15130, 15589, 13556, 5121, 15590, 44, 2]

// Module 15587 (LeftAlignedHeaderTitle)
import _slicedToArray from "_slicedToArray";
import importAllResult from "getOverviewSettings";
import { View } from "IconWithBadge";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import zustandStore from "zustandStore";
import ME from "ME";
import jsxProd from "set";
import createNativeStackNavigator from "createNativeStackNavigator";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_8;
let closure_9;
let require = arg1;
function LeftAlignedHeaderTitle(title) {
  const obj = { lineClamp: 1, variant: "redesign/heading-18/bold", color: "mobile-text-heading-primary", maxFontSizeMultiplier: 2, style: callback4().headerContainer, children: title.title };
  return callback2(require(4126) /* Text */.Heading, obj);
}
({ AnalyticsPages: closure_8, UserSettingsSections: closure_9 } = ME);
({ jsx: closure_10, jsxs: closure_11 } = jsxProd);
createNativeStackNavigator = createNativeStackNavigator.createNativeStackNavigator();
let obj = {};
obj = { flex: 1, backgroundColor: require("_createForOfIteratorHelperLoose").colors.MOBILE_ACTIONSHEET_BACKGROUND };
obj.statusBarSpacer = obj;
createNativeStackNavigator = { width: "100%", paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_8, marginTop: require("_createForOfIteratorHelperLoose").space.PX_8 };
obj.headerContainer = createNativeStackNavigator;
_createForOfIteratorHelperLoose = { borderRadius: require("_createForOfIteratorHelperLoose").radii.round, marginTop: require("_createForOfIteratorHelperLoose").space.PX_8 };
obj.backIcon = _createForOfIteratorHelperLoose;
let closure_13 = _createForOfIteratorHelperLoose.createStyles(obj);
const memoResult = importAllResult.memo(() => {
  let beforeRemove;
  let transitionStart;
  const tmp = callback4();
  const require = tmp;
  let obj = require(params[11]);
  const route = obj.useRoute();
  params = route.params;
  let screen;
  if (null != params) {
    screen = params.screen;
  }
  if (null == screen) {
    screen = constants.OVERVIEW;
  }
  const params2 = route.params;
  params = undefined;
  if (null != params2) {
    params = params2.params;
  }
  const params3 = route.params;
  let onClose;
  if (null != params3) {
    onClose = params3.onClose;
  }
  let tmp7;
  if (null != onClose) {
    tmp7 = onClose;
  }
  const callback = tmp7;
  let obj1 = require(params[11]);
  const importAllResult = obj1.useNavigation();
  let obj2 = require(params[12]);
  const commonTriggerPoint = obj2.useCommonTriggerPoint(require(params[13]).OpenUserSettingsTriggerPoint);
  const items = [screen];
  const effect = importAllResult.useEffect(() => {
    let obj = tmp(params[14]);
    obj = { destinationPane: screen, source: obj };
    obj = { page: constants.USER_SETTINGS };
    const result = obj.trackUserSettingsPaneViewed(obj);
  }, items);
  const items1 = [tmp7];
  const effect1 = importAllResult.useEffect(() => () => {
    if (null != outer1_3) {
      outer1_3();
    }
  }, items1);
  let obj3 = require(params[15]);
  const items2 = [obj];
  const stateFromStores = obj3.useStateFromStores(items2, () => obj.locale);
  let closure_5 = callback(importAllResult.useState(false), 2)[1];
  const items3 = [stateFromStores];
  const layoutEffect = importAllResult.useLayoutEffect(() => {
    callback((arg0) => !arg0);
  }, items3);
  const memo = importAllResult.useMemo(() => tmp(params[18]).getSettingScreens(), []);
  const layoutEffect1 = importAllResult.useLayoutEffect(() => tmp(params[19]).trackAppUIViewed(), []);
  let obj4 = require(params[20]);
  const globalStatusIndicatorState = obj4.useGlobalStatusIndicatorState();
  const effect2 = importAllResult.useEffect(() => screen(params[21]).validate(), []);
  const tmp13 = screen(params[16]);
  const accessibilityNativeStackOptions = require(params[22]).useAccessibilityNativeStackOptions();
  const obj6 = require(params[22]);
  const accessibilityNativeStackFocusTracking = require(params[23]).useAccessibilityNativeStackFocusTracking();
  obj = {};
  ({ beforeRemove, transitionStart } = accessibilityNativeStackFocusTracking);
  const obj7 = require(params[23]);
  obj.backgroundColor = require(params[24]).useToken(screen(params[9]).colors.MOBILE_ACTIONSHEET_BACKGROUND);
  obj.borderTopWidth = 1;
  const obj9 = require(params[24]);
  obj.borderTopColor = require(params[24]).useToken(screen(params[9]).colors.BORDER_SUBTLE);
  const items4 = [tmp.backIcon];
  let zustandStore = importAllResult.useCallback((arg0) => {
    let closure_0 = arg0;
    return () => {
      let obj = { collapsable: false };
      obj = {
        onPress() {
          return outer1_0.goBack();
        },
        accessible: true,
        accessibilityRole: "button"
      };
      const intl = lib(params[26]).intl;
      obj.accessibilityLabel = intl.string(lib(params[26]).t["13/7kX"]);
      obj.hitSlop = lib(params[27]).BACK_ICON_WITH_BADGE_HIT_SLOP;
      obj = { style: lib.backIcon, importantForAccessibility: "no-hide-descendants", accessibilityElementsHidden: true, children: outer2_10(lib(params[27]).SettingsLeftIconWithBadge, { navigation: lib }) };
      obj.children = outer2_10(closure_5, obj);
      obj.children = outer2_10(lib(params[25]).PressableOpacity, obj);
      return outer2_10(closure_5, obj);
    };
  }, items4);
  const memo1 = importAllResult.useMemo(() => ({
    transitionEnd(data) {
      let isActive = data.data.closing;
      const state = store.getState();
      if (isActive) {
        isActive = state.isActive;
      }
      if (isActive) {
        isActive = "" === state.query;
      }
      if (isActive) {
        const obj = { isActive: false };
        store.setState(obj);
      }
    }
  }), []);
  let closure_8 = importAllResult.useMemo(() => ({
    transitionEnd(data) {
      let closing = data.data.closing;
      if (closing) {
        closing = null != store.getField("selected");
      }
      if (closing) {
        const obj = { selected: null };
        store.setState(obj);
      }
    }
  }), []);
  const obj10 = require(params[24]);
  const autoSettingsSearchSessionAnalytics = require(params[28]).useAutoSettingsSearchSessionAnalytics();
  obj = { value: tmp13(screen(params[17]).USER_SETTINGS).analyticsLocations };
  const items5 = [callback2(screen(params[29]), {}), ];
  obj1 = {
    top: globalStatusIndicatorState.isVisible,
    style: tmp.statusBarSpacer,
    accessible: false,
    onAccessibilityEscape() {
      if (navigation.canGoBack()) {
        navigation.goBack();
      }
    }
  };
  obj2 = { id: "settings-navigator" };
  obj3 = {
    fullScreenGestureEnabled: true,
    headerTitle(children) {
      return outer1_10(outer1_14, { title: children.children });
    },
    headerTitleAlign: "center",
    UNSTABLE_headerInsets: { left: false, right: false }
  };
  const merged = Object.assign(accessibilityNativeStackOptions);
  obj2.screenOptions = obj3;
  obj2.screenListeners = { beforeRemove, transitionStart };
  obj2.initialRouteName = screen;
  obj4 = {
    name: constants.OVERVIEW,
    options(navigation) {
      const obj = {};
      const intl = tmp(params[26]).intl;
      obj.title = intl.string(tmp(params[26]).t["3D5yo/"]);
      obj.headerLeft = callback2(navigation.navigation);
      obj.headerBackVisible = false;
      obj.headerShadowVisible = false;
      obj.contentStyle = obj;
      return obj;
    },
    listeners: memo1,
    getComponent() {
      return tmp(params[31]).default;
    }
  };
  const items6 = [
    callback2(createNativeStackNavigator.Screen, obj4),
    memo.map((arg0) => {
      let tmp;
      let tmp2;
      [tmp, tmp2] = arg0;
      let obj = {
        name: tmp2.route,
        options(navigation) {
          const obj = {};
          let headerShadowVisible;
          obj.title = callback(params[18]).getSettingTitle(callback);
          obj.headerLeft = outer1_7(navigation.navigation);
          obj.headerBackVisible = false;
          obj.contentStyle = outer1_6;
          const navigationOptions = component.navigationOptions;
          if (null != navigationOptions) {
            headerShadowVisible = navigationOptions.headerShadowVisible;
          }
          obj.headerShadowVisible = null == headerShadowVisible || headerShadowVisible;
          return obj;
        },
        getComponent() {
          component = component.getComponent();
          screen(params[32])(null != component, "[Settings Navigator] Invalid component for setting: " + closure_0);
          return component;
        }
      };
      let tmp4;
      if (screen === tmp2.route) {
        tmp4 = params;
      }
      obj.initialParams = tmp4;
      obj.listeners = closure_8;
      return outer1_10(outer1_12.Screen, obj, tmp);
    })
  ];
  obj2.children = items6;
  obj1.children = callback3(createNativeStackNavigator.Navigator, obj2);
  items5[1] = callback2(require(params[30]).SafeAreaPaddingView, obj1);
  obj.children = items5;
  return callback3(require(params[16]).AnalyticsLocationProvider, obj);
});
let result = require("get ActivityIndicator").fileFinishedImporting("modules/user_settings/core/native/SettingsNavigator.tsx");

export default memoResult;
