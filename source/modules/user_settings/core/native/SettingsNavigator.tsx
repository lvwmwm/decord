// Module ID: 15462
// Function ID: 117940
// Name: LeftAlignedHeaderTitle
// Dependencies: []

// Module 15462 (LeftAlignedHeaderTitle)
function LeftAlignedHeaderTitle(title) {
  const obj = { "Null": "M7 1v1h2V1H7Z", "Null": "<string:1111556096>", "Null": "<string:1375732392>", "Null": "<string:2394816958>", style: callback4().headerContainer, children: title.title };
  return callback2(arg1(dependencyMap[10]).Heading, obj);
}
let closure_3 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
({ AnalyticsPages: closure_8, UserSettingsSections: closure_9 } = arg1(dependencyMap[5]));
const tmp2 = arg1(dependencyMap[5]);
({ jsx: closure_10, jsxs: closure_11 } = arg1(dependencyMap[6]));
let obj1 = arg1(dependencyMap[7]);
let closure_12 = obj1.createNativeStackNavigator();
let obj2 = arg1(dependencyMap[8]);
let obj = {};
obj = { flex: 1, backgroundColor: importDefault(dependencyMap[9]).colors.MOBILE_ACTIONSHEET_BACKGROUND };
obj.statusBarSpacer = obj;
obj1 = { width: "100%", paddingHorizontal: importDefault(dependencyMap[9]).space.PX_8, marginTop: importDefault(dependencyMap[9]).space.PX_8 };
obj.headerContainer = obj1;
obj2 = { borderRadius: importDefault(dependencyMap[9]).radii.round, marginTop: importDefault(dependencyMap[9]).space.PX_8 };
obj.backIcon = obj2;
let closure_13 = obj2.createStyles(obj);
const tmp3 = arg1(dependencyMap[6]);
const memoResult = importAllResult.memo(() => {
  let beforeRemove;
  let transitionStart;
  const tmp = callback4();
  const arg1 = tmp;
  let obj = arg1(dependencyMap[11]);
  const route = obj.useRoute();
  let params = route.params;
  let screen;
  if (null != params) {
    screen = params.screen;
  }
  if (null == screen) {
    screen = constants.OVERVIEW;
  }
  const importDefault = screen;
  const params2 = route.params;
  params = undefined;
  if (null != params2) {
    params = params2.params;
  }
  const dependencyMap = params;
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
  let obj1 = arg1(dependencyMap[11]);
  const React = obj1.useNavigation();
  let obj2 = arg1(dependencyMap[12]);
  const commonTriggerPoint = obj2.useCommonTriggerPoint(arg1(dependencyMap[13]).OpenUserSettingsTriggerPoint);
  const items = [screen];
  const effect = React.useEffect(() => {
    let obj = tmp(params[14]);
    obj = { destinationPane: screen, source: obj };
    obj = { page: constants.USER_SETTINGS };
    const result = obj.trackUserSettingsPaneViewed(obj);
  }, items);
  const items1 = [tmp7];
  const effect1 = React.useEffect(() => () => {
    if (null != callback) {
      callback();
    }
  }, items1);
  let obj3 = arg1(dependencyMap[15]);
  const items2 = [closure_6];
  const stateFromStores = obj3.useStateFromStores(items2, () => obj.locale);
  let closure_5 = callback(React.useState(false), 2)[1];
  const items3 = [stateFromStores];
  const layoutEffect = React.useLayoutEffect(() => {
    callback((arg0) => !arg0);
  }, items3);
  const memo = React.useMemo(() => tmp(params[18]).getSettingScreens(), []);
  const layoutEffect1 = React.useLayoutEffect(() => tmp(params[19]).trackAppUIViewed(), []);
  let obj4 = arg1(dependencyMap[20]);
  const globalStatusIndicatorState = obj4.useGlobalStatusIndicatorState();
  const effect2 = React.useEffect(() => screen(params[21]).validate(), []);
  const tmp13 = importDefault(dependencyMap[16]);
  const accessibilityNativeStackOptions = arg1(dependencyMap[22]).useAccessibilityNativeStackOptions();
  const obj6 = arg1(dependencyMap[22]);
  const accessibilityNativeStackFocusTracking = arg1(dependencyMap[23]).useAccessibilityNativeStackFocusTracking();
  obj = {};
  ({ beforeRemove, transitionStart } = accessibilityNativeStackFocusTracking);
  const obj7 = arg1(dependencyMap[23]);
  obj.backgroundColor = arg1(dependencyMap[24]).useToken(importDefault(dependencyMap[9]).colors.MOBILE_ACTIONSHEET_BACKGROUND);
  obj.borderTopWidth = 1;
  const obj9 = arg1(dependencyMap[24]);
  obj.borderTopColor = arg1(dependencyMap[24]).useToken(importDefault(dependencyMap[9]).colors.BORDER_SUBTLE);
  closure_6 = obj;
  const items4 = [tmp.backIcon];
  let closure_7 = React.useCallback((arg0) => () => {
    let obj = { collapsable: false };
    obj = {
      "Null": "isArray",
      "Null": "isArray",
      "Null": "next",
      onPress() {
        return navigation.goBack();
      }
    };
    const intl = arg0(closure_2[26]).intl;
    obj.accessibilityLabel = intl.string(arg0(closure_2[26]).t.13/7kX);
    obj.hitSlop = arg0(closure_2[27]).BACK_ICON_WITH_BADGE_HIT_SLOP;
    obj = { handleRewardClaimThenView: "1501ab02f5dc6a8a8a6cc03fcd7e4123", EXPIRING_SOON: "zh-TW.messages.1501ab02f5dc6a8a8a6cc03fcd7e4123.compiled.messages", overflow: "jsona", style: arg0.backIcon, children: callback(arg0(closure_2[27]).SettingsLeftIconWithBadge, { navigation: arg0 }) };
    obj.children = callback(closure_5, obj);
    obj.children = callback(arg0(closure_2[25]).PressableOpacity, obj);
    return callback(closure_5, obj);
  }, items4);
  const memo1 = React.useMemo(() => ({
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
  let closure_8 = React.useMemo(() => ({
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
  const obj10 = arg1(dependencyMap[24]);
  const autoSettingsSearchSessionAnalytics = arg1(dependencyMap[28]).useAutoSettingsSearchSessionAnalytics();
  obj = { value: tmp13(importDefault(dependencyMap[17]).USER_SETTINGS).analyticsLocations };
  const items5 = [callback2(importDefault(dependencyMap[29]), {}), ];
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
    cutoutTopRightInsetY: "<string:1959460867>",
    cutoutBottomRightSize: "<string:1959723011>",
    cutoutBottomRightInsetX: "<string:1959460867>",
    headerTitle(children) {
      return callback3(closure_14, { title: children.children });
    },
    UNSTABLE_headerInsets: { <string:1413519603>: null, <string:1189478959>: null }
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
      obj.title = intl.string(tmp(params[26]).t.3D5yo/);
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
    callback2(closure_12.Screen, obj4),
    memo.map((arg0) => {
      let tmp;
      let tmp2;
      [tmp, tmp2] = arg0;
      const obj = {
        name: tmp2.route,
        options(navigation) {
          const obj = {};
          let headerShadowVisible;
          obj.title = callback(closure_2[18]).getSettingTitle(callback);
          obj.headerLeft = callback2(navigation.navigation);
          obj.headerBackVisible = false;
          obj.contentStyle = closure_6;
          const navigationOptions = component.navigationOptions;
          if (null != navigationOptions) {
            headerShadowVisible = navigationOptions.headerShadowVisible;
          }
          obj.headerShadowVisible = null == headerShadowVisible || headerShadowVisible;
          return obj;
        },
        getComponent() {
          const component = component.getComponent();
          component(closure_2[32])(null != component, "[Settings Navigator] Invalid component for setting: " + closure_0);
          return component;
        }
      };
      let tmp4;
      if (screen === tmp2.route) {
        tmp4 = params;
      }
      obj.initialParams = tmp4;
      obj.listeners = closure_8;
      return closure_10(Screen.Screen, obj, tmp);
    })
  ];
  obj2.children = items6;
  obj1.children = callback3(closure_12.Navigator, obj2);
  items5[1] = callback2(arg1(dependencyMap[30]).SafeAreaPaddingView, obj1);
  obj.children = items5;
  return callback3(arg1(dependencyMap[16]).AnalyticsLocationProvider, obj);
});
const result = arg1(dependencyMap[33]).fileFinishedImporting("modules/user_settings/core/native/SettingsNavigator.tsx");

export default memoResult;
