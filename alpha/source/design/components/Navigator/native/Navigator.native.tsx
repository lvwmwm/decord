// Module ID: 7424
// Function ID: 7425
// Name: Navigator
// Dependencies: [32, 19, 17, 21, 5243, 575, 7425, 7426, 7427, 5839, 7485, 1627, 5866, 1113, 12, 7518, 1500, 6272, 5484, 7524, 7434, 1243, 2]
// Exports: Navigator, useAccessibilityNativeStackOptions, useNavigatorScreens

// Module 7424 (Navigator)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import SentryInitUtils from "SentryInitUtils" /* 1243 */;
import Link from "Link" /* 1500 */;
import Text_Text from "Text/Text" /* 5866 */;
import BackPressTracking from "BackPressTracking" /* 6272 */;
import useNavigatorShouldCrossfade from "useNavigatorShouldCrossfade" /* 7425 */;
import react2 from "react" /* 7426 */;
import NavigatorHeader from "NavigatorHeader" /* 7427 */;
import _mod7434 from "module_7434" /* 7434 */;
import NavigatorScreen2 from "NavigatorScreen" /* 7518 */;
import useNavigationTheme from "useNavigationTheme" /* 7524 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import createStyles_mod from "createStyles" /* 5243 */;
import size from "module_2" /* 2 */;

let navigation;

