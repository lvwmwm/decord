// Module ID: 5517
// Function ID: 46968
// Name: NavigationStack
// Dependencies: []
// Exports: Navigator, useAccessibilityNativeStackOptions, useNavigatorScreens

// Module 5517 (NavigationStack)
let StyleSheet;
function NavigationStack(screens) {
  let detachInactiveScreens;
  let headerLeftContainerStyle;
  let initialRouteName;
  screens = screens.screens;
  const arg1 = screens;
  const onWillFocus = screens.onWillFocus;
  const importDefault = onWillFocus;
  const onDidFocus = screens.onDidFocus;
  const dependencyMap = onDidFocus;
  const gestureResponseDistance = screens.gestureResponseDistance;
  const callback = gestureResponseDistance;
  const gestureDirection = screens.gestureDirection;
  const React = gestureDirection;
  const headerTitleAlign = screens.headerTitleAlign;
  const cardOverlayEnabled = screens.cardOverlayEnabled;
  const jsx = cardOverlayEnabled;
  const cardShadowEnabled = screens.cardShadowEnabled;
  const callback2 = cardShadowEnabled;
  const cardStyle = screens.cardStyle;
  const NavigationStack = cardStyle;
  const headerStyle = screens.headerStyle;
  const WrappedNavigationStack = headerStyle;
  ({ viewStyle: closure_10, headerLeftContainerStyle } = screens);
  const headerTitleContainerStyle = screens.headerTitleContainerStyle;
  const headerRightContainerStyle = screens.headerRightContainerStyle;
  const headerStatusBarHeight = screens.headerStatusBarHeight;
  const headerBackTitle = screens.headerBackTitle;
  const hideTitle = screens.hideTitle;
  const disableHeaderAnimation = screens.disableHeaderAnimation;
  ({ initialRouteName, detachInactiveScreens } = screens);
  const tmp = callback2();
  let obj = arg1(dependencyMap[7]);
  const styles = obj.useStyles();
  const token = arg1(dependencyMap[8]).useToken(importDefault(dependencyMap[5]).colors.NAVIGATOR_HEADER_TINT);
  const obj2 = arg1(dependencyMap[8]);
  const navigatorShouldCrossfade = arg1(dependencyMap[6]).useNavigatorShouldCrossfade();
  const first = callback(React.useState(() => screens(onDidFocus[9]).createStackNavigator()), 1)[0];
  const top = importDefault(dependencyMap[10])().top;
  const items = [onWillFocus, onDidFocus];
  let closure_24 = React.useCallback((arg0) => {
    const screens = arg0;
    return {
      focus() {
        if (null != callback) {
          callback(arg0);
        }
      },
      transitionEnd(data) {
        let closing = data.data.closing;
        if (!closing) {
          closing = null == callback2;
        }
        if (!closing) {
          callback2(data);
        }
      }
    };
  }, items);
  const items1 = [navigatorShouldCrossfade, , , , , , , , , , , , , , , , , , , , , ];
  ({ navbar: arr2[1], headerLeftContainerStyle: arr2[2], headerRightContainerStyle: arr2[3] } = tmp);
  items1[4] = headerStyle;
  items1[5] = token;
  ({ headerTitle: arr2[6], headerBackTitleStyle: arr2[7] } = styles);
  items1[8] = headerTitleContainerStyle;
  items1[9] = headerLeftContainerStyle;
  items1[10] = headerRightContainerStyle;
  items1[11] = hideTitle;
  items1[12] = gestureDirection;
  items1[13] = gestureResponseDistance;
  items1[14] = cardOverlayEnabled;
  items1[15] = cardShadowEnabled;
  items1[16] = cardStyle;
  items1[17] = headerBackTitle;
  items1[18] = headerTitleAlign;
  items1[19] = headerStatusBarHeight;
  items1[20] = top;
  items1[21] = disableHeaderAnimation;
  obj = {
    detachInactiveScreens,
    initialRouteName,
    screenOptions: React.useCallback((navigation) => {
      navigation = navigation.navigation;
      const state = navigation.getState();
      let routes;
      if (null != state) {
        routes = state.routes;
      }
      if (null == routes) {
        routes = [];
      }
      const obj = {};
      let str;
      if (navigatorShouldCrossfade) {
        str = "screen";
      }
      obj.headerMode = str;
      const items = [tmp.navbar, headerStyle];
      obj.headerStyle = items;
      obj.headerTintColor = token;
      ({ headerTitle: obj.headerTitleStyle, headerBackTitleStyle: obj.headerBackTitleStyle } = styles);
      obj.headerTitleAllowFontScaling = false;
      let renderBackImage;
      if (!obj2.isAndroid()) {
        renderBackImage = screens(onDidFocus[7]).renderBackImage;
      }
      obj.headerBackImage = renderBackImage;
      obj.headerBackTitleVisible = false;
      let str2 = "center";
      const items1 = [{}, headerTitleContainerStyle];
      obj.headerTitleContainerStyle = items1;
      const items2 = [tmp.headerLeftContainerStyle, headerLeftContainerStyle];
      obj.headerLeftContainerStyle = items2;
      const items3 = [tmp.headerRightContainerStyle, headerRightContainerStyle];
      obj.headerRightContainerStyle = items3;
      let fn;
      if (hideTitle) {
        fn = () => {

        };
      }
      obj.headerTitle = fn;
      obj.gestureDirection = gestureDirection;
      obj.gestureResponseDistance = gestureResponseDistance;
      obj.cardOverlayEnabled = cardOverlayEnabled;
      obj.cardShadowEnabled = cardShadowEnabled;
      obj.cardStyle = cardStyle;
      if (null != headerBackTitle) {
        let stringResult = headerBackTitle;
      } else if (1 === routes.length) {
        const intl = screens(onDidFocus[12]).intl;
        stringResult = intl.string(screens(onDidFocus[12]).t.13/7kX);
      }
      obj.headerBackTitle = stringResult;
      if (null != headerTitleAlign) {
        str2 = headerTitleAlign;
      }
      obj.headerTitleAlign = str2;
      obj.headerStatusBarHeight = null != headerStatusBarHeight ? headerStatusBarHeight : top;
      if (navigatorShouldCrossfade) {
        let fn2 = (current) => {
          let obj = {};
          obj = { opacity: progress.interpolate({ inputRange: ["replace", "then"], outputRange: ["replace", "then"] }) };
          const progress = current.current.progress;
          obj.cardStyle = obj;
          return obj;
        };
      } else {
        fn2 = screens(onDidFocus[9]).CardStyleInterpolators.forHorizontalIOS;
      }
      obj.cardStyleInterpolator = fn2;
      if (disableHeaderAnimation) {
        let fn3 = screens(onDidFocus[9]).HeaderStyleInterpolators.forNoAnimation;
      } else if (navigatorShouldCrossfade) {
        fn3 = screens(onDidFocus[9]).HeaderStyleInterpolators.forFade;
      } else {
        fn3 = (arg0) => {
          let current;
          let layouts;
          let next;
          ({ current, next, layouts } = arg0);
          const HeaderStyleInterpolators = callback(closure_2[9]).HeaderStyleInterpolators;
          const forUIKitResult = HeaderStyleInterpolators.forUIKit({ current, next, layouts });
          forUIKitResult.leftButtonStyle.transform = forUIKitResult.titleStyle.transform;
          forUIKitResult.rightButtonStyle.transform = forUIKitResult.titleStyle.transform;
          return forUIKitResult;
        };
      }
      obj.headerStyleInterpolator = fn3;
      return obj;
    }, items1)
  };
  const obj3 = arg1(dependencyMap[6]);
  const keys = importDefault(dependencyMap[13]).keys(screens);
  obj.children = keys.map((name) => {
    let obj = {};
    const merged = Object.assign(screens[name]);
    const screens = obj;
    let fullscreen = obj.fullscreen;
    if (!fullscreen) {
      fullscreen = null != obj.customNavbar;
    }
    if (hideTitle) {
      obj.headerTitle = () => {

      };
    }
    if (fullscreen) {
      obj.headerTransparent = true;
      obj.headerMode = "float";
    }
    obj = {
      name,
      initialParams: obj.initialParams,
      listeners: closure_24,
      options: obj,
      children(arg0) {
        const obj = { screen: obj };
        const merged = Object.assign(arg0);
        obj["viewStyle"] = closure_10;
        return callback(obj(closure_2[14]).NavigatorScreen, obj);
      }
    };
    return cardOverlayEnabled(first.Screen, obj, name);
  });
  return <first.Navigator {...obj} />;
}
function WrappedNavigationStack(arg0) {
  let initialRouteName;
  let initialRouteState;
  let navigationTheme;
  let onStateChange;
  ({ initialRouteStack: closure_0, initialRouteState, navigationTheme } = arg0);
  let obj = {};
  ({ initialRouteName, onStateChange } = arg0);
  Object.setPrototypeOf(null);
  const merged = Object.assign(arg0, obj);
  const navigationContainerRef = arg1(dependencyMap[15]).createNavigationContainerRef();
  const importDefault = navigationContainerRef;
  const first = callback(React.useState(() => {
    let tmp;
    if (null != closure_0) {
      const obj = { routes: closure_0 };
      tmp = obj;
    }
    return tmp;
  }), 1)[0];
  const obj2 = arg1(dependencyMap[15]);
  const tmp5 = importDefault(dependencyMap[16])();
  navigationTheme = arg1(dependencyMap[17]).useNavigationTheme(tmp5);
  obj = { ref: navigationContainerRef, theme: navigationTheme };
  if (null == initialRouteState) {
    let tmp8;
    if (null != first) {
      tmp8 = first;
    }
    initialRouteState = tmp8;
  }
  obj.initialState = initialRouteState;
  obj.onReady = function onReady() {
    const routingInstrumentation = callback(closure_2[18]).routingInstrumentation;
    const result = routingInstrumentation.registerNavigationContainer(navigationContainerRef);
  };
  obj.onStateChange = onStateChange;
  obj.independent = true;
  obj = { initialRouteName };
  const merged1 = Object.assign(merged);
  obj.children = <NavigationStack {...obj} />;
  return jsx(arg1(dependencyMap[15]).NavigationContainer, obj);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
({ StyleSheet, View: closure_5 } = arg1(dependencyMap[2]));
const jsx = arg1(dependencyMap[3]).jsx;
let obj = arg1(dependencyMap[4]);
obj = {};
obj = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj["backgroundColor"] = importDefault(dependencyMap[5]).colors.BACKGROUND_BASE_LOW;
obj.container = obj;
const tmp2 = arg1(dependencyMap[2]);
obj.navbar = { borderBottomWidth: StyleSheet.hairlineWidth, backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_BASE_LOW, borderBottomColor: importDefault(dependencyMap[5]).colors.BORDER_SUBTLE, shadowColor: "transparent" };
obj.headerLeftContainerStyle = {};
obj.headerRightContainerStyle = {};
let closure_7 = obj.createStyles(obj);
const obj1 = { borderBottomWidth: StyleSheet.hairlineWidth, backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_BASE_LOW, borderBottomColor: importDefault(dependencyMap[5]).colors.BORDER_SUBTLE, shadowColor: "transparent" };
const result = arg1(dependencyMap[19]).fileFinishedImporting("design/components/Navigator/native/Navigator.native.tsx");

export const useNavigatorScreens = function useNavigatorScreens(arg0, items) {
  return React.useMemo(arg0, items);
};
export const useAccessibilityNativeStackOptions = function useAccessibilityNativeStackOptions() {
  const navigatorShouldCrossfade = arg1(dependencyMap[6]).useNavigatorShouldCrossfade();
  const arg1 = navigatorShouldCrossfade;
  const items = [navigatorShouldCrossfade];
  return React.useMemo(() => {
    let tmp;
    if (navigatorShouldCrossfade) {
      const obj = { animation: "fade" };
      tmp = obj;
    }
    return tmp;
  }, items);
};
export const Navigator = function Navigator(useContainer) {
  let flag = useContainer.useContainer;
  if (flag === undefined) {
    flag = true;
  }
  let obj = Object.create(null);
  obj.useContainer = 0;
  obj.containerStyle = 0;
  const merged = Object.assign(useContainer, obj);
  obj = {};
  const items = [callback2().container, useContainer.containerStyle];
  obj.style = items;
  obj = {};
  const merged1 = Object.assign(merged);
  obj.children = jsx(flag ? WrappedNavigationStack : NavigationStack, obj);
  return <closure_5 {...obj} />;
};
