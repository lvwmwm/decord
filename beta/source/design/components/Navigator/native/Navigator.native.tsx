// Module ID: 6421
// Function ID: 6422
// Name: Navigator
// Dependencies: [32, 19, 17, 21, 4836, 576, 6422, 5936, 4531, 6423, 1613, 1115, 12, 6456, 1486, 4767, 6462, 5943, 1232, 2]
// Exports: Navigator, useAccessibilityNativeStackOptions, useNavigatorScreens

// Module 6421 (Navigator)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import SentryInitUtils from "SentryInitUtils" /* 1232 */;
import Link from "Link" /* 1486 */;
import NavigatorHeader from "NavigatorHeader" /* 5936 */;
import _mod5943 from "module_5943" /* 5943 */;
import useNavigatorShouldCrossfade from "useNavigatorShouldCrossfade" /* 6422 */;
import NavigatorScreen2 from "NavigatorScreen" /* 6456 */;
import useNavigationTheme from "useNavigationTheme" /* 6462 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let navigation;

let StyleSheet;
let hasOwnProperty;
let obj2;
let obj3;
function NavigationStack(screens) {
  let closure_10;
  let detachInactiveScreens;
  let headerLeftContainerStyle;
  let initialRouteName;
  let keys;
  let viewStyle;
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
  let obj2 = screens(onDidFocus[8]);
  const token = obj2.useToken(onWillFocus(onDidFocus[5]).colors.NAVIGATOR_HEADER_TINT);
  const obj3 = screens(onDidFocus[6]);
  const navigatorShouldCrossfade = obj3.useNavigatorShouldCrossfade();
  const first = gestureResponseDistance(gestureDirection.useState(() => {
    const obj = screens(onDidFocus[9]);
    return obj.createStackNavigator();
  }), 1)[0];
  const top = onWillFocus(onDidFocus[10])().top;
  let items = [onWillFocus, onDidFocus];
  const listeners = gestureDirection.useCallback((arg0) => {
    let closure_0 = arg0;
    return {
      focus() {
        if (onWillFocus != null) {
          tmp(closure_0);
        }
      },
      transitionEnd(data) {
        if (!data.data.closing) {
          if (onDidFocus != null) {
            tmp(closure_0);
          }
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
  const Navigator = first.Navigator;
  const obj4 = {
    detachInactiveScreens,
    initialRouteName,
    screenOptions: gestureDirection.useCallback((navigation) => {
      let fn;
      let fn2;
      let fn3;
      let items;
      let items1;
      let items2;
      let items3;
      let str2;
      let tmp5;
      let tmp7;
      navigation = navigation.navigation;
      const state = navigation.getState();
      let routes;
      if (state != null) {
        routes = state.routes;
      }
      if (routes == null) {
        routes = [];
      }
      let str;
      if (navigatorShouldCrossfade) {
        str = "screen";
      }
      let obj = { headerMode: str, headerStyle: items, headerTintColor: token, headerTitleStyle: styles.headerTitle, headerBackTitleStyle: styles.headerBackTitleStyle, headerTitleAllowFontScaling: false, headerBackImage: NavigatorHeader.renderBackImage, headerBackButtonDisplayMode: "minimal", headerTitleContainerStyle: items1, headerLeftContainerStyle: items2, headerRightContainerStyle: items3, headerTitle: fn, gestureDirection, gestureResponseDistance, cardOverlayEnabled, cardShadowEnabled, cardStyle, headerBackTitle: tmp5, headerTitleAlign: str2, headerStatusBarHeight: tmp7, cardStyleInterpolator: fn2, headerStyleInterpolator: fn3 };
      items = [closure_18.navbar, headerStyle];
      items1 = [{ maxWidth: "60%", alignItems: "center" }, headerTitleContainerStyle];
      items2 = [closure_18.headerLeftContainerStyle, headerLeftContainerStyle];
      items3 = [closure_18.headerRightContainerStyle, headerRightContainerStyle];
      fn = undefined;
      if (hideTitle) {
        fn = () => {

        };
      }
      tmp5 = headerBackTitle;
      if (headerBackTitle == null) {
        let stringResult;
        if (1 === routes.length) {
          const intl = tmp3(1115).intl;
          stringResult = intl.string(tmp3(1115).t["13/7kX"]);
        }
        tmp5 = stringResult;
      }
      str2 = headerTitleAlign;
      if (headerTitleAlign == null) {
        str2 = "center";
      }
      tmp7 = headerStatusBarHeight;
      if (null == headerStatusBarHeight) {
        tmp7 = top;
      }
      if (navigatorShouldCrossfade) {
        fn2 = (current) => {
          let obj2;
          let progress;
          const obj = { cardStyle: obj2 };
          obj2 = { opacity: progress.interpolate({ inputRange: [0, 1], outputRange: [0, 1] }) };
          progress = current.current.progress;
          return obj;
        };
      } else {
        fn2 = tmp3(6423).CardStyleInterpolators.forHorizontalIOS;
      }
      const tmp8 = disableHeaderAnimation;
      if (tmp8) {
        fn3 = tmp3(6423).HeaderStyleInterpolators.forNoAnimation;
      } else if (navigatorShouldCrossfade) {
        fn3 = tmp3(6423).HeaderStyleInterpolators.forFade;
      } else {
        fn3 = (arg0) => {
          let current;
          let direction;
          let layouts;
          let next;
          ({ current, next, layouts, direction } = arg0);
          const HeaderStyleInterpolators = screens(onDidFocus[9]).HeaderStyleInterpolators;
          const forUIKitResult = HeaderStyleInterpolators.forUIKit({ current, next, layouts, direction });
          forUIKitResult.leftButtonStyle.transform = forUIKitResult.titleStyle.transform;
          forUIKitResult.rightButtonStyle.transform = forUIKitResult.titleStyle.transform;
          return forUIKitResult;
        };
      }
      return obj;
    }, items1),
    children: keys.map((name) => {
      let obj;
      const options = {};
      let merged = Object.assign(options[name]);
      const fullscreen = options.fullscreen || null != options.customNavbar;
      const tmp3 = hideTitle;
      if (tmp3) {
        options.headerTitle = () => {

        };
      }
      if (fullscreen) {
        options.headerTransparent = true;
        options.headerMode = "float";
        const items = [options.headerStyle, { backgroundColor: "transparent" }];
        options.headerStyle = items;
      }
      const obj2 = {
        name,
        initialParams: options.initialParams,
        listeners,
        options,
        children(arg0) {
          let screen;
          screen = { screen, viewStyle };
          const NavigatorScreen = NavigatorScreen2.NavigatorScreen;
          const merged = Object.assign(arg0);
          return <NavigatorScreen screen={screen} viewStyle={closure_10} />;
        }
      };
      return cardOverlayEnabled(first.Screen, obj2, name);
    })
  };
  const obj5 = onWillFocus(onDidFocus[12]);
  keys = obj5.keys(screens);
  return cardOverlayEnabled(Navigator, obj4);
}
function WrappedNavigationStack(arg0) {
  let initialRouteName;
  let initialRouteState;
  let navigationTheme;
  let onStateChange;
  ({ initialRouteStack: require, initialRouteState, navigationTheme } = arg0);
  ({ initialRouteName, onStateChange } = arg0);
  const merged = Object.assign(arg0, Object.assign({ initialRouteName: 0, initialRouteStack: 0, initialRouteState: 0, onStateChange: 0, navigationTheme: 0 }));
  let obj = Link;
  const navigationContainerRef = obj.createNavigationContainerRef();
  const first = _slicedToArray(react.useState(() => {
    let tmp2;
    if (null != require) {
      tmp2 = { routes: tmp };
      const obj = { routes: tmp };
    }
    return tmp2;
  }), 1)[0];
  const tmp4 = navigationContainerRef(4767)();
  const obj2 = useNavigationTheme;
  let navigationTheme1 = obj2.useNavigationTheme(tmp4);
  const NavigationIndependentTree = Link.NavigationIndependentTree;
  const Provider = _mod5943.HeaderBackContext.Provider;
  const NavigationContainer = Link.NavigationContainer;
  if (null != navigationTheme) {
    navigationTheme1 = navigationTheme;
  }
  if (null == initialRouteState) {
    let tmp7;
    if (null != first) {
      tmp7 = first;
    }
    initialRouteState = tmp7;
  }
  const merged1 = Object.assign(merged);
  return <NavigationIndependentTree>{null}</NavigationIndependentTree>;
}
({ StyleSheet, View: hasOwnProperty } = react_native);
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { container: obj2, navbar: obj3, headerLeftContainerStyle: { paddingLeft: 16, marginRight: -16 }, headerRightContainerStyle: { paddingRight: 16, marginLeft: -16 } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles = createStyles.createStyles;
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj3 = { borderBottomWidth: StyleSheet.hairlineWidth, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderBottomColor: nativeDefault.colors.BORDER_SUBTLE, shadowColor: "transparent" };
let closure_7 = createStyles(obj);
let result = size.fileFinishedImporting("design/components/Navigator/native/Navigator.native.tsx");
const Navigator_export = function Navigator(useContainer) {
  let flag = useContainer.useContainer;
  if (flag === undefined) {
    flag = true;
  }
  const containerStyle = useContainer.containerStyle;
  const merged = Object.assign(useContainer, Object.assign({ useContainer: 0, containerStyle: 0 }));
  const items = [closure_7().container, containerStyle];
  const merged1 = Object.assign(merged);
  return <hasOwnProperty style={items}>{null}</hasOwnProperty>;
};

export const useNavigatorScreens = function useNavigatorScreens(getNextRenewalDateLabel, items) {
  return react.useMemo(getNextRenewalDateLabel, items);
};
export const useAccessibilityNativeStackOptions = function useAccessibilityNativeStackOptions() {
  let obj = useNavigatorShouldCrossfade;
  const navigatorShouldCrossfade = obj.useNavigatorShouldCrossfade();
  const items = [navigatorShouldCrossfade];
  return react.useMemo(() => {
    let obj;
    if (navigatorShouldCrossfade) {
      obj = { animation: "fade" };
    }
    return obj;
  }, items);
};
export { Navigator_export as Navigator };
