// Module ID: 5517
// Function ID: 46996
// Name: NavigationStack
// Dependencies: [57, 31, 27, 33, 4130, 689, 5518, 5087, 3834, 5519, 1557, 477, 1212, 22, 5579, 1457, 4066, 5586, 1185, 2]
// Exports: Navigator, useAccessibilityNativeStackOptions, useNavigatorScreens

// Module 5517 (NavigationStack)
import _slicedToArray from "_slicedToArray";
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let StyleSheet;
let closure_5;
const require = arg1;
function NavigationStack(screens) {
  let closure_10;
  let detachInactiveScreens;
  let headerLeftContainerStyle;
  let initialRouteName;
  screens = screens.screens;
  const onWillFocus = screens.onWillFocus;
  const onDidFocus = screens.onDidFocus;
  const gestureResponseDistance = screens.gestureResponseDistance;
  const gestureDirection = screens.gestureDirection;
  const headerTitleAlign = screens.headerTitleAlign;
  const cardOverlayEnabled = screens.cardOverlayEnabled;
  const cardShadowEnabled = screens.cardShadowEnabled;
  const cardStyle = screens.cardStyle;
  const headerStyle = screens.headerStyle;
  ({ viewStyle: closure_10, headerLeftContainerStyle } = screens);
  const headerTitleContainerStyle = screens.headerTitleContainerStyle;
  const headerRightContainerStyle = screens.headerRightContainerStyle;
  const headerStatusBarHeight = screens.headerStatusBarHeight;
  const headerBackTitle = screens.headerBackTitle;
  const hideTitle = screens.hideTitle;
  const disableHeaderAnimation = screens.disableHeaderAnimation;
  ({ initialRouteName, detachInactiveScreens } = screens);
  const tmp = cardShadowEnabled();
  let closure_18 = tmp;
  let obj = screens(onDidFocus[7]);
  const styles = obj.useStyles();
  const token = screens(onDidFocus[8]).useToken(onWillFocus(onDidFocus[5]).colors.NAVIGATOR_HEADER_TINT);
  const obj2 = screens(onDidFocus[8]);
  const navigatorShouldCrossfade = screens(onDidFocus[6]).useNavigatorShouldCrossfade();
  const first = gestureResponseDistance(gestureDirection.useState(() => screens(onDidFocus[9]).createStackNavigator()), 1)[0];
  const top = onWillFocus(onDidFocus[10])().top;
  let items = [onWillFocus, onDidFocus];
  let closure_24 = gestureDirection.useCallback((arg0) => {
    let closure_0 = arg0;
    return {
      focus() {
        if (null != outer1_1) {
          outer1_1(closure_0);
        }
      },
      transitionEnd(data) {
        let closing = data.data.closing;
        if (!closing) {
          closing = null == outer1_2;
        }
        if (!closing) {
          outer1_2(closure_0);
        }
      }
    };
  }, items);
  let items1 = [navigatorShouldCrossfade, , , , , , , , , , , , , , , , , , , , , ];
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
    screenOptions: gestureDirection.useCallback((navigation) => {
      navigation = navigation.navigation;
      const state = navigation.getState();
      let routes;
      if (null != state) {
        routes = state.routes;
      }
      if (null == routes) {
        routes = [];
      }
      let obj = {};
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
      const items1 = [{ maxWidth: "60%", alignItems: "center" }, headerTitleContainerStyle];
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
        stringResult = intl.string(screens(onDidFocus[12]).t["13/7kX"]);
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
          obj = { opacity: progress.interpolate({ inputRange: [0, 1], outputRange: [0, 1] }) };
          progress = current.current.progress;
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
          const HeaderStyleInterpolators = screens(onDidFocus[9]).HeaderStyleInterpolators;
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
  const obj3 = screens(onDidFocus[6]);
  const keys = onWillFocus(onDidFocus[13]).keys(screens);
  obj.children = keys.map((name) => {
    let obj = {};
    let merged = Object.assign(obj[name]);
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
        obj = { screen: obj };
        const merged = Object.assign(arg0);
        obj["viewStyle"] = outer1_10;
        return cardOverlayEnabled(screens(onDidFocus[14]).NavigatorScreen, obj);
      }
    };
    return cardOverlayEnabled(first.Screen, obj, name);
  });
  return cardOverlayEnabled(first.Navigator, obj);
}
function WrappedNavigationStack(arg0) {
  let initialRouteName;
  let initialRouteState;
  let navigationTheme;
  let onStateChange;
  let require;
  ({ initialRouteStack: require, initialRouteState, navigationTheme } = arg0);
  let obj = { initialRouteName: 0, initialRouteStack: 0, initialRouteState: 0, onStateChange: 0, navigationTheme: 0 };
  ({ initialRouteName, onStateChange } = arg0);
  Object.setPrototypeOf(null);
  const merged = Object.assign(arg0, obj);
  const navigationContainerRef = require(1457) /* Link */.createNavigationContainerRef();
  const first = callback(React.useState(() => {
    let tmp;
    if (null != closure_0) {
      const obj = { routes: closure_0 };
      tmp = obj;
    }
    return tmp;
  }), 1)[0];
  const obj2 = require(1457) /* Link */;
  const tmp5 = navigationContainerRef(4066)();
  navigationTheme = require(5586) /* useNavigationTheme */.useNavigationTheme(tmp5);
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
    const routingInstrumentation = outer1_0(outer1_2[18]).routingInstrumentation;
    const result = routingInstrumentation.registerNavigationContainer(navigationContainerRef);
  };
  obj.onStateChange = onStateChange;
  obj.independent = true;
  obj = { initialRouteName };
  const merged1 = Object.assign(merged);
  obj.children = <NavigationStack initialRouteName={initialRouteName} />;
  return jsx(require(1457) /* Link */.NavigationContainer, { initialRouteName });
}
({ StyleSheet, View: closure_5 } = get_ActivityIndicator);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = {};
let merged = Object.assign(StyleSheet.absoluteFillObject);
_createForOfIteratorHelperLoose["backgroundColor"] = require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW;
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.navbar = { borderBottomWidth: StyleSheet.hairlineWidth, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW, borderBottomColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE, shadowColor: "transparent" };
_createForOfIteratorHelperLoose.headerLeftContainerStyle = { paddingLeft: 16, marginRight: -16 };
_createForOfIteratorHelperLoose.headerRightContainerStyle = { paddingRight: 16, marginLeft: -16 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const obj1 = { borderBottomWidth: StyleSheet.hairlineWidth, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW, borderBottomColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE, shadowColor: "transparent" };
let result = require("get ActivityIndicator").fileFinishedImporting("design/components/Navigator/native/Navigator.native.tsx");

export const useNavigatorScreens = function useNavigatorScreens(arg0, items) {
  return React.useMemo(arg0, items);
};
export const useAccessibilityNativeStackOptions = function useAccessibilityNativeStackOptions() {
  navigatorShouldCrossfade = navigatorShouldCrossfade(5518).useNavigatorShouldCrossfade();
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
  const items = [_createForOfIteratorHelperLoose().container, useContainer.containerStyle];
  obj.style = items;
  obj = {};
  const merged1 = Object.assign(merged);
  obj.children = jsx(flag ? WrappedNavigationStack : NavigationStack, {});
  return <closure_5 />;
};
