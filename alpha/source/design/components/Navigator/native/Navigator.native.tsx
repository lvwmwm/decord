// Module ID: 7256
// Function ID: 7257
// Name: Navigator
// Dependencies: [32, 19, 17, 21, 5170, 575, 7257, 7089, 5754, 7258, 1627, 5781, 1113, 12, 7291, 1500, 6183, 5399, 7296, 7096, 1243, 2]
// Exports: Navigator, useAccessibilityNativeStackOptions, useNavigatorScreens

// Module 7256 (Navigator)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import SentryInitUtils from "SentryInitUtils" /* 1243 */;
import Link from "Link" /* 1500 */;
import Text_Text from "Text/Text" /* 5781 */;
import BackPressTracking from "BackPressTracking" /* 6183 */;
import NavigatorHeader from "NavigatorHeader" /* 7089 */;
import _mod7096 from "module_7096" /* 7096 */;
import useNavigatorShouldCrossfade from "useNavigatorShouldCrossfade" /* 7257 */;
import NavigatorScreen2 from "NavigatorScreen" /* 7291 */;
import useNavigationTheme from "useNavigationTheme" /* 7296 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import createStyles_mod from "createStyles" /* 5170 */;
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
  const navbar = tmp;
  let obj = screens(onDidFocus[7]);
  const styles = obj.useStyles();
  let obj2 = screens(onDidFocus[7]);
  const navigatorHeaderSize = obj2.useNavigatorHeaderSize();
  const obj3 = screens(onDidFocus[8]);
  const token = obj3.useToken(onWillFocus(onDidFocus[5]).colors.ICON_DEFAULT);
  const obj4 = screens(onDidFocus[6]);
  const navigatorShouldCrossfade = obj4.useNavigatorShouldCrossfade();
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
  let items1 = [navigatorShouldCrossfade, , , , , , , , , , , , , , , , , , , , , , ];
  ({ navbar: arr2[1], headerLeftContainerStyle: arr2[2], headerRightContainerStyle: arr2[3] } = tmp);
  items1[4] = headerStyle;
  items1[5] = navigatorHeaderSize;
  items1[6] = token;
  ({ headerTitle: arr2[7], headerBackTitleStyle: arr2[8] } = styles);
  items1[9] = headerTitleContainerStyle;
  items1[10] = headerLeftContainerStyle;
  items1[11] = headerRightContainerStyle;
  items1[12] = hideTitle;
  items1[13] = gestureDirection;
  items1[14] = gestureResponseDistance;
  items1[15] = cardOverlayEnabled;
  items1[16] = cardShadowEnabled;
  items1[17] = cardStyle;
  items1[18] = headerBackTitle;
  items1[19] = headerTitleAlign;
  items1[20] = headerStatusBarHeight;
  items1[21] = top;
  items1[22] = disableHeaderAnimation;
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
      let tmp5;
      let tmp9;
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
      let obj = { headerMode: str, headerStyle: items, headerTintColor: token, headerTitleStyle: items1, headerBackTitleStyle: styles.headerBackTitleStyle, headerTitleAllowFontScaling: false, headerBackImage: NavigatorHeader.renderBackImage, headerBackButtonDisplayMode: "minimal", headerTitleContainerStyle: items2, headerLeftContainerStyle: items3, headerRightContainerStyle: items4, headerTitle: fn, gestureDirection, gestureResponseDistance, cardOverlayEnabled, cardShadowEnabled, cardStyle, headerBackTitle: tmp9, headerTitleAlign: str2, headerStatusBarHeight: tmp5, cardStyleInterpolator: fn2, headerStyleInterpolator: fn3 };
      items = [navbar.navbar, , ];
      tmp5 = headerStatusBarHeight;
      let tmp6 = headerStatusBarHeight;
      const height = navigatorHeaderSize.height;
      const tmp4 = navigatorHeaderSize;
      if (null == headerStatusBarHeight) {
        tmp6 = top;
      }
      items[1] = { height: height + tmp6 };
      items[2] = headerStyle;
      items1 = [styles.headerTitle, Text_Text.TextStyleSheet[tmp4.titleVariant]];
      items2 = [{ maxWidth: "60%", alignItems: "center" }, headerTitleContainerStyle];
      items3 = [navbar.headerLeftContainerStyle, headerLeftContainerStyle];
      items4 = [navbar.headerRightContainerStyle, headerRightContainerStyle];
      fn = undefined;
      if (hideTitle) {
        fn = () => {

        };
      }
      tmp9 = headerBackTitle;
      if (headerBackTitle == null) {
        let stringResult;
        if (1 === routes.length) {
          const intl = tmp7(1113).intl;
          stringResult = intl.string(tmp7(1113).t["13/7kX"]);
        }
        tmp9 = stringResult;
      }
      str2 = headerTitleAlign;
      if (headerTitleAlign == null) {
        str2 = "center";
      }
      if (null == tmp5) {
        tmp5 = top;
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
        fn2 = tmp7(7258).CardStyleInterpolators.forHorizontalIOS;
      }
      const tmp11 = disableHeaderAnimation;
      if (tmp11) {
        fn3 = tmp7(7258).HeaderStyleInterpolators.forNoAnimation;
      } else if (navigatorShouldCrossfade) {
        fn3 = tmp7(7258).HeaderStyleInterpolators.forFade;
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
  const obj6 = onWillFocus(onDidFocus[13]);
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
  const tmp5 = navigationContainerRef(5399)();
  const obj3 = useNavigationTheme;
  let navigationTheme1 = obj3.useNavigationTheme(tmp5);
  const NavigationIndependentTree = Link.NavigationIndependentTree;
  const Provider = _mod7096.HeaderBackContext.Provider;
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
let obj = { container: obj2, navbar: obj3, headerLeftContainerStyle: { paddingLeft: 16, marginRight: -16 }, headerRightContainerStyle: { paddingRight: 16, marginLeft: -16 } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles = createStyles.createStyles;
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj3 = { borderBottomWidth: StyleSheet.hairlineWidth, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderBottomColor: nativeDefault.colors.BORDER_SUBTLE, shadowColor: "transparent" };
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
  const items = [closure_7().container, containerStyle];
  const merged1 = Object.assign(merged);
  return <hasOwnProperty style={items}>{null}</hasOwnProperty>;
}