let StyleSheet;
let hasOwnProperty;
let obj2;
let obj3;
let obj4;
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
  let headerStyle = screens.headerStyle;
  ({ viewStyle: closure_10, headerLeftContainerStyle } = screens);
  const headerTitleContainerStyle = screens.headerTitleContainerStyle;
  const headerRightContainerStyle = screens.headerRightContainerStyle;
  const headerStatusBarHeight = screens.headerStatusBarHeight;
  const headerBackTitle = screens.headerBackTitle;
  const hideTitle = screens.hideTitle;
  const disableHeaderAnimation = screens.disableHeaderAnimation;
  let gradientColor = screens.gradientColor;
  ({ initialRouteName, detachInactiveScreens } = screens);
  let tmp = cardShadowEnabled();
  let closure_19 = tmp;
  const tmp2 = "modal" === gestureDirection.useContext(screens(onDidFocus[7]).NavigatorBackgroundContext);
  let closure_20 = tmp2;
  let obj = screens(onDidFocus[8]);
  const styles = obj.useStyles();
  let obj2 = screens(onDidFocus[8]);
  const navigatorHeaderSize = obj2.useNavigatorHeaderSize();
  const obj3 = screens(onDidFocus[9]);
  const token = obj3.useToken(onWillFocus(onDidFocus[5]).colors.ICON_DEFAULT);
  const obj4 = screens(onDidFocus[6]);
  const navigatorShouldCrossfade = obj4.useNavigatorShouldCrossfade();
  const first = gestureResponseDistance(gestureDirection.useState(() => {
    const obj = screens(onDidFocus[10]);
    return obj.createStackNavigator();
  }), 1)[0];
  const top = onWillFocus(onDidFocus[11])().top;
  let items = [navigatorHeaderSize.height, headerStatusBarHeight, top];
  const memo = gestureDirection.useMemo(() => {
    let tmp = headerStatusBarHeight;
    const height = navigatorHeaderSize.height;
    if (null == headerStatusBarHeight) {
      tmp = top;
    }
    return { height: height + tmp };
  }, items);
  let items1 = [onWillFocus, onDidFocus];
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
  }, items1);
  let items2 = [navigatorShouldCrossfade, memo, tmp2, , , , , , , , , , , , , , , , , , , , , , , ];
  ({ navbar: arr3[3], modalBackground: arr3[4], headerLeftContainerStyle: arr3[5], headerRightContainerStyle: arr3[6] } = tmp);
  items2[7] = headerStyle;
  items2[8] = navigatorHeaderSize;
  items2[9] = token;
  ({ headerTitle: arr3[10], headerBackTitleStyle: arr3[11] } = styles);
  items2[12] = headerTitleContainerStyle;
  items2[13] = headerLeftContainerStyle;
  items2[14] = headerRightContainerStyle;
  items2[15] = hideTitle;
  items2[16] = gestureDirection;
  items2[17] = gestureResponseDistance;
  items2[18] = cardOverlayEnabled;
  items2[19] = cardShadowEnabled;
  items2[20] = cardStyle;
  items2[21] = headerBackTitle;
  items2[22] = headerTitleAlign;
  items2[23] = headerStatusBarHeight;
  items2[24] = top;
  items2[25] = disableHeaderAnimation;
  const Navigator = first.Navigator;
  const obj5 = {
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
      let items4;
      let str2;
      let tmp6;
      let tmp8;
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
      let obj = { headerMode: str, headerStyle: items, headerTintColor: token, headerTitleStyle: items1, headerBackTitleStyle: styles.headerBackTitleStyle, headerTitleAllowFontScaling: false, headerBackImage: NavigatorHeader.renderBackImage, headerBackButtonDisplayMode: "minimal", headerTitleContainerStyle: items2, headerLeftContainerStyle: items3, headerRightContainerStyle: items4, headerTitle: fn, gestureDirection, gestureResponseDistance, cardOverlayEnabled, cardShadowEnabled, cardStyle, headerBackTitle: tmp6, headerTitleAlign: str2, headerStatusBarHeight: tmp8, cardStyleInterpolator: fn2, headerStyleInterpolator: fn3 };
      items = [closure_19.navbar, closure_20 && closure_19.modalBackground, memo, headerStyle];
      items1 = [styles.headerTitle, Text_Text.TextStyleSheet[navigatorHeaderSize.titleVariant]];
      items2 = [{ maxWidth: "60%", alignItems: "center" }, headerTitleContainerStyle];
      items3 = [closure_19.headerLeftContainerStyle, headerLeftContainerStyle];
      items4 = [closure_19.headerRightContainerStyle, headerRightContainerStyle];
      fn = undefined;
      if (hideTitle) {
        fn = () => {

        };
      }
      tmp6 = headerBackTitle;
      if (headerBackTitle == null) {
        let stringResult;
        if (1 === routes.length) {
          const intl = tmp4(1113).intl;
          stringResult = intl.string(tmp4(1113).t["13/7kX"]);
        }
        tmp6 = stringResult;
      }
      str2 = headerTitleAlign;
      if (headerTitleAlign == null) {
        str2 = "center";
      }
      tmp8 = headerStatusBarHeight;
      if (null == headerStatusBarHeight) {
        tmp8 = top;
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
        fn2 = tmp4(7485).CardStyleInterpolators.forHorizontalIOS;
      }
      const tmp9 = disableHeaderAnimation;
      if (tmp9) {
        fn3 = tmp4(7485).HeaderStyleInterpolators.forNoAnimation;
      } else if (navigatorShouldCrossfade) {
        fn3 = tmp4(7485).HeaderStyleInterpolators.forFade;
      } else {
        fn3 = (arg0) => {
          let current;
          let direction;
          let layouts;
          let next;
          ({ current, next, layouts, direction } = arg0);
          const HeaderStyleInterpolators = screens(onDidFocus[10]).HeaderStyleInterpolators;
          const forUIKitResult = HeaderStyleInterpolators.forUIKit({ current, next, layouts, direction });
          forUIKitResult.leftButtonStyle.transform = forUIKitResult.titleStyle.transform;
          forUIKitResult.rightButtonStyle.transform = forUIKitResult.titleStyle.transform;
          return forUIKitResult;
        };
      }
      return obj;
    }, items2),
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
      let tmp4;
      if (!fullscreen) {
        tmp4 = gradientColor;
      }
      gradientColor = tmp4;
      if (null != tmp4) {
        options.headerTransparent = true;
        const items1 = [closure_19.navbar, memo, , ];
        headerStyle = options.headerStyle;
        items1[2] = headerStyle;
        items1[3] = closure_19.gradientNavbar;
        options.headerStyle = items1;
      }
      const obj2 = {
        name,
        initialParams: options.initialParams,
        listeners,
        options,
        children(arg0) {
          let screen;
          screen = { screen, viewStyle, gradientColor };
          const NavigatorScreen = NavigatorScreen2.NavigatorScreen;
          const merged = Object.assign(arg0);
          return <NavigatorScreen screen={screen} viewStyle={closure_10} gradientColor={gradientColor} />;
        }
      };
      return cardOverlayEnabled(first.Screen, obj2, name);
    })
  };
  const obj6 = onWillFocus(onDidFocus[14]);
  keys = obj6.keys(screens);
  return cardOverlayEnabled(Navigator, obj5);
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
  const navigationContainerRef = obj.useNavigationContainerRef();
  const obj2 = BackPressTracking;
  const trackNavigationBackPress = obj2.useTrackNavigationBackPress(navigationContainerRef);
  const first = _slicedToArray(react.useState(() => {
    let tmp2;
    if (null != require) {
      tmp2 = { routes: tmp };
      const obj = { routes: tmp };
    }
    return tmp2;
  }), 1)[0];
  const tmp5 = navigationContainerRef(5484)();
  const obj3 = useNavigationTheme;
  let navigationTheme1 = obj3.useNavigationTheme(tmp5);
  const NavigationIndependentTree = Link.NavigationIndependentTree;
  const Provider = _mod7434.HeaderBackContext.Provider;
  const NavigationContainer = Link.NavigationContainer;
  if (null != navigationTheme) {
    navigationTheme1 = navigationTheme;
  }
  if (null == initialRouteState) {
    let tmp8;
    if (null != first) {
      tmp8 = first;
    }
    initialRouteState = tmp8;
  }
  const merged1 = Object.assign(merged);
  return <NavigationIndependentTree>{null}</NavigationIndependentTree>;
}
({ StyleSheet, View: hasOwnProperty } = react_native);
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { container: obj2, navbar: obj3, modalBackground: obj4, headerLeftContainerStyle: { paddingLeft: 16, marginRight: -16 }, headerRightContainerStyle: { paddingRight: 16, marginLeft: -16 }, gradientNavbar: { backgroundColor: "transparent", borderBottomWidth: 0 } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles = createStyles.createStyles;
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj3 = { borderBottomWidth: StyleSheet.hairlineWidth, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderBottomColor: nativeDefault.colors.BORDER_SUBTLE, shadowColor: "transparent" };
obj4 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
let closure_7 = createStyles(obj);
let result = size.fileFinishedImporting("design/components/Navigator/native/Navigator.native.tsx");

export function useNavigatorScreens(getNextRenewalDateLabel, items) {
  return react.useMemo(getNextRenewalDateLabel, items);
}
export function useAccessibilityNativeStackOptions() {
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
}
export function Navigator(useContainer) {
  let flag = useContainer.useContainer;
  if (flag === undefined) {
    flag = true;
  }
  const containerStyle = useContainer.containerStyle;
  const merged = Object.assign(useContainer, Object.assign({ useContainer: 0, containerStyle: 0 }));
  const tmp2 = closure_7();
  let modalBackground = "modal" === react.useContext(react2.NavigatorBackgroundContext);
  const items = [tmp2.container, , ];
  if (modalBackground) {
    modalBackground = tmp2.modalBackground;
  }
  items[1] = modalBackground;
  items[2] = containerStyle;
  const merged1 = Object.assign(merged);
  return <tmp4 style={items}>{null}</tmp4>;
}
